function sine() {
    var angleInDeg = document.getElementById("angle").value,
        x = parseFloat(angleInDeg),
        sine = document.getElementById("sine"),
        sin;

    if (isNaN(x)) {
        sine.innerHTML = ("<strong class='text-danger'>Ъгълът трябва да е число!</strong>");
    }
    else {
        //function convert angle from dergrees to radians
        if(x === 0){
            sine.innerHTML = ("sin(" + x + ") = 0");
        }
        if(x === 30){
            sine.innerHTML = ("sin(" + x + ") = 1/2");
        }
        if(x === 45){
            sine.innerHTML = ("sin(" + x + ") = √2/2");
        }
        if(x === 60){
            sine.innerHTML = ("sin(" + x + ") = √3/2");
        }
        if(x === 90){
            sine.innerHTML = ("sin(" + x + ") = 1");
        }
        if(x === 120){
            sine.innerHTML = ("sin(" + x + ") = √3/2");
        }
        if(x === 135){
            sine.innerHTML = ("sin(" + x + ") = √2/2");
        }
        if(x === 150){
            sine.innerHTML = ("sin(" + x + ") = 1/2");
        }
        if(x === 180){
            sine.innerHTML = ("sin(" + x + ") = 0");
        }
        if(x === 270){
            sine.innerHTML = ("sin(" + x + ") = -1");
        }
        if(x === 360){
            sine.innerHTML = ("sin(" + x + ") = 0");
        }

        //Add funtion for random angle

        /*Debug it
        function toRadians (angle){
            return angle * (Math.PI / 180);
        }

        sin = Math.sin(toRadians(x));

        sine.innerHTML = ("sin(" + x + ") = " + sin);

        console.log(Math.sin(toRadians(x)));
        console.log(Math.cos(toRadians(x)));*/
    }
}