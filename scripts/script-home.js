// de twee radio buttons opzoeken
var radios = document.querySelectorAll(' [type="radio"] ');

// een loopje
radios.forEach( radio => {
    // elke radio button laten luisteren naar wijzigingen
    // dan wordt de functie changeTextSize uitgevoerd
    radio.onchange = changeTextSize;
});


function changeTextSize(event) {
    var deVeranderdeRadio = event.target;
    var deVeranderdeRadioValue = deVeranderdeRadio.value
    // de waarde opslaan in het geheugen van je computer
    localStorage.setItem("fontSize", deVeranderdeRadioValue);
}


// na het laden van de pagina

// de opgeslagen waarde ophalen
var fontSize = localStorage.getItem("fontSize");

// ff checken of de waarde uberhaupt bestaat
if( fontSize ) {
    // als de waarde bestaat
    // de radio button met de value die is opgeslagen opzoeken
    var deOpgeslagenRadio = document.querySelector(' [value="' + fontSize +  '"] '); 
    // die radio button checken
    deOpgeslagenRadio.checked = true;
}