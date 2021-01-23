/////////////////////////////NO 1///////////////////////////

console.log("\nAnswer Of 1st Problem:");

function convertToFeet(i){
    let feetValue = i/12 ;
    console.log("Converted inch value into feet is: " + feetValue);
    return feetValue;
}
function convertToMile(f){
    let mileValue = f/5280 ;
    console.log("Converted feet value into mile is: " + mileValue);
}

convertToMile(convertToFeet(24));
console.log("\n");

/////////////////////////////NO 2///////////////////////////

console.log("Answer Of 2nd Problem:");

woodCalculator(5 , 2 , 1);

function woodCalculator(c=0 , t=0 , b=0){
    let woodAmount = c + (t*3) + (b*5) ;
    console.log("The amount of needed woods: " + woodAmount + " cubic feet.");
}
console.log("\n");

/////////////////////////////NO 3///////////////////////////

console.log("Answer Of 3rd Problem:");

brickCalculator(22);

function brickCalculator(buildingFloor){
    buildingFloor -= 10;
    let brickNeeded = (10*15) * 1000 ;

    buildingFloor -= 10;
    brickNeeded += (10*12) * 1000 ;

    brickNeeded += (buildingFloor*10) * 1000 ;

    console.log("The amount of needed bricks: " + brickNeeded);
}
console.log("\n");

/////////////////////////////NO 4///////////////////////////

console.log("Answer Of 4th Problem:");

const friends = ["Ayesha" , "Mursheda" , "Happy" , "Taki" , "Sadia" , "Hasna" , "Shajeda" , "Farhana"];
let lngth = friends[0].length;
let position = 0;
let i = 0;
friends.forEach(function(frnds){

    if(frnds.length < lngth){
        position = i;
        lngth = frnds.length;
    }
    i++;
});
console.log(friends[position]);
console.log("\n");

/////////////////////////////NO 5///////////////////////////

console.log("Answer Of 5th Problem:");

// Jodi office a jai tahole chata niye ber hobo.
// otherwise mail korbo. Basay khichuri ranna korbo. Gorur mangso thakle sathe gorur mangso o ranna kore nibo. otherwise dim vaji diye kheye felbo.

officeJawa = false;
gorurMangsoAse = true;

if(officeJawa == true){
    console.log("Chata niye ber hobo.");
}
else{
    console.log("Mail: \"Amar Shorir Kharap.\"");
    if(gorurMangsoAse == true){
        console.log("Khichuri ranna korbo. Ebong Khichurir sathe khawar jonno gorur mangso o ranna kore nibo.");
    }
    else{
        console.log("Khichuri ranna korbo. Ebong dim vaji diye kheye felbo.");

    }
}
console.log("\n");