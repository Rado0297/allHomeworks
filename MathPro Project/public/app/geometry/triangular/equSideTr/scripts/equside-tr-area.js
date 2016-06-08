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
                "за лице на равностранен  триъгълник S=(a*h)/2 </br>" +
                "Лицето на равностранния триъгълник е: </br>" +
                "S=(a*h)/2" + " = " + "(" + side + "*" + height + ")/2 = " + side * height + "/2" + " = " + s);
        }
        else {
            area.innerHTML = ("<strong class='text-danger'>Височината и страната трябва да са положителни числа !</strong>");
        }
    }
    //write function which find area of equ-side trinagular with formula S=(a^2*sqrt(3))/2
}