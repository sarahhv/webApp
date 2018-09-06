"use strict";

function sendDataToServer(objArray) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "saveJson.php", true);
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
        content += '<span class="first">' + fridgeList[i].getAmount() + '</span>';
        content += '<span class="second">' + fridgeList[i].getTitle() + '</span>';
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
            for (var i = 0; i < responseObject.fridge.length; i++) {
                objArray[i] = new fridgeObj(responseObject.fridge[i].amount, responseObject.fridge[i].title, responseObject.fridge[i].date);
            }
            displayJSONData(objArray);
        }
    };

    xhr.open('GET', 'webApp.json', true);
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
