// const btn0 = document.getElementById('btn0')
// const btn1 = document.getElementById('btn1')
// const btn2 = document.getElementById('btn2')
// const btn3 = document.getElementById('btn3')
// const btn4 = document.getElementById('btn4')
// const btn5 = document.getElementById('btn5')
// const btn6 = document.getElementById('btn6')
// const btn7 = document.getElementById('btn7')
// const btn8 = document.getElementById('btn8')
// const btn9 = document.getElementById('btn9')

const btnDiv = document.getElementById('btnDiv')
const btnMul = document.getElementById('btnMul')
const btnSub = document.getElementById('btnSub')
const btnAdd = document.getElementById('btnAdd')

const btnClear = document.getElementById('btnClear')
const btnDot = document.getElementById('btnDot')

const btnEquals = document.getElementById('btnEquals')

const display = document.getElementById('display')

// btn0.addEventListener('click', () =>{
//     console.log('btn0 clicked')
// })

const btns = []

for (let i = 0; i <10; i++) {
    btns[i] = document.getElementById('btn'+i)
    btns[i].addEventListener('click',()=>{
        display.value += i
    })
}

btnClear.addEventListener('click',()=>{
    display.value = ''
});

btnAdd.addEventListener('click',()=>{
    display.value += '+'
})

btnSub.addEventListener('click',()=>{
    display.value += '-'
})

btnMul.addEventListener('click',()=>{
    display.value += '*'
})

btnDiv.addEventListener('click',()=>{
    display.value += '/'
})

btnDot.addEventListener('click',()=>{
    display.value += '.'
})

btnEquals.addEventListener('click',()=>{
    let result = eval(display.value)
    display.value = result
});

