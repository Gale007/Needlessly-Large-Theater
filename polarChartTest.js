$(document).ready(function(){
	var ctx = $("#naTestChart").get(0).getContext("2d");

	

	var data = [
		{
			value:300,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label:"Red"
		},
		{
	        value: 50,
	        color: "#46BFBD",
	        highlight: "#5AD3D1",
	        label: "Green"
	    },

	    {
	        value: 100,
	        color: "#FDB45C",
	        highlight: "#FFC870",
	        label: "Yellow"
	    },

	    {
	        value: 40,
	        color: "#949FB1",
	        highlight: "#A8B3C5",
	        label: "Grey"
	    },
	];

	var testingNewChart = new Chart(ctx).Pie(data);
});