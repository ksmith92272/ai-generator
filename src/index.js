function generatePoem(event) {
	event.preventDefault();

	new Typewriter("#main", {
		strings: `<div
						id="poem"
						class="poem"
					>
						Todos callados,
						<br />
						bajo la luna;
						<br />
						el bosque, el lago, <br />
						el cerro, el monte,
						<br />
						bajo la luna, <br />
						todos callados.
            <span id="signature" class="signature">SheCodes AI</span>
					</div>`,
		autoStart: true,
		delay: 20,
		cursor: "",
	});

	/*let poemElement = document.querySelector("main");
	poemElement.innerHTML = ;*/
}

let poemFormElement = document.getElementById("form");
poemFormElement.addEventListener("submit", generatePoem);
