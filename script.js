var currnetime = document.getElementById("current_time");
setInterval(()=>{
    let d = new Date();
    currnetime.innerHTML = d.toLocaleTimeString();
},1000);