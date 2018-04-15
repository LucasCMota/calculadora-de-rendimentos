var $button = document.querySelector("#result");
	$button.addEventListener('click', function( event ){
	var $inputV_I = parseInt(document.querySelector("#v_i").value);
	var $inputD_M = parseInt(document.querySelector("#d_m").value);
	var $inputJ_M = parseInt(document.querySelector("#j_m").value);
	var $inputT_M = parseInt(document.querySelector("#t_m").value);

	while($inputT_M > 0){
		$inputV_I += ($inputV_I * $inputJ_M) / 100;
		$inputV_I += $inputD_M;
		$inputT_M--;
	}
document.querySelector("#resultado").value = $inputV_I.toFixed(2);
}, false);