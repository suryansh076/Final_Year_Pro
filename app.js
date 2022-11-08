var name1 = document.getElementById('hii');

console.log("suryansh");
// document.addEventListener('change', function () {
//     if (document.visiblityState == 'hidden') {
//         console.log("off");
//         name1.innerHTML = "<h1>bye</h1>";
//     }
//     else if (document.visibilityState == 'visible') {
//         console.log("on");
//         name1.innerHTML = "<h1>hi</h1>";
//     }

// });
document.addEventListener("visibilitychange", () => {
    console.log(document.visibilityState);
    // Modify behavior…
});
set = () => {
    const matchresult = window.matchMedia("(prefers-color-scheme: light)");
    var onoff = window.innerWidth;
    var x = document.createElement("H1");
    var t = document.createTextNode(onoff);
    x.appendChild(t);
    document.body.appendChild(x);
  
    console.log(onoff);
}
setInterval(set, 1000);    