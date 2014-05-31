function recSideFromArea() {
    var area = document.getElementById("area").value,
        S = parseFloat(area),
        sideA = document.getElementById("str-a").value,
        a = parseFloat(sideA),
        sideB = document.getElementById("sideFromArea"),
        b;

    if (isNaN(S) || isNaN(a)) {
        sideB.innerHTML = ("<strong class='text-danger'>Страната и лицето трябва да са число!</strong>");
    }
    else {
        if (S < 0 && a < 0) {
            sideB.innerHTML = ("<strong class='text-danger'>Страната и лицето трябва да са положително число</strong>");
        }
        else {
            if(S > 0) {
                b = S / a;
                sideB.innerHTML = (
                    "Изразяваме страната 'b' от формулата за лице на правоъгълник S = a*b →" +
                    "b = S/a →</br>" +
                    "b = S/a = " + S + "/" + a + " = " + b);
            }
        }
    }
}