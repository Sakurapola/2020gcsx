/* 累计确诊 */
import echarts, { init } from 'echarts'
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)
import { data } from '../data/data'

function drawLine(data) {
  // 基于准备好的dom，初始化echarts实例
  let myChartContainer = document.getElementById("myChartChina1")
  let resizeMyChartContainer = function () {
    myChartContainer.style.width = document.body.offsetWidth - 500 + "px" //页面一半的大小
  }
  resizeMyChartContainer()
  let myChartChina = echarts.init(myChartContainer)

  function randomData() {
    return Math.round(Math.random() * 1500)
  }
  // 绘制图表
  let optionMap = {
    tooltip: {},
    legend: {
      orient: "vertical",
      left: "left",
      data: [""]
    },
    visualMap: {
      min: 0,
      max: 3000,
      left: "10%",
      bottom: "15%",
      text: ["高", "低"],
      calculable: false,
      color: ["#f00", "#fff"]
    },
    selectedMode: "single",
    series: [{
      name: "",
      type: "map",
      mapType: "china",
      showLegendSymbol: false,
      itemStyle: {
        normal: {
          borderColor: "rgba(0, 0, 0, 0.2)"
        },
        emphasis: {
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 20,
          borderWidth: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      },
      showLegendSymbol: true,
      label: {
        normal: {
          show: true
        },
        emphasis: {
          show: true,
            color: 'transparent'
        }
      },
      data: data
    }]
  }

  myChartChina.setOption(optionMap)
  window.onresize = function () {
    resizeMyChartContainer()
    myChartChina.resize()
  }
}

export function init1() {
  let len = data.length - 1
  drawLine(data[len].list.map(item => {
    return {
      name: item.province,
      value: item.data.allDiagnosis
    }
  }))
}

export function execute1() {
  let index = 0
  const date1 = document.getElementById('date1')
  setInterval(() => {
    date1.innerHTML = data[index].date
    drawLine(data[index].list.map(item => {
      return {
        name: item.province,
        value: item.data.allDiagnosis
      }
    }))
    index++
  }, 300)
}