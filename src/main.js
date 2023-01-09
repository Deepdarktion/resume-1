let html = document.querySelector("#html");
let style = document.querySelector('#style')
let string = `
/* 你好, 我叫小李
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 300px;
    height: 300px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先, 把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    content: '';
    display: block;
    position: absolute;
}
#div1::after{
    content: '';
    display: block;
    position: absolute;
}
/* 再加上两个神秘的小球 */
#div1::before{
    width: 150px;
    height: 150px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 200%);
}
#div1::after{
    width: 150px;
    height: 150px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 200%);
}
`
let string2 = ``
// string = string.replace(/\n/g, "<br>")
let n = 0
console.log(string.length)
let step = () => {
    string2 += string[n]
    html.innerHTML = string2
    style.innerHTML = string.substring(0,n)
    window.scrollTo(0,99999)
    html.scrollTo(0, 99999)
    n = n + 1
    setTimeout(() => {
        if(string[n] === "\n"){
            string2 += "<br>"
        }else if(string[n] === " "){
            string2 += "&nbsp;"
        }
        if(n < string.length){
            step()
        }
    }, 50)
}

step()
