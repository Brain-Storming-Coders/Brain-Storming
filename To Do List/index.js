// let accordion = document.getElementsByClassName("accordion");


// for (let i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
showNote();
const downArrow = Array.from(document.getElementsByClassName('fa-chevron-down'))

console.log(downArrow)
const panel = document.getElementsByClassName('panel')

downArrow.forEach(btn => {
  let arrowDown = true;
  btn.addEventListener("click", (e) => {
  
    console.log(e.target)
    if (arrowDown) {
      e.target.parentElement.nextElementSibling.style.display = "block";
      btn.classList.add("fa-chevron-up")
      arrowDown = false
      console.log(arrowDown)
    } else {
      e.target.parentElement.nextElementSibling.style.display = "none";
      btn.classList.remove("fa-chevron-up")
      arrowDown = true;
      console.log(arrowDown)
    }

    //   console.log(e.target)
    
    //   e.target.parentElement.nextElementSibling.style.display = "block";
    //   btn.classList.add("fa-chevron-up")
    
    // btn.addEventListener("click",(e)=>{
    //   e.target.parentElement.nextElementSibling.style.display = "none";
    //   btn.classList.add("fa-chevron-down")
    // })

  })
})

// Storing our values on local storage of browser
const addNoteBtn = document.getElementsByClassName('fa-plus-square')[0];
console.log(addNoteBtn)
addNoteBtn.addEventListener('click', () => {
  let titleInput = document.getElementsByClassName("input-title")[0];
  let detailInput = document.getElementsByTagName("textarea")[0];
  if (titleInput.value || detailInput.value) {
    let notes = localStorage.getItem('notesKey')
    if (notes == null) {
      notesValue = {
        title: [],
        notesDescription: []
      }
    } else {
      notesValue = JSON.parse(notes)
    }
    notesValue.title.push(titleInput.value)
    notesValue.notesDescription.push(detailInput.value)
    localStorage.setItem('notesKey', JSON.stringify(notesValue))
    titleInput.value = "";
    detailInput.value = "";
    showNote();
  }
})

// Function to show Notes on Web Page
function showNote() {
  let accordianWrapper = document.getElementsByClassName('accordion-container')[0];
  console.log(accordianWrapper)
  const noteValue = JSON.parse(localStorage.getItem('notesKey'))
  console.log(noteValue)
  if (noteValue) {
    let titleArr = noteValue.title;
    let detailArr = noteValue.notesDescription;
    let notesList = "";
    for (let i = 0; i < titleArr.length; i++) {
      notesList += `<div class="card">
     <button class="accordion">
         <i class="fa fa-chevron-down"></i>
         <label>${titleArr[i]}</label>
         <div class="icons">
             <input type="checkbox">
             <i class="fas fa-pen"></i>
             <i class="fas fa-trash"></i>
         </div>
     </button>
     <p class="panel">${detailArr[i]}</p>
   </div>`
    }
    accordianWrapper.innerHTML = notesList;
  }


}

