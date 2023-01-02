// onload
// onclick
// onchange
// onmousemove
// onmouseover
// onmouseout
window.onload = function(){
    // dom编程
    var imgs = document.getElementsByTagName("img");
    var lis = document.getElementsByTagName("li");
    var c=0;//大总管变量，控制显示哪一幅图片
    function run(){
        c++;
        if(c==5)
            c=0;
        setStatus()
    }
    var timer = setInterval(run,3000);

    for(var i=0;i<lis.length;i++){
        //为每一个li对象添加属性，记录顺序
        lis[i].order = i;
        lis[i].onmouseover = function(){
            // this是指向对象本身的引用,在事件响应函数中可以直接使用
            // console.log(this.order);
            clearInterval(timer);
            //取出当前对象中的order值
            c = this.order;
            setStatus()
        }
        // 鼠标离开li对象，恢复定时器
        lis[i].onmouseout = function(){
            timer = setInterval(run,3000);
        }
    }
    // document.getElementById
    // document.getElementsByClassName
    // document.getElementsByTagName
    var preBtn = document.getElementsByClassName("preBtn")[0];
    var nextBtn = document.getElementsByClassName("nextBtn")[0];
    preBtn.onclick = function(){
        if(c>0)
            c--;
        else
            c=imgs.length - 1;
        setStatus()
    }
    nextBtn.onclick = function(){
        if(c<imgs.length-1)
            c++;
        else
            c=0;
        setStatus()
    }
    function setStatus(){
        //把所有的img元素隐藏和li元素置绿色
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.display= "none";
            lis[i].style.background = "#0f0";
        }
        //让当前c指向的img和li
        imgs[c].style.display = "block";
        lis[c].style.background = "#f00";
    }
    
}