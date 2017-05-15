<?php

	header('Content-Type: application/json');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    //sleep(3);
    //die(json_encode(Array()));

	if( !@$_POST ){
		header('HTTP/1.0 417 Expectation failed');
		die();
	}

	require( "../PHPMailer/class.phpmailer.php" );

	$site_name = "Toalhas Classe A";
	
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->SMTPDebug = 2;
	$mail->Debugoutput = 'html';
	$mail->CharSet = 'UTF-8';
	$mail->Host = 'smtp.toalhasclassea.com.br';
	$mail->Port = 587;
	$mail->SMTPAuth = true;
	$mail->Username = 'site@toalhasclassea.com.br';
	$mail->Password = '7h6@kF$-';
	$mail->AddReplyTo( $_POST["email"], $_POST["name"] );
	$mail->SetFrom( 'site@toalhasclassea.com.br', {$site_name} );
	$mail->IsHTML(true);

	$mail->Subject = "Contato através do site {$site_name}";

	$mail->AddAddress( "falecom@toalhasclassea.com.br", {$site_name} );

	$message = "Olá!<br/>";
	$message .= "Você recebeu uma nova mensagem de contato através do site <b>{$site_name}</b>.<br/><br/>";
	$message .= "Dados da mensagem:<br/>";

	$message .= "<b>Nome</b>: {$_POST["name"]}<br/>";
	$message .= "<b>Email</b>: {$_POST["email"]}<br/>";
	$message .= "<b>Telefone</b>: {$_POST["telephone"]}<br/>";
	$message .= "<b>Cidade</b>: " . ( @$_POST["city"] ? $_POST["city"] : "<i>não informado</i>" ) . "<br/>";
	$message .= "<b>Mensagem</b>: {$_POST["message"]}<br/>";

	$mail->Body = $message;
	$mail->AltBody = $message;

	$ret = $mail->Send();

	$mail->ClearAllRecipients();
	$mail->ClearAttachments();

	header( "Content-Type: application/json" );
	if( !$ret ) header( "HTTP/1.0 420 Method Failure" );

	echo json_encode(Array());

?>