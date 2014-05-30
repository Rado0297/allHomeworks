function linearEquCalc(){
    var num1 = document.getElementById("num1").value,
        a = parseFloat(num1),
        num2 = document.getElementById("num2").value,
        b = parseFloat(num2),
        unknownNum = document.getElementById("resolve"),
        x;

    if (isNaN(a) || isNaN(b)) {
        unknownNum.innerHTML = ("<strong class='text-danger'>'a' и 'b' трябва да са числа !</strong>");
    }

    else {
        if(a != 0) {
            x = (b / a) * (-1);
            unknownNum.innerHTML = (
                "Замествам във формулата за основен вид на линейно уравнение въведените стойности. </br>" +
                "От тук получаваме: " + a + "x+(" + b + ")=0. </br>" +
                "След това изразяваме x → </br>" + "x= " + (-b) + "/" + a + "=" + x);
        }
        else {
            unknownNum.innerHTML = (
                "Замествам във формулата за основен вид на линейно уравнение въведените стойности. </br>" +
                "От тук получаваме: " + a + "x+(" + b + ")=0. </br>" +
                "След това изразяваме x → </br>" + "x= " + (-b) + "/" + a + "</br>" +
                "<strong class='text-danger'>Непозволена операция-на нула не се дели!</strong>");
        }
    }
}