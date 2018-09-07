"use strict";

function sendDataToServer(objArray) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "saveJsonFridge.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("jsonData=" + JSON.stringify(objArray, null, '\t'));
    alert("Food List was saved!");
}

function removeFridgeFromList(itemToRemove) {
    objArray.splice(itemToRemove, 1);
    displayJSONData(objArray);
}

function displayJSONData(fridgeList) {
    var content = '<section class="fridge">';
    for (var i = 0; i < fridgeList.length; i++) {
        content += '<p>';
        content += '<span class="amountFridge">' + fridgeList[i].getAmount() + '</span>';
        content += '<span class="titleFridge">' + fridgeList[i].getTitle() + '</span>';
        content += '<time datetime"2018-08-23">' + fridgeList[i].getDate() + '</time>';

        content += '<button type="button" class="s-list" onclick="goModal()"><i class="fa fa-list-ul"></i></button>';

        content += '<button type="button" class="no" onclick="removeFridgeFromList(' + i + ')"><i class="fa fa-close"></i></button>';
        content += '</p>'
    }
    content += '</section>';

    document.getElementById("dataArea").innerHTML = content;
    document.getElementById("form").reset();
    document.getElementById("formEt").reset();
    document.getElementById("formTo").reset();
}

function goModal() {
    document.getElementById("modal").style.display = "block";
}

function initialize() {

    document.getElementById("add").addEventListener("click", function () {
        objArray[objArray.length] = new fridgeObj(document.getElementById("amount").value, document.getElementById("title").value, document.getElementById("date").value);
        displayJSONData(objArray);
        sendDataToServer(objArray);
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

"use strict";

function sendDataToServerS(objArrayShopping) {
    var xhttpS = new XMLHttpRequest();
    xhttpS.open("POST", "saveJsonShopping.php", true);
    xhttpS.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttpS.send("jsonSData=" + JSON.stringify(objArrayShopping, null, '\t'));
    alert("Your shopping list is updated!");
}

function removeShoppingFromList(itemToRemove) {
    objArrayShopping.splice(itemToRemove, 1);
    displayJSONSData(objArrayShopping);
}

function displayJSONSData(shoppingList) {
    var content = '<section class="shopping">';
    for (var i = 0; i < shoppingList.length; i++) {
        content += '<p>';
        content += '<input type="checkbox" class="checkBox" id="checkBox" onclick="sendToFridge()">';
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

function sendToFridge() {
    document.getElementById("modalSendToFridge").style.display = "block";
}


function initializeS() {

    document.getElementById("addS").addEventListener("click", function () {
        objArrayShopping[objArrayShopping.length] = new shoppingObj(document.getElementById("sAmount").value, document.getElementById("sTitle").value);
        displayJSONSData(objArrayShopping);
        sendDataToServerS(objArrayShopping);
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
