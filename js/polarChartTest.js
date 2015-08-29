var data2;
var data3;
var test3;
//data for the individual ranks of kr tested ranked games 


var graphSelector = 0;
var gameType = 1;
$(document).ready(function(){

	//this is the js that controls the 
	//Graphs and charts, 
	
	
	var test3 = $("#naTestChart").get(0).getContext("2d");
	
	var data = [
		{
			value:3638,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label:"Red"
		},
		{
	        value: 1844,
	        color: "#46BFBD",
	        highlight: "#5AD3D1",
	        label: "Green"
	    },

	    {
	        value: 1354,
	        color: "#FDB45C",
	        highlight: "#FFC870",
	        label: "Yellow"
	    },

	    {
	        value: 3279,
	        color: "#949FB1",
	        highlight: "#A8B3C5",
	        label: "Grey"
	    },
	    
	    {
	        value: 16195,
	        color: "yellow",
	        highlight: "red",
	        label: "Rods"
	    },
	];
	
	dataKr = {
		    labels: ["Liandry's", "Rylai's", "Rabadon's", "Zhonya's Hourglass", "NLR", "Luden's Echo", "ArchAngels","RoA","Void Staff","Nashor's Tooth","WotA","Morello","Athene's","Seraph's"],
		    datasets: [
		        {
		            label: "normal Old Items",
		            fillColor: "red",
		            strokeColor: "rgba(220,220,220,0.8)",
		            highlightFill: "rgba(220,220,220,0.75)",
		            highlightStroke: "rgba(220,220,220,1)",
		            //kr normal Old
		            data: [2274, 1095, 7411, 9761, 30321, 8170, 1827, 4673, 4232, 1034, 906, 7064, 2532, 1410]
		        },
		        {
		            label: "normal New  Items",
		            fillColor: "blue",
		            strokeColor: "rgba(151,187,205,0.8)",
		            highlightFill: "rgba(151,187,205,0.75)",
		            highlightStroke: "rgba(151,187,205,1)",
		            data: [2274, 1212, 7242, 9366, 32506, 6930, 1273, 2667, 2710, 1788, 507, 5525, 1562, 935]
		            
		            
		            
		        }
		    ]
		};
		
		
	dataNa = {
		    labels: ["Liandry's", "Rylai's", "Rabadon's", "Zhonya's Hourglass", "NLR", "Luden's Echo", "ArchAngels","RoA","Void Staff","Nashor's Tooth","WotA","Morello","Athene's","Seraph's"],
		    datasets: [
		        {
		        
		        //
		            label: "Ranked Old Items",
		            fillColor: "red",
		            strokeColor: "rgba(220,220,220,0.8)",
		            highlightFill: "rgba(220,220,220,0.75)",
		            highlightStroke: "rgba(220,220,220,1)",
		            //ranked old NA
		            data: [3535, 3740, 7955, 10287, 38763, 6908, 1453, 4811, 4019, 1360, 1102, 5147, 2854, 1277]
		        },
		        {
		            label: "Ranked New  Items",
		            fillColor: "blue",
		            strokeColor: "rgba(151,187,205,0.8)",
		            highlightFill: "rgba(151,187,205,0.75)",
		            highlightStroke: "rgba(151,187,205,1)",
		            data: [3474, 3707, 7699, 8990, 34443, 6699, 1315, 4343, 3384, 1270, 1032, 4963, 2643, 1105]
		            
		            
		            
		        }
		    ]
		};
		
	
	//Normal game statistics 
	dataNaNorm = {
		    labels: ["Liandry's", "Rylai's", "Rabadon's", "Zhonya's Hourglass", "NLR", "Luden's Echo", "ArchAngels","RoA","Void Staff","Nashor's Tooth","WotA","Morello","Athene's","Seraph's"],
		    datasets: [
		        {
		        
		        //
		            label: "Normal Old Items",
		            fillColor: "red",
		            strokeColor: "rgba(220,220,220,0.8)",
		            highlightFill: "rgba(220,220,220,0.75)",
		            highlightStroke: "rgba(220,220,220,1)",
		            //ranked old NA
		            data: [3535, 3740, 7955, 10287, 38763, 6908, 1453, 4811, 4019, 1360, 1102, 5147, 2854, 1277]
		        },
		        {
		            label: "Ranked New  Items",
		            fillColor: "blue",
		            strokeColor: "rgba(151,187,205,0.8)",
		            highlightFill: "rgba(151,187,205,0.75)",
		            highlightStroke: "rgba(151,187,205,1)",
		            data: [3474, 3707, 7699, 8990, 34443, 6699, 1315, 4343, 3384, 1270, 1032, 4963, 2643, 1105]
		            
		            
		            
		        }
		    ]
		};
		


	 data3 = [
		{
			value:3638,
			color:"#F7464A",
			highlight: "#FF5A5E",
			label:"Liandry's"
		},
		
		{
	        value: 1844,
	        color: "#46BFBD",
	        highlight: "#5AD3D1",
	        label: "Rylai's"
	    },

	    {
	        value: 1354,
	        color: "#FDB45C",
	        highlight: "#FFC870",
	        label: "Rabadon's"
	    },

	    {
	        value: 3279,
	        color: "#949FB1",
	        highlight: "#A8B3C5",
	        label: "Zhonya's Hourglass"
	    },
	    
	    {
	        value: 16195,
	        color: "yellow",
	        highlight: "red",
	        label: "NLR"
	    },
	    
	    {
	        value: 0,
	        color: "orange",
	        highlight: "red",
	        label: "Luden's Echo"
	    },
	    
	    {
	        value: 0,
	        color: "purple",
	        highlight: "red",
	        label: "ArchAngels"
	    },
	   
	    {
	        value: 0,
	        color: "white",
	        highlight: "red",
	        label: "RoA"
	    },
	  
	    {
	        value: 0,
	        color: "grey",
	        highlight: "red",
	        label: "Void Staff"
	    },
	    {
	        value: 0,
	        color: "black",
	        highlight: "red",
	        label: "Nashor's Tooth"
	  
	    },
	   
	    {
	        value: 0,
	        color: "green",
	        highlight: "red",
	        label: "WotA"
	    },
	     {
	        value: 0,
	        color: "blue",
	        highlight: "red",
	        label: "Morello"
	    },
	    
	     {
	        value: 0,
	        color: "gold",
	        highlight: "red",
	        label: "Athene's"
	    },
	   
	     {
	        value: 0,
	        color: "silver",
	        highlight: "red",
	        label: "Seraph's"
	    },
	    
	    
	    
	];
	
	
	//var testingNewChart2 = new Chart(ztx).Bar(data2);
	//var testingNewChart = new Chart(ctx).Pie(data);
	
	
	test3 = new Chart(test3).Bar(dataKr, {scaleFontColor: "#ffa500", scaleFontStyle: "normal", scaleFontSize: 14});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	value 1 = liandrys
	value 2 = rylais
	value 3 = rabadons
	value 4 = zhonyas
	value 5 = NLR
	value 6 = ludens
	value 7 = archangels
	value 8 = roa
	value 9 = void
	value 10 = nashors
	value 11 = wota
	value 12 = morello
	value 13 = athenes
	value 14 = seraphs
	*/
	$("#leftButtonNav").on('click', function(){
		console.log(graphSelector);
		
		
		
		
		
		
		if(graphSelector === 0 && gameType === 0){
			$("#chartIdentifier").text("KR RANKED")
		//new items for korea  ranked 
			
			
			test3.datasets[1].bars[0].value = 1626;
			test3.datasets[1].bars[1].value = 797;
			test3.datasets[1].bars[2].value = 5523;
			test3.datasets[1].bars[3].value = 7139;
			test3.datasets[1].bars[4].value = 22773;
			test3.datasets[1].bars[5].value = 4524;
			test3.datasets[1].bars[6].value = 1506;
			test3.datasets[1].bars[7].value = 2493;
			test3.datasets[1].bars[8].value = 3383;
			test3.datasets[1].bars[9].value = 660;
			test3.datasets[1].bars[10].value = 1077;
			test3.datasets[1].bars[11].value = 4934;
			test3.datasets[1].bars[12].value = 2859;
			test3.datasets[1].bars[13].value = 1220;
			
			
		
		
		
			
			/*
		value 1 = liandrys
		value 2 = rylais
		value 3 = rabadons
		value 4 = zhonyas
		value 5 = NLR
		value 6 = ludens
		value 7 = archangels
		value 8 = roa
		value 9 = void
		value 10 = nashors
		value 11 = wota
		value 12 = morello
		value 13 = athenes
		value 14 = seraphs
		*/
			
		//ranked old items
			
			
			test3.datasets[0].bars[0].value = 2021;
			test3.datasets[0].bars[1].value = 1236;
			test3.datasets[0].bars[2].value = 7071;
			test3.datasets[0].bars[3].value = 10822;
			test3.datasets[0].bars[4].value = 28987;
			test3.datasets[0].bars[5].value = 6390;
			test3.datasets[0].bars[6].value = 2326;
			test3.datasets[0].bars[7].value = 4538;
			test3.datasets[0].bars[8].value = 4842;
			test3.datasets[0].bars[9].value = 646;
			test3.datasets[0].bars[10].value = 1946;
			test3.datasets[0].bars[11].value = 6707;
			test3.datasets[0].bars[12].value = 2639;
			test3.datasets[0].bars[13].value = 2017;
		
			test3.update();
		}
		
		
		
		
		//NA DATA!!!
		
		
		
		//NEW ITTEMS RANKED!
		else if(graphSelector === 1 && gameType === 0)
		{
		
			$("#chartIdentifier").text("NA RANKED")
				/*
				value 1 = liandrys
				value 2 = rylais
				value 3 = rabadons
				value 4 = zhonyas
				value 5 = NLR
				value 6 = ludens
				value 7 = archangels
				value 8 = roa
				value 9 = void
				value 10 = nashors
				value 11 = wota
				value 12 = morello
				value 13 = athenes
				value 14 = seraphs
		*/
		
			test3.datasets[1].bars[0].value = 3474;
			test3.datasets[1].bars[1].value = 3707;
			test3.datasets[1].bars[2].value = 7699;
			test3.datasets[1].bars[3].value = 8990;
			test3.datasets[1].bars[4].value = 34443;
			test3.datasets[1].bars[5].value = 6699;
			test3.datasets[1].bars[6].value = 1315;
			test3.datasets[1].bars[7].value = 4343;
			test3.datasets[1].bars[8].value = 3384;
			test3.datasets[1].bars[9].value = 1270;
			test3.datasets[1].bars[10].value = 1032;
			test3.datasets[1].bars[11].value = 4963;
			test3.datasets[1].bars[12].value = 2643;
			test3.datasets[1].bars[13].value = 1105;
			
			
			
		//OLD ITEMS RANKED
		
			test3.datasets[0].bars[0].value = 3535;
			test3.datasets[0].bars[1].value = 3740;
			test3.datasets[0].bars[2].value = 7955;
			test3.datasets[0].bars[3].value = 10287;
			test3.datasets[0].bars[4].value = 38763;
			test3.datasets[0].bars[5].value = 6908;
			test3.datasets[0].bars[6].value = 1453;
			test3.datasets[0].bars[7].value = 4811;
			test3.datasets[0].bars[8].value = 4019;
			test3.datasets[0].bars[9].value = 1360;
			test3.datasets[0].bars[10].value = 1102;
			test3.datasets[0].bars[11].value = 5147;
			test3.datasets[0].bars[12].value = 2854;
			test3.datasets[0].bars[13].value = 1277;
		
			test3.update();
		}
		
		
		
		
		//EUW NEW RANKED!
		
		else if(graphSelector === 2 && gameType === 0){
			
			$("#chartIdentifier").text("EUW RANKED")
			
			test3.datasets[1].bars[0].value = 3477;
			test3.datasets[1].bars[1].value = 4272;
			test3.datasets[1].bars[2].value = 10649;
			test3.datasets[1].bars[3].value = 11223;
			test3.datasets[1].bars[4].value = 43706;
			test3.datasets[1].bars[5].value = 9136;
			test3.datasets[1].bars[6].value = 1573;
			test3.datasets[1].bars[7].value = 5089;
			test3.datasets[1].bars[8].value = 4216;
			test3.datasets[1].bars[9].value = 1424;
			test3.datasets[1].bars[10].value = 1175;
			test3.datasets[1].bars[11].value = 5618;
			test3.datasets[1].bars[12].value = 2600;
			test3.datasets[1].bars[13].value = 1412;
	
	
		//EUW OLD RANKED ITEMS
			/*
				value 1 = liandrys
				value 2 = rylais
				value 3 = rabadons
				value 4 = zhonyas
				value 5 = NLR
				value 6 = ludens
				value 7 = archangels
				value 8 = roa
				value 9 = void
				value 10 = nashors
				value 11 = wota
				value 12 = morello
				value 13 = athenes
				value 14 = seraphs
		*/
			test3.datasets[0].bars[0].value = 2833;
			test3.datasets[0].bars[1].value = 2595;
			test3.datasets[0].bars[2].value = 10327;
			test3.datasets[0].bars[3].value = 11845;
			test3.datasets[0].bars[4].value = 38608;
			test3.datasets[0].bars[5].value = 11262;
			test3.datasets[0].bars[6].value = 2217;
			test3.datasets[0].bars[7].value = 6350;
			test3.datasets[0].bars[8].value = 5523;
			test3.datasets[0].bars[9].value = 742;
			test3.datasets[0].bars[10].value = 1720;
			test3.datasets[0].bars[11].value = 6093;
			test3.datasets[0].bars[12].value = 2838;
			test3.datasets[0].bars[13].value = 1976;
			
			
			test3.update();
		
		}
		
		
		//NORMAL GAME STATS!!!
		
		
		
		
		
		
		if(graphSelector === 0 && gameType === 1){
			$("#chartIdentifier").text("KR NORMAL")
		//new items for korea  normal  
			
			
			test3.datasets[1].bars[0].value = 2274;
			test3.datasets[1].bars[1].value = 1212;
			test3.datasets[1].bars[2].value = 7242;
			test3.datasets[1].bars[3].value = 9366;
			test3.datasets[1].bars[4].value = 32506;
			test3.datasets[1].bars[5].value = 6930;
			test3.datasets[1].bars[6].value = 1273;
			test3.datasets[1].bars[7].value = 2667;
			test3.datasets[1].bars[8].value = 2710;
			test3.datasets[1].bars[9].value = 1788;
			test3.datasets[1].bars[10].value = 507;
			test3.datasets[1].bars[11].value = 5525;
			test3.datasets[1].bars[12].value = 1562;
			test3.datasets[1].bars[13].value = 935;
			
			
		
		
		
			
			/*
		value 1 = liandrys
		value 2 = rylais
		value 3 = rabadons
		value 4 = zhonyas
		value 5 = NLR
		value 6 = ludens
		value 7 = archangels
		value 8 = roa
		value 9 = void
		value 10 = nashors
		value 11 = wota
		value 12 = morello
		value 13 = athenes
		value 14 = seraphs
		*/
			
		//normal old items
			
			
			test3.datasets[0].bars[0].value = 2274;
			test3.datasets[0].bars[1].value = 1095;
			test3.datasets[0].bars[2].value = 7411;
			test3.datasets[0].bars[3].value = 9761;
			test3.datasets[0].bars[4].value = 30321;
			test3.datasets[0].bars[5].value = 8170;
			test3.datasets[0].bars[6].value = 1827;
			test3.datasets[0].bars[7].value = 4673;
			test3.datasets[0].bars[8].value = 4232;
			test3.datasets[0].bars[9].value = 1034;
			test3.datasets[0].bars[10].value = 906;
			test3.datasets[0].bars[11].value = 7064;
			test3.datasets[0].bars[12].value = 2532;
			test3.datasets[0].bars[13].value = 1410;
		
			test3.update();
		}
		
		
		
		
		//NA  DATA!!!
		
		
		
		//NEW ITEMS NORMAL!
		else if(graphSelector === 1 && gameType === 1)
		{
		
			$("#chartIdentifier").text("NA NORMAL")
			
		
			test3.datasets[1].bars[0].value = 3761;
			test3.datasets[1].bars[1].value = 3280;
			test3.datasets[1].bars[2].value = 8291;
			test3.datasets[1].bars[3].value = 7494;
			test3.datasets[1].bars[4].value = 33695;
			test3.datasets[1].bars[5].value = 7099;
			test3.datasets[1].bars[6].value = 1443;
			test3.datasets[1].bars[7].value = 4305;
			test3.datasets[1].bars[8].value = 3235;
			test3.datasets[1].bars[9].value = 1596;
			test3.datasets[1].bars[10].value = 728;
			test3.datasets[1].bars[11].value = 5455;
			test3.datasets[1].bars[12].value = 2585;
			test3.datasets[1].bars[13].value = 1145;
			
			
			
				/*
				value 1 = liandrys
				value 2 = rylais
				value 3 = rabadons
				value 4 = zhonyas
				value 5 = NLR
				value 6 = ludens
				value 7 = archangels
				value 8 = roa
				value 9 = void
				value 10 = nashors
				value 11 = wota
				value 12 = morello
				value 13 = athenes
				value 14 = seraphs
		*/
			
		//OLD ITEMS NORMAL
		
			test3.datasets[0].bars[0].value = 4031;
			test3.datasets[0].bars[1].value = 4310;
			test3.datasets[0].bars[2].value = 9439;
			test3.datasets[0].bars[3].value = 10520;
			test3.datasets[0].bars[4].value = 35234;
			test3.datasets[0].bars[5].value = 8043;
			test3.datasets[0].bars[6].value = 1513;
			test3.datasets[0].bars[7].value = 5138;
			test3.datasets[0].bars[8].value = 4076;
			test3.datasets[0].bars[9].value = 1528;
			test3.datasets[0].bars[10].value = 1218;
			test3.datasets[0].bars[11].value = 5833;
			test3.datasets[0].bars[12].value = 3122;
			test3.datasets[0].bars[13].value = 1285;
		
			test3.update();
		}
		
		
		
		
		//EUW NEW NORMAL!
		
		else if(graphSelector === 2 && gameType === 1){
			
			$("#chartIdentifier").text("EUW NORMAL")
			
			test3.datasets[1].bars[0].value = 3447;
			test3.datasets[1].bars[1].value = 4091;
			test3.datasets[1].bars[2].value = 12340;
			test3.datasets[1].bars[3].value = 10313;
			test3.datasets[1].bars[4].value = 45700;
			test3.datasets[1].bars[5].value = 10204;
			test3.datasets[1].bars[6].value = 1707;
			test3.datasets[1].bars[7].value = 4462;
			test3.datasets[1].bars[8].value = 4245;
			test3.datasets[1].bars[9].value = 2541;
			test3.datasets[1].bars[10].value = 762;
			test3.datasets[1].bars[11].value = 5497;
			test3.datasets[1].bars[12].value = 2290;
			test3.datasets[1].bars[13].value = 1306;
	
	
		//EUW OLD NORMAL ITEMS
			/*
				value 1 = liandrys
				value 2 = rylais
				value 3 = rabadons
				value 4 = zhonyas
				value 5 = NLR
				value 6 = ludens
				value 7 = archangels
				value 8 = roa
				value 9 = void
				value 10 = nashors
				value 11 = wota
				value 12 = morello
				value 13 = athenes
				value 14 = seraphs
		*/
			test3.datasets[0].bars[0].value = 2660;
			test3.datasets[0].bars[1].value = 2643;
			test3.datasets[0].bars[2].value = 12089;
			test3.datasets[0].bars[3].value = 10673;
			test3.datasets[0].bars[4].value = 42517;
			test3.datasets[0].bars[5].value = 14414;
			test3.datasets[0].bars[6].value = 2057;
			test3.datasets[0].bars[7].value = 4760;
			test3.datasets[0].bars[8].value = 5520;
			test3.datasets[0].bars[9].value = 1358;
			test3.datasets[0].bars[10].value = 1083;
			test3.datasets[0].bars[11].value = 7087;
			test3.datasets[0].bars[12].value = 2960;
			test3.datasets[0].bars[13].value = 1685;
			
			
			test3.update();
		
		}
		
		
		
	
		
	});

	
 	
	
	
	
	
	
	$("#ladderId").on('click', function(){
		
		//switches between normal and ranked modes
		if(gameType === 1){
			gameType = 0;
			
			$('#ladderId').text('RANKED');
		}
		else if(gameType === 0){
			gameType = 1;
			
			$('#ladderId').text('NORMAL')	
		}
		console.log(gameType);
		
		if(graphSelector === 0 && gameType === 0){
			$("#chartIdentifier").text("KR RANKED")
		//new items for korea  ranked 
			
			
			test3.datasets[1].bars[0].value = 1626;
			test3.datasets[1].bars[1].value = 797;
			test3.datasets[1].bars[2].value = 5523;
			test3.datasets[1].bars[3].value = 7139;
			test3.datasets[1].bars[4].value = 22773;
			test3.datasets[1].bars[5].value = 4524;
			test3.datasets[1].bars[6].value = 1506;
			test3.datasets[1].bars[7].value = 2493;
			test3.datasets[1].bars[8].value = 3383;
			test3.datasets[1].bars[9].value = 660;
			test3.datasets[1].bars[10].value = 1077;
			test3.datasets[1].bars[11].value = 4934;
			test3.datasets[1].bars[12].value = 2859;
			test3.datasets[1].bars[13].value = 1220;
			
			
		
		
		
			
			/*
		value 1 = liandrys
		value 2 = rylais
		value 3 = rabadons
		value 4 = zhonyas
		value 5 = NLR
		value 6 = ludens
		value 7 = archangels
		value 8 = roa
		value 9 = void
		value 10 = nashors
		value 11 = wota
		value 12 = morello
		value 13 = athenes
		value 14 = seraphs
		*/
			
		//ranked old items
			
			
			test3.datasets[0].bars[0].value = 2021;
			test3.datasets[0].bars[1].value = 1236;
			test3.datasets[0].bars[2].value = 7071;
			test3.datasets[0].bars[3].value = 10822;
			test3.datasets[0].bars[4].value = 28987;
			test3.datasets[0].bars[5].value = 6390;
			test3.datasets[0].bars[6].value = 2326;
			test3.datasets[0].bars[7].value = 4538;
			test3.datasets[0].bars[8].value = 4842;
			test3.datasets[0].bars[9].value = 646;
			test3.datasets[0].bars[10].value = 1946;
			test3.datasets[0].bars[11].value = 6707;
			test3.datasets[0].bars[12].value = 2639;
			test3.datasets[0].bars[13].value = 2017;
		
			test3.update();
		}
		
		
		
		
		//NA DATA!!!
		
		
		
		//NEW ITTEMS RANKED!
		else if(graphSelector === 1 && gameType === 0)
		{
		
			$("#chartIdentifier").text("NA RANKED")
				/*
				value 1 = liandrys
				value 2 = rylais
				value 3 = rabadons
				value 4 = zhonyas
				value 5 = NLR
				value 6 = ludens
				value 7 = archangels
				value 8 = roa
				value 9 = void
				value 10 = nashors
				value 11 = wota
				value 12 = morello
				value 13 = athenes
				value 14 = seraphs
		*/
		
			test3.datasets[1].bars[0].value = 3474;
			test3.datasets[1].bars[1].value = 3707;
			test3.datasets[1].bars[2].value = 7699;
			test3.datasets[1].bars[3].value = 8990;
			test3.datasets[1].bars[4].value = 34443;
			test3.datasets[1].bars[5].value = 6699;
			test3.datasets[1].bars[6].value = 1315;
			test3.datasets[1].bars[7].value = 4343;
			test3.datasets[1].bars[8].value = 3384;
			test3.datasets[1].bars[9].value = 1270;
			test3.datasets[1].bars[10].value = 1032;
			test3.datasets[1].bars[11].value = 4963;
			test3.datasets[1].bars[12].value = 2643;
			test3.datasets[1].bars[13].value = 1105;
			
			
			
		//OLD ITEMS RANKED
		
			test3.datasets[0].bars[0].value = 3535;
			test3.datasets[0].bars[1].value = 3740;
			test3.datasets[0].bars[2].value = 7955;
			test3.datasets[0].bars[3].value = 10287;
			test3.datasets[0].bars[4].value = 38763;
			test3.datasets[0].bars[5].value = 6908;
			test3.datasets[0].bars[6].value = 1453;
			test3.datasets[0].bars[7].value = 4811;
			test3.datasets[0].bars[8].value = 4019;
			test3.datasets[0].bars[9].value = 1360;
			test3.datasets[0].bars[10].value = 1102;
			test3.datasets[0].bars[11].value = 5147;
			test3.datasets[0].bars[12].value = 2854;
			test3.datasets[0].bars[13].value = 1277;
		
			test3.update();
		}
		
		
		
		
		//EUW NEW RANKED!
		
		else if(graphSelector === 2 && gameType === 0){
			
			$("#chartIdentifier").text("EUW RANKED")
			
			test3.datasets[1].bars[0].value = 3477;
			test3.datasets[1].bars[1].value = 4272;
			test3.datasets[1].bars[2].value = 10649;
			test3.datasets[1].bars[3].value = 11223;
			test3.datasets[1].bars[4].value = 43706;
			test3.datasets[1].bars[5].value = 9136;
			test3.datasets[1].bars[6].value = 1573;
			test3.datasets[1].bars[7].value = 5089;
			test3.datasets[1].bars[8].value = 4216;
			test3.datasets[1].bars[9].value = 1424;
			test3.datasets[1].bars[10].value = 1175;
			test3.datasets[1].bars[11].value = 5618;
			test3.datasets[1].bars[12].value = 2600;
			test3.datasets[1].bars[13].value = 1412;
	
	
		//EUW OLD RANKED ITEMS
			/*
				value 1 = liandrys
				value 2 = rylais
				value 3 = rabadons
				value 4 = zhonyas
				value 5 = NLR
				value 6 = ludens
				value 7 = archangels
				value 8 = roa
				value 9 = void
				value 10 = nashors
				value 11 = wota
				value 12 = morello
				value 13 = athenes
				value 14 = seraphs
		*/
			test3.datasets[0].bars[0].value = 2833;
			test3.datasets[0].bars[1].value = 2595;
			test3.datasets[0].bars[2].value = 10327;
			test3.datasets[0].bars[3].value = 11845;
			test3.datasets[0].bars[4].value = 38608;
			test3.datasets[0].bars[5].value = 11262;
			test3.datasets[0].bars[6].value = 2217;
			test3.datasets[0].bars[7].value = 6350;
			test3.datasets[0].bars[8].value = 5523;
			test3.datasets[0].bars[9].value = 742;
			test3.datasets[0].bars[10].value = 1720;
			test3.datasets[0].bars[11].value = 6093;
			test3.datasets[0].bars[12].value = 2838;
			test3.datasets[0].bars[13].value = 1976;
			
			
			test3.update();
		
		}
		
		
		//NORMAL GAME STATS!!!
		
		
		
		
		
		
		if(graphSelector === 0 && gameType === 1){
			$("#chartIdentifier").text("KR NORMAL")
		//new items for korea  normal  
			
			
			test3.datasets[1].bars[0].value = 2274;
			test3.datasets[1].bars[1].value = 1212;
			test3.datasets[1].bars[2].value = 7242;
			test3.datasets[1].bars[3].value = 9366;
			test3.datasets[1].bars[4].value = 32506;
			test3.datasets[1].bars[5].value = 6930;
			test3.datasets[1].bars[6].value = 1273;
			test3.datasets[1].bars[7].value = 2667;
			test3.datasets[1].bars[8].value = 2710;
			test3.datasets[1].bars[9].value = 1788;
			test3.datasets[1].bars[10].value = 507;
			test3.datasets[1].bars[11].value = 5525;
			test3.datasets[1].bars[12].value = 1562;
			test3.datasets[1].bars[13].value = 935;
			
			
		
		
		
			
			/*
		value 1 = liandrys
		value 2 = rylais
		value 3 = rabadons
		value 4 = zhonyas
		value 5 = NLR
		value 6 = ludens
		value 7 = archangels
		value 8 = roa
		value 9 = void
		value 10 = nashors
		value 11 = wota
		value 12 = morello
		value 13 = athenes
		value 14 = seraphs
		*/
			
		//normal old items
			
			
			test3.datasets[0].bars[0].value = 2274;
			test3.datasets[0].bars[1].value = 1095;
			test3.datasets[0].bars[2].value = 7411;
			test3.datasets[0].bars[3].value = 9761;
			test3.datasets[0].bars[4].value = 30321;
			test3.datasets[0].bars[5].value = 8170;
			test3.datasets[0].bars[6].value = 1827;
			test3.datasets[0].bars[7].value = 4673;
			test3.datasets[0].bars[8].value = 4232;
			test3.datasets[0].bars[9].value = 1034;
			test3.datasets[0].bars[10].value = 906;
			test3.datasets[0].bars[11].value = 7064;
			test3.datasets[0].bars[12].value = 2532;
			test3.datasets[0].bars[13].value = 1410;
		
			test3.update();
		}
		
		
		
		
		//NA  DATA!!!
		
		
		
		//NEW ITEMS NORMAL!
		else if(graphSelector === 1 && gameType === 1)
		{
		
			$("#chartIdentifier").text("NA NORMAL")
			
		
			test3.datasets[1].bars[0].value = 3761;
			test3.datasets[1].bars[1].value = 3280;
			test3.datasets[1].bars[2].value = 8291;
			test3.datasets[1].bars[3].value = 7494;
			test3.datasets[1].bars[4].value = 33695;
			test3.datasets[1].bars[5].value = 7099;
			test3.datasets[1].bars[6].value = 1443;
			test3.datasets[1].bars[7].value = 4305;
			test3.datasets[1].bars[8].value = 3235;
			test3.datasets[1].bars[9].value = 1596;
			test3.datasets[1].bars[10].value = 728;
			test3.datasets[1].bars[11].value = 5455;
			test3.datasets[1].bars[12].value = 2585;
			test3.datasets[1].bars[13].value = 1145;
			
			
			
				/*
				value 1 = liandrys
				value 2 = rylais
				value 3 = rabadons
				value 4 = zhonyas
				value 5 = NLR
				value 6 = ludens
				value 7 = archangels
				value 8 = roa
				value 9 = void
				value 10 = nashors
				value 11 = wota
				value 12 = morello
				value 13 = athenes
				value 14 = seraphs
		*/
			
		//OLD ITEMS NORMAL
		
			test3.datasets[0].bars[0].value = 4031;
			test3.datasets[0].bars[1].value = 4310;
			test3.datasets[0].bars[2].value = 9439;
			test3.datasets[0].bars[3].value = 10520;
			test3.datasets[0].bars[4].value = 35234;
			test3.datasets[0].bars[5].value = 8043;
			test3.datasets[0].bars[6].value = 1513;
			test3.datasets[0].bars[7].value = 5138;
			test3.datasets[0].bars[8].value = 4076;
			test3.datasets[0].bars[9].value = 1528;
			test3.datasets[0].bars[10].value = 1218;
			test3.datasets[0].bars[11].value = 5833;
			test3.datasets[0].bars[12].value = 3122;
			test3.datasets[0].bars[13].value = 1285;
		
			test3.update();
		}
		
		
		
		
		//EUW NEW NORMAL!
		
		else if(graphSelector === 2 && gameType === 1){
			
			$("#chartIdentifier").text("EUW NORMAL")
			
			test3.datasets[1].bars[0].value = 3447;
			test3.datasets[1].bars[1].value = 4091;
			test3.datasets[1].bars[2].value = 12340;
			test3.datasets[1].bars[3].value = 10313;
			test3.datasets[1].bars[4].value = 45700;
			test3.datasets[1].bars[5].value = 10204;
			test3.datasets[1].bars[6].value = 1707;
			test3.datasets[1].bars[7].value = 4462;
			test3.datasets[1].bars[8].value = 4245;
			test3.datasets[1].bars[9].value = 2541;
			test3.datasets[1].bars[10].value = 762;
			test3.datasets[1].bars[11].value = 5497;
			test3.datasets[1].bars[12].value = 2290;
			test3.datasets[1].bars[13].value = 1306;
	
	
		//EUW OLD NORMAL ITEMS
			/*
				value 1 = liandrys
				value 2 = rylais
				value 3 = rabadons
				value 4 = zhonyas
				value 5 = NLR
				value 6 = ludens
				value 7 = archangels
				value 8 = roa
				value 9 = void
				value 10 = nashors
				value 11 = wota
				value 12 = morello
				value 13 = athenes
				value 14 = seraphs
		*/
			test3.datasets[0].bars[0].value = 2660;
			test3.datasets[0].bars[1].value = 2643;
			test3.datasets[0].bars[2].value = 12089;
			test3.datasets[0].bars[3].value = 10673;
			test3.datasets[0].bars[4].value = 42517;
			test3.datasets[0].bars[5].value = 14414;
			test3.datasets[0].bars[6].value = 2057;
			test3.datasets[0].bars[7].value = 4760;
			test3.datasets[0].bars[8].value = 5520;
			test3.datasets[0].bars[9].value = 1358;
			test3.datasets[0].bars[10].value = 1083;
			test3.datasets[0].bars[11].value = 7087;
			test3.datasets[0].bars[12].value = 2960;
			test3.datasets[0].bars[13].value = 1685;
			
			
			test3.update();
		
		}
	});
	
	
	
	
	
	
	
	
	
	//table stuff
	
	var tableData  = [
	
		
		
	]
	
	
	$('#firstDataTable').DataTable( {
    		//data: tableData,
	    	"paging":   false,
	        
	        "info":     false
	} );
	
});