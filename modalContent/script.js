document.addEventListener('DOMContentLoaded', function () {
	const modalButton = document.querySelector(".modalButton");
	console.log(modalButton);
	
	
	
	function createModal(message){
		let modalContent = document.createElement("div");
		modalContent.style.width = "100%";
		modalContent.style.height = "100vh";
		modalContent.style.background = "rgb(0,0,0,0.5)";
		modalContent.style.position = "absolute";
		modalContent.style.zIndex = "50";
		modalContent.style.top = "0";
		modalContent.style.left = "0";
		modalContent.style.display = "flex";
		modalContent.style.justifyContent = "center";
		modalContent.style.alignItems = "center";
		
		let modal = document.createElement("div");
		modal.style.width = "50%";
		modal.style.height = "30rem";
		modal.style.background = "white";
		modal.style.borderRadius = "1rem";
		modal.style.display = "flex";
		modal.style.justifyContent = "start";
		modal.style.alignItems = "start";
		modal.style.padding = "1rem";
		
		let modalText = document.createElement("p");
		modalText.textContent = message;
		modal.prepend(modalText);
		
		
		modalContent.prepend(modal);
		
		modalContent.addEventListener('click', function (){
			this.remove()
		})
		return modalContent;
	}
	
	modalButton.addEventListener('click', function () {
		document.querySelector("body").prepend(createModal("Selamlar Canolar"));
		console.log("asd");
	})
	
})