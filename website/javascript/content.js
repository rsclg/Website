var pages = new Array();
pages[0] = "home";
pages[1] = "club";
pages[2] = "share/news.xml";
pages[3] = "team";
pages[4] = "team_members";
pages[5] = "news_archive";
pages[6] = "events";
pages[7] = "donate";
pages[8] = "sponsors";
pages[13] = "service";
pages[14] = "forum";

pages[16] = "contact";
pages[17] = "impressum";
pages[18] = "disclaimer";
pages[20] = "news_rssfeed";
pages[21] = "training";
pages[22] = "training_swim";
pages[23] = "training_bike";
pages[24] = "training_run";
pages[25] = "service_download";
pages[26] = "service_links";
pages[28] = "dates";
pages[29] = "results";
pages[30] = "http://external.rsc-lueneburg.de/results/2015/swim.html";
pages[31] = "http://external.rsc-lueneburg.de/results/2015/bike.html";
pages[32] = "http://external.rsc-lueneburg.de/results/2015/run.html";
pages[33] = "http://external.rsc-lueneburg.de/results/2015/duathlon.html";
pages[34] = "http://external.rsc-lueneburg.de/results/2015/triathlon.html";
pages[341] = "http://external.rsc-lueneburg.de/results/2015/others.html";
pages[35] = "reports";
pages[36] = "reports_swim";
pages[37] = "reports_bike";
pages[38] = "reports_run";
pages[39] = "reports_duathlon";
pages[40] = "reports_triathlon";
pages[41] = "competitions";
pages[43] = "service_tools";
pages[55] = "training_youth";
pages[56] = "contact_form";
pages[57] = "teams";
pages[58] = "youth";

pages[50] = "liga_reli";
pages[51] = "liga_reli_2011";
pages[52] = "liga_reli_2012";
pages[53] = "liga_reli_2013";
pages[60] = "liga_lali";
pages[62] = "liga_lali_2012";
pages[63] = "liga_lali_2013";
pages[64] = "liga_lali_2014";

pages[70] = "donate_youth";
pages[71] = "donate_training";

pages[80] = "sponsoring";

pages[101] = "results_run_2009";
pages[102] = "reports_run_2009";
pages[103] = "results_triathlon_2009";
pages[104] = "reports_triathlon_2009";
pages[105] = "results_bike_2009";
pages[106] = "results_duathlon_2009";

pages[109] = "events_2009";
pages[107] = "events_2010";
pages[108] = "events_heide_cup";
pages[110] = "events_triteam_serie";

pages[111] = "results_run_2010";
pages[112] = "reports_run_2010";
pages[113] = "results_triathlon_2010";
pages[114] = "reports_triathlon_2010";
pages[115] = "results_bike_2010";
pages[116] = "results_duathlon_2010";

pages[121] = "results_run_2011";
pages[122] = "reports_run_2011";
pages[123] = "results_triathlon_2011";
pages[124] = "reports_triathlon_2011";
pages[125] = "results_bike_2011";
pages[126] = "results_duathlon_2011";

pages[131] = "results_run_2012";
pages[132] = "reports_run_2012";
pages[133] = "results_triathlon_2012";
pages[134] = "reports_triathlon_2012";
pages[135] = "results_bike_2012";
pages[136] = "results_duathlon_2012";

pages[141] = "results_run_2013";
pages[142] = "reports_run_2013";
pages[143] = "results_triathlon_2013";
pages[144] = "reports_triathlon_2013";
pages[145] = "results_bike_2013";
pages[146] = "results_duathlon_2013";

pages[152] = "results_bike_2014";
pages[153] = "results_run_2014";
pages[154] = "results_duathlon_2014";
pages[155] = "results_triathlon_2014";

pages[201] = "club_tt";
pages[202] = "club_rtf";
pages[203] = "club_rr";
pages[204] = "club_mtb";

pages[301] = "news_2008";
pages[302] = "news_2009";
pages[303] = "news_2010";
pages[304] = "news_2011";
pages[305] = "news_2012";
pages[306] = "news_2013";
pages[307] = "news_2014";

pages[500] = "liga_reli_table";
pages[600] = "liga_lali_table";

var actPageNr = 0;
var req = null;
AbstractResponseParser = function() {};

var sponsorsPicturePath = "pics/sponsors/";

function resetContent()
{
	document.getElementById("content").innerHTML = "";
	document.getElementById("content").style.overflowY = "scroll";
	document.getElementById("content").style.overflowX = "hidden";
}

function initPage()
{
	var targetPage = 0;
	var pageParam = window.location.search.match(/page=\d+/);
	if (pageParam != null && pageParam.length > 0)
	{
		pageParam = String(pageParam);
		targetPage = parseInt(pageParam.substring("page=".length, pageParam.length));
	}
	
	//var topicParam = window.location.search.match(/topic=\d\d.\d\d.\d\d\d\d/);
	var topicParam = window.location.search.match(/topic=.+/);
	if (topicParam != null && topicParam.length > 0)
	{
		topicParam = String(topicParam);
		topicParam = topicParam.substring("topic=".length, topicParam.length);
		topicParam = unescape(topicParam);
	}
	showContent(targetPage, topicParam);
}

function createContentHeader(headlineText)
{
	var divHeadline = document.createElement("div");
	divHeadline.setAttribute("id", "top");
	divHeadline.className="headline";
	divHeadline.innerHTML = headlineText;
	document.getElementById("content").appendChild(divHeadline);
	
	var divMetaNav = document.createElement("div");
	divMetaNav.setAttribute("id", "metanavigation");
	divMetaNav.className="metanavigation";
	divMetaNav.innerHTML = "Seite: <a href=\"javascript:printPage();\">drucken</a> | <a href=\"javascript:bookmarkPage('" + headlineText + "');\">bookmarken</a> | <a href=\"javascript:linkPage();\">verlinken</a>";
	document.getElementById("content").appendChild(divMetaNav);
	
	var divSeparator = document.createElement("div");
	divSeparator.className="contentSeparator";
	document.getElementById("content").appendChild(divSeparator);
}

function printPage()
{
	window.open("print.php", "print_window", "scrollbars=yes,resizable=yes,status=yes,width=1024,height=768,top=0,left=0");
}

