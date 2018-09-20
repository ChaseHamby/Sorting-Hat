// Function reveals the form when user clicks on "Get Sorting!" //

function showForm() {
    document.getElementById('student-form').style.display= "block";
};

// Print to DOM function below //

const printToDom = (stringToPrint, emptyDiv) => {
    document.getElementById(emptyDiv).innerHTML += stringToPrint;
}

// Making element for pulling text input from text area box //

const nameInputElem = document.getElementById('studentName');

// Making element for pulling info from sortButton //

const sortButtonElem = document.getElementById('sortButton');

let counter = 0;

// Student Card function using Bootstrap below //

const buildStudentCard = () => {
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">${studentName}</p>
      <a href="#" class="btn btn-primary">Expel</a>
    </div>
  </div>`;

  counter ++; // counts up one every time a card is created and helps the delete function know which card to delete
  printToDom(domString,'studentCards');
};

  sortButtonElem.addEventListener("click", (e) => {
    e.preventDefault(); 
    buildStudentCard(nameInputElem.value); 
    })



// document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
//     e.preventDefault();
//     buildStudentCard(nameInputElem.value); 
// });

// const houseSelection = () => {
//     let randomizer = math.floor(Math.random()+4);
//     if (randomizer === 1) {
//         gryffindorStringBuilder
//     } else if (random === 2}
//         slytherinStringBuilder
//         // keep going //
