<?php
	//error_reporting(0);
	header("Access-Control-Allow-Origin:*");
	
	$servername= "localhost";
	$username = "{userName}";
	$password = "{PW}";
	$dbname = "{DB}";
	$table = "{table}";
	
	$myJsonFileHolder = file_get_contents("{json file}");
	$jsonHandler = json_decode($myJsonFileHolder,true);
	//$tracerOfMatchTracker = $matchTracker;
	
	
	mysqli_close($exmpSql);
	
	//these are variables for the data not related to sql
	
	
	
	$exmpSql = new mysqli("$servername","$username","$password", "$dbname");
	
	if (!exmpSql)
			  {
			    die('Could not connect: ' . mysqli_error());
			  }
	//this is the code format for inserting, first you store the request you want to make in a variable then you query that ver to your database/table
	
	
	//$exmpSql->query($query);
	
	//this is the base way to output results onto your page, you have result = the data you want from a table then you use a while statment to fetch objs(or assoc) from the database, while using objs 	     
	//dont use ''
	
	//for($scv = 0; $scv < 100; ++$scv){
		if($result = $exmpSql->query("SELECT * FROM normal_new_item_counter")){
			if($result->num_rows){
				
				
				while($row = $result->fetch_object()){
					
					echo $row->match_data_na, ':counter ', $row->match_data_na_counter, ' :id> ' ,$row->id, '<br>';
					$testVar = $row->id;
					
					
					$matchTracker  = $matchTracker + 1 ;
					
				}
				
				
				$result->free();
				
			}
		}else{
			die($exmpSql->error);
		}
		
		
		$sqltest3 = "INSERT INTO normal_new_item_counter (match_data_na, match_data_na_counter) VALUES('testnum:', '$matchTracker')";
		
		$exmpSql->query($sqltest3);
		
		$urlMatchTracker = $jsonHandler["$matchTracker"];
		
		
		$url = "https://kr.api.pvp.net/api/lol/kr/v2.2/match/".$urlMatchTracker."?api_key={api}";
	
		
		$curl = curl_init();
		// Set some options - we are passing in a useragent too here
		curl_setopt_array($curl, array(
	   	CURLOPT_RETURNTRANSFER => 1,
	   	CURLOPT_URL => $url ));
	   	
		// Send the request & save response to $resp
		$resp = curl_exec($curl);
		//print_r ($resp);
		
		$gameData= json_decode($resp);
		
		for($x = 0; $x < 10; ++$x){
			$gameDataOutPut = $gameData->participants["$x"]->stats;
			
			$itemsArray = array();
			for($i = 0; $i<=6; ++$i)
				{
					 
					 
					 if($i == 0)$itemsArray["item0"] = $gameDataOutPut->item0;
					 elseif($i == 1)$itemsArray["item1"] = $gameDataOutPut->item1;
					 elseif($i == 2)$itemsArray["item2"] = $gameDataOutPut->item2;
					 elseif($i == 3)$itemsArray["item3"] = $gameDataOutPut->item3;
					 elseif($i == 4)$itemsArray["item4"] = $gameDataOutPut->item4;
					 elseif($i == 5)$itemsArray["item5"] = $gameDataOutPut->item5;
					 elseif($i == 6)$itemsArray["item6"] = $gameDataOutPut->item6;
					 
					 
				}
			//var_dump ($itemsArray);
			
			foreach($itemsArray as $item ){
				echo '<pre>'; var_dump($item);
				
				if($item == 3116){
					$rylaisUpdate = "UPDATE new_apitem_normal_data SET player_use_of_rylais = player_use_of_rylais + 1, player_use_of_NLR = player_use_of_NLR + 1";
					$exmpSql->query($rylaisUpdate);
				}
				elseif($item == 3151){
					$liandrysUpdate = "UPDATE new_apitem_normal_data SET player_use_of_liandrys = player_use_of_liandrys + 1";
					$exmpSql->query($liandrysUpdate);
				}
				elseif($item == 3089){
					$rabadonsUpdate = "UPDATE new_apitem_normal_data SET player_use_of_rabadons = player_use_of_rabadons + 1, player_use_of_NLR = player_use_of_NLR + 1";
					$exmpSql->query($rabadonsUpdate);
				}
				elseif($item == 3157){
					$zhonyasUpdate = "UPDATE new_apitem_normal_data SET player_use_of_zhonyas = player_use_of_zhonyas + 1, player_use_of_NLR = player_use_of_NLR + 1";
					$exmpSql->query($zhonyasUpdate);
				}
				elseif($item == 3285){
					$ludensUpdate = "UPDATE new_apitem_normal_data SET player_use_of_ludens = player_use_of_ludens + 1, player_use_of_NLR = player_use_of_NLR + 1";
					$exmpSql->query($ludensUpdate);
				}
				elseif($item == 3003){
					$angelsUpdate = "UPDATE new_apitem_normal_data SET player_use_of_archangels = player_use_of_archangels + 1, player_use_of_NLR = player_use_of_NLR + 1";
					$exmpSql->query($angelsUpdate);
				}
				elseif($item == 3040){
					$seraphsUpdate = "UPDATE new_apitem_normal_data SET player_use_of_seraphs = player_use_of_seraphs + 1, player_use_of_archangels = player_use_of_archangels + 1, player_use_of_NLR = player_use_of_NLR + 1";
					$exmpSql->query($seraphsUpdate);
				}
				elseif($item == 1058){
					$NLRUpdate = "UPDATE new_apitem_normal_data SET player_use_of_NLR = player_use_of_NLR + 1";
					$exmpSql->query($NLRUpdate);
				}
				elseif($item == 3027){
					$roaUpdate = "UPDATE new_apitem_normal_data SET player_use_of_roa = player_use_of_roa + 1";
					$exmpSql->query($roaUpdate);
				}
				elseif($item == 3135){
					$voidUpdate = "UPDATE new_apitem_normal_data SET player_use_of_void = player_use_of_void + 1";
					$exmpSql->query($voidUpdate);
				}
				elseif($item == 3115){
					$nashorsUpdate = "UPDATE new_apitem_normal_data SET player_use_of_nashors = player_use_of_nashors + 1";
					$exmpSql->query($nashorsUpdate);
				}
				elseif($item == 3152){
					$wotaUpdate = "UPDATE new_apitem_normal_data SET player_use_of_wota = player_use_of_wota + 1";
					$exmpSql->query($wotaUpdate);
				}
				elseif($item == 3165){
					$morelloUpdate = "UPDATE new_apitem_normal_data SET player_use_of_morello = player_use_of_morello + 1";
					$exmpSql->query($morelloUpdate);
				}
				elseif($item == 3174){
					$athenesUpdate = "UPDATE new_apitem_normal_data SET player_use_of_athenes = player_use_of_athenes + 1";
					$exmpSql->query($athenesUpdate);
				}
			}
			
				$itemEntry = "INSERT INTO all_new_items_holder_normal (item_0, item_1, item_2, item_3, item_4, item_5, item_6) VALUES('$itemsArray[item0]','$itemsArray[item1]', '$itemsArray[item2]', '$itemsArray[item3]', '$itemsArray[item4]','$itemsArray[item5]','$itemsArray[item6]')";
			
				
				$exmpSql->query($itemEntry);
				
			}

	
?>