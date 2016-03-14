function sine() {
    var angleInDeg = document.getElementById("angle").value,
        x = parseFloat(angleInDeg),
        sine = document.getElementById("sine"),
        sin;

    if (isNaN(x)) {
        sine.innerHTML = ("<strong class='text-danger'>Ъгълът трябва да е число!</strong>");
    }
    else {
        /** Converts numeric degrees to radians 

        var inRad = x * Math.PI / 180;

        sin = Math.sin(inRad);
        sine.innerHTML = sin;
        **/
    }
}