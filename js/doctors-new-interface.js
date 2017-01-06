var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctors-new.js').doctorModule;



$(document).ready(function() {

  $('#submitIssue').click(function(event){
    event.preventDefault();

    var userIssue = $('#issue').val();

    $('#issue').val("");
    $("#appendDr").remove();

    $('.showIssue').text(userIssue);

    $('.showUserIssue').show();

    $('.showDoctorList').show();

    $('.showIssue').text(userIssue);
//begin backend

    var imageDr = " ";
    var name = " ";
    var address = " ";
    var cityState = " ";
    var phone = " ";


    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ userIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(doctorList) {

    imageDr = doctorList.data[0].profile.image_url;

    name = (doctorList.data[0].profile.first_name) + " " + (doctorList.data[0].profile.last_name);
    address = (doctorList.data[0].practices[0].visit_address.street)

    cityState = (doctorList.data[0].practices[0].visit_address.city)+ ", " + (doctorList.data[0].practices[0].visit_address.state);
    console.log(cityState);

    phone = doctorList.data[0].practices[0].phones[0].number;

    $('.doctorList').append('<ul id="appendDr"><li><img src="'+ imageDr + '" alt="doctor photo"/></li><li> Dr. ' + name + '</li><li>' + address + '</li><li>' + cityState + '</li><li>' + phone + '</li></ul>');

    })
    .fail(function(error){
    console.log("fail")
    alert("please enter a condition");
    });
  });
});
