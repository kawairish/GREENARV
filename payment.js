
const showPopup = document.querySelector(".account-btn");
const verificationCard = document.querySelector("#verification-card");

showPopup.addEventListener("click", function() {
    if (
			verificationCard.style.opacity === "0" ||
			verificationCard.style.opacity === ""
		) {
			verificationCard.style.opacity = "1";
			verificationCard.style.zIndex = "10";
		} else {
			verificationCard.style.opacity = "0";
			verificationCard.style.zIndex = "0";
		}
});

