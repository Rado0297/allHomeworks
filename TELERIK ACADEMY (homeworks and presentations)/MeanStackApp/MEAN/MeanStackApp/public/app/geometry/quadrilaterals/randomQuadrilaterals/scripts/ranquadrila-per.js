function ranQuadPer() {
    var strA = document.getElementById("str-a").value,
        a = parseFloat(strA),
        strB = document.getElementById("str-b").value,
        b = parseFloat(strB),
        strC = document.getElementById("str-c").value,
        c = parseFloat(strC),
        strD = document.getElementById("str-d").value,
        d = parseFloat(strD),
        perimeter = document.getElementById("perimeter"),
        p;

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        perimeter.innerHTML = ("<strong class='text-danger'>Страните трябва да са числа !</strong>");
    }
    else {
        if (a <= 0 || b <= 0 || c <= 0 || d <= 0) {
            perimeter.innerHTML = ("<strong class='text-danger'>Страните трябва да са положителни числа !</strong>");
        }
        else {
            p = (a + b + c + d);
            perimeter.innerHTML = (
                "Заместваме въведените стойности във формулата </br>" + "за периметър на четириъгълник P=a+b+c+d.</br>" +
                "От тук следва,че периматъра на триъгълника е:</br>" +
                " P=a+b+c+d= " + a + "+" + b + "+" + c + "+" + d +  " = " + p);
        }
    }
}