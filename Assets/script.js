//-------------------------------------------------------------------- Variables


//-------------------------------------------------------------------- Display Date
    // Grabbed the moment format from the api,
var date = moment().format('dddd, MMM Do YYYY');
console.log(date);

    //Added it to the html using the id currentDate
$('#currentDay').append(date)

//-------------------------------------------------------------------- Inside the container
    // .description, .time-block, .past, .present, .future, .saveBtn, 9am to 5pm (hourly)


