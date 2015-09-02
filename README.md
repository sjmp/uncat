# UCL NHS Cloud Application Template
## uncat 

###Contents

1. Installation
2. Prior Reading
3. Angular in three sentences
4. Bootstrap in two sentences
5. Cloud applications in a sentence
6. Structure
7. Navigation
8. Adding new content
9. Style guide
10. Design patterns
11. Testing

###1. Installation

* Either pull from git or download then unpack the .zip file
* Open up the index.html file in a browser

###2. Prior Reading

If you are a novice developer coming to the UCL NHS Cloud Application Template for the first time, it is reccomended you complete/read the following before starting development, in this order:

* CodeAcademy's 'Make a Website' course
 * https://www.codecademy.com/en/skills/make-a-website
* CodeAcademy's AngularJS course
 * https://www.codecademy.com/en/courses/learn-angularjs
* O'Reilly's AngularJS: Up and Running
 * http://shop.oreilly.com/product/0636920033486.do
* W3School's Boostrap 3 Tutorial 
 * http://www.w3schools.com/bootstrap/
* Head First Design Patterns
 * http://shop.oreilly.com/product/9780596007126.do
 
These will take some time, but give you near complete understanding to developing web applications and AngularJS.

###3. Angular in three sentences

AngularJS is a Javascript framework built around MVVC, single-page applications and dependency injections (.controller('thisController', fxunction(dependencyInjectedService))... ) 
It uses directives (starting with 'ng') to tie together Controllers and Services (data models), while custom directives can be made to create HTML elements with whole new rules.
The single page is achieved by swapping HTML in and out of the ng-view directive according to the app's routing setup.

###4. Bootstrap in two sentences

Bootstrap is a JavaScript framework designed to assist with styling and formatting of cloud applications, as it works well with both mobile and web applications. 
It is most well known for it's CSS classes, which we will be taking advantage of in this template.

###5. Cloud applications in a sentence

This template is a cloud application; it can be hosted as is as a web application or transferred into Cordova with Ionic to create a mobile application.

###6. Structure

The core idea is to split the structure up like so:

* **app/**
  * **components or shared/** 
    * **content/** 
	  * **some part of content/**
	    * **someView.html**
		* **someController.js**
		* **someService.js**
      * **another part of content/**
        * **anotherView.html**
        ...	

The two main files within app are *components/* and *shared/* - Components contains distinct parts of the webpage, Shared contains reusable parts of the web application.

[To properly understand this layout, read the Scotch.io Angular format here.](https://scotch.io/tutorials/angularjs-best-practices-directory-structure)

###7. Navigation

The code is designed to be as modular as possible, meaning 'uclApp', the only application, is spread across mutliple files and folders.

In order to split the app out like this, all controllers or services need to be called in a function and added to uclApp: 

```javascript
	(function() 
	  { angular
	       .module('mainApp')
		   .service('name') or .controller('name')
		   // code within {} here
	})();
```

Where important things live:

* The declaration for the app is held in *app/app.module.js*
* Routing for both index's ng-view and what controller to use is decided in *app/app.routes.js*
* Scripts are unorganised and placed in *index.html*
* The controller and view are always within their own bottom-level tab
* If a controller calls on a service, they'll be together in the same file 
* Custom directives are always within shared, as they are reusable
* Any html or javascript that a custom directive might need is stored next to it

###8. Adding new content

Let's say you wanted to create a new tab within the primary column, the Hattery Tab, for buying and comparing beautiful hats of all kinds. 

1. Create new folders for what you're making
  * As the Hattery Tab a one-off component, start with *app/components/*
  * I want it in the primary column of the mainpage, so it'll live in *app/components/mainpage/primarycol/*
  * As it's a new tab, create a new tab folder for it: *app/components/mainpage/primarycol/hatterytab/*
2. Create the view, controller and the service within your new tab 
  * This will be *hatteryView.html* for the view
  * *hatteryController.js* for the controller
    * Follow the code in section 4 to get .controller('hatteryController') set up within .module('mainApp') 
	* **Important: Ensure this has a dependency injection of hatteryService in order to grab information from it: .controller('hatteryController', function(hatteryService)**
  * And *hatteryService.js* for the service aspect.
    * Follow the code in section 4 to get .service('hatteryService') set up within .module('mainApp') 
  * Any Javascript will also need to be wrapped as a function (see code in Section 4!)
3. Wire it into the app in the app.module.js file
  * Add a .when for webpage the user might be visiting - .when('/hattery ...
  * Include the view you wish to in a templateURL option (in this case, hatteryView.html). 
    * You'll need the full URL from app/ downwards to do this...
  * Include the controller you wish to use (in this case, hatteryController.js)
    * As the function you've written includes hatteryController into mainApp, you don't need the full URL link 
4. Finally add the script links to index.html
  * You'll need to do this for both the service and the controller, but not the html.

These four steps are useful for understanding the structure of the program also.

If you get lost, copy and paste existing views, controllers and services and remember to modify the route and the script links.
  
###9. Style guide

I only camel case code, everything lower case is a folder or index.html.

All modular coding files include what module they are a part of and what they do; displayController, displayModel and displayView are all controllers, services/factories and html files for the display modular group respectively.

The system follows a strict MVVC (Model View View-Controller model - No services without controllers unless absolutely neccesary, no controllers talking to other controllers.

###10. Design Patterns

The template is designed to encourage not only the use of MVVC but of design patterns:

* Factories and Services are used throughout for models
* A Decorator pattern can be seen in the displayController
* authModel is an example of a singleton
* The strategy pattern is used for shared views
* The promises used in the http .then calls are examples of chain of responsibility patterns (see displayModel.js)
* Iterators are used for functions to access elements; see self.calculateAverage in displayController.js
* Services act as Facades when returning http calls to the controller
* Dependency Injections (see above) are also examples of Inheritence and support polymorphism

###11. Testing

