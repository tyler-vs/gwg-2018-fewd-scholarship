
const startingTime = performance.now();

// generate.js

let count = 1

function generateParagraphs() {
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= 500; i++) {
        const newElement = document.createElement('p');
        newElement.textContent = 'This is paragraph number ' + count + '. performance.now = ' + performance.now() + '.';
        count = count + 1;

        fragment.appendChild(newElement);
    }

    document.body.appendChild(fragment);

    if (count < 20000) {
        setTimeout(generateParagraphs, 0);
    }
}

generateParagraphs();


const endingTime = performance.now();

console.log(`this code took: ${endingTime - startingTime} milliseconds.`);