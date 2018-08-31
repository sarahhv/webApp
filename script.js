/* Frontpage buttons */
var btnSeeFridge = document.getElementById("see-fridge");
var btnSeeItems = document.getElementById("see-items");
var btnSeeShopping = document.getElementById("see-shopping");

function seeFridge() {
    document.getElementById("your-fridge").style.display = "grid";
    document.getElementById("home").style.display = "none";
}

function seeItems() {
    document.getElementById("add-food").style.display = "grid";
    document.getElementById("home").style.display = "none";
}

function seeShopping() {
    document.getElementById("shopping-list").style.display = "grid";
    document.getElementById("home").style.display = "none";
}

btnSeeFridge.addEventListener('click', seeFridge);
btnSeeItems.addEventListener('click', seeItems);
btnSeeShopping.addEventListener('click', seeShopping);

/* Back buttons */
var btnBack = document.getElementsByClassName("back");

function goBack() {
    document.getElementById("shopping-list").style.display = "none";
    document.getElementById("add-food").style.display = "none";
    document.getElementById("your-fridge").style.display = "none";
    document.getElementById("home").style.display = "grid";
}

btnBack[0].addEventListener('click', goBack);
btnBack[1].addEventListener('click', goBack);
btnBack[2].addEventListener('click', goBack);

/* Shopping til Add og omvendt */
var btnGoShopping = document.getElementById("go-shopping");
var btnGoFridge = document.getElementById("go-fridge");

// Kortere version af funktionerne 
btnGoShopping.addEventListener('click', () => {
    document.getElementById("your-fridge").style.display = "none";
    document.getElementById("shopping-list").style.display = "grid";
});
btnGoFridge.addEventListener('click', () => {
    document.getElementById("shopping-list").style.display = "none";
    document.getElementById("your-fridge").style.display = "grid";
});
