var trash = document.getElementById("trash");
var junks = document.getElementsByClassName("junk");
var length = junks.length;
for (var i = 0; i < length; i++) {
    junks[i].style.position = "absolute";
    junks[i].style.top = "" + ((50 + Math.random() * 200) | 0) + "px";
    junks[i].style.left = "" + ((200 + Math.random() * 400) | 0) + "px";
}

function openTrash(ev) {
    trash.src = "images/open2.png";
    ev.preventDefault();

}

function dragFinish() {
    trash.src = "images/closed2.png";
}

function drag(ev) {
    ev.dataTransfer.setData("dragged-id", ev.target.id);
}

function drop(ev) {
    trash.src = "images/closed2.png";
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dragged-id");
    document.body.removeChild(document.getElementById(data));
}