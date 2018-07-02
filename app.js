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
})

let selectedNum = ""

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (!selectedNum === "" && !calculated) {
            const currentNum = number.textContent
            selectedNum += currentNum
            pointBtn.classList.remove("disable")
            calculated = true
            render(selectedNum)
        } else if (calculated === true) {
            selectedNum = number.textContent
            pointBtn.classList.remove("disable")
            render(selectedNum)
        } else {
            selectedNum += `${number.textContent}`
            render(selectedNum)
        }
        enableButtons()
    })
})

addBtn.addEventListener("click", () => {
    selectedNum += "+"
    calculated = false
    pointBtn.classList.remove("disable")
    render(selectedNum)
})

minusBtn.addEventListener("click", () => {
    selectedNum += "-"
    calculated = false
    pointBtn.classList.remove("disable")
    render(selectedNum)

})

multiplyBtn.addEventListener("click", () => {
    selectedNum += "*"
    calculated = false
    pointBtn.classList.remove("disable")
    render(selectedNum)
    disableButtons()
})

divideBtn.addEventListener("click", () => {
    selectedNum += "/"
    calculated = false
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
    pointBtn.classList.add("disable")
    render(selectedNum)
})

let calculated = false

equalsBtn.addEventListener("click", () => {
    if (!selectedNum.includes(".")) {
        pointBtn.classList.remove("disable")
    }
    selectedNum = eval(selectedNum)
    calculated = true

    render(selectedNum)

})

const render = (num) => {
    display.textContent = num
}

const enableButtons = () => {
    divideBtn.removeAttribute("disabled");
    multiplyBtn.removeAttribute("disabled");
}

const disableButtons = () => {
    divideBtn.setAttribute("disabled", "true");
    multiplyBtn.setAttribute("disabled", "true");
}


