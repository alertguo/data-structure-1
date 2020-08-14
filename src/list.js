const createList = (value) => {
  return createNode(value)
}
const appendList = (list, value) => {
  const node = createNode(value)
  //appendList出现了一个bug，不应该把新加的放到第一个节点下面，应该放到最后一个节点下面，所以多声明一个x，让他一直是最后一个节点
  let x = list
  while (x.next) {
    x = x.next
  } //x的下一个节点存在时，让x等于他的下一个节点
  // x.next === null //说明x是最后一个节点
  x.next = node
  return node
}
const createNode = (value) => {
  return {
    data: value,
    next: null,
  }
}

//如何删除节点
const removeFromList = (list, node) => {
  let x = list //等下对x进行操作就不会影响list
  let p = null
  while (x !== node) {
    p = x //先把x记下来再动它
    x = x.next //让x等于它的下一个节点
  }
  // console.log(p === null || x 的上一个节点)
  // console.log(x === node || x === null)
  p.next = x.next
}

//遍历链表
const travelList = (list, fn) => {
  let x = list
  while (x !== null) {
    fn(x)
    x = x.next
  }
}

const list = createList(10)
const node2 = appendList(list, 20)
const node3 = appendList(list, 30)
const node4 = appendList(list, 40)
// removeFromList(list, node3)
// console.log('list')
// console.log(list)
node4 = get(1)

travelList(list, (node) => {
  console.log(node.data)
})
