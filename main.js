// Function reveals the form when user clicks on "Get Sorting!" //

function showForm() {
    document.getElementById('student-form').style.display= "block";
};

// Print to DOM function below //

const printToDom = (stringToPrint, emptyDiv) => {
    document.getElementById(emptyDiv).innerHTML += stringToPrint;
}

// Elements //

const nameInputElem = document.getElementById('studentName').value;

const sortButtonElem = document.getElementById('sortButton');

let counter = 0;

// Student Card function using Bootstrap below //

const buildStudentCard = () => {
  const schools = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"][Math.floor(Math.random() * 4)];
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${studentName.value}</h5>
      <p class="card-text">${schools}</p>
      <a href="#" class="btn btn-primary">Expel</a>
    </div>
  </div>`;

  counter ++; // counts up one every time a card is created and helps the delete function know which card to delete
  printToDom(domString,'studentCards');
};

sortButtonElem.addEventListener("click", (e) => {
  e.preventDefault(); 
  buildStudentCard(nameInputElem.value); 
});

