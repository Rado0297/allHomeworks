function areaRandomQuad() {
    var diagonal1 = document.getElementById("diagonal1").value,
        d1 = parseFloat(diagonal1),
        diagonal2 = document.getElementById("diagonal2").value,
        d2 = parseFloat(diagonal2),
        degrees = document.getElementById("degrees").value,
        φ = parseInt(degrees),
        delitel = 180/ φ,
        stoinost = Math.sin(Math.PI / delitel),
        area = document.getElementById("areaRandomQuad"),
        S;

    if (isNaN(d1) || isNaN(d2) || isNaN(φ)) {
        area.innerHTML = ("<strong class='text-danger'>Диагоналите и ъгъла между тях трябва да са числа !</strong>");
    }
    else {
        if (d1 > 0 && d2 > 0 && φ > 0) {
            if(φ === 180){
                area.innerHTML = ("<strong class='text-danger'>Ъгъла между диагоналите не може да бъде 180 градуса !</strong>");
            }
            else {
                S = (d1*d2*stoinost)/2;
                area.innerHTML = (
                    "Заместваме въведенита стойности във формулата за лице на произволен </br> четириъгълник S = (d1*d2*sin(φ))/2 →</br>" +
                    "S = (d1*d2*sin(φ))/2 = " + d1 + "*" + d2 + "*sin(" + φ + ")/2 = </br>" +
                    "= (" + d1*d2 + "*" + stoinost + ")/2 = </br>" +
                    "= " + S);
            }
        }
        else {
            area.innerHTML = ("<strong class='text-danger'>Диагоналите и ъгъла между тях трябва да са положителни числа !</strong>");
        }
    }
}