function bookmarkPage(headlineText)
{
	var title = document.getElementsByTagName("title")[0].innerHTML;
	var text = title + " - " + headlineText;
	var url = baseUrl + "?page=" + actPageNr;
	
	if (window.sidebar) // firefox
	{
		window.sidebar.addPanel(text,url, "");
	}
	else if(window.opera && window.print) // opera
	{
		var elem = document.createElement('a');
		elem.setAttribute('href',url);
		elem.setAttribute('title',text);
		elem.setAttribute('rel','sidebar');
		elem.click();
	}
	else if(document.all) // ie
	{
		window.external.AddFavorite(url,text);
	}
}

function linkPage()
{
	var url = "http://" + window.location.host + "/?page=" + actPageNr;
	var urlEntered = prompt('Der Link zu dieser Seite (markieren und kopieren):', url);
	
	if (url == urlEntered) {
		window.location = url;
	}
}

function showContent(pageId, topic)
{
	resetContent();
	actPageNr = pageId;
	
	var specific = "_rsc";
	if (baseUrl.match("tri-team-l")) {
		specific = "_ttlg";
	}
	
	if (pages[actPageNr] == null)
	{
		actPageNr = 0;
	}
	
	switch (actPageNr)
	{
		case 0   : doAjaxRequest("xml/" + pages[actPageNr] + specific + ".xml", null, function handleAjax(){homeHandler(new StandardTextblockXmlResponseParser())});break;
		case 2   : doAjaxRequest(pages[actPageNr], null, function handleAjax(){newsHandler(new NewsDatesXmlResponseParser(), topic)});break;
		case 4   : doAjaxRequest("xml/" + pages[actPageNr] + ".xml", null, function handleAjax(){teamMemberHandler(new TeamMemberXmlResponseParser(), topic)});break;
		case 8   : doAjaxRequest("xml/" + pages[actPageNr] + ".xml", null, function handleAjax(){sponsorsHandler(new SponsorsXmlResponseParser(), topic)});break;
		case 14  : forum(topic);break;
		case 56  : contactForm();break;
		case 28  : doAjaxRequest("xml/" + pages[actPageNr] + ".xml", null, function handleAjax(){newsHandler(new NewsDatesXmlResponseParser(), topic, "DATES")});break;
		case 301 :
		case 302 :
		case 303 :
		case 304 :
		case 305 :
		case 306 : doAjaxRequest("xml/" + pages[actPageNr] + ".xml", null, function handleAjax(){newsHandler(new NewsDatesXmlResponseParser(), topic)});break;
		case 70  : donateYouth();break;
		case 71  : donateTraining();break;
		case 30  :
		case 31  :
		case 32  :
		case 33  :
		case 34  :
		case 341 : showInFrame(actPageNr);break;
		default  : doAjaxRequest("xml/" + pages[actPageNr] + ".xml", null, function handleAjax(){standardTextblockHandler(new StandardTextblockXmlResponseParser(), topic)});
	}
}

function forum(topic)
{
	if (topic == null || topic == "" || topic.length < 1)
	{
		topic = "http://www.razyboard.com/system/user_ttlg.html?allowChat=false";
	}
	
	document.getElementById("content").style.overflow = "visible";
	
	var iFrame = document.createElement("iframe");
	iFrame.setAttribute("name", "forum");
	iFrame.setAttribute("marginwidth", "0");
	iFrame.setAttribute("marginheight", "0");
	iFrame.setAttribute("frameborder", "0");
	iFrame.setAttribute("height", "100%");
	iFrame.setAttribute("width", "100%");
	iFrame.setAttribute("src", topic);
	
	document.getElementById("content").style.overflowY = "hidden";
	document.getElementById("content").appendChild(iFrame);
}

function contactForm()
{
	document.getElementById("content").style.overflow = "visible";
	
	var iFrame = document.createElement("iframe");
	iFrame.setAttribute("name", "contactForm");
	iFrame.setAttribute("marginwidth", "0");
	iFrame.setAttribute("marginheight", "0");
	iFrame.setAttribute("frameborder", "0");
	iFrame.setAttribute("height", "95%");
	iFrame.setAttribute("width", "100%");
	iFrame.setAttribute("src", "http://external.rsc-lueneburg.de/contact.html");
	
	document.getElementById("content").appendChild(iFrame);
	
	var externLink = document.createElement("a");
	externLink.setAttribute("href", "http://external.rsc-lueneburg.de/contact.html");
	externLink.setAttribute("target", "_blank");
	externLink.appendChild(document.createTextNode("Kontaktformular (extern)"));
	
	var hint = document.createElement("div");
	hint.className="teaser";
	hint.appendChild(document.createTextNode("Falls das Kontaktformular nicht richtig funktioniert dann bitte "));
	hint.appendChild(externLink);
	hint.appendChild(document.createTextNode(" nutzen."));

	document.getElementById("content").appendChild(hint);
}

function donateYouth()
{
	document.getElementById("content").style.overflow = "visible";
	
	var iFrame = document.createElement("iframe");
	iFrame.setAttribute("name", "donateYouth");
	iFrame.setAttribute("marginwidth", "5");
	iFrame.setAttribute("marginheight", "5");
	iFrame.setAttribute("frameborder", "0");
	iFrame.setAttribute("height", "100%");
	iFrame.setAttribute("width", "100%");
	iFrame.setAttribute("src", "https://altruja.de/neues-spendenformular-801/spende");
	
	document.getElementById("content").appendChild(iFrame);
}

function donateTraining()
{
	document.getElementById("content").style.overflow = "visible";
	
	var iFrame = document.createElement("iframe");
	iFrame.setAttribute("name", "donateTraining");
	iFrame.setAttribute("marginwidth", "5");
	iFrame.setAttribute("marginheight", "5");
	iFrame.setAttribute("frameborder", "0");
	iFrame.setAttribute("height", "100%");
	iFrame.setAttribute("width", "100%");
	iFrame.setAttribute("src", "https://altruja.de/neues-spendenformular-800/spende");
	
	document.getElementById("content").appendChild(iFrame);
}

function showInFrame(actPageNr)
{
	document.getElementById("content").style.overflow = "visible";
	
	var iFrame = document.createElement("iframe");
	iFrame.setAttribute("name", "showInFrame");
	iFrame.setAttribute("marginwidth", "5");
	iFrame.setAttribute("marginheight", "5");
	iFrame.setAttribute("frameborder", "0");
	iFrame.setAttribute("height", "100%");
	iFrame.setAttribute("width", "100%");
	iFrame.setAttribute("src", pages[actPageNr]);
	
	document.getElementById("content").appendChild(iFrame);
}

