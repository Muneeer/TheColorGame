var sqrs=document.querySelectorAll(".square");
var color=document.getElementById("clr");
var dmsg=document.getElementById("msg");
var refresh=document.getElementById("newcolors");
var mainmenu=document.getElementById("navv");
var hard=document.getElementById("hard");
var easy=document.getElementById("easy");
var colorarr=[];
var pickedcolor=0;
var selectedColor=0;
var times=sqrs.length;

hard.classList.toggle("changeit");
//easy or hard
hard.addEventListener("click", function(){
		hard.classList.add("changeit");
		easy.classList.remove("changeit");
	times=sqrs.length;
	mian();
})

easy.addEventListener("click", function(){
		// easy.classList.toggle("changeit");
		easy.classList.add("changeit");
		hard.classList.remove("changeit");
			for(var j=0;j<times;j++)
			{
				sqrs[j].style.backgroundColor = "black";
			}
	times=sqrs.length/2;
	mian();
})


//main funtion
function mian()
{
	mainmenu.style.backgroundColor = "steelblue";
	refresh.textContent="New Colors";
	for(var i=0;i<times;i++)
{
	colorarr[i]="rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
	sqrs[i].style.backgroundColor = colorarr[i];
}
 pickedcolor=colorarr[Math.floor(Math.random()*(times-1))];
color.textContent=pickedcolor;
for(var i=0;i<times;i++)
{
	sqrs[i].addEventListener("click", function(){
		 selectedColor=this.style.backgroundColor;
		if(selectedColor===pickedcolor)
		{
			dmsg.textContent="Great";
			refresh.textContent="Play Again?";


			mainmenu.style.backgroundColor = selectedColor;

			for(var j=0;j<times;j++)
			{
				sqrs[j].style.backgroundColor = selectedColor;
			}
		}	
		else
		{
			dmsg.textContent="Try again";
			this.style.backgroundColor = "black";
		}
	});
}
}

mian();
//Refresh Colors
refresh.addEventListener("click", function()
{
	mian();
});




