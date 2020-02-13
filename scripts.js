const card = document.getElementById("card")
let open = false

function openCard () {
	open = true
	card.classList.add("open")
}

function closeCard () {
	open = false
	card.classList.remove("open")
}

document.getElementById("container").addEventListener("click", () => {
	if (open) {
		closeCard()
	} else {
		openCard()
	}
})