/**
 * Handler for standard text block
 */
function standardTextblockHandler (parser, topic)
{
	switch(req.readyState)
	{
		case 4:
			if(req.status!=200)
			{
				alert("Error: "+req.status + "\n" + req.statusText);
			}
			else
			{
				xml = req.responseXML;
				parser.load(req);

				createContentHeader(parser.result.headline);
				
				var contentTable = document.createElement("ul");
				contentTable.className="contentTable";
				
				for (var i = 0; i < parser.result.paragraphs.length; i++)
				{
					var link = document.createElement("a");
					link.setAttribute("href", "#" + replaceSpecialChars(parser.result.paragraphs[i].title));
					link.appendChild(document.createTextNode(parser.result.paragraphs[i].title));

					var li = document.createElement("li");
					li.appendChild(link);
					
					contentTable.appendChild(li);
				}				

				document.getElementById("content").appendChild(contentTable);
				
				for (var i = 0; i < parser.result.paragraphs.length; i++)
				{
					var teaserTopLinkImg = document.createElement("img");
					teaserTopLinkImg.src="pics/icon/top.gif";

					var teaserTopLink = document.createElement("a");
					teaserTopLink.className="teasertoplink";
					teaserTopLink.setAttribute("href", "#top");
					teaserTopLink.appendChild(teaserTopLinkImg);

					var teaserTitleTableTd1 = document.createElement("td");
					teaserTitleTableTd1.className="teasertitletext";
					teaserTitleTableTd1.appendChild(document.createTextNode(parser.result.paragraphs[i].title));

					var teaserTitleTableTd2 = document.createElement("td");
					teaserTitleTableTd2.className="teasertitletoplink";
					teaserTitleTableTd2.appendChild(teaserTopLink);

					var teaserTitleTableRow = document.createElement("tr");
					teaserTitleTableRow.appendChild(teaserTitleTableTd1);
					teaserTitleTableRow.appendChild(teaserTitleTableTd2);

					var teaserTitleTableBody = document.createElement("tbody");
					teaserTitleTableBody.appendChild(teaserTitleTableRow);

					var teaserTitleTable = document.createElement("table");
					teaserTitleTable.className="teasertitle";
					teaserTitleTable.setAttribute("border", "0");
					teaserTitleTable.cellPadding="0";
					teaserTitleTable.cellSpacing="0";
					teaserTitleTable.appendChild(teaserTitleTableBody);

					var teasertext = document.createElement("div");
					teasertext.className="teasertext";
					teasertext.innerHTML = parser.result.paragraphs[i].text;
					
					var teaser = document.createElement("div");
					teaser.setAttribute("id", replaceSpecialChars(parser.result.paragraphs[i].title));
					teaser.className="teaser";
					teaser.appendChild(teaserTitleTable);
					teaser.appendChild(teasertext);
					document.getElementById("content").appendChild(teaser);
				}
				
				if (topic != null && document.getElementById(topic) != null)
				{
					document.getElementById(topic).scrollIntoView(true);
				}
			}
			break;
		default: return false; break;
	}
}

/**
 * Handler for home
 */
