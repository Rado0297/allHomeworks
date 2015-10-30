function diagonalFromAreaRh() {
    var area = document.getElementById("area").value,
        S = parseFloat(area),
        diagonalD1 = document.getElementById("diagonalD1").value,
        d1 = parseFloat(diagonalD1),
        diagonalD2 = document.getElementById("diagonalFromAreaRh"),
        d2;

    if (isNaN(d1) || isNaN(S)) {
        diagonalD2.innerHTML = ("<strong class='text-danger'>Диагонала и лицето трябва да са числа !</strong>");
    }
    else {
        if (d1 > 0 && S > 0) {
            d2 = (S*2)/d1;
            diagonalD2.innerHTML = (
                "Изразяваме единия диагонал от формулата за лице на ромб S = (d1*d2)/2 → d2 = (S*2)/d1</br>" +
                "Заместваме въведените стойности в израза за диагонала → </br>" +
                "d2 = (S*2)/d1 = (" + S + "*2)/" + d1 + " = " + S*2 + "/" + d1 + " = " + d2);
        }
        else {
            diagonalD2.innerHTML = ("<strong class='text-danger'>Диагонала и лицето трябва да са положително числа !</strong>");
        }
    }
}