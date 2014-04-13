/// <reference path="libs/require.js" />
require.config({
    paths: {
        jquery: "libs/jquery-2.0.3",
        mustache: "libs/mustache",
        ui: "jquery-ui-1.10.3"
    }
});

require(["jquery", "mustache", "app/controls", "ui"], function ($, mustache, controls, ui) {
    var people = [
   { id: 1, name: "Doncho", age: 18, avatarUrl: "images/iboy.png" },
   { id: 2, name: "Penka", age: 25, avatarUrl: "images/igirl.png" }, 
   { id: 3, name: "Pesho 1", age: 22, avatarUrl: "images/iboy.png" },
   { id: 4, name: "Nikoleta", age: 22, avatarUrl: "images/igirl.png" },
   { id: 5, name: "Pesho 2", age: 33, avatarUrl: "images/iboy.png" },
   { id: 6, name: "Mariika", age: 44, avatarUrl: "images/igirl.png" },
   { id: 7, name:"Georgi", age: 19, avatarUrl: "images/iboy.png" }

   ];

    var container = document.getElementById("content");
    var comboBox = controls.ComboBox(people);
    var template = $("#items-template").html();
    var comboBoxHtml = comboBox.render(template);
    container.innerHTML = comboBoxHtml;

    (function () {
        $("body").on('click', '#selectWindow', function () {
            if ($("#content").css("display") == "none") {
                $(this).css("border-bottom", "none");
                $("#content").show("blind", {}, 300);
            }
            else {
                $("#content").hide("blind", {}, 300);
                setTimeout(function () {
                    $("#selectWindow").css("border-bottom", "1px solid black");
                }, 300);
            }
        });

        $("body").on('click', '.person-item', function () {
            $("#selectWindow").html($(this).html());
            $("#content").hide("blind", {}, 300);
            setTimeout(function () {
                $("#selectWindow").css("border-bottom", "1px solid black");
            }, 300);
        });
    }());
});