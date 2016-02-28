function recSideFromPer() {
    var sideA = document.getElementById("str-a").value,
        a = parseInt(sideA),
        perimeter = document.getElementById("perimeter").value,
        P = parseInt(perimeter),
        side = document.getElementById("sideFromPer"),
        b;

    if (isNaN(a) || isNaN(P)) {
        side.innerHTML = ("<strong class='text-danger'>Страната и периметъра трябва да са числа !</strong>");
    }
    else {
        if(a > 0 && P > 0) {
            if (P > 2*a) {
                b = (P - 2 * a) / 2;
                side.innerHTML = (
                    "Първо изразяваме страната 'b' от формулата за периметър на правоъгълник→</br>" + "b = (P - 2*b)/2</br>" +
                    "Заместваме въведените стойности в израза за 'b' →</br>" +
                    "b = (P - 2*b)/2 = (" + P + " - 2*" + a + ")/2 = " + b);
            }
            else {
                side.innerHTML = ("<strong class='text-danger'>Периметъра трябва да е по-голям от страната умножена по 2 (P > 2*a)!</strong>");
            }
        }
        else {
            side.innerHTML = ("<strong class='text-danger'>Страната и периметъра трябва да са положителни числа !</strong>");
        }
    }
}