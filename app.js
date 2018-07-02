//Selectors
const numbers = document.querySelectorAll(".number-btn");
const addBtn = document.querySelector("#add");
const minusBtn = document.querySelector("#minus");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const equalsBtn = document.querySelector("#equals");
const pointBtn = document.querySelector("#point");
const display = document.querySelector("#display-number");
const reset = document.querySelector("#reset")

reset.addEventListener("click", () => {
    selectedNum = ""
    render(0)
    disableButtons()
    pointBtn.classList.remove("disable")
})

let selectedNum = ""

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (!selectedNum === "" && !calculated) {
            const currentNum = number.textContent
            selectedNum += currentNum
            calculated = true
            render(selectedNum)
        } else if (calculated === true) {
            selectedNum = number.textContent
            pointBtn.classList.remove("disable")
            minusBtn.classList.remove("disable")
            render(selectedNum)
        } else {
            selectedNum += `${number.textContent}`
            render(selectedNum)
        }
            minusBtn.classList.remove("disable")
            enableButtons()
    })
})

addBtn.addEventListener("click", () => {
    selectedNum += "+"
    calculated = false
    pointBtn.classList.remove("disable")
    minusBtn.classList.remove("disable")
    disableButtons()
    render(selectedNum)
})

minusBtn.addEventListener("click", () => {
    selectedNum += "-"
    minusBtn.classList.add("disable")
    calculated = false
    pointBtn.classList.remove("disable")
    render(selectedNum)
    disableButtons()
})

multiplyBtn.addEventListener("click", () => {
    selectedNum += "*"
    calculated = false
    minusBtn.classList.remove("disable")
    pointBtn.classList.remove("disable")
    render(selectedNum)
    disableButtons()
})

divideBtn.addEventListener("click", () => {
    selectedNum += "/"
    calculated = false
    minusBtn.classList.remove("disable")
    pointBtn.classList.remove("disable")
    render(selectedNum)
    disableButtons()
})

pointBtn.addEventListener("click", () => {
    if (selectedNum === "") {
        selectedNum = "0."
    } else {
        selectedNum += "."
    }
    calculated = false
    minusBtn.classList.remove("disable")
    pointBtn.classList.add("disable")
    render(selectedNum)
    enableButtons()
})

let calculated = false

equalsBtn.addEventListener("click", () => {
    try {
        if (!selectedNum.includes(".")) {
            minusBtn.classList.remove("disable")
            pointBtn.classList.remove("disable")
            }
            selectedNum = eval(selectedNum)
            calculated = true
        
            render(selectedNum)
    } catch {
        display.textContent = "ERROR"
    }
    

})

const render = (num) => {
    display.textContent = num
}

const enableButtons = () => {
    addBtn.classList.remove("disable")
    divideBtn.classList.remove("disable")
    multiplyBtn.classList.remove("disable")
}

const disableButtons = () => {
    addBtn.classList.add("disable")
    divideBtn.classList.add("disable")
    multiplyBtn.classList.add("disable")
}


