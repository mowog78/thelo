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


<div id="testing-zone">
    <div class="leftC">

<div id="chosen">14 pixels</div>
<div id="slider" style="font-size:10px;">
<input id="slide" type="range"
 min="8" max="64" step="1" value="14"
 onchange="updateSlider(this.value)" />
</div><br/>
    
        <div class="variants-names">
            <a href="#" id="btn-thelo-grand">Thelo Grand</a><br />
            <a href="#" id="btn-thelo-texte">Thelo Texte</a><br />
            <a href="#" id="btn-thelo-italique">Thelo Texte Italic</a><br />
            <a href="#" id="btn-thelo-bold">Thelo Texte Bold</a><br />
            <a href="#" id="btn-thelo-micro">Thelo Micro</a><br />
            <!-- <a href="#" id="btn-thelo-micro-italic">Thelo Micro Italic</a><br /> -->
        </div><!-- .variants-names --> 


        <div id="btns-lang" class="languages" style="margin-top:20px;">
            <a href="#" id="btn-lang-en">English</a><br />
            <a href="#" id="btn-lang-fr">French</a><br />
            <a href="#" id="btn-lang-es">Spanish</a><br />
            <a href="#" id="btn-lang-pt">Portuguese</a><br />
        </div><!-- .langages --> 
               
    </div><!-- .leftC --> 
    
    
    <div id="testing-frame" class="rightC">
    
    <div style="display:block;float:right;position:relative;top:-40px;right:-40px;"><input type="button" value="  a  " id="btn-switch"  style="color:'#ffffff';background-color:'#000000';"/></div>
    
        <div id="lorem-zone">
            <span class="default">
                <p>Hinting, or screen optimising, is the process by which fonts are adjusted for maximum readability on computer monitors. I have been designing type since the early 1990s, and for as long as I can remember, type designers have been saying that hinting would soon be made obsolete by new advances in hardware and software. Now, almost 20 years later, hinting seems to be more relevant than ever.</p>
                <p>The problem is that typical modern fonts are not designed primarily for the 72–96 dpi resolution of computer screens, but for the much higher 1,200+ dpi resolution of print media. The letterforms are designed and stored as outlines, mathematically perfect lines and curves which look great at high resolutions, but can be distorted or even illegible when converted into groups of pixels, the on-or-off dots that make up a computer’s display. And although there has been much discussion about high-definition computer monitors for decades, the fact of the matter is that my 5 year old mobile phone still takes photos with finer detail than my brand new computer can show on its screen.</p>
                <p>This is the reason that webpage designers have long been more or less limited to a dozen or so fonts (Verdana, Georgia, Arial, etc.) that have been fine-tuned by hand so that typical text sizes (9–14pt) display well at low resolutions. These fonts are so common that most computer users think of them as free, but the reality is that Verdana, for example, is probably the most expensive, labor-intensive font ever produced. It includes characters used to write an extremely wide range of languages, and each of these characters had to be adjusted to be readable at every point size between 9 and 60 (at 60pt the resolution is sufficient to display the letterforms accurately). In other words, each of more than 890 characters was ‘redesigned’ dozens of times, once at every point size.</p>
            </span>
        </div><!-- #lorem-zone --> 
        
    </div><!-- .rightC --> 
</div><!-- #testing-zone -->

<div id="source" class="thelo-micro" style="font-size:12px;display:block;clear:both;margin-left:750px;">
<p><i>Font hinting</i> by Peter Bilak, 2010<br/><a href="http://typotheque.com/articles/hinting" target="_blank">typotheque.com/articles/hinting</a></p> 
</div>



<div class="description">
    <div class="description-leftC thelo-micro" id="active_font_name">active font name</div>
    <div class="description-rightC thelo-texte" id="active_font_description">active font description</div>
</div><!-- .description -->



<div class="glyphset">
    <div id="charset" class="glyphset-leftC thelo-micro">Character set</div>
    <div class="glyphset-rightC">
    <img id="glyphset_img" src="img/glyphset-thelo-texte-800.png" /> </div>
</div><!-- .glyphset -->

    </div><!-- #main -->


<?php include_once("inc/_footer.html") ?>

<script src="custom.js" type="text/javascript"></script>


</body>
</html>
