function areaRanTr(){
    var a = document.getElementById("side").value,
        side = parseFloat(a),
        h = document.getElementById("height").value,
        height = parseFloat(h),
        area = document.getElementById("areaRanTr"),
        s;

    if (isNaN(side) || isNaN(height)) {
        area.innerHTML = ("Височината и страната трябва да са числа !");
    }
    else {
        if (side>0 && height>0) {
            s = ((side * height) / 2);
            area.innerHTML = (
                "Заместваме въведените стойности във формулата</br>" +
                "за лице на триъгълник S=(a*h)/2 </br>" +
                "Лице на триъгълника </br>" +
                "S=(a*h)/2" + " = " + "(" + side + "*" + height + ")/2 = " + side * height + "/2" + " = " + s);
            console.log(side+height);
        }
        else {
            area.innerHTML = ("Височината и страната трябва да са положителни числа !");
        }
    }
}