function homeHandler (parser)
{
	switch(req.readyState)
	{
		case 4:
			if(req.status!=200)
			{
				alert("Error: "+req.status + "\n" + req.statusText);
			}
			else
			{
				xml = req.responseXML;
				parser.load(req);
				
				var poweredBy = document.createElement("div");
				poweredBy.className = "homePoweredBy";
				poweredBy.setAttribute("id", "homePoweredBy");
				poweredBy.innerHTML="<div class=\"homeHeadline\">Sponsoren</div>";
				
				var text = document.createElement("div");
				text.className = "homeText";
				if (parser.result.paragraphs.length > 0)
				{
					text.innerHTML = parser.result.paragraphs[0].text;
				}

				var teaserNewsTitleTableTd1 = document.createElement("td");
				teaserNewsTitleTableTd1.className="teasertitletext";
				teaserNewsTitleTableTd1.appendChild(document.createTextNode("News"));

				var teaserNewsTitleTableTd2 = document.createElement("td");
				teaserNewsTitleTableTd2.className="teasertitletoplink";

				var teaserNewsTitleTableRow = document.createElement("tr");
				teaserNewsTitleTableRow.appendChild(teaserNewsTitleTableTd1);
				teaserNewsTitleTableRow.appendChild(teaserNewsTitleTableTd2);

				var teaserNewsTitleTableBody = document.createElement("tbody");
				teaserNewsTitleTableBody.appendChild(teaserNewsTitleTableRow);

				var teaserNewsTitleTable = document.createElement("table");
				teaserNewsTitleTable.className="teasertitle";
				teaserNewsTitleTable.setAttribute("border", "0");
				teaserNewsTitleTable.cellPadding="0";
				teaserNewsTitleTable.cellSpacing="0";
				teaserNewsTitleTable.appendChild(teaserNewsTitleTableBody);
				
				var teaserNewsText = document.createElement("div");
				teaserNewsText.className="topNewsDiv";
				var height = document.documentElement.clientHeight - 453;
				if (height < 80)
				{
					height = 80;
				}
				else if (height > 435)
				{
					height = 435;
				}
				teaserNewsText.style.height=height + "px";
				teaserNewsText.setAttribute("id", "topNews");
				
				var teaserNews = document.createElement("div");
				teaserNews.className="teaserTopNews";
				teaserNews.appendChild(teaserNewsTitleTable);
				teaserNews.appendChild(teaserNewsText);
				text.appendChild(teaserNews);
				
				var teaserDatesTitleTableTd1 = document.createElement("td");
				teaserDatesTitleTableTd1.className="teasertitletext";
				teaserDatesTitleTableTd1.appendChild(document.createTextNode("Termine"));

				var teaserDatesTitleTableTd2 = document.createElement("td");
				teaserDatesTitleTableTd2.className="teasertitletoplink";

				var teaserDatesTitleTableRow = document.createElement("tr");
				teaserDatesTitleTableRow.appendChild(teaserDatesTitleTableTd1);
				teaserDatesTitleTableRow.appendChild(teaserDatesTitleTableTd2);

				var teaserDatesTitleTableBody = document.createElement("tbody");
				teaserDatesTitleTableBody.appendChild(teaserDatesTitleTableRow);

				var teaserDatesTitleTable = document.createElement("table");
				teaserDatesTitleTable.className="teasertitle";
				teaserDatesTitleTable.setAttribute("border", "0");
				teaserDatesTitleTable.cellPadding="0";
				teaserDatesTitleTable.cellSpacing="0";
				teaserDatesTitleTable.appendChild(teaserDatesTitleTableBody);
				
				var teaserDatesText = document.createElement("div");
				teaserDatesText.className="topDatesDiv";
				teaserDatesText.style.height=height + "px";
				teaserDatesText.setAttribute("id", "topDates");
				
				var teaserDates = document.createElement("div");
				teaserDates.className="teaserTopDates";
				teaserDates.appendChild(teaserDatesTitleTable);
				teaserDates.appendChild(teaserDatesText);
				text.appendChild(teaserDates);
				
				var teaserTwitterTitleTableTd1 = document.createElement("td");
				teaserTwitterTitleTableTd1.className="teasertitletext";
				teaserTwitterTitleTableTd1.appendChild(document.createTextNode("Twitter"));

				var teaserTwitterTitleTableTd2 = document.createElement("td");
				teaserTwitterTitleTableTd2.className="teasertitletoplink";

				var teaserTwitterTitleTableRow = document.createElement("tr");
				teaserTwitterTitleTableRow.appendChild(teaserTwitterTitleTableTd1);
				teaserTwitterTitleTableRow.appendChild(teaserTwitterTitleTableTd2);

				var teaserTwitterTitleTableBody = document.createElement("tbody");
				teaserTwitterTitleTableBody.appendChild(teaserTwitterTitleTableRow);

				var teaserTwitterTitleTable = document.createElement("table");
				teaserTwitterTitleTable.className="teasertitle";
				teaserTwitterTitleTable.setAttribute("border", "0");
				teaserTwitterTitleTable.cellPadding="0";
				teaserTwitterTitleTable.cellSpacing="0";
				teaserTwitterTitleTable.appendChild(teaserTwitterTitleTableBody);
				
				var teaserTwitterText = document.createElement("div");
				teaserTwitterText.className="topTwitterDiv";
				teaserTwitterText.style.height=height + "px";
				teaserTwitterText.style.overflow="hidden";
				teaserTwitterText.setAttribute("id", "topTwitter");
				if (isRscPage)
				{
					teaserTwitterText.innerHTML='<a style="display: none;" class="twitter-timeline"  href="https://twitter.com/RSC_Lueneburg"  data-widget-id="465832616587841536" height="' + height + '">Tweets vom @RSC_Lueneburg</a>';
				}
				else
				{
					teaserTwitterText.innerHTML='<a style="display: none;" class="twitter-timeline"  href="https://twitter.com/TriTeamLG"  data-widget-id="348014757435027456" height="' + height + '">Tweets vom @TriTeamLG</a>';
				}
				
				var teaserTwitter = document.createElement("div");
				teaserTwitter.className="teaserTopTwitter";
				teaserTwitter.appendChild(teaserTwitterTitleTable);
				teaserTwitter.appendChild(teaserTwitterText);
				text.appendChild(teaserTwitter);
				
				var inAction = document.createElement("div");
				inAction.className = "homeInAction";
				inAction.setAttribute("id", "inAction");
				inAction.innerHTML="<div class=\"homeHeadline\">In Action</div>";
				
				var tableColOne = document.createElement("td");
				tableColOne.setAttribute("width", "1%");
				tableColOne.appendChild(poweredBy);

				var tableColTwo = document.createElement("td");
				tableColTwo.appendChild(text);

				var tableColThree = document.createElement("td");
				tableColThree.setAttribute("width", "1%");
				tableColThree.appendChild(inAction);

				var tableRow = document.createElement("tr");
				tableRow.appendChild(tableColOne);
				tableRow.appendChild(tableColTwo);
				tableRow.appendChild(tableColThree);

				var tableBody = document.createElement("tbody");
				tableBody.appendChild(tableRow);

				var table = document.createElement("table");
				table.className = "homeTable";
				table.appendChild(tableBody);
				
				document.getElementById("content").appendChild(table);
				
				/*var scriptTag = document.createElement("script");
				scriptTag.setAttribute("src", "https://api.twitter.com/1/statuses/user_timeline.json?callback=twitterCallback2&include_entities=true&include_rts=true&screen_name=TriTeamLG&count=10");
				scriptTag.setAttribute("type", "text/javascript");
				scriptTag.setAttribute("language", "JavaScript");
				
				var head = document.getElementsByTagName("head")[0];
				head.appendChild(scriptTag);*/
				
				!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
				
				doAjaxRequest("xml/sponsors.xml", null, function handleAjax(){poweredBySponsorsHandler(new SponsorsXmlResponseParser())});
			}
			break;
		default: return false; break;
	}
}

/**
 * Handler for poweredBySponsors
 */
function poweredBySponsorsHandler (parser)
{
	switch(req.readyState)
	{
		case 4:
			if(req.status!=200)
			{
				alert("Error: "+req.status + "\n" + req.statusText);
			}
			else
			{
				xml = req.responseXML;
				parser.load(req);
				
				var poweredBy = document.getElementById("homePoweredBy");
				
				for (var i = 0; i < parser.result.partners.length; i++)
				{
					var picture = document.createElement("img");
					picture.id=parser.result.partners[i].picture + ".poweredby.png";
					picture.src=sponsorsPicturePath + parser.result.partners[i].picture + ".poweredby.png";
					
					var poweredByLink = document.createElement("a");
					poweredByLink.setAttribute("href", parser.result.partners[i].link);
					poweredByLink.setAttribute("onclick", parser.result.partners[i].onclick + ";return false;");
					poweredByLink.setAttribute("target", "_blank");
					poweredByLink.setAttribute("title", parser.result.partners[i].name);
					poweredByLink.appendChild(picture);
					
					var poweredByEntry = document.createElement("div");
					poweredByEntry.className="poweredByPhoto";
					poweredByEntry.appendChild(poweredByLink);
					
					poweredBy.appendChild(poweredByEntry);
				}
				
				doAjaxRequest("xml/inaction.xml", null, function handleAjax(){inActionHandler(new InActionXmlResponseParser())});
			}
			break;
		default: return false; break;
	}
}

/**
 * Handler for inActionHandler
 */
