<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Thelo</title>
<link rel="stylesheet" type="text/css" href="style.css" />
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<link rel="icon" type="image/png" href="favicon.png">
</head>

<body>
<?php include_once("inc/_analyticstracking.html") ?>
<?php include_once("inc/_header.html") ?>
<?php include_once("inc/_nav.php") ?>

<div id="main">

    <div class="overview-variant">
        <div class="font-description thelo-micro">Thelo Grand<br/><span class="opacity40">72 px</span></div>
        <div class="font-lorem thelo-grand"><input type="text" value="Content-aware"/></div>
    </div><!-- .overview-variant -->
    <div class="overview-variant">
        <div class="font-description thelo-micro">Thelo Texte<br/><span class="opacity40">72 px</span></div>
        <div class="font-lorem thelo-texte"><input type="text" value="Size-specific"/></div>
    </div><!-- .overview-variant -->
    <div class="overview-variant">
        <div class="font-description thelo-micro">Thelo Texte Italique<br/><span class="opacity40">72 px</span></div>
        <div class="font-lorem thelo-italique"><input type="text" value="Responsive"/></div>
    </div><!-- .overview-variant -->
    <div class="overview-variant">
        <div class="font-description thelo-micro">Thelo Texte Gras<br/><span class="opacity40">72 px</span></div>
        <div class="font-lorem thelo-bold"><input type="text" value="Experience"/></div>
    </div><!-- .overview-variant -->
    <div class="overview-variant">
        <div class="font-description thelo-micro">Thelo Micro<br/><span class="opacity40">72 px</span></div>
        <div class="font-lorem thelo-micro"><input type="text" value="Pixel-perfect"/></div>
    </div><!-- .overview-variant -->
    <div class="overview-variant">
        <div class="font-description thelo-micro">Thelo Micro Italique<br/><span class="opacity40">72 px</span></div>
        <div class="font-lorem thelo-microitalique"><input type="text" value="Interpolation"/></div>
    </div><!-- .overview-variant -->
    

    
    </div><!-- #main -->

<?php include_once("inc/_footer.html") ?>


<script>
$( "input" ).change(function () {
		var str = $( this ).val();
		$( "input" ).each(function() {
			$( this ).val(str);
		})
		return(false);
	});


</script>

<script src="custom.js" type="text/javascript"></script>

</body>
</html>
