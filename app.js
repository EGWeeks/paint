// 20 rows 20 columns named row1 - row20;

window.onload = function() {
	var palDiv = document.getElementsByClassName('palette')[0];
	var boardId = document.getElementById('board');
	//array of hex colors
	var color = 'white';
	
	if (palDiv.click()) {
		console.log("YES!");
	}
	
	function palette() {
		var divColor = document.getElementsByClassName('color');
		//array of hex colors
		var colorPick = ['#f30', '#00f', '#3c3', '#60c', '#000', '#666', '#ff0', '#f3c', '#0c9', '#f60', '#0c0', '#009', '#006', '#c3f', '#036', '#ffc', '#ccf', '#cfc', '#960'];
		// loop through array and palette divs to show color in palette
		for(var i=0; i < colorPick.length; i++){
			console.log(divColor[i].style['background'] = colorPick[i]);
		}
	};
	palette();

	palDiv.addEventListener('click', function() {
		color = event.target.style['backgroundColor'];
	});

	boardId.addEventListener('click', function() {
		event.target.style['backgroundColor'] = color;	
	});

};
