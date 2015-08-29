$(document).ready(function(){


	function RiotApiChallenge(){

		$('#getInfoButton').on('click', this.getMatchData.bind(this));
	}


	RiotApiChallenge.prototype.getMatchData = function(){
		var url = 'NA.json'
		$.getJSON(url,{}, this.readData.bind(this))
	}

	RiotApiChallenge.prototype.readData = function(json){
		console.log(json);
		var i = 0;
		/*for(var i = 0; i <= json.length;)
			{*/
				
		setInterval(function (){console.log(json[i]); i++;}, 2000);
		
	}

	var page = new RiotApiChallenge();
})