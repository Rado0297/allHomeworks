function perimenter() {
    var strA = document.getElementById("str-a").value,
        a = parseInt(strA),
        strB = document.getElementById("str-b").value,
        b = parseInt(strB),
        strC = document.getElementById("str-c").value,
        c = parseInt(strC),
        perimeter = document.getElementById("perimeter"),
        p;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        perimeter.innerHTML = ("Страните трябва да са числа !");
    }
    else {
        if (a <= 0 || b <= 0 || c <= 0) {
            perimeter.innerHTML = ("Страните трябва да са положителни числа !");
        }
        else {
            p = (a + b + c);
            perimeter.innerHTML = (
                "Заместваме въведените стойности във формулата </br>" + "за периметър на триъгълник P=a+b+c.</br>" +
                "От тук следва,че периматъра на триъгълника е:</br>" +
                " P=a+b+c= " + a + "+" + b + "+" + c + " = " + p);
        }
    }
}