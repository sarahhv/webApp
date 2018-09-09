           /* THE MAIN AND NORMAL .JS - THE FIRST .JS WE DID */
/* FRONTPAGE-BUTTONS */
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

/* BACK BUTTONS - TOP LEFT */
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

/* SHOPPING TO ADD AND ADD TO SHOPPING FUNCTION TOP RIGHT */
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


// Get the class="close" element that closes the modal
var btnClose = document.getElementsByClassName("close")[0];

// When the user clicks on class="close", close the modal
btnClose.addEventListener('click', () => {
    document.getElementById("modal").style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', () => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})
/* Source for the modal-box inspiration: 
https://www.w3schools.com/howto/howto_css_modals.asp */


/* MODAL-BOX FOR PLUS SIGN IN FOOTER */

// The plus on the "your fridge" site
var btnFPlus = document.getElementsByClassName("Fplus");
// The plus on the "shopping list" site
var btnSPlus = document.getElementsByClassName("Splus");

function goFPlus() {
    document.getElementById("modalFridge").style.display = "block";
}

function goSPlus() {
    document.getElementById('modalShopping').style.display = "block";
}

for (var btn of btnFPlus) {
    btn.addEventListener('click', goFPlus);
}

for (var btn of btnSPlus) {
    btn.addEventListener('click', goSPlus);
}

// Close botton on the your fridge plus modal-box
var btnLuk = document.getElementsByClassName("luk")[0];
// Close botton on the your shopping list plus modal-box
var btnLukEt = document.getElementsByClassName("lukEt")[0];
// Close botton on the s-list modal-box
var btncloseShopping = document.getElementsByClassName("closeModalShopping")[0];


// When the user clicks on class="close", close the modal
btnLuk.addEventListener('click', () => {
    document.getElementById("modalFridge").style.display = "none";
});

btnLukEt.addEventListener('click', () => {
    document.getElementById("modalShopping").style.display = "none";
});

btncloseShopping.addEventListener('click', () =>{
    document.getElementById("modalSendToFridge").style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', () => {
    if (event.target == modalFridge) {
        modalFridge.style.display = "none";
    }
});

window.addEventListener('click', () => {
    if (event.target == modalShopping) {
        modalShopping.style.display = "none";
    }
});

window.addEventListener('click', () => {
    if (event.target == modalSendToFridge) {
        modalSendToFridge.style.display = "none";
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

// --------- FRIDGE.JS HERE IS THE FRIDGE REGARDING FRIDGE.JS AND SAVEJSONFRIDGE.PHP ----------------//
"use strict";

// Sending the newly comitted data to the json file 
function sendDataToServer(objArray) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "saveJsonFridge.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("jsonData=" + JSON.stringify(objArray, null, '\t'));
    alert("Food List was updated!");
}

function removeDataFromServer(objArray) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "saveJsonFridge.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("jsonData=" + JSON.stringify(objArray, null, '\t'));
}

function removeFridgeFromList(itemToRemove) {
    objArray.splice(itemToRemove, 1);
    removeDataFromServer(objArray);
    displayJSONData(objArray);
}

function displayJSONData(fridgeList) {
    var content = '<section class="fridge">';
    for (var i = 0; i < fridgeList.length; i++) {
        let ftitle = fridgeList[i].getTitle();
        content += '<p>';
        content += '<span class="amountFridge">' + fridgeList[i].getAmount() + '</span>';
        content += '<span class="titleFridge">' + fridgeList[i].getTitle() + '</span>';
        content += '<time datetime"2018-08-23">' + fridgeList[i].getDate() + '</time>';

        content += `<button type="button" class="s-list" onclick="goModal('${ftitle}')"><i class="fa fa-list-ul"></i></button>`;

        content += '<button type="button" class="no" onclick="removeFridgeFromList(' + i + ')"><i class="fa fa-close"></i></button>';
        content += '</p>'
    }
    content += '</section>';

    document.getElementById("dataArea").innerHTML = content;
    document.getElementById("form").reset();
    document.getElementById("formEt").reset();
    document.getElementById("formTo").reset();
}

function goModal(title) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("titleFood").innerHTML = title;

    document.getElementById("addEt").addEventListener('click', () => {
        let amount = document.getElementById("amountAdd").value;

        // This line is needed - doesn't need alert, but an if there is nothing. Because we need a defined - or else there will be an undefined in or data list 
        if (!amount) {
            alert("Please enter an amount")
        } else {
            let myShoppingObject = new shoppingObj(amount, title); 
            objArrayShopping.push(myShoppingObject);
            sendDataToServerS(objArrayShopping);
            displayJSONSData(objArrayShopping);
            document.getElementById("amountAddForm").reset();
        }
    });
}

function initialize() {

    document.getElementById("add").addEventListener("click", function () {
        objArray[objArray.length] = new fridgeObj(document.getElementById("amount").value, document.getElementById("title").value, document.getElementById("date").value);
        sendDataToServer(objArray);
        displayJSONData(objArray);
    });

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var responseObject = JSON.parse(xhr.responseText);
            for (var i = 0; i < responseObject.fridge.length; i++) 
            {
                objArray[i] = new fridgeObj(responseObject.fridge[i].amount, responseObject.fridge[i].title, responseObject.fridge[i].date);
            }
            displayJSONData(objArray);
        }
    };

    xhr.open('GET', 'fridge.json', true);
    xhr.send(null);
}


