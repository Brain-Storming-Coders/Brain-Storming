//GET AJAX


// function getDogs() {

//     const request = new XMLHttpRequest()
//     request.open('GET', 'https://dog-api.kinduff.com/api/facts?number=20');
//     request.addEventListener('load', function () {
//         const data = JSON.parse(this.responseText)
//         if (this.status === 200) {
//             console.log(data.facts)
//         } else {
//             alert('Page not found')
//         }
//     })
//     request.send();
// }


// //POST 
// document.body.addEventListener('click', () => {
//     getDogs()
//     console.log('clicked')
// })


// const request = new XMLHttpRequest();
// // request.open('POST', 'https://jsonplaceholder.typicode.com/users');
// // request.getResponseHeader('Content-type', 'application/json');
// // request.responseType = 'json'
// // let body = JSON.stringify({
// //     name: 'Mayur Tiwari',
// //     username: '555555555'
// // })

// // request.send(body);
// // request.addEventListener('load', function () {
// //     console.log(request.response)
// // })

// const xhr = new XMLHttpRequest();

// // Open the object
// // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

// // USE THIS FOR POST REQUEST
// xhr.open('POST', 'https://jsonplaceholder.typicode.com/users', true);

// xhr.setRequestHeader('Content-type', 'application/json');


// // What to do on progress (optional)


// // xhr.onreadystatechange = function () {
// //     console.log('ready state is ', xhr.readyState);

// // }

// // What to do when response is ready
// xhr.onload = function () {


//         console.log(JSON.parse(this.responseText))


// }

// // send the request
// params =  JSON.stringify({
//     "id": 11,
//     "name": "Mayur Tiwari",
//     "username": "5236987456",
// })

// xhr.send(params);

// POST

const request = new XMLHttpRequest();
request.open('POST', 'https://jsonplaceholder.typicode.com/users');
request.setRequestHeader('Content-type', 'application/json')

let body =
{
    "id": 11,
    "name": "Valentine Day",
    "username": "Dukh Dard Peeda",
}

request.send(JSON.stringify(body));

request.onload = function () {
    console.log(JSON.parse(this.responseText))
}

const request1 = new XMLHttpRequest();
request1.open('POST', 'https://dummyjson.com/products/add');
request1.setRequestHeader('Content-type', 'application/json')

let body2 =
{
    title: 'Atul Ka Iphone'
}

request1.send(JSON.stringify(body2));

request1.onload = function () {
    if (this.status === 200) {
        console.log(JSON.parse(this.responseText))
    } else {
        console.error('Some error occured 🔥🔥🔥')
    }
   

}

const x = new XMLHttpRequest();
x.open('GET', 'https://dummyjson.com/products/categories');
x.send();
x.onload = function () {
    console.log(JSON.parse(x.responseText))
}