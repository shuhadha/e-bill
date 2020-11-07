function checkUnit(){
	
	let pre = Number(document.getElementById('preceding').value);
	let cur = Number(document.getElementById('latest').value);
	let unit = cur-pre;
	let txtResult = document.getElementById('UResult');
	var amount=0;
	if(unit<=0){
		amount="invalid";
	}
	else if(unit>0 && unit<=30)
	{
		amount=unit*7.85;
	}
	else if(unit>30 && unit<=60)
	{
		amount=(235.5)+((unit-30)*7.85);
	}
	else if(unit>60 && unit<=90)
	{
		amount=(235.5+235.5)+((unit-60)*10);
	}
	else if(unit>90 && unit<=120)
	{
		amount=(235.5+235.5+300)+((unit-90)*27.75);
	}
	else if(unit>120 && unit<180)
	{
		amount=(235.5+235.5+300+832.50)+((unit-120)*32);
	}
	else if(unit>180)
	{
		amount=(235.5+235.5+300+832.50+1920)+((unit-120)*33);
	}

	txtResult.innerHTML = "<h3>No of Units used: "+unit+"units<br>Your Bill amount is:"+amount+" Rs</h3>";

}