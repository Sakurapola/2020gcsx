/* $ 代替 querySelectorAll */
const $ = sel => typeof (sel) === 'string' ? document.querySelectorAll(sel) : sel

/* 可排序的列表 */
export class ArrayList {

  constructor(arr) {
    // 数组深拷贝，两个排序需要引用不同数组
    this.list = JSON.parse(JSON.stringify(arr))
  }

  // 将数组转为DOM元素输出到界面
  createElements(selector) {
    const container = $(selector)[0]
    const ul = document.createElement('ul') // 创建文档片段，减少重绘和回流
    ul.style.position = 'relative'
    let baseMultiple = 220 / Math.max(...this.list) // 最大高度为500px，其他的按比例缩放

    this.list.forEach((item, index) => {
      let li = document.createElement('li')
      li.className = `sort-li-${selector.slice(1)}`
      li.id = `li${index}-${selector.slice(1)}` // 后面移动位置的时候要用到
      li.style.position = 'absolute'
      li.style.bottom = '0'
      li.style.paddingTop = '5px'
      li.style.boxSizing = 'border-box'
      li.style.width = '50px'
      li.style.textAlign = 'center'
      li.style.transition = 'left 1s'
      li.style.backgroundColor = '#c7bdff'
      li.style.marginLeft = '10px'
      li.style.left = `${index * 60}px`
      li.style.height = `${baseMultiple * item}px`
      console.log(li)
      li.innerText = item
      ul.append(li)
    })
    container.append(ul)
    return this // 链式调用
  }

  // 两个DOM元素交换顺序
  exchange(x, y) {
    [x.style.left, y.style.left] = [y.style.left, x.style.left];
    [x.id, y.id] = [y.id, x.id];
  }

  // 更新状态颜色 （冒泡排序）
  setColorA(lies, i, j) {
    lies.forEach((item, index, arr) => {
      if (item.id.slice(2, 3) == j) {
        item.style.backgroundColor = '#97ffff'
      } else {
        item.style.backgroundColor = '#c7bdff'
      }
      if (item.id.slice(2, 3) >= this.list.length - i) {
        item.style.backgroundColor = '#00e38e'
      }
    })
  }

  // 更新状态颜色 （选择排序）
  setColorB(lies, i, j, minIndex) {
    lies.forEach((item, index, arr) => {
      if (item.id.slice(2, 3) == j) {
        item.style.backgroundColor = '#97ffff'
      } else {
        item.style.backgroundColor = '#c7bdff'
      }
      if (item.id.slice(2, 3) < i) {
        item.style.backgroundColor = '#00e38e'
      }
      if (item.id.slice(2, 3) == i) {
        item.style.backgroundColor = '#f00'
      }
    })
  }

  // 冒泡排序
  bubbleSort() {
    let time = 1
    let list = this.list
    for (let i = 0, len = list.length; i < len; i++) {
      for (let j = 0; j < len - i; j++) {
        setTimeout(() => {
          if (list[j] > list[j + 1]) {
            [list[j], list[j + 1]] = [list[j + 1], list[j]]
            let x = $(`#li${j}-bubble-sort`)[0],
              y = $(`#li${j + 1}-bubble-sort`)[0]
            this.exchange(x, y) // 两个DOM元素交换顺序
          }
          const lies = $('.sort-li-bubble-sort')
          this.setColorA(lies, i, j) // 更新颜色
        }, time * 500)
        time++
      }
    }
    return this
  }

  // 选择排序
  selectSort() {
    let time = 1
    let list = this.list
    let len = list.length
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i
      for (let j = i + 1; j < len; j++) {
        setTimeout(() => {
          if (list[j] < list[minIndex]) { // 寻找最小的数
            minIndex = j // 将最小数的索引保存
          }
          if (j === len - 1) {
            [list[i], list[minIndex]] = [list[minIndex], list[i]]
            let x = $(`#li${i}-select-sort`)[0],
              y = $(`#li${minIndex}-select-sort`)[0]
            this.exchange(x, y)
          }
          const lies = $('.sort-li-select-sort')
          this.setColorB(lies, i, j, minIndex) // 更新颜色
        }, time * 500)
        time++
      }
    }
    return this
  }
}