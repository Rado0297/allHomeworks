function recPer() {
    var sideA = document.getElementById("str-a").value,
        a = parseInt(sideA),
        sideB = document.getElementById("str-b").value,
        b = parseInt(sideB),
        perimeter = document.getElementById("perimeter"),
        p;

    if (isNaN(a) || isNaN(b)) {
        perimeter.innerHTML = ("<strong class='text-danger'>Страните трябва да са числа !</strong>");
    }
    else {
        if (a > 0 && b > 0) {
            p = (2*a + 2*b);
            perimeter.innerHTML = (
                "Заместваме въведените стойности във формулата</br>" +
                "за периметър на правоъгълник P = 2*a + 2*b →</br>" +
                "Периметъра е: </br>" +
                "P = 2*a + 2*b = 2*" + a + "+2*" + b + " = " + 2*a + "+" + 2*b + " = " + p);
        }
        else {
            perimeter.innerHTML = ("<strong class='text-danger'>Страните трябва да са положителни числа !</strong>");
        }
    }
}