function inActionHandler (parser)
{
	switch(req.readyState)
	{
		case 4:
			if(req.status!=200)
			{
				alert("Error: "+req.status + "\n" + req.statusText);
			}
			else
			{
				xml = req.responseXML;
				parser.load(req);
				
				var counter = 20;
				var topNewsHeight = parseInt(document.getElementById("topNews").style.height);
				if (topNewsHeight < 170)
				{
					counter = 10;
				}
				else if (topNewsHeight < 230)
				{
					counter = 12;
				}
				else if (topNewsHeight < 270)
				{
					counter = 14;
				}
				else if (topNewsHeight < 310)
				{
					counter = 16;
				}
				else if (topNewsHeight < 420)
				{
					counter = 18;
				}
				
				var numbers = new Array(counter);
				var maxValue = parser.pictures.length-1;
				
				for (var i = 0; i < counter; i++)
				{
					var value = Math.round((maxValue) * Math.random() + 0);
				
					
					while (numbers.contains(value))
					{
						value = Math.round((maxValue) * Math.random() + 0);
					}
					
					numbers[i] = value;
				}
				
				for (var i = 0; i < numbers.length; i++)
				{
					var img = document.createElement("img");
					img.setAttribute("src", parser.pictures[numbers[i]].path);
					
					if (navigator.appName.indexOf("Microsoft") == -1)
					{
						img.style.margin="-1px";
						img.style.marginLeft="1px";
						img.style.paddingLeft="1px";
					}
					else
					{
						img.style.padding="1px";
					}
					
					img.style.width="60px";
					img.style.height="60px";

					var picture = document.createElement("a");
					picture.setAttribute("href", parser.pictures[numbers[i]].link);
					picture.setAttribute("onclick", parser.pictures[numbers[i]].onclick + ";return false;");
					picture.setAttribute("title", parser.pictures[numbers[i]].title);
					picture.appendChild(img);
					
					document.getElementById("inAction").appendChild(picture);
				}
				
				var select = document.createElement("select");
				select.id="inActionDropDown";
				select.onchange = function () { if (this.options.selectedIndex > 0) {eval(this.options[this.options.selectedIndex].value); return false;} };
				
				var option = document.createElement("option");
				option.appendChild(document.createTextNode(">>> mehr ..."));
				select.appendChild(option);
				
				for (var i = parser.pictures.length-1; i >= 0; i--)
				{
					option = document.createElement("option");
					option.appendChild(document.createTextNode(parser.pictures[i].title));
					option.title=parser.pictures[i].title;
					option.value=parser.pictures[i].onclick;
					select.appendChild(option);
				}
				
				document.getElementById("inAction").appendChild(select);
				
				doAjaxRequest("share/news.xml", null, function handleAjax(){topNewsHandler(new NewsDatesXmlResponseParser())});
			}
			break;
		default: return false; break;
	}
}

/**
 * Handler for top news
 */
function topNewsHandler (parser)
{
	switch(req.readyState)
	{
		case 4:
			if(req.status!=200)
			{
				alert("Error: "+req.status + "\n" + req.statusText);
			}
			else
			{
				xml = req.responseXML;
				parser.load(req);
				
				var max = 10;
				
				if (parser.result.paragraphs.length < max)
				{
					max = parser.result.paragraphs.length;
				}
				
				var div = document.getElementById("topNews");
				
				for (var i = 0; i < max; i++)
				{
					var link = document.createElement("a");
					link.setAttribute("href", baseUrl + "?page=2+topic=" + parser.result.paragraphs[i].pubDate);
					link.setAttribute("onclick", "showContent(2,\"" + parser.result.paragraphs[i].pubDate + "\"); return false;");
					link.appendChild(document.createTextNode(parser.result.paragraphs[i].pubDate));
					
					var content = document.createElement("div");
					content.className="topNewsEntryContent";
					content.appendChild(document.createTextNode(parser.result.paragraphs[i].title));
					
					var entry = document.createElement("div");
					entry.className="topNewsEntry";
					entry.appendChild(link);
					entry.appendChild(document.createTextNode(":"));
					entry.appendChild(content);
					
					div.appendChild(entry);
				}
					
				doAjaxRequest("xml/dates.xml", null, function handleAjax(){topDatesHandler(new NewsDatesXmlResponseParser())});
			}
			break;
		default: return false; break;
	}
}

/**
 * Handler for dates.
 */
function topDatesHandler (parser)
{
	switch(req.readyState)
	{
		case 4:
			if(req.status!=200)
			{
				alert("Error: "+req.status + "\n" + req.statusText);
			}
			else
			{
				xml = req.responseXML;
				parser.load(req, "DATES");
				
				var max = 10;
				
				if (parser.result.paragraphs.length < max)
				{
					max = parser.result.paragraphs.length;
				}
				
				var div = document.getElementById("topDates");
				
				for (var i = 0; i < max; i++)
				{
					var link = document.createElement("a");
					link.setAttribute("href", baseUrl + "?page=28+topic=" + parser.result.paragraphs[i].pubDate);
					link.setAttribute("onclick", "showContent(28,\"" + parser.result.paragraphs[i].pubDate + "\"); return false;");
					link.appendChild(document.createTextNode(parser.result.paragraphs[i].pubDate));
					
					var content = document.createElement("div");
					content.className="topDatesEntryContent";
					content.appendChild(document.createTextNode(parser.result.paragraphs[i].title));
					
					var entry = document.createElement("div");
					entry.className="topDatesEntry";
					entry.appendChild(link);
					entry.appendChild(document.createTextNode(":"));
					entry.appendChild(content);
					
					div.appendChild(entry);
				}
			}
			break;
		default: return false; break;
	}
}

/**
 * Handler for news
 */
