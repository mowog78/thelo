
var bow = true;

var pageload = true;

var lorem_default="<p>Hinting, or screen optimising, is the process by which fonts are adjusted for maximum readability on computer monitors. I have been designing type since the early 1990s, and for as long as I can remember, type designers have been saying that hinting would soon be made obsolete by new advances in hardware and software. Now, almost 20 years later, hinting seems to be more relevant than ever.</p><p>The problem is that typical modern fonts are not designed primarily for the 72–96 dpi resolution of computer screens, but for the much higher 1,200+ dpi resolution of print media. The letterforms are designed and stored as outlines, mathematically perfect lines and curves which look great at high resolutions, but can be distorted or even illegible when converted into groups of pixels, the on-or-off dots that make up a computer’s display. And although there has been much discussion about high-definition computer monitors for decades, the fact of the matter is that my 5 year old mobile phone still takes photos with finer detail than my brand new computer can show on its screen.</p><p>This is the reason that webpage designers have long been more or less limited to a dozen or so fonts (Verdana, Georgia, Arial, etc.) that have been fine-tuned by hand so that typical text sizes (9–14pt) display well at low resolutions. These fonts are so common that most computer users think of them as free, but the reality is that Verdana, for example, is probably the most expensive, labor-intensive font ever produced. It includes characters used to write an extremely wide range of languages, and each of these characters had to be adjusted to be readable at every point size between 9 and 60 (at 60pt the resolution is sufficient to display the letterforms accurately). In other words, each of more than 890 characters was ‘redesigned’ dozens of times, once at every point size.</p>";

var lorem_bold_default="<p>Hinting, or screen optimising, is the process by which fonts are adjusted for maximum readability on computer monitors. I have been designing type since the early 1990s, and for as long as I can remember, type designers have been saying that hinting would soon be made obsolete by new advances in hardware and software. Now, almost 20 years later, hinting seems to be more relevant than ever.</p><p>The problem is that typical modern fonts are not designed primarily for the 72–96 dpi resolution of computer screens, but for the much higher 1,200 dpi resolution of print media. The letterforms are designed and stored as outlines, mathematically perfect lines and curves which look great at high resolutions, but can be distorted or even illegible when converted into groups of pixels, the on-or-off dots that make up a computer’s display. And although there has been much discussion about high-definition computer monitors for decades, the fact of the matter is that my 5 year old mobile phone still takes photos with finer detail than my brand new computer can show on its screen.</p><p>This is the reason that webpage designers have long been more or less limited to a dozen or so fonts (Verdana, Georgia, Arial, etc.) that have been fine-tuned by hand so that typical text sizes (9–14pt) display well at low resolutions. These fonts are so common that most computer users think of them as free, but the reality is that Verdana, for example, is probably the most expensive, labor-intensive font ever produced. It includes characters used to write an extremely wide range of languages, and each of these characters had to be adjusted to be readable at every point size between 9 and 60 (at 60pt the resolution is sufficient to display the letterforms accurately). In other words, each of more than 890 characters was ‘redesigned’ dozens of times, once at every point size.</p>";

