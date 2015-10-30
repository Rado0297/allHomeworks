function sideFromPerSq() {
    var perimeter = document.getElementById("perimeter").value,
        P = parseInt(perimeter),
        side = document.getElementById("sideFromPerSq"),
        a;

    if (isNaN(P)) {
        side.innerHTML = ("<strong class='text-danger'>Периметъра трябва да е число !</strong>");
    }
    else {
        if (P > 0) {
            a = P/4;
            side.innerHTML = (
                "Изразяваме страната от формулата за периметър на квадрат → a = P/4 </br>" +
                "Заместваме въведените стойности в израза за страната → </br>" +
                "a= P/4 = " + P + "/4 = " + a);
        }
        else {
            side.innerHTML = ("<strong class='text-danger'>Периметъра трябва да е положително число !</strong>");
        }
    }
}