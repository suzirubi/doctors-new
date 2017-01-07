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
      var splitArray = [];
      var imageDr = " ";
      var doctorName = " ";
      var address = " ";
      var cityState = " ";
      var phone = " ";


      $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ userIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
      .then(function(results) {
      var imageArray = [];
      var doctorNameArray = [];
      var addressArray = [];
      var cityStateArray = [];
      var phoneArray = [];
      for(i=0;i<results.data.length;i++){
        imageArray.push(results.data[i].profile.image_url);
        doctorNameArray.push("Dr. " + (results.data[i].profile.first_name) + " " + (results.data[0].profile.last_name));
        addressArray.push(results.data[i].practices[0].visit_address.street);
        cityStateArray.push((results.data[0].practices[0].visit_address.city)+ ", " + (results.data[0].practices[0].visit_address.state));
        phoneArray.push(results.data[i].practices[0].phones[0].number);
      };


      console.log(phoneArray);
      console.log(imageArray);
      console.log(phoneArray);
      console.log(cityStateArray);
      console.log(addressArray);


      imageDr = results.data[0].profile.image_url;

      doctorName = (results.data[0].profile.first_name) + " " + (results.data[0].profile.last_name);
      address = (results.data[0].practices[0].visit_address.street);

      cityState = (results.data[0].practices[0].visit_address.city)+ ", " + (results.data[0].practices[0].visit_address.state);
      console.log(cityState);

      phone = results.data[0].practices[0].phones[0].number;

      $('.doctorList').append('<ul id="appendDr"><li><img src="'+ imageDr + '" alt="doctor photo"/></li><li> Dr. ' + doctorName + '</li><li>' + address + '</li><li>' + cityState + '</li><li>' + phone + '</li></ul>');

      })
      .fail(function(error){
      console.log("fail");
      alert("please enter a condition");
      });

};





exports.doctorModule = GetDoctor;
