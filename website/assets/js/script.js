var studiepunten_result_text = document.getElementById('studiepunten-result');

document.getElementById('studiepunten-input').onkeyup = function(e){

	studiepunten_result = Math.round(this.value / 28);

	if(studiepunten_result >= 52){

		if(studiepunten_result > 60){
			studiepunten_result = 60;
		}

		studiepunten_result_text.style.background = 'rgb(67, 160, 71)';
	} else {
		studiepunten_result_text.style.background = 'rgb(239, 83, 80)';
	}

	studiepunten_result_text.innerHTML = studiepunten_result + " studiepunten (max. 60)";
}