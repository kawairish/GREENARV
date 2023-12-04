

const showSetupCard = document.querySelector("#setup-btn");
const setupCard = document.querySelector("#setup-card");
const showPreviewCard = document.querySelector("#preview-link");
const previewCard = document.querySelector("#preview-card")

showSetupCard.addEventListener("click", function () {
	if (setupCard.style.opacity === "0" || setupCard.style.opacity === "") {
		setupCard.style.opacity = "1";
		setupCard.style.zIndex ="10";
	} else {
		setupCard.style.opacity = "0";
		setupCard.style.zIndex = "0";
	}
	// event.stopPropagation();
});

showPreviewCard.addEventListener("click", function () {
	if (previewCard.style.opacity === "0" || previewCard.style.opacity === "") {
		previewCard.style.opacity = "1";
		previewCard.style.zIndex = "20";
	} else {
		previewCard.style.opacity = "0";
		previewCard.style.zIndex = "0";
	}
	// event.stopPropagation();
});



const profilePictureInput = document.getElementById("profilePicture");
const profilePicture = document.getElementById("profile-picture");

profilePictureInput.addEventListener("change", function () {
	const file = profilePictureInput.files[0];
	if (file) {
		const reader = new FileReader();

		reader.onload = function (e) {
			profilePicture.src = e.target.result;
		};

		reader.readAsDataURL(file);
	}
});

const showfiltersDiv = document.querySelector("#fa-filters");
const filters = document.querySelector(".filters");

showfiltersDiv.addEventListener("click", function () {
	if (filters.style.opacity === "0" || filters.style.opacity === "") {
		filters.style.opacity = "1";
	} else {
		filters.style.opacity = "0";
	}
});


document
.getElementById("imageInput")
	.addEventListener("change", function (event) {
		var file = event.target.files[0];
		var reader = new FileReader();

		reader.onload = function (e) {
			document.getElementById("imagePreview").src = e.target.result;
		};

		reader.readAsDataURL(file);
	});

	