function newsHandler (parser, topic, source)
{
	switch(req.readyState)
	{
		case 4:
			if(req.status!=200)
			{
				alert("Error: "+req.status + "\n" + req.statusText);
			}
			else
			{
				xml = req.responseXML;
				parser.load(req, source);
				
				createContentHeader(parser.result.headline);
				
				for (var i = 0; i < parser.result.paragraphs.length; i++)
				{
					var teaserTopLinkImg = document.createElement("img");
					teaserTopLinkImg.src="pics/icon/top.gif";

					var teaserTopLink = document.createElement("a");
					teaserTopLink.className="teasertoplink";
					teaserTopLink.setAttribute("href", "#top");
					teaserTopLink.appendChild(teaserTopLinkImg);

					var teaserTitleTableTd1 = document.createElement("td");
					teaserTitleTableTd1.className="teasertitletext";
					teaserTitleTableTd1.appendChild(document.createTextNode(parser.result.paragraphs[i].pubDate));
					teaserTitleTableTd1.appendChild(document.createTextNode(" - "));
					teaserTitleTableTd1.appendChild(document.createTextNode(parser.result.paragraphs[i].title));

					var teaserTitleTableTd2 = document.createElement("td");
					teaserTitleTableTd2.className="teasertitletoplink";
					teaserTitleTableTd2.appendChild(teaserTopLink);

					var teaserTitleTableRow = document.createElement("tr");
					teaserTitleTableRow.appendChild(teaserTitleTableTd1);
					teaserTitleTableRow.appendChild(teaserTitleTableTd2);

					var teaserTitleTableBody = document.createElement("tbody");
					teaserTitleTableBody.appendChild(teaserTitleTableRow);

					var teaserTitleTable = document.createElement("table");
					teaserTitleTable.className="teasertitle";
					teaserTitleTable.setAttribute("border", "0");
					teaserTitleTable.cellPadding="0";
					teaserTitleTable.cellSpacing="0";
					teaserTitleTable.appendChild(teaserTitleTableBody);

					var teasertext = document.createElement("div");
					teasertext.className="teasertext";
					teasertext.innerHTML = parser.result.paragraphs[i].text;
					
					var teaser = document.createElement("div");
					teaser.setAttribute("id", parser.result.paragraphs[i].pubDate);
					teaser.className="teaser";
					teaser.appendChild(teaserTitleTable);
					teaser.appendChild(teasertext);
					document.getElementById("content").appendChild(teaser);					
				}
				
				if (topic != null && document.getElementById(topic) != null)
				{
					document.getElementById(topic).scrollIntoView(true);
				}
			}
			break;
		default: return false; break;
	}
}

/**
 * Handler for team members
 */
function teamMemberHandler (parser, topic)
{
	switch(req.readyState)
	{
		case 4:
			if(req.status!=200)
			{
				alert("Error: "+req.status + "\n" + req.statusText);
			}
			else
			{
				xml = req.responseXML;
				parser.load(req);
				
				createContentHeader(parser.result.headline);
				
				// Adding preview container
				previewBorder = document.createElement("img");
				previewBorder.src="pics/icon/big_magnifier.png";
				
				previewDiv = document.createElement("div");
				previewDiv.id="memberpreview";
				previewDiv.appendChild(previewBorder);
				document.getElementById("content").appendChild(previewDiv);
				
				// Adding list of members
				contentTableDiv = document.createElement("div");
				contentTableDiv.className="contentTableDiv";
				contentTable = document.createElement("ul");
				contentTable.className="contentTable";
				
				for (var i = 0; i < parser.result.members.length; i++)
				{
					var photo = "pics/team/members/" + parser.result.members[i].id + ".jpg";
					
					var link = document.createElement("a");
					link.setAttribute("href", photo);
					link.setAttribute("id", parser.result.members[i].id);
					link.setAttribute("rel", "lightbox[members]");
					link.setAttribute("title", parser.result.members[i].name);
					link.onmouseover = function() {document.getElementById('memberpreview').style.backgroundImage='url(' + this.href + ')';};
					link.onmouseout = function() {document.getElementById('memberpreview').style.backgroundImage='url(pics/team/members/clear.png)';};
					link.appendChild(document.createTextNode(parser.result.members[i].name));

					var li = document.createElement("li");
					li.appendChild(link);
					
					contentTable.appendChild(li);
				}
				
				contentTableDiv.appendChild(contentTable);
				document.getElementById("content").appendChild(contentTableDiv);
				
				if (topic != null && document.getElementById(topic) != null)
				{
					document.getElementById(topic).scrollIntoView(true);
				}
			}
			break;
		default: return false; break;
	}
}

/**
 * Handler for team partners
 */
function sponsorsHandler (parser, topic)
{
	switch(req.readyState)
	{
		case 4:
			if(req.status!=200)
			{
				alert("Error: "+req.status + "\n" + req.statusText);
			}
			else
			{
				xml = req.responseXML;
				parser.load(req);
				
				createContentHeader(parser.result.headline);

				var contentTable = document.createElement("ul");
				contentTable.className="contentTable";
				
				for (var i = 0; i < parser.result.partners.length; i++)
				{
					var link = document.createElement("a");
					link.setAttribute("href", "#" + parser.result.partners[i].picture);
					link.appendChild(document.createTextNode(parser.result.partners[i].name));

					var li = document.createElement("li");
					li.appendChild(link);
					
					contentTable.appendChild(li);
				}				

				document.getElementById("content").appendChild(contentTable);
				
				for (var i = 0; i < parser.result.partners.length; i++)
				{
					var picture = document.createElement("img");
					picture.className="sponsorsPhoto";
					picture.src=sponsorsPicturePath + parser.result.partners[i].picture + ".jpg";
					
					var infoString = parser.result.partners[i].text;
						       //+ "<br/><br/><i><b>Webseite</b></i><br/><br/>"
						       //+ "<a href=\"" + parser.result.partners[i].website + "\" target=\"_blank\">" + parser.result.partners[i].website + "</a>";
					
					var infos = document.createElement("div");
					infos.innerHTML = infoString;
					
					var teaserTopLinkImg = document.createElement("img");
					teaserTopLinkImg.src="pics/icon/top.gif";

					var teaserTopLink = document.createElement("a");
					teaserTopLink.className="teasertoplink";
					teaserTopLink.setAttribute("href", "#top");
					teaserTopLink.appendChild(teaserTopLinkImg);

					var teaserTitleTableTd1 = document.createElement("td");
					teaserTitleTableTd1.className="teasertitletext";
					teaserTitleTableTd1.appendChild(document.createTextNode(parser.result.partners[i].name));

					var teaserTitleTableTd2 = document.createElement("td");
					teaserTitleTableTd2.className="teasertitletoplink";
					teaserTitleTableTd2.appendChild(teaserTopLink);

					var teaserTitleTableRow = document.createElement("tr");
					teaserTitleTableRow.appendChild(teaserTitleTableTd1);
					teaserTitleTableRow.appendChild(teaserTitleTableTd2);

					var teaserTitleTableBody = document.createElement("tbody");
					teaserTitleTableBody.appendChild(teaserTitleTableRow);

					var teaserTitleTable = document.createElement("table");
					teaserTitleTable.className="teasertitle";
					teaserTitleTable.setAttribute("border", "0");
					teaserTitleTable.cellPadding="0";
					teaserTitleTable.cellSpacing="0";
					teaserTitleTable.appendChild(teaserTitleTableBody);
					
					var teasertext = document.createElement("div");
					teasertext.className="teasertext";
					teasertext.appendChild(picture);
					teasertext.appendChild(infos);
					
					var teaser = document.createElement("div");
					teaser.setAttribute("id", parser.result.partners[i].picture);
					teaser.className="teaser";
					teaser.appendChild(teaserTitleTable);
					teaser.appendChild(teasertext);
					document.getElementById("content").appendChild(teaser);					
				}
								
				if (topic != null && document.getElementById(topic) != null)
				{
					document.getElementById(topic).scrollIntoView(true);
				}
			}
			break;
		default: return false; break;
	}
}

