//function linearEquCalc(){
//    var num1 = document.getElementById("num1").value,
//        a = parseInt(num1),
//        num2 = document.getElementById("num2").value,
//        b = parseInt(num2),
//        unknownNum = document.getElementById("resolve"),
//        x;

//    if (isNaN(a) || isNaN(b)) {
//        unknownNum.innerHTML = ("'a' и 'b' трябва да са числа !");
//    }

//    if (a < 0 && b < 0 || a > 0 && b > 0) {
//        x = (-b) / a;
//        unknownNum.innerHTML = ("Резултат: x= " + x);
//    }

//    if (a > 0 && b < 0 || a < 0 && b > 0) {
//        x = (b / a) * (-1);
//        unknownNum.innerHTML = ("Резултат: x=" + x);
//    }
//}