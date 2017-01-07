var GetDoctor = require('./../js/doctors-new.js').doctorModule;



$(document).ready(function() {

  var currentGetDoctor = new GetDoctor();


  $('#submitIssue').click(function(event){
    event.preventDefault();

    var userIssue = $('#issue').val();

    $('#issue').val("");
    $("ul").remove();

    $('.showIssue').text(userIssue);

    $('.showUserIssue').show();

    $('.showDoctorList').show();

    $('.showIssue').text(userIssue);

    currentGetDoctor.getDoctorList(userIssue);


  });
});