var pangramme_fr = "<p>Un pangramme est une phrase comportant toutes les lettres de l'alphabet. En français, un pangramme comporte au moins 26 lettres. Il doit en compter au moins 42 si on compte les lettres accentuées et les ligatures (à, â, é, è, ê, ë, î, ï, ô, ù, û, ü, ÿ, ç, æ et œ). Si l'on peut atteindre la limite théorique en recourant massivement aux abréviations et aux sigles, le talent consiste à construire une phrase cohérente la plus courte possible, sans lettres solitaires, ni abréviation ou sigle.</p><p>Bâchez la queue du wagon-taxi avec les pyjamas du fakir. Voix ambiguë d'un cœur qui, au zéphyr, préfère les jattes de kiwis. Monsieur Jack, vous dactylographiez bien mieux que votre ami Wolf. Mon pauvre zébu ankylosé choque deux fois ton wagon jaune. Le vif zéphyr jubile sur les kumquats du clown gracieux. Zut ! Je crois que le chien Sambuca préfère le whisky revigorant au doux porto. Voyez le brick géant que j'examine près du wharf. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l'alcôve ovoïde, où les bûches se consument dans l'âtre, ce qui lui permet de penser à la cænogénèse de l'être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre. Dès Noël où un zéphyr haï me vêt de glaçons würmiens je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera !</p>";
var pangramme_en = "<p>A pangram or holoalphabetic sentence for a given alphabet is a sentence using every letter of the alphabet at least once. Pangrams have been used to display typefaces, test equipment, and develop skills in handwriting, calligraphy, and keyboarding.</p><p>Pack my box with five dozen liquor jugs. lazy movers quit hard packing of these papier-mâché jewelry boxes. Back at my quaint garden: jaunty zinnias vie with flaunting phlox. Hark! 4,872 toxic jungle water vipers quietly drop on zebra for meals! New farm hand (picking just six quinces) proves strong but lazy. Jaded zombies acted quaintly but kept driving their 31 oxen forward. For only about $25, jolly house wives made inexpensive meals out of quick-frozen vegetables. Will Major Douglas be expected to take this true/false quiz very soon? Just working for improved basic techniques will maximize your typing skills. A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent.</p>";
var pangramme_es = "<p>Un pangrama (del griego: «todas las letras») o frase holoalfabética es un texto que usa todas las letras posibles del alfabeto de un idioma. Los pangramas más llamativos son por lo general los que usan el menor número de letras; construir un pangrama que repita letras lo menos posible puede ser una tarea desafiante. Sin embargo, los pangramas que son largos, extremadamente adornados, cómicos o excéntricos son igualmente llamativos.</p><p>En cierto sentido, los pangramas son lo opuesto a los lipogramas, donde el objetivo es omitir una o más letras.</p><p>Los pangramas son comúnmente utilizados para mostrar fuentes tipográficas.</p><p>José compró una vieja zampoña en Perú. Excusándose, Sofía tiró su whisky al desagüe de la banqueta. El cadáver de Wamba, rey godo de España, fue exhumado y trasladado en una caja de zinc que pesó un kilo. El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja. El viejo Señor Gómez pedía queso, kiwi y habas, pero le ha tocado un saxofón. Jovencillo emponzoñado de whisky: ¡qué figurota exhibe! Whisky bueno: ¡excitad mi frágil pequeña vejez! Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Ví aquél BMW Z3 del año 1997, 4x2, y de RIN16' y fijo costó $20,5K... -¿Te gustó? -¡Sí, 138HP!</p>";
var pangramme_pt = "<p>Pangrama, ou pantograma, é uma frase com sentido em que são usadas todas as letras do alfabeto de determinada língua. A palavra vem do grego, 'pan' ou 'pantós' = todos, + 'grama' = letra.Os pangramas surgiram junto com a tipografia, sendo um meio prático de avaliar o efeito visual de uma fonte e uma forma de exercício para novatos no ofício. Um pangrama eficiente deve usar todas as letras do alfabeto com o mínimo de palavras.</p><p>Um pequeno jabuti xereta viu dez cegonhas felizes. Zebras caolhas de Java querem mandar fax para gigante em New York. Gazeta publica hoje no jornal uma breve nota de faxina na quermesse. Jaz em prisão bota que vexa dez cegonhas felizes. Luís argüía à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português. Blitz prende ex-vesgo com cheque fajuto. Jovem craque belga prediz falhas no xote.</p>";
var pangramme_nl = "<p>Een pangram of holo-alfabetische zin is een zin waarin alle letters van het alfabet voorkomen. De uitdaging is om een zo kort mogelijke zin te maken die aan deze voorwaarde voldoet. Een volmaakt pangram bevat elke letter slechts eenmaal. Het 'omgekeerde' van een pangram is het lipogram, waar een bepaalde letter (of meerdere) weggelaten wordt. Een pangram wordt in letterproeven vaak als voorbeeldzin gebruikt om de letters van een lettertype te tonen.</p><p>Lynx c.q. vos prikt bh: dag zwemjuf! Doch Bep, flink sexy qua vorm, zwijgt. Pechdag: sexy quizvrouw blijft mank. Doch vlakbij zwerft 'n exquis gympje. Wazig tv-filmpje rond chique skybox. Sexy qua lijf, doch bang voor 't zwempak. Filmquiz bracht knappe ex-yogi van de wijs. Pa's wijze lynx bezag vroom het fikse aquaduct. Op brute wijze ving de schooljuf de quasi-kalme lynx. Typisch kaf bij zo exquis gevormde juwelen.</p>";
var pangramme_de = "<p>Ein Pangramm (von griechisch pan gramma jeder Buchstabe) oder holoalphabetischer Satz ist ein Satz, der alle Buchstaben des Alphabets enthält. Als echt werden Pangramme bezeichnet, in denen jeder Buchstabe genau einmal vorkommt, die also gleichzeitig Isogramme sind. Echte Pangramme mit den 26 lateinischen Buchstaben sind sehr schwer zu erzielen; es gibt keine Sprache, für die eines – mit nur natürlichen Wörtern in lateinischer Schrift – bekannt ist.</p><p>Polyfon zwitschernd aßen Mäxchens Vögel Rüben, Joghurt und Quark. Schweißgequält zündet Typograf Jakob verflixt öde Pangramme an. Vom Ödipuskomplex maßlos gequält, übt Wilfried zyklisches Jodeln. Asynchrone Bassklänge vom Jazzquintett sind nix für spießige Löwen. Xaver schreibt für Wikipedia zum Spaß quälend lang über Yoga, Soja und Öko. Die heiße Zypernsonne quälte Max und Victoria ja böse auf dem Weg bis zur Küste. Zornig und gequält rügen jeweils Pontifex und Volk die maßlose bischöfliche Hybris. Vögel üben Gezwitscher oft ähnlich packend wie Jupp die Maus auf dem Xylophon einer Qualle.</p>";
var pangramme_pl ="<p>Pangram (gr. pan gramma – każda litera) – krótkie zdanie zawierające wszystkie litery danego języka. Może stanowić zabawę słowną, często jest jednak również wykorzystywane do sprawdzania poprawności danych tekstowych, poprawności wyświetlania lub drukowania znaków itp. Szczególnie dopracowane pangramy zawierają każdą literę tylko w jednym wystąpieniu.</p><p>Pchnąć w tę łódź jeża lub ośm skrzyń fig. Pójdźże, kiń tę chmurność w głąb flaszy! Myślę: Fruń z płacht gąsko, jedź wbić nóż. Dość błazeństw, żrą mój pęk luźnych fig. Dość gróźb fuzją, klnę, pych i małżeństw! Pójdź w loch zbić małżeńską gęś futryn! Filmuj rzeź żądań, pość, gnęb chłystków! O, mógłże sęp chlań wyjść furtką bździn. Mężny bądź, chroń pułk twój i sześć flag. Chwyć małżonkę, strój bądź pleśń z fugi. Znajdź pchły, wróżko! Film 'Teść' gębą suń! Mnich zwlókł żerdź. Puść tą boję! Gań syf! Sklną chów żab? Jim, puść dłoń! Zgryź fetę! Aj, pech! Struś dźgnął ćmę FBI! Koń lży wóz.</p>";

