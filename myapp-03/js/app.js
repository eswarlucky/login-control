var _innoApp = angular.module("innoApp", ["ui.router"]);

_innoApp.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider.state('login', {
    url: "/login",
    templateUrl: "view/login.html",
    controller: "loginStateCtrl"
  });
  
  $stateProvider.state('home', {
    url: "/home",
    templateUrl: "view/home.html",
    controller: "homeStateCtrl"
  });
  
  $stateProvider.state('home.page-home', {
    url: "/page-home",
    templateUrl: "view/page-home.html"
  });
  
  /* $stateProvider.state("home.page-home", {
    url: "/news",
    templateUrl: "view/page-home.html"
  }); */
  $stateProvider.state("home.news", {
    url: "/news",
    templateUrl: "view/news.html"
  });
  
  $stateProvider.state("home.blog", {
    url: "/blog",
    templateUrl: "view/blog.html"
  });
  
  $stateProvider.state("home.faqs", {
    url: "/faqs",
    templateUrl: "view/faqs.html",
    controller: "loginStateCtrl"
  });
  
  $stateProvider.state("home.contact", {
    url: "/contact",
    templateUrl: "view/contact.html"
  });
  
  
});

_innoApp.controller("homeStateCtrl", ["$scope", "$location", "$state", "authentication", function($scope, $location, $state, authentication){
  //$location.url("home.intro");
  $scope.user = authentication.user;
  $state.go('home.page-home');
}]);

/*add questions control
_innoApp.controller('myaddController', ['$scope', function ($questions) {
             $questions.add = function () {

                if (angular.isDefined($questions.name) && $questions.name != '') 
                {
                    // ADD A NEW ELEMENT.
                    $questions.list.push({ name: $questions.name });

                    // CLEAR THE FIELDS.
                    $questions.name = '';
                }
            }
        }]
    );*/

/*answer for questions control
_innoApp.controller('myansweraddController', ['$scope', function ($answer) {
             $answer.add = function () {

                if (angular.isDefined($answer.name) && $answer.name != '') 
                {
                    // ADD A NEW ELEMENT.
                    $answer.lists.push({ name: $answer.name });

                    // CLEAR THE FIELDS.
                    $answer.name = '';
                }
            }
        }]
    );*/

/*questions hide show control*/
_innoApp.controller("Questionctrl", ["$scope", function ($scope) {
	
	 $scope.lists = [];
	 var tempIndex = 0;
	 
     $scope.questionList = [{
       question : "What is the Vimeo API and what can I do with it?",
       answer : "The Vimeo API, or Application Programming Interface, is a way for developers to gain access to certain parts of the Vimeo website to create an application using data from Vimeo. To use the API, you will need to create an API Application on our developer"
     },{
       question : "Where can I get documentation on the Vimeo API?",
       answer : "he Vimeo API, or Application Programming Interface, is a way for developers to gain "
     },{
       question : "Where can I get documentation on the Vimeo API?",
       answer : "he Vimeo API, or Application Programming Interface, is a way for developers to gain "
     }];
	 
	 $scope.addQuestion = function(){
		 //qusetionText
		 if (angular.isDefined($scope.qusetionText) && $scope.qusetionText != '') 
			{
				// ADD A NEW ELEMENT.
				$scope.lists.push({ question: $scope.qusetionText, answer: null });
				// CLEAR THE FIELDS.
				$scope.qusetionText = '';
			}
	 }
	 
	 $scope.qusetionClick = function(aVal){
		 tempIndex = aVal;
	 }
	 
	 $scope.addAnswer = function(){
		 //answerText
		 if (angular.isDefined($scope.answerText) && $scope.answerText != '') 
			{
				// ADD A NEW ELEMENT.
				//$scope.lists.push({ name: $scope.answerText, answer: null });
				$scope.lists[tempIndex].answer = $scope.answerText;
				// CLEAR THE FIELDS.
				$scope.answerText = '';
				$scope.questionList.push($scope.lists[tempIndex]);
				$scope.lists.splice(tempIndex, 1);
			}
	 }
	 
	 
}]);


/*login panel control*/
_innoApp.controller("loginStateCtrl", ["$scope", "$location", "authentication", function($scope, $location, authentication){
  
  $scope.isValid = null;
  
  var userData = [
    {name: "user1", passw: "pass"},
    {name: "admin", passw: "admin"},
    {name: "eswar", passw: "eswar"}    
  ];
  
  $scope.login = function(uVal, pVal){
    //console.log("User Name: "+uVal+", Password: "+pVal);
    for(i=0;i<userData.length;i++){
      if(userData[i].name == uVal && userData[i].passw == pVal){
        $location.url("home");
        authentication.user = uVal;
        $scope.isValid = false;
        break;
      }else{
        $scope.isValid = true;
      }
    }
  }

/*$scope.questions = [];
 
        $scope.add = function() {
    var query = prompt("Enter the Question");
    if (!query) {return;}
    if(!query != null) {
        $scope.questions.push(query);
        query = "";
     }
             }*/


}]);

_innoApp.factory("authentication", function(){
  return {
    isAuthenticated: false,
    user: null
  }
});







