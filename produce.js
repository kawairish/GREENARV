
const showPriceInformation = document.querySelector("#price-info");
const priceCard = document.querySelector(".price-information");

showPriceInformation.addEventListener("click", function () {
	if (priceCard.style.opacity === "0" || priceCard.style.opacity === "") {
		priceCard.style.opacity = "1";
		priceCard.style.zIndex = "60";
	} else {
		priceCard.style.opacity = "0";
		priceCard.style.zIndex = "-10";
	}
	// event.stopPropagation();
});