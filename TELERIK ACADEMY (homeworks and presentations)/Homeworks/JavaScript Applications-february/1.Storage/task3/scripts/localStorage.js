function loadPairs() {
    if (!localStorage.length || localStorage.length == 0) {
        document.getElementById("pairs-container").innerHTML = "{ key:empty, value=empty}";
        return;
    }
    var resultHTML = "<ul>";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        resultHTML +=
        '<li>' +
        '{<strong>key</strong>: "' + key + '", <br/><strong>value</strong>: "' + localStorage.getItem(key) + '"}' +
        '</li>';
    }
    resultHTML += "</ul>";
    document.getElementById("pairs-container").innerHTML = resultHTML;
}

function onSaveButtonClick() {
    var key = document.getElementById("tb-key").value;
    var value = document.getElementById("value-text").value;
    localStorage.setItem(key, value);
    loadPairs();
}

function onLoadButtonClick() {
    var key = document.getElementById("tb-key").value;
    document.getElementById("value-text").value = localStorage.getItem(key);
}

function onRemoveButtonClick() {
    var key = document.getElementById("tb-key").value;
    localStorage.removeItem(key);
    loadPairs();
}

function onClearStorageButtonClick() {
    localStorage.clear();
    loadPairs();
}