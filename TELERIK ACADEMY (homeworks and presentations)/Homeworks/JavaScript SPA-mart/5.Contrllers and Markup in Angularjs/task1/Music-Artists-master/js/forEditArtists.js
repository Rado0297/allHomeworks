function addElement() {

    var ni = document.getElementById('myDiv');

    var numi = document.getElementById('theValue');

    var num = (document.getElementById('theValue').value - 1) + 2;

    numi.value = num;

    var newdiv = document.createElement('div');

    var divIdName = 'Member' + num;

    newdiv.setAttribute('id', divIdName);

    newdiv.innerHTML = '<label for="name" class="col-lg-3 control-label">Member</label>' +
                    '<div class="col-lg-9">' +
                        '<input type="text" class="form-control validity" id="Text1" placeholder="Name" required ng-model="artist.name">' +
                    '</div> <a href=\'#\' onclick=\'removeElement(' + divIdName + ')\'>Remove text area "' + divIdName + '"</a>';

    ni.appendChild(newdiv);

}

function addElement2() {
    var ni = document.getElementById('Div2');

    var numi = document.getElementById('Hidden1');

    var num = (document.getElementById('Hidden1').value - 1) + 2;

    numi.value = num;

    var newdiv = document.createElement('div');

    var divIdName = 'Albums' + num;

    newdiv.setAttribute('id', divIdName);

    newdiv.innerHTML = '<label for="name" class="col-lg-3 control-label">Member</label>' +
                    '<div class="col-lg-9">' +
                        '<input type="text" class="form-control validity" id="Text1" placeholder="Name" required ng-model="artist.name">' +
                    '</div> <a href=\'#\' onclick=\'removeElement(' + divIdName + ')\'>Remove text area "' + divIdName + '"</a>';

    ni.appendChild(newdiv);
}