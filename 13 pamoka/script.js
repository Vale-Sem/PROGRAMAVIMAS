const firsName = "Valerija";
console.log(firsName);

const surName = "Semeiuk";
console.log(surName);

let age = 30;
console.log(age);



let plantNumber = 49;
    if (plantNumber > 40) {
    console.log("Daug augalų...");
}
    else if (plantNumber < 40) {
    console.log ("Mažai augalų...");
}


    //AR ASMUO GALI BALSUOTI?

    /*Užduotis: Kintamieji ir kontrolės sakiniai

2.1 Tikslas: Parašykite JavaScript programą, kuri įvertina ar asmuo gali balsuoti:

Asmuo turi būti sulaukęs reikiamo amžiaus. (18 metų)
Asmuo turi būti šalies pilietis.
Papildomas reikalavimas: Asmuo šalyje turi gyventi bent 30 dienų.
2.2 Instrukcijos:

Apsibrėžkite kintamuosius asmens amžiui, pilietybės statusui, šalyje išgyventų dienų skaičiui.
Panaudokite if...else kontrolės sakinius įvertinimui ar asmuo gali balsuoti.
Konsolėje išspausdinkite if...else rezultatą.
    */

const age1 = 18;
const citizen = false;
const daysOfLiving = 30;

    if (age1 >= 18 && citizen && daysOfLiving >=30) {
        console.log ("Asmuo gali balsuoti.");
    }
    else if (age1 <18) {
        console.log ("Asmuo negali balsuoti, nes jo amžius neatitinka reikalavimams.");
    }
    else if (!citizen) {
        console.log("Asmuo negali balsuoti, nes nėra lietuvos pilietis.")
    }
    else if (daysOfLiving <=30) {
        console.log ("Asmuo negali balsuoti, nes išgyventų dienų skaičis per mažas.")
    }


    /*Užduotis: Kintamieji ir kontrolės sakiniai

3.1 Tikslas: Parašykite JavaScript programą, kuri įvertintų žmogaus sveikatos riziką, atsižvelgiant į jo amžių, KMI (kūno masės indeksą) ir gyvenimo būdo veiksnius. Programa turėtų suskirstyti sveikatos riziką į skirtingus lygius ir pateikti konkrečius patarimus.

3.2 Instrukcijos:

Apsibrėžkite kintamuosius age, bmi ir smokes.
Įgyvendinkite if-else logiką su keliais operatoriais, kad nustatytumėte sveikatos rizikos lygį, remdamiesi asmens amžiumi, KMI ir rūkymo statusu.
Maža rizika: Amžius < 30, KMI < 25 ir nerūko.
Vidutinė rizika: Amžius tarp 30 ir 50 (imtinai), KMI tarp 25 ir 30 (neimtinai) ir nerūko.
Didelė rizika: Bet kuris iš šių veiksnių yra teisingas (bet ne visi trys): Amžius > 50, KMI >= 30 arba rūko.
Labai didelė rizika: Visi šie veiksniai yra teisingi: Amžius > 50, KMI >= 30 ir rūko.
Neapibrėžta rizika: Bet kokia kita įvesčių kombinacija.
Savo nuožiūra pateikite patarimus, remiantis sveikatos rizikos lygiu.
Atspausdinkite amžių, KMI, rūkymo statusą, sveikatos rizikos lygį ir patarimus.
    */

const age3 = 0;
const KMI = 20;
const noSmoke = true
let riskLevel
let advice


if (age3 < 30 && KMI < 25 && noSmoke) {
    riskLevel = "Maža rizika.";
    advice = "Stenkitės bent 30 minučių kasdien užsiimti kokia nors veikla, pvz., ėjimu, bėgimu, joga ar treniruotėmis. Fizinė veikla ne tik pagerins nuotaiką, bet ir padės palaikyti bendrą sveikatą.";
}
else if (age3 <= 50 && KMI < 30 && noSmoke) {
    riskLevel = "Vidutine rizika.";
    advice = "Stenkitės bent 30 minučių kasdien užsiimti kokia nors veikla, pvz., ėjimu, bėgimu, joga ar treniruotėmis. Fizinė veikla ne tik pagerins nuotaiką, bet ir padės palaikyti bendrą sveikatą.";
}
else if (age3 > 50 || KMI >= 30 || !noSmoke) {
    riskLevel = "Didelė rizika.";
    advice = " Stenkitės būti fiziškai aktyvi bent 30 minučių per dieną. Tai gali būti ėjimas, bėgimas, plaukimas ar sporto salės treniruotės. Vos po kelių dienų nerūkymo Jūsų kvėpavimas ir kraujotaka pagerėja, o per kelis mėnesius plaučių funkcija žymiai sustiprėja. Ilgalaikėje perspektyvoje sumažini širdies ligų ir vėžio riziką.";
}
else if (age3 > 50 && KMI >= 30 && !noSmoke) {
    riskLevel = "Labai didelė rizika.";
    advice = "Stenkitės būti fiziškai aktyvi bent 30 minučių per dieną. Tai gali būti ėjimas, bėgimas, plaukimas ar sporto salės treniruotės. Vos po kelių dienų nerūkymo Jūsų kvėpavimas ir kraujotaka pagerėja, o per kelis mėnesius plaučių funkcija žymiai sustiprėja. Ilgalaikėje perspektyvoje sumažini širdies ligų ir vėžio riziką.";
}
else (age3 <= 0 && KMI <= 0); {
    riskLevel = "Undefined";
    advice = "Please provide valid inputs.";
}

    console.log ("Amžius:", age);
    console.log ("KMI:", KMI);
    console.log ("Rūkymas:", noSmoke);
    console.log ("Rizika:", riskLevel);
    console.log ("Patarimas:", advice);




