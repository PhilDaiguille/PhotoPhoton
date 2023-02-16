document.addEventListener("DOMContentLoaded", async () => {
	let projet = document.querySelector("main")
	let data;
	let url = 'https://github.com/PhilDaiguille/BDD_image/blob/master/'
	async function getData() {
	try {
		const response = await fetch("https://raw.githubusercontent.com/PhilDaiguille/BDD_image/master/BDD.json");
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
	}

	async function myFunction() {
	data = await getData();
	}

	async function main() {
	await myFunction();
	console.log(data.photo.length)
	for (let i = 0; i <= data.photo.length; i++) {
		projet.innerHTML+=`
			<section>
			<h2>${data.photo[i].nom}</h2>
			<img src="${url}${data.photo[i].img}?raw=true" alt="${data.photo[i].img}">
			<p>${data.photo[i].date}</p>
		</section>	
		`
		console.log(data.photo[i].img)
	}
	}
	main();
});