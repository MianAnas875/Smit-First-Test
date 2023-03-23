
var printcity = document.getElementById("printcity");
var addcity = document.getElementById("addcity");
var clr = document.getElementById("clr");
var result = document.getElementById("result");
var original = document.getElementById("original").innerHTML ="Faisalabad,Lahore,Karachi,Islamabad,Burewala,Sheikhupura,kashmir";

var cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"];
//username---------------------------------------------------------------------------------------------------------------------

var username = localStorage.getItem("username");
      document.getElementById("username").innerHTML = username;

//Print All Cities--------------------------------------------------------------------------------------------------------------


printcity.onclick = function(){
    
    result.innerHTML = " "
    for(let index= 0 , sr = 1 ; index < cities.length ; index++ , sr++){
        result.innerHTML += sr + ")" + cities[index] + "<br>";
    }
    
}


//Add City in List--------------------------------------------------------------------------------------------------------------

addcity.onclick = function(){
    
    let city = document.getElementById("input").value;
    
    if(city.length < 3){
        result.innerHTML = "Please Enter Valid City Name in Input Field !"
        return;
    } 
    
    let cityFirstLetter = city.slice(0, 1).toUpperCase();
    let cityAllLetters = city.slice(1).toLowerCase();
    let capitalized = cityFirstLetter + cityAllLetters;
    
    let cityFound = false;
    
    
    for( let i = 0; i < cities.length; i++){
        
        if (cities[i] === capitalized ) {
            cityFound = true;
            result.innerHTML = '<span style="font-size: 26px; color: red;">"' + capitalized + '"</span> Already in your list !'
        }
        
    }
    
    if( cityFound === false){
        cities.push(capitalized);
        result.innerHTML = '<span style="font-size: 26px; color: green;">"'+capitalized+'"</span> Added to your list !'
    }
    
}


//Clear Btn---------------------------------------------------------------------------------------------------------------------


document.getElementById("ClearResult").onclick = function(){
    result.innerHTML = " ";
}

document.getElementById('clr').onclick = function(){
    document.getElementById('input').value = "";
}