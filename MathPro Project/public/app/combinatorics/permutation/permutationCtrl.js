app.controller('PermutationCtrl', function($scope){
    $scope.permutation = function () {
        //get value of input box and div element for reult
        var input = document.getElementById("permutation-input").value,
            n = parseFloat(input),
            result = document.getElementById("permutationResult"),
            multiply;

        //check that n is a number
        if (isNaN(n)) {
            result.innerHTML = ("<strong class='text-danger'>n трябва да е число!</strong>");
        }
        else {
            if (n < 0) {
                result.innerHTML = ("<strong class='text-danger'>n трябва да е неотрицателно число!</strong>");
            }
            else if(n === 0){
                multiply = 1;
                //throw result it UI
                result.innerHTML = (
                    "P(" + 0 + ")=" + multiply);
            }
            else {
                //declarate array, which collect numbers in permutation format
                var arr = new Array();
                for(var j = 0; j < n; j++){
                    arr[j]=n-j;
                }

                //multiply all numbers in array
                multiply = 1;

                for(j = 0; j < arr.length; j++){
                    multiply = multiply * arr[j];
                }

                //throw result it UI
                result.innerHTML = (
                    "За пресмятането на пермутация P(" + n + ") взимаме числата от " +
                    1 + " до " + arr[0] + " и ги умножаваме.</br>" +
                    "Получаваме P(" + n + ")=" + multiply);
            }
        }
    }
});