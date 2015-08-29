<?php
	//error_reporting(0);
	$a = 0;
	$servername = "localhost";
	$username = "gale007_rebp1";
	$password = "Raves007";
	$dbname = "TestingPhpDataInput";
	$table = "php_test_Data";
	
	//creating the connection
        
	
	echo"start";
	
	 $con = new mysqli('localhost','gale007_rebp1','Raves007', 'TestingPhpDataInput');
	
	  if (!$con)
		  {
		    die('Could not connect: ' . mysqli_error());
		  }
		  
	
	
	
	echo 'ok';
	
	
	mysqli_query("INSERT INTO php_test_Data (match_data_na_counter, match_data_na) VALUES(1, 'ysaofsdfsaf')");
	//$sql = " SELECT match_data_na_counter FROM TestingPhpDataInput";
	$result = $con->query("SELECT * FROM php_test_Data");
	//$rows = array();
	//mysql_query("INSERT INTO php_test_Data () VALUES('fds')");
	//while($re = mysqli_fetch_assoc($result)){
	//$rows[] = $re;
	//}
	//print(json_encode($rows[0]));
	//echo $rows[match_data_na];
	//print json_encode($rows[match_data_na]);
	//print_r($sql);
	print_r($result);
	//echo json_encode($result);
	
	print_r("connected");
	
	mysqli_close($con);
	/*mysql_select_db("$dbname") or die(mysql_error());
	echo"database found";
	
	mysql_query("INSET INTO $table(test_data1, test_data2) VALUES('1','43')") 
	mysql_query("INSET INTO $table(test_data1, test_data2) VALUES('2','22')") 
	
	echo"data inserted";*/
	
	

?>