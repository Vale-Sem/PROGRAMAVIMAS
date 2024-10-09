const actionButtonBbutton = document.getElementById ("actionButton");
actionButton.addEventListener ("click", function(){
    const text = document.getElementById ("text");
    const parentDiv = document.getElementById ("parentDiv");
    const childText = document.getElementById ("childText");
    const box = document.getElementById ("box");
    const status = document.getElementById ("status");

    text.innerText = "Tekstas pasikeitė!";
    childText.innerHTML = "<span>New Child</span>";
    box.style.backgroundColor = "green";
    status

})