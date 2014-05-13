function equilateralTr(){
    var strA = document.getElementById("str-a").value,
        a = parseInt(strA),
        perimeter = document.getElementById("perimeter"),
        p;

    if (isNaN(a)) {
        perimeter.innerHTML = ("Страната трябва да е число !");
    }
    else {
        if (a <= 0) {
            perimeter.innerHTML = ("Страната трябва да е положителни число !");
        }
        else {
            p = (3*a);
            perimeter.innerHTML = (
                "Заместваме въведената стойност във формулата </br>" + "за периметър на триъгълник P=a+b+c.</br>" +
                "От тук следва,че периматъра на триъгълника е:</br>" +
                " P=3*a= " + "3*" + a + " = " + p);
        }
    }
}