function randomTitre () {
	
	var iVar = Math.floor(Math.random()*3);
		switch (iVar) 
	{
	   case 0:
	document.getElementById("titre-page").className = "thelo-grand";
	document.getElementById("titre-page").style.color = "rgb(33,38,141)";
	break;
	   case 1:
	document.getElementById("titre-page").className = "thelo-texte";
	document.getElementById("titre-page").style.color = "rgb(0,169,114)";
	break;
	   case 2:
	document.getElementById("titre-page").className = "thelo-micro";
	document.getElementById("titre-page").style.color = "rgb(246,65,36)";
	break;
	}
	}

function init(){
	
    document.getElementById('btn-thelo-grand').onclick=function(){changeLoremVariant ('thelo-grand')};
	document.getElementById('btn-thelo-texte').onclick=function(){changeLoremVariant ('thelo-texte')};
	document.getElementById('btn-thelo-italique').onclick=function(){changeLoremVariant ('thelo-italique')};
	document.getElementById('btn-thelo-bold').onclick=function(){changeLoremVariant ('thelo-bold')};
	document.getElementById('btn-thelo-micro').onclick=function(){changeLoremVariant ('thelo-micro')};
	
	document.getElementById('btn-switch').onclick=function(){changeBgColor ()};
	
	document.getElementById('btn-lang-fr').onclick=function(){changeLoremPangramme ('fr')};
	document.getElementById('btn-lang-en').onclick=function(){changeLoremPangramme ('en')};
	document.getElementById('btn-lang-es').onclick=function(){changeLoremPangramme ('es')};
	document.getElementById('btn-lang-pt').onclick=function(){changeLoremPangramme ('pt')};
	
	document.getElementById('font_size_controller').onchange=function(){changeLoremFontSize ()};	
	}

