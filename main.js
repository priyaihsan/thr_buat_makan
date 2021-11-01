function changeColor() {
	var color = document.getElementById('color');
	color.id = 'colorloop';
	var vidiochange = document.getElementById('null');
	vidiochange.id = 'myVideo';
	var audio = new Audio('song.mp3');
	audio.play();
}
