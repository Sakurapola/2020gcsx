/* $ 代替 querySelectorAll */
const $ = sel => typeof (sel) === 'string' ? document.querySelectorAll(sel) : sel

// 节点
class Node {
  constructor(value) {
    this.val = value
    this.next = undefined
  }
}

export class LinkList {
  constructor(arr) {
    this.count = 0
    let val = arr.shift()
    this.head = new Node(val)
    this.createNodeAt(val, this.count)
    this.count++
    let current = this.head
    arr.forEach(item => {
      current.next = new Node(item)
      this.createNodeAt(item, this.count)
      this.count++
      current = current.next
    })
  }

  createNodeAt(val, index) {
    const node = document.createElement('div')
    node.style.className = 'node'
    node.style.position = 'relative'
    node.style.display = 'flex'
    node.style.alignItems = 'center'
    node.style.marginLeft = '33px'

    const value = document.createElement('div')
    value.className = 'value'
    value.innerHTML = val
    value.style.width = '40px'
    value.style.height = '80px'
    value.style.backgroundColor = '#ffbfbf'
    value.style.textAlign = 'center'
    value.style.lineHeight = '80px'

    const key = document.createElement('div')
    key.className = 'key'
    key.style.width = '40px'
    key.style.height = '80px'
    key.style.backgroundColor = '#bdffde'
    key.style.textAlign = 'center'
    key.style.lineHeight = '50px'

    const arrow = document.createElement('div')
    arrow.className = 'arrow'
    arrow.innerHTML = '------>'
    arrow.style.width = '60px'
    arrow.style.position = 'absolute'
    arrow.style.color = '#8080ff'
    arrow.style.left = '59px'
    arrow.style.zIndex = '1'

    node.append(value)
    node.append(key)
    node.append(arrow)
    const container = $('#linklist')[0]
    const children = container.childNodes
    
    container.insertBefore(node, children[index])
  }

  removeNodeAt(index) {
    const container = $('#linklist')[0]
    const children = container.childNodes
    container.removeChild(children[index])
  }

  // 插入
  insert(val, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(val)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const prev = this.getElementAt(index - 1)
        const current = prev.next
        node.next = current
        this.head = node
      }
      this.createNodeAt(val, index)
      this.count++
    }
    return this
  }

  // 删除
  remove(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const prev = this.getElementAt(index - 1)
        current = prev.next
        prev.next = current.next
      }
      this.removeNodeAt(index)
      this.count--
      return current.element
    }
    return this
  }

  // 循环迭代链表直到目标位置
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head
      for (let i = 0; i < index && node != null; i++) {
        node = node.next
      }
      return node
    }
    return undefined
  }

}

// let linklist = new LinkList([1, 2, 3, 4, 5, 6])
// linklist.insert(5, 0).delete(1)