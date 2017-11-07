
/*//this function create fake zip code
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

var randomZ = generateRandomZcode();
console.log(randomZ);*/