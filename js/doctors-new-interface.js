var GetDoctor = require('./../js/doctors-new.js').doctorModule;



$(document).ready(function() {

  var currentGetDoctor = new GetDoctor();


  $('#submitIssue').click(function(event){
    event.preventDefault();

    var userIssue = $('#issue').val();

    $('#issue').val("");
    $("#appendDr").remove();

    $('.showIssue').text(userIssue);

    $('.showUserIssue').show();

    $('.showDoctorList').show();

    $('.showIssue').text(userIssue);

    var newList = currentGetDoctor.getDoctorList(userIssue);

    console.log(newList);

    // $('.doctorList').append('<ul id="appendDr"><li><img src="'+ imageDr + '" alt="doctor photo"/></li><li> Dr. ' + name + '</li><li>' + address + '</li><li>' + cityState + '</li><li>' + phone + '</li></ul>');

  });
});
