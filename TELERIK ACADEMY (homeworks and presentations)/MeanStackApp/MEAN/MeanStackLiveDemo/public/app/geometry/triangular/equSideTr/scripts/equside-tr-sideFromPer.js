function sideFromPerEquSideTr() {
    var perimeter = document.getElementById("perimeter").value,
        P = parseFloat(perimeter),
        strA = document.getElementById("sideFromPerEquSideTr"),
        a;

    if (isNaN(P)) {
        strA.innerHTML = ("<strong class='text-danger'>Периметъра трябва да е число!</strong>");
    }
    else {
        if (P <= 0) {
            strA.innerHTML = ("<strong class='text-danger'>Периметъра трябва да е положително число</strong>");
        }
        else {
            a = (P/3);
            strA.innerHTML = (
                "Изразяваме страната от формулата за периметър на равностранен триъгълник P = 3*a →" +
                "a = P/3 →</br>" +
                "a = " + P + "/3 = " + a);
        }
    }
}