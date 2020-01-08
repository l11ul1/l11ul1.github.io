<?php

	if(isset($_POST)['submit']){
		$txtName=$_POST['txtName'];
		$txtEmail=$_POST['txtEmail'];
		$txtPhone=$_POST['txtPhone'];
		$txtMsg=$_POST['txtMsg'];
		
		$to = 'weblastor@gmail.com';
		$subject = 'form submission';
		$message = "name: ".$txtName."\n"."Phone: ".$txtPhone."\n"."wrote:"."\n\n".$txtMsg;
		$headers = "From: ".$txtEmail;
		
		if(mail($to, $subject, $message, $headers)){
			echo "<h1>Sent!</h1>";
		}
		else{
			echo "<h1>Something Went Wrong!</h1>"
		}
	}
?>