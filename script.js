/* Frontpage buttons */
var a = document.getElementById("see-fridge");
var b = document.getElementById("see-items");
var c = document.getElementById("see-shopping");

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

a.addEventListener('click', seeFridge, true);
b.addEventListener('click', seeItems, true);
c.addEventListener('click', seeShopping, true);

/* Back buttons  */
var tilbage = document.getElementById("back");
var tilbageEt = document.getElementById("backEt");
var tilbageTo = document.getElementById("backTo");

function goBack() {
    document.getElementById("your-fridge").style.display = "none";
    document.getElementById("home").style.display = "grid";
}

function goBackEt() {
    document.getElementById("add-food").style.display = "none";
    document.getElementById("home").style.display = "grid";
}

function goBackTo() {
    document.getElementById("shopping-list").style.display = "none";
    document.getElementById("home").style.display = "grid";
}

tilbage.addEventListener('click', goBack, true);
tilbageEt.addEventListener('click', goBackEt, true);
tilbageTo.addEventListener('click', goBackTo, true);

/* Shopping til Add og omvendt */
var d = document.getElementById("go-shopping");
var e = document.getElementById("go-fridge");

function goShopping (){
    document.getElementById("your-fridge").style.display = "none";
    document.getElementById("shopping-list").style.display = "grid";
}

function goFridge (){
    document.getElementById("shopping-list").style.display = "none";
    document.getElementById("your-fridge").style.display = "grid";
    
}

d.addEventListener('click', goShopping, true);
e.addEventListener('click', goFridge, true);