var colorChanger = document.getElementById("colour-changer");

var colors = ["IMG_1375.JPG", "IMG_3556 4.JPG"];

var counter = 0; 

function changeColor(){

	if(counter >= colors.length){
	counter =0;
	}
	colorChanger.style.background = colors[counter];
	counter += 1;


};

var myTimer = setInterval(changeColor, 3000);

colorChanger.onclick = function(){

	clearInterval(myTimer);
	colorChanger.innerHTML = "Timer Stopped";
};

//// IGNORE THE FOLLOWING PART

var x ={


	name:"sherry",
	lastname:"cheng",

};

