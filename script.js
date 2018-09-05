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

    /* Back buttons - top left */
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

    /* Shopping to Add and Add to shopping function */
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

    /* Modal-box coding for the list button on your-fridge */
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
        btnModal[i].addEventListener('click', goModal);
    } */

    // Get the class="close" element that closes the modal
    var btnClose = document.getElementsByClassName("close")[0];

    // When the user clicks on class="close", close the modal
    btnClose.addEventListener('click', () => {
        document.getElementById("modal").style.display = "none";
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', ()=> {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
    /* Source for the modal-box inspiration: 
    https://www.w3schools.com/howto/howto_css_modals.asp */


    /* Modal-box for plus sign in footer */
    var btnFPlus = document.getElementsByClassName("Fplus");
    var btnSPlus = document.getElementsByClassName("Splus");

    function goFPlus() {
        document.getElementById("modalFridge").style.display = "block";
    }

    function goSPlus () {
     document.getElementById('modalShopping').style.display = "block";
    }

    for (var btn of btnFPlus) {
        btn.addEventListener('click', goFPlus);
    } 

    for (var btn of btnSPlus) {
        btn.addEventListener('click', goSPlus);
    } 

    var btnLuk = document.getElementsByClassName("luk")[0];

        // When the user clicks on class="close", close the modal
        btnLuk.addEventListener('click', () => {
            document.getElementById("modalFridge").style.display = "none";
        });

    var btnLukEt = document.getElementsByClassName("lukEt")[0];

    // When the user clicks on class="close", close the modal
    btnLukEt.addEventListener('click', () => {
        document.getElementById("modalShopping").style.display = "none";
    });
    
        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener('click', ()=> {
            if (event.target == modalFridge) {
                modalFridge.style.display = "none";
            }
        });

        window.addEventListener('click', ()=> {
            if (event.target == modalShopping) {
                modalShopping.style.display = "none";
            }
        });

/* MODAL BOX FOR INTRODUKTION*/
    //An array of elements
    var btnModal = document.getElementsByClassName("introLuk");

    function closeIntro() {
        document.getElementById("modalIntro").style.display = "none";
    }
for (var btn of btnModal) {
        btn.addEventListener('click', closeIntro);
    } 