$( "#font_size_controller" ).change(function () {
	var fontsize = document.getElementById("font_size_controller").value;
	var selecteur = fontsize + "px";
	document.getElementById("lorem-zone").style.fontSize = selecteur;
	//alert (selecteur);
	ga('send', {
		hitType: 'event',
		eventCategory: 'Fontes',
		eventAction: 'SélectionSize',
		eventLabel: fontsize
	});
	})

function updateSlider(slideAmount) {
	//get the element
	var display = document.getElementById("chosen");
	//show the amount
	display.innerHTML=slideAmount+" pixels";
	//get the element
	var frame = document.getElementById("lorem-zone");
	//set the dimensions
	frame.style.fontSize=slideAmount+"px";

	var il = 11 * slideAmount / 8
	document.getElementById("lorem-zone").style.lineHeight = il + "px";
	}

function changeBgColor () {
	if (bow == true) {
		bow = false;
		document.getElementById("testing-frame").style.backgroundColor = '#404040';
		document.getElementById("lorem-zone").style.color = 'white';
		document.getElementById("btn-switch").style.backgroundColor = 'white';
		document.getElementById("btn-switch").style.color = '#404040';
		}
	else {
		bow = true;
		document.getElementById("testing-frame").style.backgroundColor = 'white';
		document.getElementById("lorem-zone").style.color = 'black';
		document.getElementById("btn-switch").style.backgroundColor = '#404040';
		document.getElementById("btn-switch").style.color = 'white';
		};
	}

