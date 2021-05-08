<?php

if(isset($_POST['submit']))
  $name = $_POST['name'];
  $mailFrom = $_POST['mail'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $number = $_POST['number'];

  $mailTo = 'ostoja_95_cacak@hotmail.com';
  $headers = "From: ".$mailFrom;
  $txt = "You have received a email from ".$name. ".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);

  header("Location: index.html?mailsend");
?>
