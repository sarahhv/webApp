function sendDataToServer(shoppingArray) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "saveJson.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("jsonData=" + JSON.stringify(shoppingArray, null, '\t'));
    alert("Shopping List was saved!");
}

function removeShoppingFromList(itemToRemove) {
    shoppingArray.splice(itemToRemove, 1);
    displayJSONData(shoppingArray);
}

function displayJSONData(shoppingList) {
    var content = '<section class="shopping">';
    for (var i = 0; i < shoppingList.length; i++) {
        content += '<p>';
        content += '<span class="first">' + shoppingList[i].getAmount() + '</span>';
        content += '<span class="second">' + shoppingList[i].getTitle() + '</span>';
        content += '<button type="button" class="no" onclick="removeShoppingFromList(' + i + ')"><i class="fa fa-close"></i></button>';
        content += '</p>'
    }
    content += '</section>';

    document.getElementById("sDataArea").innerHTML = content;
    document.getElementById("form").reset();
    document.getElementById("formEt").reset();
}

function initializeEt() {

    document.getElementById("addTo").addEventListener("click", function () {
        shoppingArray[shoppingArray.length] = new shoppingObj(document.getElementById("amount").value, document.getElementById("title").value);
        displayJSONData(shoppingArray);
        sendDataToServer(shoppingArray);
    });

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            var responseObject = JSON.parse(xhr.responseText);
            for (var i = 0; i < responseObject.shopping.length; i++) {
                shoppingArray[i] = new shoppingObj(responseObject.shopping[i].amount, responseObject.shopping[i].title);
            }
            displayJSONData(shoppingArray);
        }
    };

    xhr.open('GET', 'webApp.json', true);
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

var shoppingArray = new Array;
window.addEventListener('load', initializeEt);

// --------- Hovedprogram Slut ----------------//
