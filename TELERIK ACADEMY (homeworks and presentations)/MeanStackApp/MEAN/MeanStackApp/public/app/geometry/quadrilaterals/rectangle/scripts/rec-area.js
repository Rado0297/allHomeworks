function recArea() {
    var sideA = document.getElementById("str-a").value,
        a = parseInt(sideA),
        sideB = document.getElementById("str-b").value,
        b = parseInt(sideB),
        area = document.getElementById("area"),
        S;

    if (isNaN(a) || isNaN(b)) {
        area.innerHTML = ("<strong class='text-danger'>Страните трябва да са числа !</strong>");
    }
    else {
        if (a > 0 && b > 0) {
            S = a*b;
            area.innerHTML = (
                "Заместваме въведените стойности във формулата</br>" +
                "за лице на правоъгълник S = a*b →</br>" +
                "Лицето е: </br>" +
                "S = a*b =" + a + "*" + b + " = " + S);
        }
        else {
            area.innerHTML = ("<strong class='text-danger'>Страните трябва да са положителни числа !</strong>");
        }
    }
}