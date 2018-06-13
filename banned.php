<?php
 require_once 'inc/functions.php';
 require_once 'inc/bans.php';
 checkBan();
 print "<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><title>"._("Banned?")."</title></head><body>";
 print "<h1>"._("You are not banned.")."</h1>";
 print "</body></html>";
?>
