//获取元素
let text = document.querySelector('#text')
let start = document.querySelector('#start')
let end = document.querySelector('#end')
let numStart = document.querySelector('#numStart')
let numEnd = document.querySelector('#numEnd')
//设置事件监听
text.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (text.value !== '') {
            let li = document.createElement('li')
            li.innerHTML = `
                <input type="checkbox">
                <p>${text.value}</p>
                <a href="#">-</a>
            `
            start.appendChild(li)
            text.value = null
            //给span追加数字
            upCorrect()
        } else {
            alert('请输入要添加的事件')
        }
    }
})
//封装上方纠正函数
function upCorrect() {
    let lis = document.querySelectorAll('#start li')
    numStart.innerHTML = `${lis.length}`
}
//封装下方纠正函数
function downCorrect() {
    let lis = document.querySelectorAll('#end li')
    numEnd.innerHTML = `${lis.length}`
}
//设置当复选框处于选中状态时将节点写入到下方
start.addEventListener('click', function (e) {
    if (e.target.tagName === "INPUT") {
        let li = e.target.parentNode
        let start = li.parentNode
        if (e.target.checked === true) {
            start.removeChild(li)
            upCorrect()
            end.appendChild(li)
            downCorrect()
        }
    }
})
//设置当复选框处于未选中状态下时将节点写入到上方
end.addEventListener('click', function (e) {
    if (e.target.tagName === "INPUT") {
        let li = e.target.parentNode
        let end = li.parentNode
        if (e.target.checked === false) {
            end.removeChild(li)
            downCorrect()
            start.appendChild(li)
            upCorrect()
        }
    }
})
//设置上方删除事件
start.addEventListener('click', function (e) {
    if (e.target.tagName === "A") {
        let li = e.target.parentNode
        let start = li.parentNode
        start.removeChild(li)
        //纠正span删除后的数字
        upCorrect()
    }
})
//设置下方删除事件
end.addEventListener('click', function (e) {
    if (e.target.tagName === "A") {
        let li = e.target.parentNode
        let end = li.parentNode
        end.removeChild(li)
        //纠正span删除后的数字
        downCorrect()
    }
})
