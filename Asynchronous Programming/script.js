// Synchronous V/s Asynchronous
// setInterval(() => {
//     console.log('Hello Laxmi')
// }, 1000)
// setTimeout(() => {
//     console.log('Hello JS')
// }, 5000)
// Synchronous
// const myName = "Pro Max Coder";
// console.log(myName)
// alert('Hello from the JavaScript'); // Blocking of code or blocking of main thread.
// console.log('How are you?')

//Asynchronous Version
// const myName = "Pro Max Coder";
// console.log(myName)
// setTimeout(()=>{
//    console.log('Hello from the JavaScript')
// },15000)
// console.log('How are you?')

// AJAX ---> Asynchronous Javascript And XML
// XML data format ❌
// json data format ✅

// API --> Application Programming Interface

//GET request //AJAX
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/india');
request.send();
request.onload = function () {

    const data = JSON.parse(this.responseText)
    console.log(data[0].population)
}
// request.addEventListener('load', () => {
//     console.log(request.responseText)
// })