function changeDescriptionPanel (variant) {
	
	var elements = document.getElementsByClassName("description");
		elements[0].style.backgroundColor = 'rgb(0,169,114)';

    document.getElementById("charset").style.color = "rgb(0,169,114)";
	
	
	switch (variant) 
	{
	   case "thelo-grand":
		document.getElementById("active_font_name").innerHTML = "Thelo Grand";
		elements[0].style.backgroundColor = 'rgb(33,38,141)';
		document.getElementById("charset").style.color = "rgb(33,38,141)";
		document.getElementById("active_font_description").innerHTML = "With its subtle contrast and fine serifs Thelo Grand is intended for display sizes. Its use is recommended for sizes ranging from 18 to 64 pixels. It is the only member of the family that presents overshoots in the construction of its round letters.";
		break;
	   case "thelo-texte":
		document.getElementById("active_font_name").innerHTML = "Thelo Texte";
		document.getElementById("active_font_description").innerHTML = "Thelo Text is ideal for the composition of texts that require sustained reading on screen. Its sleek look is softened by its bright connections and pointed terminals. Its design is optimized to be displayed in 16 pixels, the standard size used by most web browsers.";
		break;
	   case "thelo-italique":
		document.getElementById("active_font_name").innerHTML = "Thelo Texte Italic";
		document.getElementById("active_font_description").innerHTML = "The Italics are inspired from Pierre Simon Fournier\'s modern italics. Its uniform color and strong and horizontal serifs make these italics suitable for reading on screen. Thelo Text Italic\'s moderate slope allows for it to be used in long text passages.";
		break;
	   case "thelo-bold":
		document.getElementById("active_font_name").innerHTML = "Thelo Texte Bold";
		document.getElementById("active_font_description").innerHTML = "The Bold has a dense silhouette, with a very marked contrast as compared to the Roman. The width of its stems is exactly twice the width of the Roman’s stems, a ratio that respects the principles of design optimization for digital display.";
		break;
	   case "thelo-micro":
		document.getElementById("active_font_name").innerHTML = "Thelo Micro";
		elements[0].style.backgroundColor = 'rgb(246,65,36)';
		document.getElementById("charset").style.color = "rgb(246,65,36)";
		document.getElementById("active_font_description").innerHTML = "Thelo Micro has been designed for very small sizes. Radical and robust, this version is for extreme reading situations. Its very low contrast and square serifs make it stable on screen. Its use is recommended for sizes ranging from 8 to 14 pixels. On printed media, Thelo Micro can be used from 5 points on.";
		break;
	   case "thelo-micro-italic":
		document.getElementById("active_font_name").innerHTML = "Thelo Micro Italique";
		document.getElementById("active_font_description").innerHTML = "Thelo Micro Italic was designed inspired by the formal elements of the Roman. It addresses the need for prioritization of content and bibliographic reference texts, often presented in small body sizes.";
		break;
	}	
	}
	
function changeGlyphset (variant) {
	switch (variant) 
	{
	   case "thelo-grand":
		document.getElementById("glyphset_img").src = "img/glyphset-thelo-grand-800.png";
		break;
	   case "thelo-texte":
		document.getElementById("glyphset_img").src = "img/glyphset-thelo-texte-800.png";
		break;
	   case "thelo-italique":
		document.getElementById("glyphset_img").src = "img/glyphset-thelo-italique-800.png";
		break;
	   case "thelo-bold":
		document.getElementById("glyphset_img").src = "img/glyphset-thelo-bold-800.png";
		break;
	   case "thelo-micro":
		document.getElementById("glyphset_img").src = "img/glyphset-thelo-micro-800.png";
		break;
	   case "thelo-microitalique":
		document.getElementById("glyphset_img").src = "";
		break;
	}	
	}

function underlineVariant (variant) {
	
	var variant = "btn-" + variant;
	document.getElementById('btn-thelo-grand').style.textDecoration = "none";
	document.getElementById('btn-thelo-texte').style.textDecoration = "none";
	document.getElementById('btn-thelo-italique').style.textDecoration = "none";;
	document.getElementById('btn-thelo-bold').style.textDecoration = "none";
	document.getElementById('btn-thelo-micro').style.textDecoration = "none";
	document.getElementById(variant).style.textDecoration = "underline";

	
	}

function underlineLanguage (lang) {
	
	var lang = "btn-lang-" + lang;
	document.getElementById('btn-lang-fr').style.textDecoration = "none";
	document.getElementById('btn-lang-en').style.textDecoration = "none";
	document.getElementById('btn-lang-es').style.textDecoration = "none";
	document.getElementById('btn-lang-pt').style.textDecoration = "none";

	document.getElementById(lang).style.textDecoration = "underline";
	}

