//1 uzduotis

document.getElementById ("button1" && "button2").addEventListener ("click", () =>{
    alert ("valio tavo kodas veikia!")
})

// 2 uzduotis

document.getElementById("inputText").addEventListener("keydown", function(event) {
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");

    // Loguoti paspaustą klavišą į konsolę
    console.log("Paspaustas klavišas:", event.key);

    // Atnaujinti pastraipos tekstą su paspaustu klavišu
    outputText.textContent = "Paspaustas klavišas: " + event.key;

    // Patikrinti, ar buvo paspaustas "Enter" klavišas
    if (event.key === "Enter") {
        // Išvalyti įvesties laukelį
        inputText.value = '';
    }
});


