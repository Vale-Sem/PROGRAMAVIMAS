document.getElementById("myForm").addEventListener("submit", function (event) {
    const ageInput = document.getElementById("age"); // Gauname įvesties laukelio elementą
    const age = parseInt(ageInput.value); // Paverčiame įvesties laukelio reikšmę į skaičių

    if (age >= 18 && age < 65) {
        console.log(age); // Atspausdiname amžių konsolėje
    } else {
        event.preventDefault(); // Užkertame kelią formos siuntimui
        ageInput.value = ""; // Išvalome įvesties reikšmę
        ageInput.placeholder = "Amžius nėra tinkamas!"; // Pakeičiame placeholder į klaidos pranešimą
        ageInput.style.borderColor = "red"; // Parodome vizualų efektą (pvz., raudonas rėmelis)
    }
});
