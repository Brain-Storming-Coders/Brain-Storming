
const btn = document.getElementsByTagName("button")[0];
let drumRoll = new Audio('./Audio/drum-roll.mp3');
let images = document.getElementsByClassName('images');
const main = document.getElementsByTagName("main")[0];
const spinner = document.getElementsByClassName("spinner")[0];

window.addEventListener("load", () => {
    main.style.visibility = "hidden";
    spinner.addEventListener("animationend", () => {
        spinner.style.opacity = "0";
        main.style.visibility = "visible"
        console.log(spinner);
    })


})






images = Array.from(images);
// console.log(images)

function changeImages() {
    const num1 = Math.ceil(Math.random() * 6)
    const num2 = Math.ceil(Math.random() * 6)  // 0.0000000000000000000000001.. to 5.9999999999999999999999999
    if (num1 !== num2) {
        images[0].style.backgroundImage = `url("./images/image-${num1}.png")`;
        images[1].style.backgroundImage = `url("./images/image-${num2}.png")`;
        console.log(num1, num2);
    }
}


let num = 9;
function counter() {
    let handShake = document.getElementById("hand-shake");
    if (num < 0) {
        handShake.innerHTML = `🤝`;
        drumRoll.pause();
        // location.reload();
        return
    } else {
        handShake.innerHTML = num
        num = num - 1;
        // console.log(num)
        drumRoll.play();
        changeImages();
    }
}
let n = 0;
btn.addEventListener("click", () => {
    n++;
    if (n === 1) {
        setInterval(counter, 900);
        btn.innerText = "Double click to start again"
    } else {
        location.reload();
    }
})