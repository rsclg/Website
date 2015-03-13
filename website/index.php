<?php
$mainUrl        = "http://www.rsc-lueneburg.de";
$mainLogo       = "pics/Logo_RSCLueneburg.png";
$subUrl         = "http://www.tri-team-lueneburg.de";
$subLogo        = "pics/Logo_TriTeamLueneburg.png";
$keywords       = "RSC Lüneburg e.V., Lüneburg, Lueneburg, Radsport, Rennrad, MTB, Moutainbike, RSC, Fahrrad, Schwimmen, Radfahren, Laufen, Schwimm-Events, Radfahr-Events, Lauf-Events, Duathlon, Cross Country, MTB-Marathon";
$description    = "RSC Lüneburg e.V., Radsport - RTF - MTB - Triathlon";
$favicon        = "pics/rsc/favicon.ico";
$bodyClass      = "rsc";
$showHidden     = $_GET['showHidden'] == "true" ? true : false;
$showOnlyHidden = $_GET['showOnlyHidden'] == "true" ? true : false;
$twitterTitle   = "Folge dem RSC Lüneburg e.V. auf Twitter";
$twitterAccount = "RSC_Lueneburg";

if (substr_count($_SERVER['SERVER_NAME'], "rsc-", 0) == 0) {
	// Tri Team mode
	$mainUrl      = "http://www.tri-team-lueneburg.de";
	$mainLogo     = "pics/Logo_TriTeamLueneburg.png";
	$subUrl       = "http://www.rsc-lueneburg.de";
	$subLogo      = "pics/Logo_RSCLueneburg.png";
	$keywords     = "Triathlon, Lüneburg, Lueneburg, Rennrad, MTB, Moutainbike, RSC, Fahrrad, Schwimmen, Radfahren, Laufen, Schwimm-Events, Radfahr-Events, Lauf-Events, Duathlon";
	$description  = "Triathlon Team Lüneburg, Schwimmen - Radfahren - Laufen - Duathlon - Triathlon";
	$favicon      = "pics/ttlg/favicon.ico";
	$bodyClass    = "ttlg";
	$twitterTitle   = "Folge dem RSC Lüneburg e.V. auf Twitter";
	$twitterAccount = "TriTeamLG";
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>RSC Lüneburg e.V. | Triathlon Team Lüneburg</title>
<meta name="google-site-verification" content="jCBLKGDAa6xnBzTPiBZwXWJZcGpYn8FtAT4nVHsLLTc" />

<meta name="keywords" content="<?php echo $keywords; ?>" />
<meta name="description" content="<?php echo $description; ?>" />

<meta http-equiv="content-type" content="text/html; charset=ISO-8859-1" />
<meta http-equiv="content-language" content="de" />
<meta http-equiv="cache-control" content="no-cache">
<meta name="robots" content="index,follow" />
<meta name="rating" content="general" />
<meta name="author" content="RSC Lüneburg e.V." />
<meta name="copyright" content="Copyright RSC Lüneburg e.V. © 2009 - 2012" />

<link rel="stylesheet" href="css/layout.css?<?php echo date('Ymd'); ?>" type="text/css" />
<link rel="stylesheet" href="css/lightbox.css" type="text/css" media="screen" />
<!--[if IE]>
	<style type="text/css">
		div.teaser
		{
			width: 98%;
		}
		table.homeTable, table.homeEventsNewsTable
		{
			width: 99%;
		}
		#overlayIFrame {
			 filter: alpha(opacity=70);  /* Internet Explorer */
		}
	</style>
<![endif]-->
<!--[if lte IE 6]>
	<style type="text/css">
		div.topnaventry a
		{
			display: inline;
		}
		div.contentSeparator
		{
			display: inline;
			border: 0px;
		}
		div.teaserTopNews, div.teaserTopDates, div.teaserTopTwitter
		{
			width: 31%;
		}
		div.topnaventrysubmenuentry
		{
			padding-top: 5px;
			height: 23px;
		}
		div.topnaventrysubmenuentry a:hover, div.subsubmenuentry a:hover
		{
			text-decoration: underline;
		}
	</style>
