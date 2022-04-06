(()=>{


	const TheList = document.querySelector("#blist"),
			type = document.querySelector(".about h3"),
			beerinfo = document.querySelector("#biotext");

	const introContent = [
    [`IPA`, `Bold tasting IPA 7% Alc`],
		[`EPA`, `Classic EPA 5% Alc`],
		[`Lager`, `Goldbonds signiature 5% Alc`],
		[`Goldbonds signiature 5% Alc`],
	];



	function beerbio(name, text) {
		type.textContent = name;
		beerinfo.textContent = text;
	}

	function changeText0(event) {
		beerbio(introContent[event.target.dataset.offset][0],
						introContent[event.target.dataset.offset][1]);
						console.log("Text Changed");
	}


	TheList.addEventListener("click", changeText0);





})();
