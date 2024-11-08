const form = document.querySelector('form');
const resultdiv = document.querySelector(".result");


form.addEventListener('submit', (e) => {
    e.preventDefault();
    getwordinfo(form.elements[0].value);
});



const getwordinfo = async (word) => {
    try {


        const api = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        console.log(api)
        const data = await api.json();
        let definations = data[0].meanings[0].definitions[0];

        resultdiv.innerHTML = `
    <h2><strong>Word:</strong>${data[0].word}</h2>
    <p class="partofspeech">${data[0].meanings[0].partOfSpeech}<p>
    <p><strong>Meaning:</strong>${definations.definition === undefined ? "Not found" : definations.definition}<p>
      <p><strong>Example:</strong>${definations.example === undefined ? "Not found" : definations.example}<p>
      <li><strong>Synonyms:</strong>${definations.synonyms.length === 0 ? "not found" : definations.synonyms}</li>
      <li><strong>Antonyms:</strong>${definations.antonyms.length === 0 ? "not found" : definations.antonyms}</li>
      <a href="${data[0].sourceUrls[0]}" target="_blank" class="link">Read more</a>
     
    `;
    } catch (error) {
        resultdiv.innerHTML = "<p><strong>Sorry the word could not be found</strong></p>"
    }
}
// [0].meanings[0].definitions[0].definition