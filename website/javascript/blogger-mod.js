function twitterCallback2(twitters) {
  var statusHTML = [];
  for (var i=0; i<twitters.length; i++){
    var username = twitters[i].user.screen_name;
    var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
      return '<a target="_blank" target="_blank" href="'+url+'">'+url+'</a>';
    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
      return '<a target="_blank" href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(0)+'</a>';
    }).replace(/\B#([_a-z0-9]+)/ig, function(hashtag) {
      return '<a target="_blank" target="_blank" href="http://twitter.com/search?q=%23'+hashtag.substring(1)+'">'+hashtag+'</a>';
    });
    statusHTML.push('<div class="topTwitterEntry"><a target="_blank" class="twitter_time" target="_blank" href="http://twitter.com/'+username+'/statuses/'+twitters[i].id_str+'">'+exact_time(twitters[i].created_at)+'</a>:<div class="topTwitterEntryContent">'+status+'</div></div>');
  }
	if (document.getElementById('topTwitter') != null) {
		document.getElementById('topTwitter').innerHTML = statusHTML.join('');
	}
}

function exact_time(time_value) {
	var values = time_value.split(" ");
	time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
	var date = new Date(time_value);
	date.setMonth(date.getMonth() + 1);
	date.setHours(date.getHours() + 2);
	
	return addValueWithLeadingZero(date.getDate()) + "."
		 + addValueWithLeadingZero(date.getMonth()) + "."
		 + addValueWithLeadingZero(date.getFullYear()) + " um "
		 + addValueWithLeadingZero(date.getHours()) + ":"
		 + addValueWithLeadingZero(date.getMinutes()) + ":"
		 + addValueWithLeadingZero(date.getSeconds()) + " Uhr";
}

function addValueWithLeadingZero(value) {
	if (parseInt(value) < 10) {
		return "0" + value;
	}
	return value;
}
