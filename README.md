# Javascript Week One Independent Project: Modern JS Apps
_*Epicodus Javascript Independent Project 1-6-17*_

_*Project Name: BetterDoctors API *_

_*Project Author: Suzi Rubino*_

##Project’s Purpose or Goal:

Create a website where users may enter a medical issue (ie: “toothache”) into a form, submit it, and receive a list of doctors they may seek out to help with their medical issue.

Use the _*BetterDoctors API*_ to retrieve this information. You will need to make an account and an API key. Do not use someone else’s API key. Each API key can be invoked for 1000 API calls per day, so avoid making excessive API calls (ie: accidental infinite loops) during development.


###This project, if fully completed, would include:

Setup Instructions
1. A free API key is obtained by visiting the BetterDoctors developer site at [BetterDoctors API](https://developer.betterdoctor.com/).
Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable exports.apiKey in .env). Please keep the spelling, capitalization etc identical as it speeds up our grading process considerably.
Include .env in .gitignore.
2. Use at least two JavaScript files: One to receive form input, another to make an API request and display results. Starter code (with a response featuring 20 results from the Portland area) Use that to build up an object you can push to an array that can be returned.

```
exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

```

This example assumes your API Key is stored in an apiKey variable.
Notice the ```?user_key= ``` used with the API key after the username? This must be included in the personal access token with your request.


###Additional Resources

Consult the [BetterDoctor API documentation ](https://developer.betterdoctor.com/) for further information. The documentation is extensive and allows you to experiment with different queries for your API calls before putting together your code.

###Gulp tasks usedConcatenation, minification, and running the browserify package on your JavaScript.

- Building and cleaning.
- Running the development server with live reloading.
- Running JSHint.
- Automatically including Bower dependencies as vendor.min.js and vendor.css.

###Further Exploration

1. Allow users to search by name and medical issue.
2. Update the UI if a doctor can't be found (this happens when you search by name and issue quite frequently.)
3. Add an additional API call to retrieve the list of specialities from the database before you query for a doctor, then return that list in a dropdown menu.
4. Add styling with SASS. Use a Gulp task to compile it.


###Objectives

- [ ] Does the website work as expected?
- [ ] Did you follow all setup instructions, including storing your API key in the variable exports.apiKey?
- [ ] Does the app separate front-end and back-end functionalities into different JavaScript files?
- [ ] Is ```exports``` used successfully in at least one JavaScript file?
- [ ] Are dependencies managed with npm and Bower?
- [ ] Does the app include a gulp-based asset pipeline with a development server?
- [ ] Does the asset pipeline include all tasks from the homework this week? (See below)
- [ ] Code and Git documentation follow best practices (setup instructions in README, .gitignore file discluding unnecessary content from repo, detailed well-formatted commit messages, etc.)
- [ ] Does the project demonstrate concepts covered this week? If prompted, are you able to discuss the flow of your code and the concepts behind it with an instructor using correct terminology?
- [ ] Is the app in a presentable, portfolio-quality state?
- [ ] Is required functionality in place by the Friday deadline?



###Tools, frameworks, libraries and other resources used to create MVP:

- SASS - css preprocessor
- CSS libraries: Bourbon components
- Fonts and font libraries: Material Icons, Google Fonts, Font Squirrel, webfont kits for client brand font (officina serif)
- Javascript library: JQuery
- Adobe Illustrator
- Adobe Photoshop

###SET UP INSTRUCTIONS

- [ ] Follow link below to github repository.

- [ ] Clone repository to desktop

- [ ] Run ```$ npm install``` in Terminal on  Mac

- [ ] Run ```$ bower install``` in Terminal on  Mac

- [ ] Run ```$ gulp build``` in Terminal on  Mac

- [ ] Run ```$ gulp serve``` in Terminal on  Mac

- [ ] Obtain a api key from betterdoctor site (link above) and create a .env file at the top level of your project directory [Refer to this Epicodus lesson](https://www.learnhowtoprogram.com/javascript/modern-js-apps/managing-api-keys-8240339c-83fa-4858-9b04-7c95413055cf) for more information.

The setup instructions above assume that Node Package Manager (npm) has been installed and initialized on the system used to interact with this repository. Gulp and Bower (npm packages) will also need to be installed.

#####This and previous project links
* [Repository for Javascript Week One Independent Project - Modern APIs](https://github.com/suzirubi/doctors.git)
* [Visit my gh-page for CSS Independent Project #4](https://rawgit.com/suzirubi/kerrWebCalendar/master/index.html)
* [Visit my gh-page for CSS Independent Project #3](https://rawgit.com/suzirubi/tarot/master/index.html)
* [Visit my gh-page for CSS Independent Project #2](https://rawgit.com/suzirubi/thinkGoogle/master/index.html)
* [Visit my gh-page for CSS Independent Project #1](https://rawgit.com/suzirubi/climbing/master/index.html)
* [Visit my gh page for Introduction to Programing Independent Project #4](https://rawgit.com/suzirubi/pizza/master/index.html)
* [Visit my gh page for Introduction to Programing Independent Project #3](https://rawgit.com/suzirubi/ping-pong/master/index.html)
* [Visit my gh page for Introduction to Programing Independent Project #2](https://rawgit.com/suzirubi/Independent-Project-Week-2/master/index.html)
* [Visit my gh page for Introduction to Programing Independent Project #1](https://rawgit.com/suzirubi/portfolioFix/master/index.html)
