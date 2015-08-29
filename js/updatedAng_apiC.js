//global vars


var changeViewTracker = 0;
var masteryOpacity = 0;
var audioControllerVar = 0;
var tableCounter = 0;


angular.module('viewController',['ngRoute'])
	.config(function($routeProvider){
			$routeProvider
			.when("/", {templateUrl:"partials/view1.html"})
			
			.when("/page-top", {templateUrl:"partials/view1.html"})
			.when("/getInfoButton", {templateUrl:"partials/view1.html"})
			.when("/partials/view2.html",{templateUrl:"partials/view2.html"})
			.when("/partials/view3.html",{templateUrl:"partials/view3.html"})
			.when("/partials/view3.html",{templateUrl:"partials/view3.html"})
			.when("/partials/view4.html",{templateUrl:"partials/view4.html"})
			.when("/partials/championHtml.html",{templateUrl:"partials/championHtml.html"})
	})
	.controller("changeController", changeController)

function changeController($scope){

	/*	$scope.routeTests = "testing";
		
		$scope.itemNLR = "NLR";

		$scope.itemArch = "Archangel's staff";
		
		$scope.itemAthenes = "Athene's Unholy Grail";

		$scope.itemLiandrys = "Liandry's Torment";

		$scope.itemLudens = "Luden's echo";

		$scope.itemMorello = "Morellonomicon";

		$scope.itemNashors = "Nashor's Tooth";

		$scope.itemRabadons = "Rabadon's Death Cap";
		
		$scope.itemRoA = "Rod of ages";
		
		$scope.itemRylais = "Rylai's Crystal Sceptor";

		$scope.itemVoid = "Void Staff";

		$scope.itemWota = "Will of the Ancients";

		$scope.itemZhonyas = "Zhonya's Hourglass";*/
		
		
		
		
		
		//this code will change the view as well as make an animation as if you are looking at posters and switching them as you move between them.
		
		
		$scope.viewChangeFuncLeft = function(){
		//seperate these two;
			$("#viewManager").addClass("animated fadeOutRightBig").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated fadeOutRightBig")	
				
			$("#viewManager").addClass("animated bounceInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated bounceInUp")})})
				
				changeViewTracker++;
				console.log(changeViewTracker);
				
				if(changeViewTracker <= 1)
					{
						$("#viewSelector").attr("href", "#partials/view2.html");
						
					}
					
				else if(changeViewTracker === 2)
					{
						$("#viewSelector").attr("href", "#partials/view3.html");
						
										
					}
					
				else if(changeViewTracker === 3)
					{
						$("#viewSelector").attr("href", "#partials/view4.html");
						
					}
				else if(changeViewTracker >= 4)
					{
						$("#viewSelector").attr("href", "#/");
						changeViewTracker = 0;
					}	
				
				
			
			
							
				
			$("#first-background").addClass("animated lightSpeedOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated lightSpeedOut")})
			
			
			
		}
		
		
		
		$scope.viewChangeFuncRight = function(){
		//seperate these two;
			$("#viewManager").addClass("animated fadeOutLeftBig").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated fadeOutLeftBig")	
				
			$("#viewManager").addClass("animated bounceInUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated bounceInUp")})})
				
		
		
			
			
					
			
				changeViewTracker--;
				console.log(changeViewTracker);
				
				if(changeViewTracker <= 0)
					{
						changeViewTracker--;
						$("#viewSelector2").attr("href", "#partials/view2.html");
						changeViewTracker = 3;
					}
				
				
					
				else if(changeViewTracker === 1)
					{
						$("#viewSelector2").attr("href", "#partials/view3.html");
					}
				else if(changeViewTracker === 2)
					{
						$("#viewSelector2").attr("href", "#/");
					}
				
					
				
				
							
				
			$("#first-background").addClass("animated lightSpeedOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated lightSpeedOut")})
			
			
			
			
		}
		
		//this is ffor the second page will control the appearence of the masteries and runesss.
		$scope.masteries = function(){
			console.log("yuik");
			if(masteryOpacity === 1){
			
				$("#runes_masteries_Holder").addClass("animated fadeOutUp").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated fadeOutUp")})
				
				document.getElementById("runes_masteries_Holder").style.opacity = 0;
				$("#championTableHolder").css("pointer-events","auto");
				
				masteryOpacity = 0;
			}
	
			else if(masteryOpacity === 0){
			
				$("#runes_masteries_Holder").addClass("animated fadeInDown").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated fadeInDown")})
			
				document.getElementById("runes_masteries_Holder").style.opacity =  1;
				$("#championTableHolder").css("pointer-events","none");
				
				masteryOpacity = 1;
			}
		}
		
		
		
		
		
		//this is the code that handles the charts, the chartTracker will loop up to 4 then head back to = where 
		var chartTracker = 0; 
		
		$scope.chartChangeLeftFunc = function(){
			chartTracker++
			graphSelector++;
			
			if(graphSelector >= 3 ){
		 		graphSelector = 0;
		 	}
			
				$("#naTestChart").addClass("animated zoomOutLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated zoomOutLeft")  
				
				$("#naTestChart").addClass("animated zoomInRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated zoomInRight")})})
				
				if(graphSelector === 0){$(chartIdentifier).text("NA");}
				
				else if(graphSelector === 1){$(chartIdentifier).text("EUW");}
		 	
		 	console.log(graphSelector);
		}
		
		
		$scope.chartChangeRightFunc = function(){
			graphSelector--
			
			if(graphSelector < 0){
				graphSelector = 4
			}
			
			
			$("#naTestChart").addClass("animated zoomOutRight").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated zoomOutRight")  
				
				$("#naTestChart").addClass("animated zoomInLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
				function(){$(this).removeClass("animated zoomInLeft")})})
			
			if(graphSelector === 0){$(chartIdentifier).text("NA")}
			else if(graphSelector === 1){$(chartIdentifier).text("EUW");}
		}
		
		//the auido pause and play function
		$scope.audioControl = function(){
			console.log("yaraeraw");
			
			audioIdHolder = document.getElementById("crowdSounds");
			if(audioControllerVar === 0){
				
				audioIdHolder.pause();
				audioControllerVar = 1;
			}
			else if(audioControllerVar === 1){
			
				audioIdHolder.play();
				audioControllerVar = 0;
			
			}
			
		
		}
		
			
			
		$scope.tableController = function(){
				
				if(tableCounter === 0 ){
					//challenger switch to new items.
					$("#challengerMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3165.png");
					$("#challenger2ndMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3089.png");
					$("#challenger3rdMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3157.png");
					$("#challenger4thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3135.png");
					$("#challenger5thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3285.png");
					//master switch.
					
					$("#masterMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3157.png");
					$("#master2ndMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3089.png");
					$("#master3rdMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3285.png");
					$("#master4thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3135.png");
					$("#master5thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3165.png");
					
					//diamond switch.
					
					$("#diamondMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3157.png");
					$("#diamond2ndMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3089.png");
					$("#diamond3rdMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3285.png");
					$("#diamond4thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3165.png");
					$("#diamond5thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3135.png");
					
					//plat switch
					
					$("#platMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3157.png");
					$("#plat2ndMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3089.png");
					$("#plat3rdMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3285.png");
					$("#plat4thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3165.png");
					$("#plat5thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3135.png");
					
					$("#tableButton").html("Switch to Old Items");
					tableCounter = 1;
				}
				
				
				else if(tableCounter === 1 ){
				
					//challenger switch.
					$("#challengerMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3135.png");
					$("#challenger2ndMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3089.png");
					$("#challenger3rdMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3165.png");
					$("#challenger4thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3285.png");
					$("#challenger5thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3157.png");
					//master switch.
					
					$("#masterMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3157.png");
					$("#master2ndMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3285.png");
					$("#master3rdMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3089.png");
					$("#master4thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3135.png");
					$("#master5thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3165.png");
					
					//diamond switch.
					
					$("#diamondMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3157.png");
					$("#diamond2ndMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3089.png");
					$("#diamond3rdMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3285.png");
					$("#diamond4thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3165.png");
					$("#diamond5thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3135.png");
					
					//plat switch
					
					$("#platMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/item/3157.png");
					$("#plat2ndMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/item/3089.png");
					$("#plat3rdMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/item/3165.png");
					$("#plat4thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3285.png");
					$("#plat5thMP").attr("src", "http://ddragon.leagueoflegends.com/cdn/5.14.1/img/item/3135.png");
					
					tableCounter = 0;
					
					$("#tableButton").html("Switch to New Items");
				}
			}
};

var itemsApp = angular.module('viewItemApp',['ngRoute'])
	itemsApp .config(function($routeProvider){
		$routeProvider
		.when("/partials/championHtml.html",{templateUrl:"partials/itemTableView.html"})
		
	})
	