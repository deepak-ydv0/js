const clock = document.getElementById('clock')

setInterval(()=>{
    const date = new Date()
    const time = date.toLocaleTimeString()
    clock.innerHTML = time

},1000)