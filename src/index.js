function generatePoem(event) {
	event.preventDefault();

	let poemElement = document.getElementById("poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `<span  id="first" class="first"></span><span id="second"	class="second"></span>`;

	let inputElement = document.getElementById("text-field");
	let apiKey = `6atoab0f92eca3d102a54e7250f4dd0f`;
	let apiContext = `You are an, eloquent, well-mannered, AI assistant who loves to write short poems. Your answer should be no longer than five lines. Your answer should be in basic HTML. Your response should be in spanish and then repeat the same poem but in english. Before the spanish poem, type "Spanish" in bold text and before the english poem, there should be the word "English" in bold text. Follow this example when formatting your response: <p><strong>Spanish</strong></p><p>Poem line 1</p><p>Poem line 2</p><p>Poem line 3</p><br/><p><strong>Engish</strong></p><p>Poem line 1</p><p>Poem line 2</p><p>Poem line 3</p> If a word is mispelled, substitute the word with the closest logical replacement.`;
	let apiPrompt = `Please write me a short poem about ${inputElement.value}`;

	let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

	let typewriter = new Typewriter("#first", {
		strings: `Generating a poem for you about ${inputElement.value}`,
		autoStart: true,
		cursor: ``,
		delay: 5,
	});

	if (typewriter.options.strings.includes("G") === true) {
		new Typewriter("#second", {
			strings: `...`,
			autoStart: true,
			cursor: ``,
			delay: 5,
			loop: true,
		});
	}

	axios.get(apiURL).then(displayPoem);
}

function displayPoem(response) {
	let poem = response.data.answer;

	new Typewriter("#poem", {
		strings: `${poem} 
    <br/>
            <span id="signature" class="signature">SheCodes AI</span>`,
		autoStart: true,
		delay: 20,
		cursor: "",
	});
}

let poemFormElement = document.getElementById("form");
poemFormElement.addEventListener("submit", generatePoem);