function fridgeObj(amount, title, date) {
    this.amount = amount;
    this.title = title;
    this.date = date;

    this.getAmount = function () {
        return this.amount;
    };

    this.getTitle = function () {
        return this.title;
    };

    this.getDate = function () {
        return this.date;
    };
}

// --------- Main Start ----------------//

var objArray = new Array;
window.addEventListener('load', initialize);

// --------- Hovedprogram Slut ----------------//


// --------- SHOPPING.JS HERE IS THE SHOPPING REGARDING SHOPPING.JS AND SAVEJSONSHOPPING.JS ----------------//
"use strict";

function sendDataToServerS(objArrayShopping) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "saveJsonShopping.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("jsonSData=" + JSON.stringify(objArrayShopping, null, '\t'));
    alert("Your shopping list is updated!");
}

function removeDataFromServerS(objArrayShopping) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "saveJsonShopping.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("jsonSData=" + JSON.stringify(objArrayShopping, null, '\t'));
}

function removeShoppingFromList(itemToRemove) {
    objArrayShopping.splice(itemToRemove, 1);
    removeDataFromServerS(objArrayShopping);
    displayJSONSData(objArrayShopping);
    
}

function displayJSONSData(shoppingList) {
    var content = '<section class="shopping">';
    for (var i = 0; i < shoppingList.length; i++) {
        let slTitle = shoppingList[i].getTitle();
        let slAmount = shoppingList[i].getAmount();
        content += '<p>';
        content += `<input type="checkbox" class="checkBox" id="checkBox" onclick="sendToFridge('${slTitle}', '${slAmount}')">`;
        content += '<span class="amountS">' + shoppingList[i].getAmount() + '</span>';
        content += '<span class="titleS">' + shoppingList[i].getTitle() + '</span>';
        content += '<button type="button" class="end" onclick="removeShoppingFromList(' + i + ')"><i class="fa fa-close"></i></button>';
        content += '</p>'
    }
    content += '</section>';

    document.getElementById("shoppingArea").innerHTML = content;
    document.getElementById("sForm").reset();
    document.getElementById("sFormEt").reset();
}

function sendToFridge(title, amount) {
    document.getElementById("modalSendToFridge").style.display = "block";
    document.getElementById("titleSList").innerHTML = title;
    document.getElementById("amountSList").value = amount; 

    document.getElementById("sendFridge").addEventListener('click', () => {
        let date = document.getElementById("dateSend");
        if (!date.value) {
            alert("Please enter a date");
        } else {
            let myFridgeObject = new fridgeObj(amount, title, date.value);
            objArray.push(myFridgeObject);
            sendDataToServer(objArray);
            displayJSONData(objArray);
        }
    });
}


function initializeS() {

    document.getElementById("addS").addEventListener("click", function () {
        objArrayShopping[objArrayShopping.length] = new shoppingObj(document.getElementById("sAmount").value, document.getElementById("sTitle").value);
        sendDataToServerS(objArrayShopping);
        displayJSONSData(objArrayShopping);
    });

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var responseObject = JSON.parse(xhr.responseText);
            for (var i = 0; i < responseObject.shopping.length; i++) {
                objArrayShopping[i] = new shoppingObj(responseObject.shopping[i].amount, responseObject.shopping[i].title);
            }
            displayJSONSData(objArrayShopping);
        }
    };

    xhr.open('GET', 'shopping.json', true);
    xhr.send(null);
}

function shoppingObj(amount, title) {
    this.amount = amount;
    this.title = title;

    this.getAmount = function () {
        return this.amount;
    };

    this.getTitle = function () {
        return this.title;
    };
}

// --------- Main Start ----------------//

var objArrayShopping = new Array;
window.addEventListener('load', initializeS);

// --------- Hovedprogram Slut ----------------//