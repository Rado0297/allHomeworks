function heightEquSideTr() {
    var a = document.getElementById("str-a").value,
        side = parseFloat(a),
        height = document.getElementById("heightEquSideTr"),
        h;

    if (isNaN(side)) {
        height.innerHTML = ("<strong class='text-danger'>Страната трябва да е число !</strong>");
    }
    else {
        if (side > 0) {
            h = ((side * Math.sqrt(3).toFixed(2)) / 2);
            height.innerHTML = (
                "Тъй като триъгълника е равностранен →</br>" +
                "височината е: h=(a*V¯3)/2 →</br>" +
                "h=(" + a + "*V¯3)/2=" + ((Math.round((h+1)*100)/100)-1).toFixed(2));
        }
        else {
            height.innerHTML = ("<strong class='text-danger'>Страната трябва да е положително число !</strong>");
        }
    }
}