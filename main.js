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

// Expel Function //

const activateExpels = () => {
  const expelButton = document.getElementsByClassName("delete");
  for (let i = 0; i < expelButton.length; i++) {
    const element = expelButton[i];
    element.addEventListener ("click", e => {
      const clickButton = e.target;
      const studentToExpel = clickButton.parentNode;
      studentToExpel.remove();
    })
  }
};

// Student Card function using Bootstrap below //

const buildStudentCard = () => {
  const schools = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"][Math.floor(Math.random() * 4)];
    let domString = `<div class="card w-25 m-2">
    <div class="card-body">
      <h5 class="card-title">${studentName.value}</h5>
      <p class="card-text">${schools}</p>
      <a href="#" class="btn btn-primary delete">Expel</a>
    </div>
  </div>`;

  counter ++; // counts up one every time a card is created and helps the delete function know which card to delete
  printToDom(domString,'studentCards');
  activateExpels();
};

sortButtonElem.addEventListener("click", (e) => {
  e.preventDefault(); 
  buildStudentCard(nameInputElem.value); 
});

