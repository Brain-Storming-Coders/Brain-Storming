const container = document.getElementsByClassName("container")[0];
let offset = 0;
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
getPokemon();
function getPokemon(offset = 0) {
  container.innerHTML = `
  <svg width="300" height="120" id="clackers">
  <!-- Left arc path -->
  <svg>
    <path id="arc-left-up" fill="none" d="M 90 90 A 90 90 0 0 1 0 0"/>
  </svg>
  <!-- Right arc path -->
  <svg>
    <path id="arc-right-up" fill="none" d="M 100 90 A 90 90 0 0 0 190 0"/>
  </svg>
  
  <text x="150" y="50" fill="#ffffff" font-family="Helvetica Neue,Helvetica,Arial" font-size="18"
        text-anchor="middle">
    L O A D I N G
  </text>
  <circle cx="15" cy="15" r="15">
    <!-- I used a python script to calculate the keyPoints and keyTimes based on a quadratic function. -->
    <animateMotion dur="1.5s" repeatCount="indefinite"
      calcMode="linear"
      keyPoints="0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0"
      keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
      <mpath xlink:href="#arc-left-up"/>
    </animateMotion>
  </circle>
  <circle cx="135" cy="105" r="15" />
  <circle cx="165" cy="105" r="15" />
  <circle cx="95" cy="15" r="15">
    <animateMotion dur="1.5s" repeatCount="indefinite"
      calcMode="linear"
      keyPoints="0.0;0.0;0.05;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.0;0.19;0.36;0.51;0.64;0.75;0.84;0.91;0.96;0.99;1.0;0.99;0.96;0.91;0.84;0.75;0.64;0.51;0.36;0.19;0.0"
      keyTimes="0.0;0.025;0.05;0.075;0.1;0.125;0.15;0.175;0.2;0.225;0.25;0.275;0.3;0.325;0.35;0.375;0.4;0.425;0.45;0.475;0.5;0.525;0.55;0.575;0.6;0.625;0.65;0.675;0.7;0.725;0.75;0.775;0.8;0.825;0.85;0.875;0.9;0.925;0.95;0.975;1.0">
      <mpath xlink:href="#arc-right-up"/>
    </animateMotion>
  </circle>
</svg>`
  const request = fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=24&offset=${offset}`
  );
  request
    .then((response) => {
      return response.json();
    })
    .then((data) => {
     
      const arr = data.results;
      const request2 = arr.map((item) => item.url);

      const promises = request2.map((api) =>
        fetch(api).then((response) => response.json())
      );
     

      Promise.all(promises).then((data1) =>
        data1.forEach((data) => {
          let pokeName = data.name;
          pokeName =
            pokeName[0].toUpperCase() + pokeName.slice(1).toLowerCase();
          container.innerHTML += `
                   <div class="card" style="width: 18rem">
                    <img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="..." />
                    <div class="card-body">
                 <h5 class="card-title">ID : #${data.id}</h5>
                    <h5 class="card-title">${pokeName}</h5>
                   <h5 class="card-title">Weight : ${data.weight}</h5>
                 </div>
                  </div>
                 `;
        })
      );
    });

  //    request2.forEach((api) => {
  //      console.log(api);
  //      fetch(api)
  //        .then((response) => {
  //          return response.json();
  //        })
  //        .then((data) => {
  //          console.log(data);
  //          let pokeName = data.name;
  //          pokeName =
  //            pokeName[0].toUpperCase() + pokeName.slice(1).toLowerCase();
  //           container.innerHTML += `
  //            <div class="card" style="width: 18rem">
  //             <img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="..." />
  //             <div class="card-body">
  //             <h5 class="card-title">ID : #${data.id}</h5>
  //             <h5 class="card-title">${pokeName}</h5>
  //            <h5 class="card-title">Weight : ${data.weight}</h5>
  //            </div>
  //           </div>
  //            `;
  //         });
  //     });
}

nextBtn.addEventListener("click", () => {
  if (offset >= 1278) {
    return;
  }
  container.innerHTML = "";
  offset += 24;
  getPokemon(offset);
});

prevBtn.addEventListener("click", () => {
  if (!offset) {
    return;
  }
  container.innerHTML = "";
  offset -= 24;
  getPokemon(offset);
});
