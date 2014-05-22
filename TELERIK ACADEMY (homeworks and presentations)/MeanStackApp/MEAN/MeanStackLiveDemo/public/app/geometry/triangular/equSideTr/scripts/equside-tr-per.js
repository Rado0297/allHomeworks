function perEquSideTr() {
    var strA = document.getElementById("str-a").value,
        a = parseFloat(strA),
        perimeter = document.getElementById("perEquSideTr"),
        p;

    if (isNaN(a)) {
        perimeter.innerHTML = ("<strong class='text-danger'>Страните трябва да са числа !</strong>");
    }
    else {
        if (a <= 0) {
            perimeter.innerHTML = ("<strong class='text-danger'>Страните трябва да са положителни числа !</strong>");
        }
        else {
            p = (3*a);
            perimeter.innerHTML = (
                "Заместваме въведените стойности във формулата </br>" + "за периметър на равностранен триъгълник P=3*a.</br>" +
                "От тук следва,че периматъра на равностранния триъгълника е:</br>" +
                " P=3*a= " + "3*" + a  + " = " + p);
        }
    }
}