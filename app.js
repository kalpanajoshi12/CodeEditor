const leftBar = document.querySelector(".left-bar")
const runBtn = document.querySelector(".run")
const rightBar = document.querySelector(".right-bar")

runBtn.addEventListener("click",function(){

    const enteredcode = leftBar.value
    rightBar.contentWindow.document.body.innerHTML = enteredcode
    rightBar.contentWindow.document.write(enteredcode)
    
})