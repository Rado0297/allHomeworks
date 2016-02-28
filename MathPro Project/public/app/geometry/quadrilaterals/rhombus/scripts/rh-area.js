function areaRhombus() {
    var diagonalD1 = document.getElementById("diagonalD1").value,
        d1 = parseFloat(diagonalD1),
        diagonalD2 = document.getElementById("diagonalD2").value,
        d2 = parseFloat(diagonalD2),
        area = document.getElementById("areaRhombus"),
        S;

    if (isNaN(d1) || isNaN(d2)) {
        area.innerHTML = ("<strong class='text-danger'>Диагоналите трябва да са числа !</strong>");
    }
    else {
        if (d1 > 0 && d2 > 0) {
            S = (d1*d2)/2;
            area.innerHTML = (
                "Заместваме въведените стойности във формулата за лице на ромб S = (d1*d2)/2 → </br>" +
                "S = (d1*d2)/2 = (" + d1 + "*" + d2 + ")/2 = " + d1*d2 + "/2 = " + S);
        }
        else {
            area.innerHTML = ("<strong class='text-danger'>Диагоналите трябва да са положително числа !</strong>");
        }
    }
}