<![endif]-->
<link rel="shortcut icon" href="<?php echo $favicon; ?>" />

<!-- include PageEar -->
<!-- script src="pageear/laufladen/AC_OETags.js" language="javascript"></script -->
<!-- script src="pageear/laufladen/pageear.js" type="text/javascript"> </script -->

<script type="text/javascript" src="css/PIE.js" language="JavaScript"></script>
<script type="text/javascript" src="javascript/blogger-mod.js" language="JavaScript"></script>
<script type="text/javascript" src="javascript/prototype-1.7.2.js"></script>
<script type="text/javascript" src="javascript/scriptaculous.js?load=effects,builder"></script>
<script type="text/javascript" src="javascript/lightbox.js"></script>
<script type="text/javascript" src="javascript/tools.js" language="JavaScript"></script>

<script type="text/javascript">
		var baseUrl = "http://<?php echo $_SERVER['SERVER_NAME'];?>/";
		var isRscPage = <?php echo (substr_count($_SERVER['SERVER_NAME'], "rsc-", 0) == 0) ? 'false' : 'true';?>;
		var showHidden = <?php echo $showHidden ? 'true' : 'false'; ?>;
		var showOnlyHidden = <?php echo $showOnlyHidden ? 'true' : 'false'; ?>;

		<!-- PageEar function call -->
		//writeObjects();
</script>

<script type="text/javascript" src="javascript/content.js?<?php echo date('Ymd'); ?>" language="JavaScript"></script>

<link rel="alternate" type="application/rss+xml" title="Neuigkeiten vom RSC Lüneburg e.V. | Triathlon Team Lüneburg" href="http://www.rsc-lueneburg.de/share/news.xml" />
<link rel="alternate" type="application/rss+xml" title="Termine vom RSC Lüneburg e.V. | Triathlon Team Lüneburg" href="http://www.rsc-lueneburg.de/xml/dates.xml" />

</head>
<body onload="initPage();" id="home">

<script type="text/javascript">
<!--
if(window.navigator.systemLanguage && !window.navigator.language && navigator.appVersion.toLowerCase().indexOf("msie 6.0") > -1) {
	function hoverIE() {
		for (var i = 0; i < document.getElementById("topnav").childNodes.length; i++)
		{
			if(document.getElementById("topnav").childNodes[i].className == "topnaventry" && 
				 document.getElementById("topnav").childNodes[i].childNodes.length == 2 &&
				 document.getElementById("topnav").childNodes[i].childNodes[1].className == "topnaventrysubmenu")
			{
				document.getElementById("topnav").childNodes[i].onmouseover=showSubmenu;
				document.getElementById("topnav").childNodes[i].onmouseout=hideSubmenu;
			}
		}
		
		for (var i = 0; i < document.getElementsByClassName("topnaventrysubmenuentry").length; i++)
		{
			if (document.getElementsByClassName("topnaventrysubmenuentry")[i].childNodes.length > 1)
			{
				document.getElementsByClassName("topnaventrysubmenuentry")[i].onmouseover=showSubSubmenu;
				document.getElementsByClassName("topnaventrysubmenuentry")[i].onmouseout=hideSubmenu;
			}
		}
	}

	function showSubmenu() {
	this.childNodes[1].style.display = "block";
	this.childNodes[1].style.marginLeft = "-" + this.offsetWidth + "px";
	this.childNodes[1].style.marginTop = (document.getElementById("topnav").offsetHeight - 1) + "px";
	}
	function showSubSubmenu() {
	this.childNodes[1].style.display = "block";
	this.childNodes[1].style.marginLeft = "-" + this.offsetWidth + "px";
	this.childNodes[1].style.marginTop = (document.getElementById("topnav").offsetHeight - 28) + "px";
	}
	function hideSubmenu() {
	this.childNodes[1].style.display = "none";
	}

	window.onload=hoverIE;
}

