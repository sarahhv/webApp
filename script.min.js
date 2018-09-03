    /* Frontpage buttons */
var btnSeeFridge = document.getElementById("see-fridge");
var btnSeeItems = document.getElementById("see-items");
var btnSeeShopping = document.getElementById("see-shopping");

btnSeeFridge.addEventListener('click', () => {
    document.getElementById("your-fridge").style.display = "grid";
    document.getElementById("home").style.display = "none";
});
btnSeeItems.addEventListener('click', () => {
    document.getElementById("add-food").style.display = "grid";
    document.getElementById("home").style.display = "none";
});
btnSeeShopping.addEventListener('click', () => {
    document.getElementById("shopping-list").style.display = "grid";
    document.getElementById("home").style.display = "none";
});

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


/* Modal box */
var modal = document.getElementById('modal');
var btnModal = document.getElementById("btnModal");

// Get the <span> element that closes the modal
var btnClose = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnModal.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnClose.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* Source for the modal box: 
https://www.w3schools.com/howto/howto_css_modals.asp */