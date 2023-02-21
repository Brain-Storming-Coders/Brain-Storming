const btn = document.getElementById('btn');
const searchInput = document.getElementById('searchInput')
const card = document.getElementsByClassName('card')[0]
btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!searchInput.value) {
        alert('Enter Any Country Name first')
    } else {
        setTimeout(() => {
            card.innerHTML = `<main>
            <svg class="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stop-color="#5ebd3e" />
                        <stop offset="33%" stop-color="#ffb900" />
                        <stop offset="67%" stop-color="#f78200" />
                        <stop offset="100%" stop-color="#e23838" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="0%" stop-color="#e23838" />
                        <stop offset="33%" stop-color="#973999" />
                        <stop offset="67%" stop-color="#009cdf" />
                        <stop offset="100%" stop-color="#5ebd3e" />
                    </linearGradient>
                </defs>
                <g fill="none" stroke-linecap="round" stroke-width="16">
                    <g class="ip__track" stroke="#ddd">
                        <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                        <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
                    </g>
                    <g stroke-dasharray="180 656">
                        <path class="ip__worm1" stroke="url(#grad1)" stroke-dashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"/>
                        <path class="ip__worm2" stroke="url(#grad2)" stroke-dashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"/>
                    </g>
                </g>
            </svg>
        </main>`
            setTimeout(() => {
                card.classList.add('x')
                if (searchInput.value) {
                    getCountry(searchInput.value)
                }
            }, 1000)
        })
    }

})


function getCountry(country = 'india') {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

    request.onload = function () {
        if (this.status === 200) {
            let [data] = JSON.parse(this.responseText)
            // Exception in case of China
            if (country.toLowerCase() === 'china') {
                data = JSON.parse(this.responseText)[2]
            }

            const flag = data.flags.png;
            const countryName = data.name.official;
            const capitals = data.capital;
            let capitalList = "";

            capitals.forEach(capital => {
                capitalList += capital + ", "
            });
            capitalList = capitalList.slice(0, -2)

            const region = data.region;
            const population = (data.population / 1000000).toFixed(1)
            const languages = data.languages;
            let languageList = "";
            for (let x in languages) {
                languageList += languages[x] + ", "
            }
            languageList = languageList.slice(0, -2)
            const area = (data.area / 1000000).toFixed(2) + " Million sq.km"
            const currencyObj = data.currencies;
            let currency = "";
            for (let i in currencyObj) {
                currency = currencyObj[i].name
            }
            card.innerHTML = `
            <img src="${flag}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${countryName}</h5>
            
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Capital :<strong> ${capitalList} </strong></li>
            <li class="list-group-item">Region :<strong> ${region} </strong> </li>
            <li class="list-group-item">Population : <strong> ${population} M </strong> </li>
            <li class="list-group-item">Languages : <strong> ${languageList} </strong></li>
            <li class="list-group-item">Area : <strong> ${area} </strong>  </li>
            <li class="list-group-item">Currency : <strong> ${currency} </strong>  </li>
            
        </ul>
            `
        } else {
            card.innerHTML = `
            <img src="./error.png"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title errorText">Request Failed or Country Name does not exist. Please Try Again!</h5>
            
        </div>
       `

        }
    }
    card.addEventListener('animationend', () => {
        card.classList.remove('x')
    })
    request.send();
}


getCountry();