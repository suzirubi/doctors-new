var apiKey = require('./../.env').apiKey;


function GetDoctor(imageDr, doctorName, address, cityState, phone) {
  this.image = imageDr;
  this.doctorName = doctorName;
  this.address = address;
  this.cityState = cityState;
  this.phone = phone;
}

GetDoctor.prototype.getDoctorList = function(userIssue){
  console.log("Hello from the other side!");



      $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ userIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
      .then(function(results) {

      var splitArray = [];

      for(i=0;i<results.data.length;i++){
        splitArray.push(('<img src="' + (results.data[i].profile.image_url) + '"/>'),("Dr. " + (results.data[i].profile.first_name) + " " + (results.data[i].profile.last_name)), results.data[i].practices[0].visit_address.street, ((results.data[i].practices[0].visit_address.city) + ", " + (results.data[i].practices[0].visit_address.state)), results.data[i].practices[0].phones[0].number);
      }


      splitArray.forEach(function(item){
        $('.doctorList').append('<ul><li>' + item + '</li></ul>');
      });


      })
      .fail(function(error){
      console.log("fail");
      alert("please enter a condition");
      });

};


//
// console.log(splitArray);
// console.log(imageArray);
// console.log(phoneArray);
// console.log(cityStateArray);
// console.log(addressArray);



exports.doctorModule = GetDoctor;
