function sideFromPerRandomTr() {
    var strA = document.getElementById("str-a").value,
        a = parseFloat(strA),
        strB = document.getElementById("str-b").value,
        b = parseFloat(strB),
        perimeter = document.getElementById("perimeter").value,
        P = parseFloat(perimeter),
        strC = document.getElementById("sideRandomTr"),
        c;

    if (isNaN(a) || isNaN(b) || isNaN(P)) {
        strC.innerHTML = ("<strong class='text-danger'>Страните трябва да са числа !</strong>");
    }
    else {
        var sbor = (a+b);
        if(sbor < P) {
            if (a <= 0 || b <= 0 || c <= 0) {
                strC.innerHTML = ("<strong class='text-danger'>Страните трябва да са положителни числа !</strong>");
            }
            else {
                c = (P - (a + b));
                strC.innerHTML = (
                    "Първо изразяваме страната 'c' от формулата за периметър на произволен триъгълник→</br>" + "c = P - (a + b)</br>" +
                    "Заместваме въведените стойности в израза за 'c' →</br>" +
                    "c = P - (a + b) = " + P + " - (" + a + " + " + b + ") = " + c);
            }
        }
        else {
            strC.innerHTML = ("<strong class='text-danger'>Сборът на двете страните трябва да е по-малък от периметъра на триъгълника</strong>");
        }
    }
}