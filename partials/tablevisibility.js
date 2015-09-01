var easeTog = 0;
var vidList = 0;

/*This script will control the menu for the champions, when you click on the champion and then the
item you want to see the champ with you will then be taken to the video of the champ with that item.

vid list var is a way to tell which champion was selected, and easeTog controlls the visibility*/
//the large chuncks of cut code are for the possibility of adding all changed items, for right now though Im only doing Needlessly large rod dmg changes
$(document).ready(function(){
	function itemVisiblityChanger(){
 //gonna have to change this most likely 
		$("#firstChamp").on("click", this.firstItemSet.bind(this));
		
		$("#secondChamp").on("click", this.secondItemSet.bind(this));
		
		$("#thirdChamp").on("click", this.thirdItemSet.bind(this));
		
		$("#fourthChamp").on("click", this.fourthItemSet.bind(this));

		$("#fifthChamp").on("click", this.fifthItemSet.bind(this));

		$("#sixthChamp").on("click", this.sixthItemSet.bind(this));
		
		$("#seventhChamp").on("click", this.seventhItemSet.bind(this));
		
		
		/*$("#champFirstItem").on("click", this.firstItemVid.bind(this));
		
		$("#champSecondItem").on("click", this.secondItemVid.bind(this));
		
		$("#champThirdItem").on("click", this.thirdItemVid.bind(this));*/
	}
	//GO THROUGH AND REPLACE WITH VIDEOES FROM SHOWING NLR DMG!

	//this is code for the first set of items
	 itemVisiblityChanger.prototype.firstItemSet = function(){
	 //lux
	 	$("#videoDemo").attr('src', "https://www.youtube.com/embed/Gz9NBLL5feQ");
	 
	 
	 	//code for if I decide to add more items to the viewing page
	 	
	 
	 	/*if(easeTog >= 0 && vidList != 1)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "visible";
	 		easeTog = 1;
	 		vidList = 1;
	 		
		}
		else if(easeTog === 1 && vidList === 1)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "hidden";
	 		easeTog = 0;
	 		vidList  = 0;
	 	}
	 	
	 	console.log(easeTog);
	 	console.log(vidList);*/
	}


	itemVisiblityChanger.prototype.secondItemSet = function(){
		//Ahri
	
	
		$("#videoDemo").attr('src', "https://www.youtube.com/embed/7akKyD3OPGE");
	
	
	
	
		/*if(easeTog >= 0 && vidList != 2)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "visible";
	 		easeTog = 2;
	 		vidList = 2;
	 		
		}
		else if(easeTog === 2 && vidList === 2)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "hidden";
	 		easeTog = 0;
	 		vidList  = 0;

	 	}
		
		console.log(easeTog);
	 	console.log(vidList);*/
	}

	itemVisiblityChanger.prototype.thirdItemSet = function(){
	$("#videoDemo").attr('src', "https://www.youtube.com/embed/n_r5KJtsLTk");
	
	
	
		//leblanc
		
		/*if(easeTog >= 0 && vidList != 3)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "visible";
	 		easeTog = 3;
	 		vidList = 3;
	 		
		}
		else if(easeTog === 3 && vidList === 3)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "hidden";
	 		easeTog = 0;
	 		vidList  = 0;

	 	}
		
		console.log(easeTog);
	 	console.log(vidList);
	 	
	 	*/
	}

	itemVisiblityChanger.prototype.fourthItemSet = function(){
	
	
	$("#videoDemo").attr('src', "https://www.youtube.com/embed/EnpPuXG7ciQ");
	
	
	
	//fizz
		/*if(easeTog >= 0 && vidList != 4)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "visible";
	 		easeTog = 4;
	 		vidList = 4;
	 		
		}
		else if(easeTog === 4 && vidList === 4)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "hidden";
	 		easeTog = 0;
	 		vidList  = 0;

	 	}
		
		console.log(easeTog);
	 	console.log(vidList);*/
	}

	itemVisiblityChanger.prototype.fifthItemSet = function(){
	
	$("#videoDemo").attr('src', "https://www.youtube.com/embed/zH9o3TUlHXQ");
	//annie
	
		/*if(easeTog >= 0 && vidList != 5)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "visible";
	 		easeTog = 5;
	 		vidList = 5;
	 		
		}
		else if(easeTog === 5 && vidList === 5)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "hidden";
	 		easeTog = 0;
	 		vidList  = 0;

	 	}
		
		console.log(easeTog);
	 	console.log(vidList);*/
	}

	itemVisiblityChanger.prototype.sixthItemSet = function(){
	//anivia
	
		$("#videoDemo").attr('src', "https://www.youtube.com/embed/y4Gy5VPAOsE");
	
		/*if(easeTog >= 0 && vidList != 6)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "visible";
	 		easeTog = 6;
	 		vidList = 6;
	 		
		}
		else if(easeTog === 6 && vidList === 6)
	 	{
	 		document.getElementById("firstChampItems").style.visibility = "hidden";
	 		easeTog = 6;
	 		vidList  = 6;

	 	}
		
		console.log(easeTog);
	 	console.log(vidList);*/
	}



	itemVisiblityChanger.prototype.seventhItemSet = function(){
	//katarina
		$("#videoDemo").attr('src', "https://www.youtube.com/embed/NZsg6siE6PM");
	
	
		
	}
	
	//this is the code that will bechecking the vid list and changing the video.
	
	
	
	/*itemVisiblityChanger.prototype.firstItemVid = function(){
		
	
	
		if(vidList == 1){
			$("#videoDemo").attr('src', "https://www.youtube.com/embed/49HESOhY8z4");
			}

		else if(vidList == 2){
			$("#videoDemo").attr('src', "https://www.youtube.com/embed/9kVuJxgWP5c");
		}

		else if(vidList == 3){
			$("#videoDemo").attr('src', "");
		}

		else if(vidList == 4){
			$("#videoDemo").attr('src', "");
		}

		else if(vidList == 5){
			$("#videoDemo").attr('src', "");
		}

		else if(vidList == 6){
			$("#videoDemo").attr('src', "");
		}
	}
	
	
	itemVisiblityChanger.prototype.secondItemVid = function(){
		if(vidList == 1){
			$("#videoDemo").attr('src', "https://www.youtube.com/embed/X-P89ttMojc");
		}
		else if(vidList == 2){
			$("#videoDemo").attr('src', "https://www.youtube.com/embed/g1ivx1aK-wk");
		}

		else if(vidList == 3){
			$("#videoDemo").attr('src', "");
		}

		else if(vidList == 4){
			$("#videoDemo").attr('src', "");
		}

		else if(vidList == 5){
			$("#videoDemo").attr('src', "");
		}

		else if(vidList == 6){
			$("#videoDemo").attr('src', "");
		}
	}
	
	
	itemVisiblityChanger.prototype.thirdItemVid = function(){
		if(vidList == 1){
			$("#videoDemo").attr('src', "https://www.youtube.com/embed/b7QlTyVxlDg");
		}
		else if(vidList == 2){
			$("#videoDemo").attr('src', "https://www.youtube.com/embed/yOGDFOeuVlM");
		}

		else if(vidList == 3){
			$("#videoDemo").attr('src', "");
		}

		else if(vidList == 4){
			$("#videoDemo").attr('src', "");
		}

		else if(vidList == 5){
			$("#videoDemo").attr('src', "");
		}

		else if(vidList == 6){
			$("#videoDemo").attr('src', "");
		}
	}*/
	var page = new itemVisiblityChanger();
});