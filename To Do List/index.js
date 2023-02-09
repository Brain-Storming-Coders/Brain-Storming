showNote();

const downArrow = Array.from(document.getElementsByClassName('fa-chevron-down'))
const panel = document.getElementsByClassName('panel')

downArrow.forEach(btn => {
  btn.addEventListener("click", (e) => {

  btn.classList.toggle("fa-chevron-up")
  if (e.target.classList.contains("fa-chevron-up")){
      e.target.parentElement.nextElementSibling.style.display = "block"
  } else {
      e.target.parentElement.nextElementSibling.style.display = "none"
  }
   
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

