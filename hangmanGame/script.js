document.addEventListener("DOMContentLoaded", function () {
	fetch("https://random-word-api.herokuapp.com/word")
		.then((response) => response.json())
		.then((data) => {
			const randomWord = data[0];
            console.log("Random Word => " + randomWord); // rastgele bir kelimeyi konsola yazdırır

			const wordBox = document.querySelector(".wordBox");

			const letterBox = document.querySelector(".letterBox");

            const answerBtn = document.querySelector('.answerBtn');

            const restartBtn = document.querySelector('.restartBtn');

            answerBtn.addEventListener('click', function(){
                alert(randomWord);
            })

            restartBtn.addEventListener('click', function(){
                window.location.reload(true);
            })

			for (let i = 0; i < randomWord.length; i++) {
				let letterElement = document.createElement("div");
				let letterElementSpan = document.createElement("span");
				letterElement.style.borderBottom = "1px solid white";
				letterElement.style.borderRadius = ".5rem";
				letterElement.style.width = "64px";
				letterElement.style.height = "64px";
				letterElement.style.display = "flex";
				letterElement.style.justifyContent = "center";
				letterElement.style.alignItems = "center";
				letterElement.className = "wordLetterDiv";
				letterElementSpan.className = "wordLetterDivSpan";
				letterElementSpan.style.transition = "all 1000ms";
				letterElementSpan.textContent =
					randomWord[i].toUpperCase();
				letterElementSpan.style.opacity = "0";
				if (randomWord[i] == " ") {
					let emptyElement = document.createElement("div");
					emptyElement.style.width = "64px";
					emptyElement.style.height = "64px";
					wordBox.append(emptyElement);
					continue;
				}
				letterElement.append(letterElementSpan);
				wordBox.append(letterElement);
			}

			for (let i = 0; i < alphabet.length; i++) {
				let letterDiv = document.createElement("div");
				let letterDivSpan = document.createElement("span");
				letterDiv.style.width = "64px";
				letterDiv.style.height = "64px";
				letterDiv.style.display = "flex";
				letterDiv.style.justifyContent = "center";
				letterDiv.style.alignItems = "center";
				letterDiv.style.border = "1px solid white";
				letterDiv.style.transition = "all 300ms";
				letterDivSpan.textContent = alphabet[i];
				letterDiv.addEventListener("mouseover", function () {
					letterDiv.style.backgroundColor = "white";
					letterDiv.style.color = "rgb(39, 38, 38)";
					letterDiv.style.cursor = "pointer";
				});

				letterDiv.addEventListener("mouseout", function () {
					letterDiv.style.backgroundColor = "";
					letterDiv.style.color = "white";
				});
				letterDiv.addEventListener("click", function () {
					let questLetter =
						document.querySelectorAll(".wordLetterDivSpan");
					questLetter.forEach((element) => {
						console.log(letterDivSpan.textContent);
						if (letterDivSpan.textContent == element.textContent) {
							element.style.opacity = "1";
						}
					});
				});
				letterDiv.append(letterDivSpan);
				letterBox.append(letterDiv);
			}
		});
});
