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

    for (var btn of btnBack) {
        btn.addEventListener('click', goBack);
    }

    /* Shopping til Add og omvendt */
    var btnGoShopping = document.getElementById("go-shopping");
    var btnGoFridge = document.getElementById("go-fridge");
 
    btnGoShopping.addEventListener('click', () => {
        document.getElementById("your-fridge").style.display = "none";
        document.getElementById("shopping-list").style.display = "grid";
    });
    btnGoFridge.addEventListener('click', () => {
        document.getElementById("shopping-list").style.display = "none";
        document.getElementById("your-fridge").style.display = "grid";
    });
    /* All event listener source - baseline for our code:
    https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener */

    //An array of elements
    var btnModal = document.getElementsByClassName("s-list");

    function goModal() {
        document.getElementById("modal").style.display = "block";
    }

    // var btn only exists in this loop as a pointer, 
    for (var btn of btnModal) {
        btn.addEventListener('click', goModal);
    } 

    // Same line just in its original form  
      /*   for (var i = 0; i < btnModal.length; i++) {
        btnModal[i].addEventListener(ajdaiowdja);
    } */

    // Get the <span> element that closes the modal
    var btnClose = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    btnClose.addEventListener('click', () => {
        document.getElementById("modal").style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', ()=> {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })

    /* Source for the modal box inspiration: 
    https://www.w3schools.com/howto/howto_css_modals.asp */