import { loadTemplate, replaceBody } from "../../loadingFunctions.js";
import { loadLoginBody } from "../login/load.js";

export async function loadSignUpBody() {
	let page = await loadTemplate('/body/sign-up/sign-up.html');
	loadForm(page);
	replaceBody(page);
}

function loadButton() {
	document.querySelector('#button').disabled = !satisfyRequirements();
}

function satisfyLength() {
	const lengthReq = document.getElementById("lengthReq");
	let password = document.querySelector("#input-password").value;
	lengthReq.style.color = password.length >= 8 ? "green" : "red";
	return password.length >= 8;
}

function satisfyUppercase() {
	const uppercaseReq = document.getElementById("uppercaseReq");
	let password = document.querySelector("#input-password").value;
	uppercaseReq.style.color = /[A-Z]/.test(password) ? "green" : "red";
	return /[A-Z]/.test(password);
}

function satisfyLowercase() {
	const lowercaseReq = document.getElementById("lowercaseReq");
	let password = document.querySelector("#input-password").value;
	lowercaseReq.style.color = /[a-z]/.test(password) ? "green" : "red";
	return /[a-z]/.test(password);
}

function satisfyNumber() {
	const numberReq = document.getElementById("numberReq");
	let password = document.querySelector("#input-password").value;
	numberReq.style.color = /\d/.test(password) ? "green" : "red";
	return /\d/.test(password);
}

function satisfySpecial() {
	const specialReq = document.getElementById("specialReq");
	let password = document.querySelector("#input-password").value;
	specialReq.style.color = /[^A-Za-z0-9]/.test(password) ? "green" : "red";
	return /[^A-Za-z0-9]/.test(password);
}

function satisfyPasswords() {
	const passwordReq = document.getElementById("passwordsReq");
	let password = document.querySelector("#input-password").value;
	let confirmPassword = document.querySelector("#input-confirm-password").value;
	passwordReq.style.color = password === confirmPassword ? "green" : "red";
	return password === confirmPassword;
}

function satisfyRequirements() {
	const length = satisfyLength();
	const uppercase = satisfyUppercase();
	const lowercase = satisfyLowercase();
	const number = satisfyNumber();
	const special = satisfySpecial();
	const passwords = satisfyPasswords();
	return length && uppercase && lowercase && number && special && passwords;
}

function loadRequirements(page) {
	page.querySelector('#form').addEventListener("input", function() {
		loadButton(page);
	});
}

function loadForm(page) {
	loadRequirements(page);
	loadQuestion(page);
}

function loadQuestion(page) {
	page.querySelector('#question-text').addEventListener('click', async function() {
		loadLoginBody();
	});
}
