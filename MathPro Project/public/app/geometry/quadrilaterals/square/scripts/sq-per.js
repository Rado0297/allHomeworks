function perSquare() {
    var sideA = document.getElementById("str-a").value,
        a = parseInt(sideA),
        perimeter = document.getElementById("perSquare"),
        P;

    if (isNaN(a)) {
        perimeter.innerHTML = ("<strong class='text-danger'>Страната трябва да е число !</strong>");
    }
    else {
        if (a > 0) {
            P = 4*a;
            perimeter.innerHTML = (
                "Заместваме въведените стойности във формулата за периметър на квадрат P = 4*a → </br>" +
                "P = 4*a = 4*" + a + " = " + P);
        }
        else {
            perimeter.innerHTML = ("<strong class='text-danger'>Страната трябва да е положително число !</strong>");
        }
    }
}