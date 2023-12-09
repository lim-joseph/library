// Selectors
const shelfDiv = document.querySelector(".shelf");
const form = document.querySelector("form");

const modal = document.querySelector("dialog");
const newBookBtn = document.querySelector(".new-book");
const closeBtn = document.querySelector(".modal-close");
const submitBtn = document.querySelector("button[type=submit]");

// Backend
const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(book) {
	myLibrary.push(book);
}

// Frontend
function createCard(book) {
	// Create elements
	const card = document.createElement("div");
	const ul = document.createElement("ul");
	const title = document.createElement("li");
	const author = document.createElement("li");
	const pages = document.createElement("li");
	const read = document.createElement("li");

	// Set content
	title.textContent = book.title;
	author.textContent = book.author;
	pages.textContent = book.pages;
	read.textContent = book.read;

	// Append content to card
	card.append(title);
	for (const li of [title, author, pages, read]) ul.append(li);
	card.append(ul);

	card.classList.add("card");
	card.classList.add("fadeInUp-animation");

	return card;
}

function addCardToShelf(card) {
	if (card) shelfDiv.append(card);
}

// Event listeners
// newBookBtn.addEventListener("click", () => {
// 	modal.showModal();
// });

// closeBtn.addEventListener("click", () => {
// 	modal.close();
// });

submitBtn.addEventListener("click", (e) => {
	// If form is invalid do nothing
	if (!form.checkValidity()) return;

	// Assign values
	const titleInp = document.querySelector("#title").value;
	const authorInp = document.querySelector("#author").value;
	const pagesInp = document.querySelector("#pages").value;
	let readInp = document.querySelector("#read").checked;

	readInp = readInp ? "Completed" : "Incomplete";

	// Create and append book & card
	newBook = new Book(titleInp, authorInp, pagesInp, readInp);
	addBookToLibrary(newBook);
	newCard = createCard(newBook);
	addCardToShelf(newCard);

	// Reset form fields
	form.reset();

	// Stop required validation error on submit
	e.preventDefault();
});