/*****************************************************************************************
 * Funktionen zum Anzeigen modaler Dialoge
 ****************************************************************************************/

/**
 * Funktion zum Einblenden eines Modalen Dialogs - Div + ausgegrauter Hintergrund (Overlay Effekt)
 * 
 * Um den Dialog korrekt anzeigen und positionieren zu können, muss er direktes Kindelement vom BODY sein.
 * Ist das nicht der Fall, wird der Knoten im DOM unterhalb vom BODY verschoben.
 *  
 * Danach wird der Dialog eingeblendet und die Position zum Anzeigen errechnet und gesetzt.
 */
function openModalDialog (dialogId)
{
  if (document.getElementById(dialogId).parentNode.id != "home")
  {
	  var dialogClone = document.getElementById(dialogId).cloneNode(true);
	  document.getElementById(dialogId).parentNode.removeChild(document.getElementById(dialogId));
	  document.getElementById("home").appendChild(dialogClone);
  }
  document.getElementById(dialogId).style.display = "block";
  document.getElementById(dialogId).width = document.getElementById(dialogId).offsetWidth;
  document.getElementById(dialogId).style.width = document.getElementById(dialogId).offsetWidth + "px";
  document.getElementById(dialogId).style.left = (document.documentElement.clientWidth/2 - document.getElementById(dialogId).offsetWidth/2) + "px";
  if (parseInt(document.getElementById(dialogId).style.left) < 10)
  {
	  document.getElementById(dialogId).style.left = "10px";  
  }
  document.getElementById(dialogId).style.top = (document.documentElement.clientHeight/2 - document.getElementById(dialogId).offsetHeight/2) + "px";
  if (parseInt(document.getElementById(dialogId).style.top) < 10)
  {
	  document.getElementById(dialogId).style.top = "10px";  
  }

  showOverlay();
}

/**
 *  Blendet den Dialog aus.
 */
function closeModalDialog (dialogId)
{
  closeOverlay();
  
  if (document.getElementById(dialogId) != null)
  {
    document.getElementById(dialogId).style.display="none";
  }
}

/**
 *  Beendet den Overlay Effekt.
 */
function closeOverlay ()
{
  if (document.getElementById("overlayIFrame") != null)
  {
    document.getElementById("home").removeChild(document.getElementById("overlayIFrame"));
  }
}

/**
 *  Erzeugt einen Overlay Effekt, so dass die Webseite ausgegraut wird und nicht mehr geklickt werden kann.
 *  Im IE 6 können Drop Down Boxen nicht von einem Div überblendet werden.
 *  Deshalb wird ein iFrame benutzt.
 *  Da im IE allgemein der Hintergrund diese iFrame nicht per CSS gesetzt werden kann, muss eine leere HTML
 *  Seite als SRC angegeben werden. Diese Seite bestimmt dann die Hintergrundfarbe des Overlay Effektes.
 */
function showOverlay ()
{
  closeOverlay();
  
  var overlay = document.createElement("iframe");
  overlay.id = "overlayIFrame";
  overlay.setAttribute("src", "html/overlay/overlay.htm");
  overlay.setAttribute("scrolling", "no");
  overlay.setAttribute("frameborder", "0");
  overlay.style.height = document.documentElement.scrollHeight + "px";
  document.getElementById("home").appendChild(overlay);
  window.scrollTo(0, 0);
}

/*****************************************************************************************
 * ENDE : Funktionen zum Anzeigen modaler Dialoge
 ****************************************************************************************/

/**
 * -------------------------------------
 * Adding Ajax
 * -------------------------------------
 */
