var grow=true;

function fnts()
{
	fntsize = document.getElementById('t1').style.fontSize;
	ifntsize = parseInt(fntsize);
	document.getElementById('t1').style.color="red";
	window.setTimeout(fntGS,100,ifntsize);
}

function fntGS(ifs)
{
	if(grow)
	{
		ifs=ifs+1;
		if(ifs<=50)
		{
			document.getElementById('t1').style.fontSize=ifs+"pt";
		}
		else
		{
			grow=false;
			document.getElementById('t1').style.color="blue";
			document.getElementById('t1').innerHTML="TEXT-SHRINKING";
		}
	}
	else
	{
		ifs = ifs-1;
		if(ifs<5)
			return;
		document.getElementById('t1').style.fontSize=ifs+"pt";
	}
	window.setTimeout(fntGS,100,ifs);
	
}