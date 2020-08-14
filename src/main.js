const divScreen = document.querySelector('#screen')
const btnCreateNumber = document.querySelector('#createNumber')
const btnCallNumber = document.querySelector('#callNumber')
const spanNewNumber = document.querySelector('#newNumber')
const spanQueue = document.querySelector('#queue')
//引入标签

let number = 0
let queue = []
//定义基础值

//取号
btnCreateNumber.onclick = () => {
  number += 1
  queue.push.call(queue, number) //入列，用call来写
  //queue.push(number)
  spanNewNumber.innerText = number
  spanQueue.innerText = JSON.stringify(queue)
  //数字变成更像数组的字符串，普通的就直接queue.toString
}

//叫号
btnCallNumber.onclick = () => {
  const m = queue.shift.call(queue) 
  if (m === undefined) {  //或者用(queue.length === 0)也行
    alert("叫个屁呀")
    return   //直接返回空就行了
  }
  divScreen.innerText = `请 ${m}号就餐  `
  spanQueue.innerText = JSON.stringify(queue) //叫了号之后返回当前队列
}
