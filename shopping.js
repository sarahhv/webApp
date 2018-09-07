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
