var apiKey = require('./../.env').apiKey;


function GetDoctor() {
  // this.image = imageDr;
  // this.doctorName = doctorName;
  // this.address = address;
  // this.cityState = cityState;
  // this.phone = phone;
}

GetDoctor.prototype.getDoctorList = function(userIssue){
  console.log("Hello from the other side!");

      var imageDr = " ";
      var doctorName = " ";
      var address = " ";
      var cityState = " ";
      var phone = " ";


      $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ userIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
      .then(function(doctorList) {

      imageDr = doctorList.data[0].profile.image_url;

      doctorName = (doctorList.data[0].profile.first_name) + " " + (doctorList.data[0].profile.last_name);
      address = (doctorList.data[0].practices[0].visit_address.street);

      cityState = (doctorList.data[0].practices[0].visit_address.city)+ ", " + (doctorList.data[0].practices[0].visit_address.state);
      console.log(cityState);

      phone = doctorList.data[0].practices[0].phones[0].number;

      $('.doctorList').append('<ul id="appendDr"><li><img src="'+ imageDr + '" alt="doctor photo"/></li><li> Dr. ' + doctorName + '</li><li>' + address + '</li><li>' + cityState + '</li><li>' + phone + '</li></ul>');

      })
      .fail(function(error){
      console.log("fail");
      alert("please enter a condition");
      });

};





exports.doctorModule = GetDoctor;
