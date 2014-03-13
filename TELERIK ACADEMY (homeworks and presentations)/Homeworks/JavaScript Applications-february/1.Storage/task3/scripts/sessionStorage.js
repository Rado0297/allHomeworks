var loadsContainer;
window.onload = function onWindowLoaded() {
    loadsContainer = document.getElementById("loads-container");

    if (!sessionStorage.loadCounter) {
        sessionStorage.setItem("loadCounter", 0);
    }

    var loadCounter = sessionStorage.loadCounter;
    sessionStorage.setItem('loadCounter', parseInt(loadCounter) + 1);
    loadsContainer.innerHTML = sessionStorage.loadCounter;
}