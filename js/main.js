 class Table {
    constructor(firstName, lastName, city, zCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.zCode = zCode;
    }
}

//this function create fake zip code
function generateRandomZcode(){
    var zipC = [];
    getRandomValue(0, 9);
    for (var i = 0; i<5; i++){
        var n = getRandomValue(0, 9);
        zipC.push(n);
    }
    var zipString = zipC.join('');
    return zipString;
}
// generate random number between 0-9
function getRandomValue(min, max) {
    return Math.round(((max - min) * Math.random()) + min);
}
//create array of fake zip codes
function createZipArr(){
    var zipArr = [];
    for(var i=0; i<385; i++){
       var zip = generateRandomZcode();
       zipArr.push(zip);
    }
    return zipArr;
}



function createtableRow(){
        var randomFName = firstNames[getRandomValue(0, 2738)];
        var randomLName = last_names[getRandomValue(0, 1000)];
        var randomCity = city_names[getRandomValue(0, 385)];
        var randomZ = generateRandomZcode();
        return createdTableR = new Table(randomFName, randomLName, randomCity, randomZ);
    }
    console.log(createtableRow());

var div = document.getElementById("tableContainer");
var table = document.createElement("table");
table.id="myTable";
var caption = table.createCaption();
caption.innerHTML = "Dynamic table example"
div.append(table);
var row0 = table.insertRow(0);

row0.innerHTML = "<th>id</th><th>First name</th><th>Last name</th><th>City</th><th>zip code</th>";

for (var i=1; i<=200; i++){
    createtableRow();
    var rowi= table.insertRow(i);
    rowi.innerHTML ="<td>" + i + "</td><td>" + createdTableR.firstName + "</td><td>" + createdTableR.lastName + "</td><td>" + createdTableR.city + "</td><td>" + createdTableR.zCode + "</td>";
}