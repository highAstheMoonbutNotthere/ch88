canvas = new fabric.Canvas("myCanvas")

holeX=800;
holeY=400;
ball_x=0;
ball_y=0;

block_image_width = 5;
block_image_height = 5;

function load_img(){
fabric.Image.fromURL("golf-h.png", function (img){
	holeO=img;
	holeO.scaleToWidth(50);
	holeO.scaleToHeight(50);
	holeO.set({
		top: holeY,
		left: holeX
	});
	canvas.add(holeO);
});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (img){
	    ballO=img;
		ballO.scaleToWidth(50);
		ballO.scaleToHeight(50);
		ballO.set({
			top: ball_y,
			left: ball_x
		});
		canvas.add(ballO);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==holeX)&&(ball_y==holeY)){
		canvas.remove(ballO);
		document.getElementById("hd3").innerHTML="You Won...  probably"
		document.getElementById("myCanvas").style.borderColor='green'
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >5){
			ball_y -= block_image_height;
			canvas.remove(ballO);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450){
			ball_y = ball_y+block_image_height;
			canvas.remove(ballO);
			new_image();
		}
	}

	function left()
	{       
		if(ball_x >5)
		{
			ball_x -= block_image_width;
			canvas.remove(ballO);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x += block_image_width;
			canvas.remove(ballO);
			new_image();
		}
	}
	
}

