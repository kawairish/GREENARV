
document
	.querySelector(".main-content-container")
	.addEventListener("scroll", function () {
		document.querySelector(".sidebar-container").scrollTop = this.scrollTop;
	});

document
	.querySelector(".sidebar-container")
	.addEventListener("scroll", function () {
		document.querySelector(".main-content-container").scrollTop =
			this.scrollTop;
	});


document.querySelectorAll(".more-img").forEach(function (element) {
	element.addEventListener("click", function () {
		document.getElementById("more-popup").style.opacity = "1";
		
	});
});

document.getElementById("more-popup").addEventListener("click", function () {
	this.style.opacity = "0";
});



