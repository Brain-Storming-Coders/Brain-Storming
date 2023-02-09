// // Storing our data on local storage on our browser
// const addNoteBtn = document.getElementsByClassName("btn")[0];

// addNoteBtn.addEventListener("click", () => {
//     let noteDescription = document.getElementById("noteDescription");
//     let noteTitle = document.getElementById("noteTitle");
//     if (noteTitle.value || noteDescription.value) {

//         let notes = localStorage.getItem("notesKey");
//         console.log(notes);
//         if (notes === null) {
//             notesObject = {
//                 title: [],
//                 detail: [],
//             };
//         } else {
//             notesObject = JSON.parse(notes);
//         }
//         notesObject.title.push(noteTitle.value);
//         notesObject.detail.push(noteDescription.value);
//         localStorage.setItem("notesKey", JSON.stringify(notesObject));
//         console.log(notes, notesObject);
//         noteDescription.value = "";
//         noteTitle.value = "";
//     }
//     showNotes();
// });

// // Function to show our notes on Web Page
// const showNotes = function () {
//     let cardContainer = document.getElementsByClassName("container")[0];

//     let notes = localStorage.getItem("notesKey");
//     console.log(notes);

//     console.log(notesObject)
//     let titleArr = notesObject.title;
//     let detailArr = notesObject.detail;
//     let html;
//     for (let i = 0; i < titleArr.length; i++) {

//         html += `  <div class="card">
// <h3>${titleArr[i]}</h3>
// <p>${detailArr[i]}</p>
// </div>`

//         cardContainer.innerHTML = html;
//     }

// };

// showNotes();

"use strict";
let notesValue;
showNotes();
// Storing in localStorage
const addBtn = document.getElementsByClassName("btn")[0];

addBtn.addEventListener("click", () => {
    let titleText = document.getElementById("noteTitle");
    let notesDescription = document.getElementById("noteDescription");

    if (titleText.value && notesDescription.value) {
        let notes = localStorage.getItem("notesKey");
        console.log(notes);
        if (notes === null) {
            notesValue = {
                title: [],
                description: [],
            };
        } else {
            notesValue = JSON.parse(notes);
        }

        notesValue.title.push(titleText.value);
        notesValue.description.push(notesDescription.value);

        console.log(notes);
        localStorage.setItem("notesKey", JSON.stringify(notesValue));
        titleText.value = "";
        notesDescription.value = "";
    }

    showNotes();
});

// Creating a Function to show notes on web page
function showNotes() {
    const container = document.getElementsByClassName("container")[0];
    const notes = localStorage.getItem("notesKey");
    if (notes) {
        let notes = localStorage.getItem("notesKey");
        console.log(notes);
        if (notes === null) {
            notesValue = {
                title: [],
                description: [],
            };
        } else {
            notesValue = JSON.parse(notes);
        }
        const title = notesValue.title; // [.........................]
        const detail = notesValue.description; // [........................]
        let html = "";
        for (let i = 0; i < title.length; i++) {
            html += ` <div class="card">
            <div class = "top"> <i class="fa-solid fa-trash"></i></div>
           <div>
           <h3>${title[i]}</h3>
       <p>${detail[i]}</p>
           </div>
       
   </div>`;
        }
        container.innerHTML = html;
    }
}

const deleteBtns = Array.from(document.getElementsByClassName("fa-trash"))
const cards = Array.from(document.getElementsByClassName('card'));

for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", () => {
        cards[i].style.display = 'none';
        notesValue["title"].splice(i, 1)
        notesValue["description"].splice(i, 1)
        console.log(notesValue)
        localStorage.setItem('notesKey', JSON.stringify(notesValue));
    })

}

