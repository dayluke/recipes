function anim(btn, crd) {
    const card = document.getElementById(crd);
    card.classList.toggle("transform")
    if (btn.innerHTML == "Open") {
        btn.innerHTML = "Close";
    } else {
        btn.innerHTML = "Open";
    }
}

function randomFood() {
    const chosenFood = document.getElementById("chosenFood");
    const selectMenu = document.getElementById("select_menu");
    var value = selectMenu.options[selectMenu.selectedIndex].value;
    
    var chosenMenu = [];
    switch (value) {
        case "breakfast":
            var breakfast = document.getElementsByClassName("breakfast");
            chosenMenu = getInnerText(breakfast);
            break;
        case "lunch":
            var lunch = document.getElementsByClassName("lunch");
            chosenMenu = getInnerText(lunch);
            break;
        case "dinner":
            var dinner = document.getElementsByClassName("dinner");
            chosenMenu = getInnerText(dinner);
            break;
        case "snack":
            var snack = document.getElementsByClassName("snack");
            chosenMenu = getInnerText(snack);
            break;
    }

    var food = chosenMenu[Math.floor(Math.random() * chosenMenu.length)];
    if (food == null) {
        console.error("ERROR: Food undefined.");
    } else {
        chosenFood.innerText = food;
    }
}

function getInnerText(menu) {
    var menuText = [];
    for (var i = 0; i < menu.length; i++)
    {
        menuText.push(menu[i].innerText);
    }
    return menuText;
}