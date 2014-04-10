function calculateSwimPace ()
{
	document.getElementById("result_swimPaceCalculatorMinPer100m").value = "";
	document.getElementById("result_swimPaceCalculatorKmPerHour").value = "";
	
	var distance = document.getElementById("distance_swimPaceCalculator").value;
	if (distance.length < 1 || isNaN(distance) || parseInt(distance, 10) <= 0)
	{
		alert("Die eingegebene Schwimm-Strecke nicht korrekt. Es muss eine Zahl größer 0 eingegeben werden.");
	}
	else
	{
		var time_hh = document.getElementById("time_hh_swimPaceCalculator").value;
		var time_mm = document.getElementById("time_mm_swimPaceCalculator").value;
		var time_ss = document.getElementById("time_ss_swimPaceCalculator").value;
		
		if (time_hh.length < 1 || isNaN(time_hh) ||
			time_mm.length < 1 || isNaN(time_mm) ||
			time_ss.length < 1 || isNaN(time_ss) ||
			((parseInt(time_hh, 10) + parseInt(time_mm, 10) + parseInt(time_ss, 10)) <= 0))
		{
			alert("Die eingegebene Schwimm-Zeit ist nicht korrekt. Alle Felder müssen Zahlen enthalten und mindestens einer der Werte muss eine Zahl größer 0 sein.");
		}
		else
		{
			var pace = (((parseInt(3600 * time_hh, 10)) + (parseInt(60 * time_mm, 10)) + (parseInt(time_ss, 10))) / (distance/100))/60;
			
			var pace_minutes = parseInt(pace, 10);
			var pace_seconds = pace - pace_minutes;
			pace_seconds = pace_seconds * 60;
			
			document.getElementById("result_swimPaceCalculatorMinPer100m").value = pace_minutes + ":" + (pace_seconds.toFixed(2).length < 5 ? "0" : "") + pace_seconds.toFixed(2);
			
			var v = ((distance/1000) / (parseInt(time_hh, 10) + (parseInt(time_mm, 10) / 60) + (parseInt(time_ss, 10) / 3600)));
			
			document.getElementById("result_swimPaceCalculatorKmPerHour").value = v.toFixed(2);
		}
	}
}

function calculateBikePace ()
{
	document.getElementById("result_bikePaceCalculatorMinPerKm").value = "";
	document.getElementById("result_bikePaceCalculatorKmPerHour").value = "";
	
	var distance = document.getElementById("distance_bikePaceCalculator").value;
	if (distance.length < 1 || isNaN(distance) || parseInt(distance, 10) <= 0)
	{
		alert("Die eingegebene Radfahr-Strecke nicht korrekt. Es muss eine Zahl größer 0 eingegeben werden.");
	}
	else
	{
		var time_hh = document.getElementById("time_hh_bikePaceCalculator").value;
		var time_mm = document.getElementById("time_mm_bikePaceCalculator").value;
		var time_ss = document.getElementById("time_ss_bikePaceCalculator").value;
		if (time_hh.length < 1 || isNaN(time_hh) ||
			time_mm.length < 1 || isNaN(time_mm) ||
			time_ss.length < 1 || isNaN(time_ss) ||
			((parseInt(time_hh, 10) + parseInt(time_mm, 10) + parseInt(time_ss, 10)) <= 0))
		{
			alert("Die eingegebene Radfahr-Zeit ist nicht korrekt. Alle Felder müssen Zahlen enthalten und mindestens einer der Werte muss eine Zahl größer 0 sein.");
		}
		else
		{
			var pace = (((parseInt(3600 * time_hh, 10)) + (parseInt(60 * time_mm, 10)) + (parseInt(time_ss, 10))) / (distance/1000))/60;
			
			var pace_minutes = parseInt(pace, 10);
			var pace_seconds = pace - pace_minutes;
			pace_seconds = pace_seconds * 60;
			
			document.getElementById("result_bikePaceCalculatorMinPerKm").value = pace_minutes + ":" + (pace_seconds.toFixed(2).length < 5 ? "0" : "") + pace_seconds.toFixed(2);
			
			var v = ((distance/1000) / (parseInt(time_hh, 10) + (parseInt(time_mm, 10) / 60) + (parseInt(time_ss, 10) / 3600)));
			
			document.getElementById("result_bikePaceCalculatorKmPerHour").value = v.toFixed(2);
		}
	}
}

function calculateRunPace ()
{
	document.getElementById("result_runPaceCalculatorMinPerKm").value = "";
	document.getElementById("result_runPaceCalculatorKmPerHour").value = "";
	
	var distance = document.getElementById("distance_runPaceCalculator").value;
	if (distance.length < 1 || isNaN(distance) || parseInt(distance, 10) <= 0)
	{
		alert("Die eingegebene Lauf-Strecke nicht korrekt. Es muss eine Zahl größer 0 eingegeben werden.");
	}
	else
	{
		var time_hh = document.getElementById("time_hh_runPaceCalculator").value;
		var time_mm = document.getElementById("time_mm_runPaceCalculator").value;
		var time_ss = document.getElementById("time_ss_runPaceCalculator").value;
		if (time_hh.length < 1 || isNaN(time_hh) ||
			time_mm.length < 1 || isNaN(time_mm) ||
			time_ss.length < 1 || isNaN(time_ss) ||
			((parseInt(time_hh, 10) + parseInt(time_mm, 10) + parseInt(time_ss, 10)) <= 0))
		{
			alert("Die eingegebene Lauf-Zeit ist nicht korrekt. Alle Felder müssen Zahlen enthalten und mindestens einer der Werte muss eine Zahl größer 0 sein.");
		}
		else
		{
			var pace = (((parseInt(3600 * time_hh, 10)) + (parseInt(60 * time_mm, 10)) + (parseInt(time_ss, 10))) / (distance/1000))/60;
			
			var pace_minutes = parseInt(pace, 10);
			var pace_seconds = pace - pace_minutes;
			pace_seconds = pace_seconds * 60;
			
			document.getElementById("result_runPaceCalculatorMinPerKm").value = pace_minutes + ":" + (pace_seconds.toFixed(2).length < 5 ? "0" : "") + pace_seconds.toFixed(2);
			
			var v = ((distance/1000) / (parseInt(time_hh, 10) + (parseInt(time_mm, 10) / 60) + (parseInt(time_ss, 10) / 3600)));
			
			document.getElementById("result_runPaceCalculatorKmPerHour").value = v.toFixed(2);
		}
	}
}