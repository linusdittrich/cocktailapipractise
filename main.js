//Hole HTML-Elemente

let cocktailname1 = document.getElementById('cocktailname');
let alcoholic1 = document.getElementById('alcoholic');
let glass1 = document.getElementById('glass');
let zutaten1 = document.getElementById('zutaten');
let instructions1 = document.getElementById('instructions')
let button = document.getElementById('buttonimg');
const textField = document.getElementById('textfield');
let searchbutton = document.getElementById('searchbutton')



searchbutton.onclick = function () {

    searchDrinksByName(textField.value).then(function (data) {

    let cocktailname="";
    console.log(data);
    if(data.drinks[0].strDrink) {
        cocktailname = cocktailname + data.drinks[0].strDrink + "\n"
    }

    let alcoholic ="Alcoholic: ";
    if(data.drinks[0].strAlcoholic === "Alcoholic"){
        alcoholic = alcoholic + "✅"; 
    }
    if(data.drinks[0].strAlcoholic != "Alcoholic"){
        alcoholic = alcoholic + "❌"; 
    }

    let glass="";
    if(data.drinks[0].strGlass){
        glass = glass + "- a glass (" + data.drinks[0].strGlass + ")" + "\n"; 
    } 

    let zutaten="";
    if(data.drinks[0].strIngredient1){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure1 + "  " + data.drinks[0].strIngredient1 + "\n"; 
        zutaten += `-${data.drinks[0].strMeasure1} ${data.drinks[0].strIngredient1} \n`
    }
    if(data.drinks[0].strIngredient2){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure2 + "  " + data.drinks[0].strIngredient2 + "\n";
    }
    if(data.drinks[0].strIngredient3){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure3 + "  " + data.drinks[0].strIngredient3 + "\n";
    }
    if(data.drinks[0].strIngredient4){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure4 + "  " + data.drinks[0].strIngredient4 + "\n";
    }
    if(data.drinks[0].strIngredient5){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure5 + "  " + data.drinks[0].strIngredient5 + "\n";
    }
    if(data.drinks[0].strIngredient6){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure6 + "  " + data.drinks[0].strIngredient6 + "\n";
    }
    if(data.drinks[0].strIngredient7){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure7 + "  " + data.drinks[0].strIngredient7 + "\n";
    }
    if(data.drinks[0].strIngredient8){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure8 + "  " + data.drinks[0].strIngredient8 + "\n";
    }
    if(data.drinks[0].strIngredient9){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure9 + "  " + data.drinks[0].strIngredient9 + "\n";
    }
    if(data.drinks[0].strIngredient10){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure10 + "  " + data.drinks[0].strIngredient10 + "\n";
    }
    if(data.drinks[0].strIngredient11){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure11 + "  " + data.drinks[0].strIngredient11 + "\n";
    }
    if(data.drinks[0].strIngredient12){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure12 + "  " + data.drinks[0].strIngredient12 + "\n";
    }
    if(data.drinks[0].strIngredient13){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure13 + "  " + data.drinks[0].strIngredient13 + "\n";
    }
    if(data.drinks[0].strIngredient14){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure14 + "  " + data.drinks[0].strIngredient14 + "\n";
    }
    if(data.drinks[0].strIngredient15){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure15 + "  " + data.drinks[0].strIngredient15 + "\n";
    }

    let instructions="";
    if(data.drinks[0].strInstructions){
        instructions = instructions + data.drinks[0].strInstructions + "\n"; 
    }
    
    cocktailname1.innerText = cocktailname; 
    alcoholic1.innerText = alcoholic;
    glass1.innerText = glass;
    zutaten1.innerText =  zutaten;
    instructions1.innerText = instructions;

})
}



let isRotated = false;


function rotate() {
    if(isRotated){
        button.classList.remove('rotate1');
        isRotated = false;
    } else{
        button.classList.add('rotate1');
        isRotated = true;
    }
}

button.onclick = function () {
    console.log("Hier steht:",textField.value);
    rotate();


getDrinks().then(function (data) {
    console.log(data);
    console.log(data.drinks[0].idDrink);
    console.log(data.drinks[0].strAlcoholic);
    
    let cocktailname="";
    if(data.drinks[0].strDrink) {
        cocktailname = cocktailname + data.drinks[0].strDrink + "\n"
    }

    let alcoholic ="Alcoholic: ";
    if(data.drinks[0].strAlcoholic === "Alcoholic"){
        alcoholic = alcoholic + "✅"; 
    }
    if(data.drinks[0].strAlcoholic != "Alcoholic"){
        alcoholic = alcoholic + "❌"; 
    }

    let glass="";
    if(data.drinks[0].strGlass){
        glass = glass + "- a glass (" + data.drinks[0].strGlass + ")" + "\n"; 
    } 

    let zutaten="";
    if(data.drinks[0].strIngredient1){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure1 + "  " + data.drinks[0].strIngredient1 + "\n"; 
        zutaten += `-${data.drinks[0].strMeasure1} ${data.drinks[0].strIngredient1} \n`
    }
    if(data.drinks[0].strIngredient2){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure2 + "  " + data.drinks[0].strIngredient2 + "\n";
    }
    if(data.drinks[0].strIngredient3){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure3 + "  " + data.drinks[0].strIngredient3 + "\n";
    }
    if(data.drinks[0].strIngredient4){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure4 + "  " + data.drinks[0].strIngredient4 + "\n";
    }
    if(data.drinks[0].strIngredient5){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure5 + "  " + data.drinks[0].strIngredient5 + "\n";
    }
    if(data.drinks[0].strIngredient6){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure6 + "  " + data.drinks[0].strIngredient6 + "\n";
    }
    if(data.drinks[0].strIngredient7){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure7 + "  " + data.drinks[0].strIngredient7 + "\n";
    }
    if(data.drinks[0].strIngredient8){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure8 + "  " + data.drinks[0].strIngredient8 + "\n";
    }
    if(data.drinks[0].strIngredient9){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure9 + "  " + data.drinks[0].strIngredient9 + "\n";
    }
    if(data.drinks[0].strIngredient10){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure10 + "  " + data.drinks[0].strIngredient10 + "\n";
    }
    if(data.drinks[0].strIngredient11){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure11 + "  " + data.drinks[0].strIngredient11 + "\n";
    }
    if(data.drinks[0].strIngredient12){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure12 + "  " + data.drinks[0].strIngredient12 + "\n";
    }
    if(data.drinks[0].strIngredient13){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure13 + "  " + data.drinks[0].strIngredient13 + "\n";
    }
    if(data.drinks[0].strIngredient14){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure14 + "  " + data.drinks[0].strIngredient14 + "\n";
    }
    if(data.drinks[0].strIngredient15){
        zutaten = zutaten + "- " + data.drinks[0].strMeasure15 + "  " + data.drinks[0].strIngredient15 + "\n";
    }

    let instructions="";
    if(data.drinks[0].strInstructions){
        instructions = instructions + data.drinks[0].strInstructions + "\n"; 
    }
    
    cocktailname1.innerText = cocktailname; 
    alcoholic1.innerText = alcoholic;
    glass1.innerText = glass;
    zutaten1.innerText =  zutaten;
    instructions1.innerText = instructions;
});
}

//Hole Daten mit fetch
async function getDrinks(){
    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/random.php');
    //zurückgeben des Inhalts von getData
    return await response.json();
}

async function searchDrinksByName(suchbegriff){
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=" + suchbegriff);
    //zurückgeben des Inhalts von getData
    return await response.json();
}

//Schreibe die Daten in die HTML-Elemente



