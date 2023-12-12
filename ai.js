

document.querySelector("#predict-btn").addEventListener("click", function () {
	document.querySelector(".popup1").style.display = "block";
    closePopup(function () {
			document.querySelector(".popup1").style.display = "none";
			window.location.href = "./ai-crop-advisor.html";
		});
	setTimeout( function() {
        document.querySelector(".popup1").style.display = "none";
    },10* 60 * 1000);
});



// setTimeout(function () {
// 	document.querySelector(".popup1").style.display = "none";
// }, 10 * 60 * 1000);
