<?php

	$file = $_GET["image"];
	
	if( !file_exists( $file ) ){	
		exit;
	}
	
	$fileName = explode( "/", $file );
	$fileName = $fileName[3];
	
	header('Content-Description: File Transfer');
	header('Content-Disposition: attachment; filename="'.$fileName.'"');
	header('Content-Type: application/octet-stream');
	header('Content-Transfer-Encoding: binary');
	header('Content-Length: ' . filesize($file));
	header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
	header('Pragma: public');
	header('Expires: 0');
	
	readfile($file);

?>