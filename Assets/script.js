$(document).ready(function () { //loads html before loading the javascript

    //-------------------------------------------------------------------- Variables

    var date = moment().format('dddd, MMM Do YYYY');// Grabbed the day, month, date, and year from the api
    var time = moment().format('h a');// Grabbed the time from the api

    var timeLabel = $('.time-block');
    var textArea = $('.description');

    var saveButton1 = $('#saveBtn1');
    var saveButton2 = $('#saveBtn2');
    var saveButton3 = $('#saveBtn3');
    var saveButton4 = $('#saveBtn4');
    var saveButton5 = $('#saveBtn5');
    var saveButton6 = $('#saveBtn6');
    var saveButton7 = $('#saveBtn7');
    var saveButton8 = $('#saveBtn8');
    var saveButton9 = $('#saveBtn9');
    
    var inOutText1 = $('#inputText1');
    var inOutText2 = $('#inputText2');
    var inOutText3 = $('#inputText3');
    var inOutText4 = $('#inputText4');
    var inOutText5 = $('#inputText5');
    var inOutText6 = $('#inputText6');
    var inOutText7 = $('#inputText7');
    var inOutText8 = $('#inputText8');
    var inOutText9 = $('#inputText9');



    //------------------- Display Date ------------------------------------------------//
    console.log(date);

    $('#currentDay').append(date);//Added it to the html using the id currentDate

    //------------------- Color code past, present, future ---------------------------//

    console.log(time)
    // function timeCheck() {
    if (time < timeLabel) {
        textArea.attr("class", "past");
    };
    // if (time = timeLabel) {
    //     textArea.attr("class", "present")
    // };
    if (time > timeLabel) {
        textArea.attr("class", "future")
    };
    // }


    //---------------------------- Saving Time Block ---------------------------------//
    //-----------------------------------Get the input for each of the text boxes after the clicked save
    $(saveButton1).on("click", function () {
        event.preventDefault();
        var inputText1 = $('#inputText1').val();
        localStorage.setItem('inputText1', inputText1);
    });

    $(saveButton2).on("click", function () {
        event.preventDefault();
        var inputText2 = $('#inputText2').val();
        localStorage.setItem('inputText2', inputText2);
    });

    $(saveButton3).on("click", function () {
        event.preventDefault();
        var inputText3 = $('#inputText3').val();
        localStorage.setItem('inputText3', inputText3);
    });

    $(saveButton4).on("click", function () {
        event.preventDefault();
        var inputText4 = $('#inputText4').val();
        localStorage.setItem('inputText4', inputText4);
    });

    $(saveButton5).on("click", function () {
        event.preventDefault();
        var inputText5 = $('#inputText5').val();
        localStorage.setItem('inputText5', inputText5);
    });

    $(saveButton6).on("click", function () {
        event.preventDefault();
        var inputText6 = $('#inputText6').val();
        localStorage.setItem('inputText6', inputText6);
    });

    $(saveButton7).on("click", function () {
        event.preventDefault();
        var inputText7 = $('#inputText7').val();
        localStorage.setItem('inputText7', inputText7);
    });

    $(saveButton8).on("click", function () {
        event.preventDefault();
        var inputText8 = $('#inputText8').val();
        localStorage.setItem('inputText8', inputText8);
    });

    $(saveButton9).on("click", function () {
        event.preventDefault();
        var inputText9 = $('#inputText9').val();
        localStorage.setItem('inputText9', inputText9);
    });

    //-----------------------------------Save the input to each of the text boxes

    function savedData() {
        var i1 = localStorage.getItem('inputText1');
        inOutText1.text(i1);
        var i2 = localStorage.getItem('inputText2');
        inOutText2.text(i2);
        var i3 = localStorage.getItem('inputText3');
        inOutText3.text(i3);
        var i4 = localStorage.getItem('inputText4');
        inOutText4.text(i4);
        var i5 = localStorage.getItem('inputText5');
        inOutText5.text(i5);
        var i6 = localStorage.getItem('inputText6');
        inOutText6.text(i6);
        var i7 = localStorage.getItem('inputText7');
        inOutText7.text(i7);
        var i8 = localStorage.getItem('inputText8');
        inOutText8.text(i8);
        var i9 = localStorage.getItem('inputText9');
        inOutText9.text(i9);
        $('#clear').on("click", function() {
            localStorage.clear();
        });
        
    };

    savedData();


});