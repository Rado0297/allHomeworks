function sideFromAreaSq() {
    var area = document.getElementById("area").value,
        S = parseFloat(area),
        side = document.getElementById("sideFromAreaSq"),
        a;

    if (isNaN(S)) {
        side.innerHTML = ("<strong class='text-danger'>Лицето трябва да е число !</strong>");
    }
    else {
        if (S > 0) {
            a = Math.sqrt(S);
            var aroundA = ((Math.round((a+1)*100)/100)-1).toFixed(2);
            side.innerHTML = (
                "Изразяваме страната от формулата за лице на квадрат → a = √S</br>" +
                "Заместваме въведените стойности в израза за страната → </br>" +
                "a= √S= √" + S + " = " + aroundA);
        }
        else {
            side.innerHTML = ("<strong class='text-danger'>Лицето трябва да е положително число !</strong>");
        }
    }
}