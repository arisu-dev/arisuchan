<?php
/* This file is dedicated to the public domain; you may do as you wish with it. */
$v = @(string)$_GET['v'];
$t = @(string)$_GET['t'];
$loop = @(boolean)$_GET['loop'];

$params = '?v=' . urlencode($v) . '&amp;t=' . urlencode($t);
?><!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title><?php echo htmlspecialchars($t); ?></title>
    <link rel="stylesheet" href="stylesheets/webm/playerstyle.css">

  </head>
  <body>
    <script type="application/javascript" src="js/webm-settings.js"></script>
    <script type="application/javascript" src="js/webm/playersettings.js"></script>
    <div id="playerheader">
      <a id="loop0" href="<?php echo $params; ?>&amp;loop=0"<?php if (!$loop) echo ' class="bold"'; ?>>[play once]</a>
      <a id="loop1" href="<?php echo $params; ?>&amp;loop=1"<?php if ($loop) echo ' class="bold"'; ?>>[loop]</a>
    </div>
    <div id="playercontent">
      <video controls src="<?php echo htmlspecialchars($v); ?>">
        Your browser does not support HTML5 video. <a href="<?php echo htmlspecialchars($v); ?>">[Download]</a>
      </video>
    </div>
  </body>
</html>