function doAjaxRequest(url, params, handlerFunction)
{
	try
	{
		req = new XMLHttpRequest();
	}
	catch (e)
	{
		try
		{
			req = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try
			{
				req = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (failed)
			{
				req = null;
			}
		}
	}

	if (req == null)
	{
		showErrorMessage("Error creating request object!");
	}
	
	var completeUrl = baseUrl + url;
	
	if (params != null && params.length > 0)
	{
		completeUrl += "?";
		
		for (var i = 0; i < params.length; i++)
		{
			completeUrl += encodeParam(params[i][0]);
			completeUrl += "="
			completeUrl += encodeParam(params[i][1]);
			
			if (i < (params.length - 1))
			{
				completeUrl += "&";
			}
		}
	}
	else
	{
		completeUrl += "?"+new Date().getTime();
	}
	
	req.open("GET", completeUrl, true);
	
	req.onreadystatechange = handlerFunction;
	
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	req.setRequestHeader("Content-Length", "1");
	req.send(null);
}

// private method for UTF-8 encoding
function encodeParam (param)
{
	var string = String(param);
	string = escape(string);
	string = string.replace(/\+/g, encodeURIComponent("+"));
	return string;
}

/**
 * Parser for the xml response.
 */
StandardTextblockXmlResponseParser = Class.create();
StandardTextblockXmlResponseParser.prototype = Object.extend(new AbstractResponseParser(), {
  initialize: function() {
    this.type = "xml";
  },

  load: function(request) {
    this.content = request.responseXML;
    this.parse();
  },

  parse: function() {
	var root = this.content.documentElement;
	this.result = new Object();
	this.result.headline = root.getElementsByTagName("headline")[0].firstChild.nodeValue;
	
	var paragraphs = new Array();
	var elements = getDomElements(root, "paragraph");
	
	for (var i = 0; i < elements.length; i++)
	{
		var paragraph = new Object();
		paragraph.title = elements[i].getElementsByTagName("title")[0].firstChild.nodeValue;
		paragraph.text = elements[i].getElementsByTagName("text")[0].firstChild.nodeValue;
		paragraphs.push(paragraph);
	}
	
	this.result.paragraphs = paragraphs;
  }
});

/**
 * Parser for the xml response.
 */
NewsDatesXmlResponseParser = Class.create();
NewsDatesXmlResponseParser.prototype = Object.extend(new AbstractResponseParser(), {
  initialize: function() {
    this.type = "xml";
  },

  load: function(request, source) {
    this.content = request.responseXML;
    this.parse(source);
  },

  parse: function(source) {
	var root = this.content.documentElement;
	this.result = new Object();
	this.result.headline = "News";
	
	var paragraphs = new Array();
	var elements = getDomElements(root, "item");
	
	for (var i = 0; i < elements.length; i++)
	{
		var paragraph = new Object();
		paragraph.title = elements[i].getElementsByTagName("title")[0].firstChild.nodeValue;
		if (source == "DATES")
		{
			paragraph.pubDate = elements[i].getElementsByTagName("pubDate")[0].firstChild.nodeValue;
		}
		else
		{
			var pubDate = new Date(Date.parse(elements[i].getElementsByTagName("pubDate")[0].firstChild.nodeValue));
			paragraph.pubDate = pubDate.toLocaleFormat('%d.%m.%Y');
		}
		paragraph.text = elements[i].getElementsByTagName("description")[0].firstChild.nodeValue.replace(/href/g, 'target="_blank" href');
		paragraph.link = elements[i].getElementsByTagName("link")[0].firstChild.nodeValue;
		paragraphs.push(paragraph);
	}
	
	this.result.paragraphs = paragraphs;
  }
});

/**
 * Parser for the xml response.
 */
InActionXmlResponseParser = Class.create();
InActionXmlResponseParser.prototype = Object.extend(new AbstractResponseParser(), {
  initialize: function() {
    this.type = "xml";
		this.pictures = new Array();
  },

  load: function(request) {
    this.content = request.responseXML;
    this.parse();
  },

  parse: function() {
	var root = this.content.documentElement;
	var pictures = new Array();
	var elements = getDomElements(root, "picture");
	
	for (var i = 0; i < elements.length; i++)
	{
		var picture = new Object();
		picture.path = elements[i].getElementsByTagName("path")[0].firstChild == null ? "" : elements[i].getElementsByTagName("path")[0].firstChild.nodeValue;
		picture.title = elements[i].getElementsByTagName("title")[0].firstChild == null ? "" : elements[i].getElementsByTagName("title")[0].firstChild.nodeValue;
		picture.link = elements[i].getElementsByTagName("link")[0].firstChild == null ? "" : elements[i].getElementsByTagName("link")[0].firstChild.nodeValue;
		picture.onclick = elements[i].getElementsByTagName("link")[0].firstChild == null ? "" : elements[i].getElementsByTagName("onclick")[0].firstChild.nodeValue;
		this.pictures.push(picture);
	}
  }
});

/**
 * Parser for the xml response.
 */
TeamMemberXmlResponseParser = Class.create();
TeamMemberXmlResponseParser.prototype = Object.extend(new AbstractResponseParser(), {
  initialize: function() {
    this.type = "xml";
  },

  load: function(request) {
    this.content = request.responseXML;
    this.parse();
  },

  parse: function() {
	var root = this.content.documentElement;
	this.result = new Object();
	this.result.headline = root.getElementsByTagName("headline")[0].firstChild.nodeValue;
	
	var members = new Array();
	var elements = getDomElements(root, "member");
	
	for (var i = 0; i < elements.length; i++)
	{
		var member = new Object();
		member.id = elements[i].getAttribute("id");
		member.name = elements[i].getAttribute("name");
		members.push(member);
	}
	
	this.result.members = members;
  }
});

/**
 * Parser for the xml response.
 */
SponsorsXmlResponseParser = Class.create();
SponsorsXmlResponseParser.prototype = Object.extend(new AbstractResponseParser(), {
  initialize: function() {
    this.type = "xml";
  },

  load: function(request) {
    this.content = request.responseXML;
    this.parse();
  },

  parse: function() {
	var root = this.content.documentElement;
	this.result = new Object();
	this.result.headline = root.getElementsByTagName("headline")[0].firstChild.nodeValue;
	
	var partners = new Array();
	var elements = getDomElements(root, "partner");
	
	for (var i = 0; i < elements.length; i++)
	{
		var partner = new Object();
		partner.name = elements[i].getElementsByTagName("name")[0].firstChild.nodeValue;
		partner.picture = elements[i].getElementsByTagName("picture")[0].firstChild.nodeValue;
		partner.link = elements[i].getElementsByTagName("link")[0].firstChild.nodeValue;
		partner.onclick = elements[i].getElementsByTagName("onclick")[0].firstChild.nodeValue;
		partner.text = elements[i].getElementsByTagName("text")[0].firstChild.nodeValue;
		partners.push(partner);
	}
	
	this.result.partners = partners;
  }
});

if (navigator.appName.indexOf("Microsoft") > -1)
{
	initPage();
}

Array.prototype.contains = function (element)
{
	for (var i = 0; i < this.length; i++)
	{
		if (this[i] == element)
		{
			return true;
		}
	}
	return false;
}

function replaceSpecialChars (string) {
	string = string.replace(/\u00A0/g, '_');
	string = string.replace(/\u00E4/g, 'ae');
	string = string.replace(/\u00C4/g, 'Ae');
	string = string.replace(/\u00F6/g, 'oe');
	string = string.replace(/\u00D6/g, 'Oe');
	string = string.replace(/\u00FC/g, 'ue');
	string = string.replace(/\u00DC/g, 'Ue');
	string = string.replace(/\u00DF/g, 'ss');
	return string;
}

function getDomElements(dom, tagName)
{
	var elements = new Array();
	elements.push.apply(elements, dom.getElementsByTagName(tagName));
	
	if (showHidden)
	{
		if (showOnlyHidden)
		{
			elements = dom.getElementsByTagName(tagName + "_");
		}
		else
		{
			elements.push.apply(elements, dom.getElementsByTagName(tagName + "_"))
		}
	}
	return elements;
}
