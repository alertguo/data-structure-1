// // 对下面23-45行做一个优化，直接调用createNode增加节点就可以了
// const createList = (value) => {
//   return createNode(value)
// }
// const appendList = (list, value) => {
//   const node = createNode(value)
//   //appendList出现了一个bug，不应该把新加的放到第一个节点下面，应该放到最后一个节点下面，所以多声明一个x，让他一直是最后一个节点
//   let x = list
//   while(x.next){
//     x = x.next
//   } //x的下一个节点存在时，让x等于他的下一个节点
//   // x.next === null //说明x是最后一个节点
//   x.next = node
//   return node
// }
// const createNode = value =>{
//   return{
//     data: value,
//     next: null
//   }
// }

//第一个节点，内容为空(只创建一个节点)
const createList = (value) => {
  return {
    data: value, //数据
    next: null, //下个节点为空
  }
}

//添加第二个节点，把它放到list后面
const appendList = (list, value) => {
  //要放到list身上，内容value
  const node = {
    data: value,
    next: null,
  } //node内容
  let x = list
  while (x.next) {
    x = x.next
  } //x的下一个节点存在时，让x等于他的下一个节点
  // x.next === null //说明x是最后一个节点
  x.next = node //这样就把node放到了list上了
  return node
}

//如何删除节点
const removeFromList = (list, node) => {
  let x = list //等下对x进行操作就不会影响list
  let p = null
  while (x !== node) {
    //通过当前节点来找当前节点的上一个节点
    p = x //先把x记下来再动它
    x = x.next //让x等于它的下一个节点
  }
  // console.log(p === null || x 的上一个节点)
  // console.log(x === node || x === null)
  p.next = x.next
  // if (list === node) {
  //   //如果删除的是第一个节点
  //   //list指向第2个节点
  //   list = node.next
  // } else {
  //   //如果删除的是第二个节点
  //   //第1个节点.next = 第2个节点.next
  //   if (list.next === node) {
  //     list.next = node.next
  //   } else {
  //     //如果删除的是第三个节点
  //     //第2个节点.next = 第3个节点.next
  //     if (list.next.next === node) {
  //       list.next.next = node.next
  //     }
  //   }
  // }
}

const list = createList(10)
const node2 = appendList(list, 20)
const node3 = appendList(list, 30)
const node4 = appendList(list, 40)
removeFromList(list, node3)
console.log('list')
console.log(list)
