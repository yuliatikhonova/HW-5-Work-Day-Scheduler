$(document).ready(function () { //loads html before loading the javascript

    //-------------------------------------------------------------------- Variables
    var saveButton1 = $('#saveBtn1');
    var saveButton2 = $('#saveBtn2');
    var saveButton3 = $('#saveBtn3');
    var saveButton4 = $('#saveBtn4');
    var saveButton5 = $('#saveBtn5');
    var saveButton6 = $('#saveBtn6');
    var saveButton7 = $('#saveBtn7');
    var saveButton8 = $('#saveBtn8');
    var saveButton9 = $('#saveBtn9');

    // var saveButtonArray = $()

    var inOutText1 = $('#inputText1');
    var inOutText2 = $('#inputText2');
    var inOutText3 = $('#inputText3');
    var inOutText4 = $('#inputText4');
    var inOutText5 = $('#inputText5');
    var inOutText6 = $('#inputText6');
    var inOutText7 = $('#inputText7');
    var inOutText8 = $('#inputText8');
    var inOutText9 = $('#inputText9');

    // var inOutTextArray = $()

    var date = moment().format('dddd, MMM Do YYYY');// Grabbed the day, month, date, and year from the api
    var time = "2 pm"; //moment().format('h a');// Grabbed the time from the api


    //------------------- Display Date ------------------------------------------------//
    console.log(date);

    $('#currentDay').append(date);//Added it to the html using the id currentDate

    //------------------- Color code past, present, future ---------------------------//

    console.log(time)

    var textArea1 = $('#inputText1');// var timeLabel1 = $('#9');
    var textArea2 = $('#inputText2');// var timeLabel2 = $('#10');
    var textArea3 = $('#inputText3');// var timeLabel3 = $('#11');
    var textArea4 = $('#inputText4');// var timeLabel4 = $('#12');
    var textArea5 = $('#inputText5');// var timeLabel5 = $('#1');
    var textArea6 = $('#inputText6');// var timeLabel6 = $('#2');
    var textArea7 = $('#inputText7');// var timeLabel7 = $('#3');
    var textArea8 = $('#inputText8');// var timeLabel8 = $('#4');
    var textArea9 = $('#inputText9');// var timeLabel9 = $('#5');
    function colorTime() {
        if (time === '9 am') {
            textArea1.attr("class", "present");
            textArea2.attr("class", "future");
            textArea3.attr("class", "future");
            textArea4.attr("class", "future");
            textArea5.attr("class", "future");
            textArea6.attr("class", "future");
            textArea7.attr("class", "future");
            textArea8.attr("class", "future");
            textArea9.attr("class", "future");
        };

         if (time === '10 am') {
            textArea2.attr("class", "present");
            textArea1.attr("class", "past");
            textArea3.attr("class", "future");
            textArea4.attr("class", "future");
            textArea5.attr("class", "future");
            textArea6.attr("class", "future");
            textArea7.attr("class", "future");
            textArea8.attr("class", "future");
            textArea9.attr("class", "future");
        };

        if (time === '11 am') {
            textArea3.attr("class", "present");
            textArea1.attr("class", "past");
            textArea2.attr("class", "past");
            textArea4.attr("class", "future");
            textArea5.attr("class", "future");
            textArea6.attr("class", "future");
            textArea7.attr("class", "future");
            textArea8.attr("class", "future");
            textArea9.attr("class", "future");
        };

        if (time === '12 pm') {
            textArea4.attr("class", "present");
            textArea1.attr("class", "past");
            textArea2.attr("class", "past");
            textArea3.attr("class", "past");
            textArea5.attr("class", "future");
            textArea6.attr("class", "future");
            textArea7.attr("class", "future");
            textArea8.attr("class", "future");
            textArea9.attr("class", "future");
        };

        if (time === '1 pm') {
            textArea5.attr("class", "present");
            textArea1.attr("class", "past");
            textArea2.attr("class", "past");
            textArea3.attr("class", "past");
            textArea4.attr("class", "past");
            textArea6.attr("class", "future");
            textArea7.attr("class", "future");
            textArea8.attr("class", "future");
            textArea9.attr("class", "future");
        };

        if (time === '2 pm') {
            textArea6.attr("class", "present");
            textArea1.attr("class", "past");
            textArea2.attr("class", "past");
            textArea3.attr("class", "past");
            textArea4.attr("class", "past");
            textArea5.attr("class", "past");
            textArea7.attr("class", "future");
            textArea8.attr("class", "future");
            textArea9.attr("class", "future");
        };

        if (time === '3 pm') {
            textArea7.attr("class", "present");
            textArea1.attr("class", "past");
            textArea2.attr("class", "past");
            textArea3.attr("class", "past");
            textArea4.attr("class", "past");
            textArea5.attr("class", "past");
            textArea6.attr("class", "past");
            textArea8.attr("class", "future");
            textArea9.attr("class", "future");
        };

        if (time === '4 pm') {
            textArea8.attr("class", "present");
            textArea1.attr("class", "past");
            textArea2.attr("class", "past");
            textArea3.attr("class", "past");
            textArea4.attr("class", "past");
            textArea5.attr("class", "past");
            textArea6.attr("class", "past");
            textArea7.attr("class", "past");
            textArea9.attr("class", "future");
        };

        if (time === '5 pm') {
            textArea9.attr("class", "present");
            textArea1.attr("class", "past");
            textArea2.attr("class", "past");
            textArea3.attr("class", "past");
            textArea4.attr("class", "past");
            textArea5.attr("class", "past");
            textArea6.attr("class", "past");
            textArea7.attr("class", "past");
            textArea8.attr("class", "past");
        };

    };

    colorTime();
 
    // if (time < timeLabel3) {
    //     textArea3.attr("class", "past");
    // };
    // if (time = timeLabel3) {
    //     textArea3.attr("class", "present")
    // };
    // if (time > timeLabel3) {
    //     textArea3.attr("class", "future")
    // };


    //    $("textarea").attr("class", "past");



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
        $('#clear').on("click", function () {
            localStorage.clear();
        });

    };

    savedData();


});