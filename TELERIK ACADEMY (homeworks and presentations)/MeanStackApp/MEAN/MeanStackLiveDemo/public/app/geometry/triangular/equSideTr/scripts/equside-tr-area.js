function areaEquSideTr() {
    var a = document.getElementById("side").value,
        side = parseFloat(a),
        h = document.getElementById("height").value,
        height = parseFloat(h),
        area = document.getElementById("areaEquSideTr"),
        s;

    if (isNaN(side) || isNaN(height)) {
        area.innerHTML = ("<strong class='text-danger'>Височината и страната трябва да са числа !</strong>");
    }
    else {
        if (side > 0 && height > 0) {
            s = ((side * height) / 2);
            area.innerHTML = (
                "Заместваме въведените стойности във формулата</br>" +
                "за лице на триъгълник S=(a*h)/2 </br>" +
                "Лице на триъгълника </br>" +
                "S=(a*h)/2" + " = " + "(" + side + "*" + height + ")/2 = " + side * height + "/2" + " = " + s);
        }
        else {
            area.innerHTML = ("<strong class='text-danger'>Височината и страната трябва да са положителни числа !</strong>");
        }
    }
}