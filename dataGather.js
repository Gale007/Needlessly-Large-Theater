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

		for(var i = 0; i <= json.length; i++)
			{
				console.log(i);
				json[i]
			}
	}

	var page = new RiotApiChallenge();
})