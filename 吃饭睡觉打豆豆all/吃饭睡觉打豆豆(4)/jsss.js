//获取元素
let text = document.querySelector('#text')
let start = document.querySelector('#start')
let end = document.querySelector('#end')
let numStart = document.querySelectorAll('#numStart')
let a = 0
//设置事件监听
text.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        if (text.value !== '') {
            let li = document.createElement('li')
            li.innerHTML = `
                <input type="checkbox">
                <p>${text.value}</p>
                <a href="#" id="${a++}">-</a>
            `
            start.appendChild(li)
            text.value = null
        } else {
            alert('请输入要添加的事件')
        }
    }
})
function getId() {
    start.addEventListener('click', function (e) {
        let li = document.querySelectorAll('li')
        for (let i = 0; i < li.length; i++) {
            // console.log(li[i].a)
            let aAll = li[i].querySelector('a')
            // console.log(aAll)
            //防止链接打开url
            e.preventDefault()
            if (e.target.tagName === "A") {
                // console.log(e.target.id)
                // return e.target.id
                start.removeChild(li[e.target.id])
            }
        }
    })
}
getId()