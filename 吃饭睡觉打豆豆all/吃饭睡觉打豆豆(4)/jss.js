//获取元素
let text = document.querySelector('#text')
let start = document.querySelector('#start')
let end = document.querySelector('#end')
let numStart = document.querySelector('#numStart')
let numEnd = document.querySelector('#numEnd')
//给输入框设置事件监听
text.addEventListener('keydown', function (e) {
    let arr = getDate()
    if (e.keyCode === 13) {
        let data = {
            text: text.value,
            done: false
        }
        arr.push('data')
    }
})
//存储数据
function storageData(inputData) {
    window.localStorage.setItem('data', JSON.stringify(inputData))
}
//获取数据
function getDate() {
    let data = window.localStorage.getItem('data')
    if (data !== null) {
        return JSON.parse(data)
    } else {
        return []
    }
}
//加载数据

//删除数据
//切换完成状态