function changeLoremVariant (variant) {
	document.getElementById("lorem-zone").innerHTML = lorem_default;
	document.getElementById("lorem-zone").className = variant;
	//	document.getElementById("active_font_name").innerHTML = variant;
	document.getElementById("source").innerHTML = "<p><i>Font hinting</i> by Peter Bilak, 2010<br/><a href=\"http://typotheque.com/articles/hinting\" target=\"_blank\">typotheque.com/articles/hinting</a></p>";
	underlineVariant (variant);

	switch (variant) 
	{
	   case "thelo-grand":
			document.getElementById("slide").value = "32";
			document.getElementById("chosen").innerHTML = "32 pixels";
			document.getElementById("lorem-zone").style.fontSize = "32px";
			document.getElementById("lorem-zone").style.lineHeight = "44px";
			document.getElementById("btns-lang").style.display = "";
		break;
	   case "thelo-texte":
			document.getElementById("slide").value = "16";
			document.getElementById("chosen").innerHTML = "16 pixels";
			document.getElementById("lorem-zone").style.fontSize = "16px";
			document.getElementById("lorem-zone").style.lineHeight = "22px";
			document.getElementById("btns-lang").style.display = "";
		break;
	   case "thelo-italique":
			document.getElementById("slide").value = "16";
			document.getElementById("chosen").innerHTML = "16 pixels";
			document.getElementById("lorem-zone").style.fontSize = "16px";
			document.getElementById("lorem-zone").style.lineHeight = "22px";
			document.getElementById("btns-lang").style.display = "none";
		break;
	   case "thelo-bold":
	   		document.getElementById("lorem-zone").innerHTML = lorem_bold_default;
			document.getElementById("slide").value = "16";
			document.getElementById("chosen").innerHTML = "16 pixels";
			document.getElementById("lorem-zone").style.fontSize = "16px";
			document.getElementById("lorem-zone").style.lineHeight = "22px";
			document.getElementById("btns-lang").style.display = "none";
		break;
	   case "thelo-micro":
			document.getElementById("slide").value = "10";
			document.getElementById("chosen").innerHTML = "10 pixels";
			document.getElementById("lorem-zone").style.fontSize = "10px";
			document.getElementById("lorem-zone").style.lineHeight = "15px";
			document.getElementById("btns-lang").style.display = "";
			break;
	   case "thelo-microitalique":
		document.getElementById("glyphset_img").src = "";
		break;
	}	
	changeDescriptionPanel (variant) ;
	changeGlyphset (variant);

	if (pageload == false){
		ga('send', {
		  hitType: 'event',
		  eventCategory: 'Fontes',
		  eventAction: 'SélectionFont',
		  eventLabel: variant
		});
	}
	else{
		pageload = false;
	};
	}

function changeLoremPangramme (lang) {
	document.getElementById("source").innerHTML = "<p>Source : Wikipedia</p>";
	underlineLanguage (lang);
	switch (lang) 
	{
	   case "fr":
		document.getElementById("lorem-zone").innerHTML = pangramme_fr;break;
	   case "en":
		document.getElementById("lorem-zone").innerHTML = pangramme_en;break;
	   case "es":
		document.getElementById("lorem-zone").innerHTML = pangramme_es;break;
	   case "pt":
		document.getElementById("lorem-zone").innerHTML = pangramme_pt;break;
	   case "nl":
		document.getElementById("lorem-zone").innerHTML = pangramme_nl;break;
	   case "de":
		document.getElementById("lorem-zone").innerHTML = pangramme_de;break;
	   case "pl":
		document.getElementById("lorem-zone").innerHTML = pangramme_pl;break;
	}
	ga('send', {
	  hitType: 'event',
	  eventCategory: 'Pangrammes',
	  eventAction: 'SélectionLangue',
	  eventLabel: lang
	});

	}

window.onload = init;

jQuery(window).load(function () {
    randomTitre();
	});

changeLoremVariant ("thelo-texte");

