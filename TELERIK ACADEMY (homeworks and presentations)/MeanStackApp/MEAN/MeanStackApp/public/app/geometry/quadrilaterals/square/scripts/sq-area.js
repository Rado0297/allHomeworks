function areaSquare() {
    var sideA = document.getElementById("str-a").value,
        a = parseFloat(sideA),
        area = document.getElementById("areaSquare"),
        S;

    if (isNaN(a)) {
        area.innerHTML = ("<strong class='text-danger'>Страната трябва да е число !</strong>");
    }
    else {
        if (a > 0) {
            S = Math.pow(a, 2);
            area.innerHTML = (
                "Заместваме въведените стойности във формулата за лице на квадрат S = a² → </br>" +
                "S = a² = " + a + "² = " + S);
        }
        else {
            area.innerHTML = ("<strong class='text-danger'>Страната трябва да е положително число !</strong>");
        }
    }
}