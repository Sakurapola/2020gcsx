/* $ 代替 querySelectorAll */
const $ = sel => typeof (sel) === 'string' ? document.querySelectorAll(sel) : sel

// 队列
export class Queue {
  constructor(...arr) {
    this.queue = arr || []
    this.len = arr.length || 0
    this.ul = $('#queue')[0]
  }

  // 将队列转为DOM元素输出到界面
  createElements() {
    this.queue.forEach((item, index) => {
      let li = document.createElement('li')
      li.className = 'queue-li'
      li.innerText = item
      this.ul.append(li)
    })
    return this // 链式调用
  }

  // 增加一个节点
  addOne(val) {
    let li = document.createElement('li')
    li.className = 'stack-li'
    li.innerText = val
    li.style.boxSizing = 'border-box'
    li.style.width = '50px'
    li.style.backgroundColor = '#ffcaca'
    li.style.textAlign = 'center'
    li.style.lineHeight = '80px'
    li.style.margin = '10px'
    this.ul.append(li)
  }

  // 删除一个节点
  deleteOne() {
    this.ul.removeChild(this.ul.childNodes[0])
  }

  // 入队列
  _push(val) {
    if (val) {
      this.queue.push(val)
      this.len++
      this.addOne(val)
      return this
    }
  }

  // 出队列
  _shift() {
    this.queue.shift()
    this.len--
    this.deleteOne()
    return this
  }
}