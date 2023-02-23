// const parent = document.getElementsByClassName('card')[0];
// const neighbour = document.getElementsByClassName('neighbour')[0];

/*
let neighbourData;
const request = new XMLHttpRequest();
const country = "india"
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();
request.addEventListener('load', function () {


    const [respone] = JSON.parse(this.response)
    console.log(respone.borders)
    document.body.innerHTML += `
       <img src = "${respone.flags.png}" alt = "loading...">

       `
    neighbourData = respone.borders[0]
    console.log(neighbourData)
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbourData}`)
    request2.send();
    request2.addEventListener('load', function () {

        const response2 = JSON.parse(this.responseText)[0]
        console.log(response2.flags)
        document.body.innerHTML += `
            <img src = "${response2.flags.png}" alt = "loading...">


    })
})

*/

// const request2 = new XMLHttpRequest();
// request2.open('GET', `https://restcountries.com/v3.1/alpha/BGD`)
// request2.send();
// request2.addEventListener('load', function () {
//     const response2 = JSON.parse(this.responseText)[0]
//     console.log(response2.flags)
//     document.body.innerHTML += `
//         <img src = "${response2.flags.png}" alt = "loading...">
//         `
// })

// setTimeout(() => {
//     console.log('1')
//     setTimeout(() => {
//         console.log('2')
//         setTimeout(() => {
//             console.log('3')
//             setTimeout(() => {
//                 console.log('4')
//                 setTimeout(() => {
//                     console.log('5')
//                     setTimeout(() => {
//                         console.log('6')
//                         setTimeout(() => {
//                             console.log('7')

//                         }, 1000)

//                     }, 1000)

//                 }, 1000)

//             }, 1000)

//         }, 1000)

//     }, 1000)
// }, 1000)

//Restraunt
// fetch dish available nearby
// Order create -- api
// Payment   -- api
// order -- book --api
// msg payment done; -- prepare

// 1. order create ---2. payment api
// `orderCreateAPI.onload =  function () {
//     console.log(order created)
//     PaymentAPI.onload =  function () {
//         console.log(proceed to payment gateway)
//     }
// }`

// Promises

// Promise ---> Create

// Promise ---> Fullfill or Reject

// building a promise
// const promise1 = new Promise(function (resolve, reject) {
//     //Executor
//     setTimeout(() => {
//         resolve('p1 resolved')
//     }, 2000)

//     setTimeout(() => {
//         reject('Heart Break💔')
//     }, 2000)

// })

// console.log(promise1)

// //Consuming a promise
// promise1.catch((response) => {
//     console.log(response)
//     console.log(promise1)
// })

// // Promise Chaining
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("1")
//     }, 2000);
// })

// p1.then((data) => {
//     console.log(data)
//     return new Promise((resolve, reject) => {
//         resolve('2')
//     })
// }).then((data2) => {
//     console.log(data2)
//     return new Promise((resolve, reject) => {
//         resolve('3')
//     })
// }).then((data3) => {
//     console.log(data3)
//     return new Promise((resolve, reject) => {
//         resolve('4')
//     })
// }).then((data4) => {
//     console.log(data4)
//     return new Promise((resolve, reject) => {
//         resolve('5')
//     })
// }).then((data5) => {
//     console.log(data5)
//     return new Promise((resolve, reject) => {
//         resolve('6')
//     })
// }).then((data6) => {
//     console.log(data6)
// })


// const img = Array.from(document.getElementsByClassName("card-img-top"));
// const pokeName = Array.from(document.getElementsByClassName("card-text"));

// function getPokemonInfo() {
//   const request = fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");

//   request
//     .then((response) => {
//       // console.log(response.json())
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data.results);
//       const pokeArr = data.results;
//       pokeArr.forEach((item) => {
//         console.log(item);
//         document.body.innerHTML += `   <div class="card" style="width: 18rem;">
//       <img class="card-img-top" src="..." alt="Card image cap">
//       <div class="card-body">
//         <p class="card-text">${item.name}</p>
//       </div>
//     </div>`;
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//

// }

// getPokemonInfo();

function populateInfo(pokeName, img) {
  document.body.innerHTML += `<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${img}" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">${pokeName}</p>
      </div>
    </div>`
}

function getPokemonInfo() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  .then(response => response.json())
  .then(jsondata => {
    return jsondata.results
  }).then(pokeArr => {
    console.log(pokeArr);
    pokeArr.forEach((item) => {
      fetch(item.url)
        .then((response) => {
          return response.json();
        }).then((data2) => {
          img = data2.sprites.other.dream_world.front_default
          populateInfo(item.name, img)
        });
    })
  })
}

getPokemonInfo()