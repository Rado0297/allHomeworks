function sideFromPerRh() {
    var perimeter = document.getElementById("perimeter").value,
        P = parseFloat(perimeter),
        side = document.getElementById("sideFromPerRh"),
        a;

    if (isNaN(P)) {
        side.innerHTML = ("<strong class='text-danger'>Периметъра трябва да е число !</strong>");
    }
    else {
        if (P > 0) {
            a = P/4;
            side.innerHTML = (
                "Изразяваме страната от формулата за периметър на ромб P = 4*a → a = P/4</br>" +
                "Заместваме въведените стойности в израза за страната → </br>" +
                "a = P/4 = " + P + "/4 = " + a);
        }
        else {
            side.innerHTML = ("<strong class='text-danger'>Периметъра трябва да е положително число !</strong>");
        }
    }
}