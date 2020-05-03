$(document).ready(function () { //loads html before loading the javascript

    //-------------------------------------------------------------------- Variables

    var date = moment().format('dddd, MMM Do YYYY');// Grabbed the day, month, date, and year from the api
    var time = moment().format('h a');// Grabbed the time from the api
    
    var timeLabel = $('.time-block');
    var textArea = $('.description');
    var timeArray = ['9 am', '10 am', '11am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];

    var saveButton = $('.saveButton');

    //------------------- Display Date ------------------------------------------------//
    console.log(date);

    $('#currentDay').append(date);//Added it to the html using the id currentDate

    //------------------- Color code past, present, future ---------------------------//

    console.log(time)
    function timeCheck() {
        if (time < timeLabel) {
            textArea.attr("class", "past");
        };
        if (time = timeLabel) {
            textArea.attr("class", "present")
        };
        if (time > timeLabel) {
            textArea.attr("class", "future")
        };
    }




    function addAndCheckTime () {
        $('#9').append(timeArray[0]);
        $('#10').append(timeArray[1]);
        $('#11').append(timeArray[2]);
        $('#12').append(timeArray[3]);
        $('#1').append(timeArray[4]);
        $('#2').append(timeArray[5]);
        $('#3').append(timeArray[6]);
        $('#4').append(timeArray[7]);
        $('#5').append(timeArray[8]);

        for (var index = 0; i < timeArray.length; i++) {
            timeCheck();   
        }
    }
    
    addAndCheckTime();

    //-----------------









    // function saveButtonClicked(){
    //     $(saveButton).on("click", function() {

    //     });
    //     saveToLocalStorage()

    // }




});