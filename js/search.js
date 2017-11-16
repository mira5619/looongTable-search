
function borderCollapse() {
  // var table = document.querySelector("table");

  // table.style.borderCollapse = "collapse";
}

function insertRow() {
  // var table = document.querySelector("#myTable");

  // // without parameters, insert at the end,
  // // otherwise parameter = index where the row will be inserted
  // var row = table.insertRow();

  // var cell1 = row.insertCell();
  // cell1.innerHTML = "New cell1";
  // var cell2 = row.insertCell();
  // cell2.innerHTML = "New cell2";
  // var cell3 = row.insertCell();
  // cell3.innerHTML = "New cell3";
}

function deleteFirstRow() {
  // var table = document.querySelector("#myTable");
  // table.deleteRow(1); // 0 is the header
}



//added search and reset functions

var inputBox, button, p, table;
window.onload = init;
function init(){
p = document.getElementById("output");
table = document.getElementById("myTable");
inputBox=document.getElementById("mySearch");
inputBox.addEventListener("input", search);
inputBox.addEventListener("focus", reset);

//button = document.querySelector('button');
//button.addEventListener("click", search);

search();
reset();
}

function search() {

  var names = [];

  var userInput = inputBox.value;

  var formatedInput = userInput.toLowerCase().split(" ").join('');

  var rows = table.rows;


  for(var i = 0; i < rows.length; i++){
    var name = rows[i].cells[1];

    var family = rows[i].cells[2];
    var fullName = name.innerHTML + family.innerHTML;
    var formatedName = fullName.toLowerCase().split(" ").join('');

    names.push(formatedName);
 }


  for ( var k=0; k< names.length; k++){

        if (names[k] === formatedInput){
          rows[k].style.backgroundColor = "yellow";
          p.innerHTML = "";
          break;
        } else {
          p.style.color = "red";
          p.textContent = "No such a person in the table";
        }
  }

}
//reset input box for next user search
function reset() {
  //clear last user search input
  inputBox.value = "";
  //clear message element
  p.innerHTML="";
  //get table row elements, loop tr's and reset background color to white
  var trows = table.rows;
  for(var n=0; n< trows.length; n++){
      trows[n].style.backgroundColor = "white";
  }
}

