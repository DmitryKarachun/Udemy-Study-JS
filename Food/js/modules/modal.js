function modal () {
//Modal
const modalTrigger = document.querySelectorAll("[data-modal]");
const modal = document.querySelector(".modal");

modalTrigger.forEach((btn) => {
	btn.addEventListener("click", openModal);
});

function openModal() {
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = "hidden";
	clearInterval(modalTimerId);
}

function closeModal() {
	modal.classList.toggle("show");
	document.body.style.overflow = "";
}

modal.addEventListener("click", (e) => {
	if (e.target === modal || e.target.getAttribute('data-close') == '') {
		closeModal();
	}
});

document.addEventListener("keydown", (e) => {
	if (e.code === "Escape" && modal.classList.contains("show")) {
		closeModal();
	}
});

const modalTimerId = setTimeout(openModal, 50000);

function showModalByScroll() {
	if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
		openModal();
		window.removeEventListener('scroll', showModalByScroll);
	}
}

window.addEventListener('scroll', showModalByScroll);

}
module.exports = modal;