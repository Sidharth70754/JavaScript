const throttleFunction =(func, delay) => {
};

document.querySelector("#center")
.addEventListener(
    "mousemove", throttleFunction(() => {

    var div = document.createElement("div");
    div.classList.add('imagediv');
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1438376902996-11719c362aef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img , {
        y: "0",
        ease :Power1,
        duration: .2
    });

    gsap.to(img , {
        y: "10",
        delay: .3,
        ease :Power2,
        duration: .2
    });

    setTimeout(function () {
        div.remove();
    }, 2000)
    },400)
);
