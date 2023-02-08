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



