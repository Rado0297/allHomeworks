function heightFromAreaRanTr() {
    var side = document.getElementById("side").value,
        a = parseFloat(side),
        area = document.getElementById("area").value,
        S = parseFloat(area),
        height = document.getElementById("heightRandomTr"),
        h;

    if (isNaN(a) || isNaN(S)) {
        height.innerHTML = ("<strong class='text-danger'>Страните трябва да са числа !</strong>");
    }
    else {
        if (a > 0) {
            if (a <= 0 || S <= 0) {
                height.innerHTML = ("<strong class='text-danger'>Височината и лицето на триъгълника трябва да са положителни числа !</strong>");
            }
            else {
                h = (2 * S) / a;
                height.innerHTML = (
                    "Първо изразяваме страната 'a' от формулата за лице на произволен триъгълник S = (a*h)/2→</br>" + "h = (S*2)/a</br>" +
                    "Заместваме въведените стойности в израза за 'a' →</br>" +
                    "h = (S*2)/a = (" + S + "*2)/" + a + " = " + h);
            }
        }
        else {
            height.innerHTML = ("<strong class='text-danger'>Височината трябва да е по-голяма от нула</strong>");
        }
    }
}