/*function addContentJs ()
{
	var scriptTag = document.createElement("script");
	scriptTag.setAttribute("src", "javascript/content.js?" + new Date().getTime());
	scriptTag.setAttribute("type", "text/javascript");
	scriptTag.setAttribute("language", "JavaScript");
	
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(scriptTag);
}

addContentJs();*/
-->
</script>

	<div id="site">
		<div id="header">
			<div id="logo_left">
				<a href="<?php echo $mainUrl; ?>"><img src="<?php echo $mainLogo; ?>"/></a>
			</div>
			<div id="headerlinks">
				<a title="Erfahre das Neueste vom RSC Lüneburg e.V. | Triathlon Team Lüneburg per RSS Feed" href="http://www.rsc-lueneburg.de/share/news.xml" target="_blank">
					<img src="pics/icon_48x48_rss-feed.png" alt="RSS Feed">
				</a>
				<a href="?page=16" onclick="javascript:showContent(16,null); return false;" title="Kontakt">
					<img src="pics/icon_48x48_contact.png" alt="Kontakt">
				</a>
				<a title="<?php echo $twitterTitle; ?>" href="http://twitter.com/<?php echo $twitterAccount; ?>" target="_blank">
					<img alt="Twitter" src="pics/icon_48x48_twitter.png">
				</a>
			</div>
			<div id="logo_right">
				<a href="<?php echo $subUrl; ?>" target="_blank"><img src="<?php echo $subLogo; ?>"/></a>
			</div>
			<div id="topnav">
				<div class="topnaventry">
					<a href="?page=1" onclick="javascript:showContent(1,null); return false;">Der Verein</a>
					<div class="topnaventrysubmenu">
						<div class="topnaventrysubmenuentry">
							<a href="?page=4" onclick="javascript:showContent(4,null); return false;">Mitglieder</a>
						</div>
						<hr/>
						<div class="topnaventrysubmenuentry">
							<a href="?page=201" onclick="javascript:showContent(201,null); return false;">Triathlon Team</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="?page=202" onclick="javascript:showContent(202,null); return false;">Radtouristik</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="?page=203" onclick="javascript:showContent(203,null); return false;">Straßenradsport</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="?page=204" onclick="javascript:showContent(204,null); return false;">Mountainbike</a>
						</div>
						<hr/>
						<div class="topnaventrysubmenuentry hassubsubmenu">
							<a href="?page=2" onclick="javascript:showContent(2,null); return false;">News</a>
							<div class="subsubmenu">
								<div class="subsubmenuentry">
									<a href="?page=5" onclick="javascript:showContent(5,null); return false;">Newsarchiv</a>
								</div>
								<hr/>
								<div class="subsubmenuentry">
									<a href="?page=28" onclick="javascript:showContent(28,null); return false;">Termine</a>
								</div>
								<hr/>	
								<div class="subsubmenuentry">
									<a href="?page=20" onclick="javascript:showContent(20,null); return false;">RSS Feed</a>
								</div>
							</div>
						</div>
						<hr/>
						<div class="topnaventrysubmenuentry">
							<a href="?page=1+topic=Vereinsmitgliedschaft" onclick="javascript:showContent(1,'Vereinsmitgliedschaft'); return false;">Mitglied werden</a>
						</div>
					</div>
				</div>
				<div class="topnaventryseparator">
				</div>
				<div class="topnaventry">
					<a href="?page=21" onclick="javascript:showContent(58,null); return false;">Jugend</a>
					<div class="topnaventrysubmenu">
						<div class="topnaventrysubmenuentry">
							<a href="?page=55" onclick="javascript:showContent(55,null); return false;">Training</a>
						</div>
					</div>
				</div>
				<div class="topnaventryseparator">
				</div>
				<?php if ($showHidden) : ?>
				<div class="topnaventry">
					<a href="?page=57" onclick="javascript:showContent(57,null); return false;">Teams</a>
					<div class="topnaventrysubmenu">
						<div class="topnaventrysubmenuentry hassubsubmenu">
							<a href="?page=50" onclick="javascript:showContent(50,null); return false;">Triathlon Regionalliga</a>
							<div class="subsubmenu">
								<div class="subsubmenuentry">
									<a href="?page=500" onclick="javascript:showContent(500,null); return false;">Aktuelle Tabelle</a>
								</div>
								<hr/>
								<div class="subsubmenuentry">
									<a href="?page=53" onclick="javascript:showContent(53,null); return false;">Regionalliga 2013</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=52" onclick="javascript:showContent(52,null); return false;">Regionalliga 2012</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=51" onclick="javascript:showContent(51,null); return false;">Regionalliga 2011</a>
								</div>
							</div>
						</div>
						<div class="topnaventrysubmenuentry hassubsubmenu">
							<a href="?page=60" onclick="javascript:showContent(60,null); return false;">Triathlon Landesliga</a>
							<div class="subsubmenu">
							<?php if ($showHidden) : ?>
								<div class="subsubmenuentry">
									<a href="?page=600" onclick="javascript:showContent(600,null); return false;">Aktuelle Tabelle</a>
								</div>
								<hr/>
								<?php endif; ?>
								<div class="subsubmenuentry">
									<a href="?page=64" onclick="javascript:showContent(64,null); return false;">Landesliga 2014</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=63" onclick="javascript:showContent(63,null); return false;">Landesliga 2013</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=62" onclick="javascript:showContent(62,null); return false;">Landesliga 2012</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<?php endif; ?>
				<div class="topnaventryseparator">
				</div>
				<div class="topnaventry">
					<a href="?page=21" onclick="javascript:showContent(21,null); return false;">Training</a>
					<div class="topnaventrysubmenu">
						<div class="topnaventrysubmenuentry">
							<a href="?page=22" onclick="javascript:showContent(22,null); return false;">Schwimmen</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="?page=23" onclick="javascript:showContent(23,null); return false;">Radfahren</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="?page=24" onclick="javascript:showContent(24,null); return false;">Laufen</a>
						</div>
						<hr/>
						<div class="topnaventrysubmenuentry">
							<a href="?page=55" onclick="javascript:showContent(55,null); return false;">Jugend</a>
						</div>
					</div>
				</div>
				<div class="topnaventryseparator">
				</div>
				<div class="topnaventry">
					<a href="?page=6" onclick="javascript:showContent(6,null); return false;">Events</a>
					<div class="topnaventrysubmenu">
						<!--div class="topnaventrysubmenuentry">
							<a href="http://www.bikeday-lueneburg.de" target="_blank">Bike Day Lüneburg</a>
						</div-->
						<div class="topnaventrysubmenuentry">
							<a href="?page=108" onclick="javascript:showContent(108,null); return false;">Lüneburger Heide Cup</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="http://www.rtf-lueneburg.de" target="_blank">RTF Rund um Lüneburg</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="http://www.bibermann-triathlon.de" target="_blank">Bibermann</a>
						</div>
						<hr/>
						<div class="topnaventrysubmenuentry">
							<a href="?page=110" onclick="javascript:showContent(110,null); return false;">TriTeam Serie</a>
						</div>
						<hr/>
						<div class="topnaventrysubmenuentry">
							<a href="?page=107" onclick="javascript:showContent(107,null); return false;">Events 2010</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="?page=109" onclick="javascript:showContent(109,null); return false;">Events bis 2009</a>
						</div>
					</div>
				</div>
				<div class="topnaventryseparator">
				</div>
				<div class="topnaventry">
				<a href="?page=41" onclick="javascript:showContent(41,null); return false;">Wettkämpfe</a>
					<div class="topnaventrysubmenu">
						<div class="topnaventrysubmenuentry hassubsubmenu">
							<a href="?page=29" onclick="javascript:showContent(29,null); return false;">Ergebnisse</a>
							<div class="subsubmenu">
								<div class="subsubmenuentry">
									<a href="?page=30" onclick="javascript:showContent(30,null); return false;">Schwimmen</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=31" onclick="javascript:showContent(31,null); return false;">Radfahren</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=32" onclick="javascript:showContent(32,null); return false;">Laufen</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=33" onclick="javascript:showContent(33,null); return false;">Duathlon</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=34" onclick="javascript:showContent(34,null); return false;">Triathlon</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=341" onclick="javascript:showContent(341,null); return false;">Sonstige</a>
								</div>
								<hr/>
								<div class="subsubmenuentry">
									<a href="http://results.rsc-lueneburg.de" target="_blank">Ergebnisse melden</a>
								</div>
							</div>
						</div>
						<div class="topnaventrysubmenuentry hassubsubmenu">
							<a href="?page=35" onclick="javascript:showContent(35,null); return false;">Berichte</a>
							<div class="subsubmenu">
								<div class="subsubmenuentry">
									<a href="?page=36" onclick="javascript:showContent(36,null); return false;">Schwimmen</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=37" onclick="javascript:showContent(37,null); return false;">Radfahren</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=38" onclick="javascript:showContent(38,null); return false;">Laufen</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=39" onclick="javascript:showContent(39,null); return false;">Duathlon</a>
								</div>
								<div class="subsubmenuentry">
									<a href="?page=40" onclick="javascript:showContent(40,null); return false;">Triathlon</a>
								</div>
								<hr/>
								<div class="subsubmenuentry">
									<a href="http://reports.rsc-lueneburg.de" target="_blank">Berichte senden</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="topnaventryseparator">
				</div>
				<div class="topnaventry">
					<a href="http://www.razyboard.com/system/user_ttlg.html" target="_blank">Forum</a>
				</div>
				<div class="topnaventryseparator">
				</div>
				<div class="topnaventry">
				<a href="?page=13" onclick="javascript:showContent(13,null); return false;">Service</a>
					<div class="topnaventrysubmenu">
						<div class="topnaventrysubmenuentry">
							<a href="?page=25" onclick="javascript:showContent(25,null); return false;">Download</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="?page=26" onclick="javascript:showContent(26,null); return false;">Links</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="?page=43" onclick="javascript:showContent(43,null); return false;">Tools</a>
						</div>
					</div>
				</div>
				<?php if ($showHidden) : ?>
				<div class="topnaventryseparator">
				</div>
				<div class="topnaventry">
					<a href="?page=7" onclick="javascript:showContent(7,null); return false;">Spenden</a>
					<div class="topnaventrysubmenu">
						<div class="topnaventrysubmenuentry">
							<a href="?page=70" onclick="javascript:showContent(70,null); return false;">Jugendabteilung</a>
						</div>
						<div class="topnaventrysubmenuentry">
							<a href="?page=71" onclick="javascript:showContent(71,null); return false;">Trainingsbetrieb</a>
						</div>
					</div>
				</div>
				<div class="topnaventryseparator">
				</div>
				<div class="topnaventry">
					<a href="?page=8" onclick="javascript:showContent(8,null); return false;">Sponsoren</a>
					<div class="topnaventrysubmenu">
						<div class="topnaventrysubmenuentry">
							<a href="?page=80" onclick="javascript:showContent(80,null); return false;">Sponsoring</a>
						</div>
					</div>
				</div>
				<?php endif; ?>
			</div>
		</div>

		<noscript>
				<div id="content" class="<?php echo $bodyClass; ?>">
					<div id="noscript">
						Sorry, sie haben leider kein JavaScript aktiviert.
						<br/><br/>
						Um die die volle Funktionalität dieser Webseite nutzen zu können müssen Sie JavaScript in ihrem Browser erlauben.
					</div>
				</div>
		</noscript>
		<script type="text/javascript">
		<!--
						var height = 420;
						
						if (navigator.appName.indexOf("Microsoft") > -1)
						{
							height = 450;
						}
						
						if (document.documentElement.clientHeight > 650)
						{
							height = document.documentElement.clientHeight - 185;
						}
						
						document.write("<div id=\"content\" class=\"<?php echo $bodyClass; ?>\" style=\"height: " + height + "px;\">");
						document.write("</div>");
				-->
		</script>
		<div id="footer">
			<a href="?page=17" onclick="javascript:showContent(17,null); return false;">Impressum</a>
			&nbsp;|&nbsp;
			<a href="?page=18" onclick="javascript:showContent(18,null); return false;">Disclaimer</a>
			&nbsp;|&nbsp;
			<a href="?page=16" onclick="javascript:showContent(16,null); return false;">Kontakt</a>
		</div>
	</div>
</body>
</html>