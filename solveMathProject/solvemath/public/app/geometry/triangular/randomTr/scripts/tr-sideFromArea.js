function sideFromAreaRanTr() {
    var height = document.getElementById("height").value,
        h = parseFloat(height),
        area = document.getElementById("area").value,
        S = parseFloat(area),
        side = document.getElementById("sideRandomTr"),
        a;

    if (isNaN(h) || isNaN(S)) {
        side.innerHTML = ("<strong class='text-danger'>Височината и лицето трябва да са числа !</strong>");
    }
    else {
        if(h > 0) {
            if (h <= 0 || S <= 0) {
                side.innerHTML = ("<strong class='text-danger'>Височината и лицето на триъгълника трябва да са положителни числа !</strong>");
            }
            else {
                a = (2*S)/h;
                side.innerHTML = (
                    "Първо изразяваме страната 'a' от формулата за лице на произволен триъгълник S = (a*h)/2→</br>" + "a = (S*2)/h</br>" +
                    "Заместваме въведените стойности в израза за 'a' →</br>" +
                    "a = (S*2)/h = (" + S + "*2)/" + h + " = " + a);
            }
        }
        else {
            side.innerHTML = ("<strong class='text-danger'>Височината трябва да е по-голяма от нула</strong>");
        }
    }
}