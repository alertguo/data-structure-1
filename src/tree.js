//创建起始节点函数
const createTree = (value) => {
  return {
    data: value,
    children: null,
    parent: null, //每创建一个节点，不仅记录儿子还记录爸爸
  }
}
//添加子节点函数
const addChild = (node, value) => {
  const newNode = {
    data: value,
    children: null,
    parent: node,
  }
  node.children = node.children || []
  //增加一个保底值
  node.children.push(newNode)
  return newNode
}

//遍历函数
const travel = (tree, fn) => {
  //给我一个tree，给我一个函数，我调用这个函数，怎么得到tree的每一项
  fn(tree)
  if (!tree.children) {
    return
  }
  //防止tree.children不存在而报错
  for (let i = 0; i < tree.children.length; i++) {
    travel(tree.children[i], fn)
  }
}
//删除节点
const removeNode = (tree, node) => {
  const siblings = node.parent.children
  //找到要找的这个节点的兄弟姐妹
  let index = 0
  for (let i = 0; i < siblings.length; i++) {
    if (siblings[i] === node) {
      index = i
    }
  }
  siblings.splice(index, 1)
}

const tree = createTree(10)
//树起点，然后下面添加四个子节点
const node2 = addChild(tree, 20)
//如果要在这个节点上加子节点，那么先给它一个名字
const node3 = addChild(tree, 30)
const node4 = addChild(tree, 40)
const node5 = addChild(tree, 50)
addChild(node2, 201)
addChild(node2, 202)
console.log(tree)

const fn = (node) => {
  console.log(node.data)
}
// travel(tree, fn)
removeNode(tree, node5)
console.log(tree)
