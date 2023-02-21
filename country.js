class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
   
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
let france = new Country("France", "French", "Bonjour", ["blue", "red", "white"]);
let italy = new Country("Italy", "Italian", "Ciao", ["green", "white", "red"]);


function SwitchCountry() {
    selectElement = document.querySelector("#CountryList");
    let input = selectElement.value;
    console.log(`${input}`);
    console.log("this is writing something");
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        DisplayColors(country);
    }
    else if (input === "Mexico") {
        country = mexico;
       DisplayColors(country);
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayColors(country);
    }
    else if (input === "France") {
        country = france;
        DisplayColors(country);
    }
    else if (input === "Italy") {
        country = italy;
        DisplayColors(country);
    }

}

DisplayColors = (country)=>{
document.querySelector("#CountryName").innterHTML=country.name;
document.querySelector("#OfficialLanguage").innerHTML=country.lang;
document.querySelector("#HelloWorld").innerHTML= country.greeting;
document.querySelector("#Color1").style.backgroundColor=country.colors[0];
document.querySelector("#Color2").style.backgroundColor.colors[1];
document.querySelector("#Color3").style.backgroundColor.colors[2];
}


    
     //Where all of the dom changes will happen
     //accessing property
     //this.name
 

   
     //Where all of the dom changes will happen
     //accessing property
     //this.name
 