let accordion = document.getElementsByClassName("accordion");
let titleInput = document.getElementsByClassName("input-title")[0];
let detailInput = document.getElementsByTagName("textarea")[0];
console.log(detailInput);

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}