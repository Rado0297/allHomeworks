function sideFromAreaEquSideTr() {
    var area = document.getElementById("area").value,
        S = parseFloat(area),
        strA = document.getElementById("sideFromAreaEquSideTr"),
        a;

    if (isNaN(S)) {
        strA.innerHTML = ("<strong class='text-danger'>Периметъра трябва да е число!</strong>");
    }
    else {
        if (S <= 0) {
            strA.innerHTML = ("<strong class='text-danger'>Периметъра трябва да е положително число</strong>");
        }
        else {
            a = (S*3)/Math.sqrt(3);
            strA.innerHTML = (
                "Изразяваме страната от формулата за лице на равностранен триъгълник S = (V¯3*a)/4 →" +
                "a = (S*4)/V¯3 →</br>" +
                "a = (" + S + "*4)/V¯3 = " + ((Math.round((a+1)*100)/100)-1).toFixed(2));
        }
    }
}