// docfrag.html

const docFragment = document.createDocumentFragment();

for (let i = 0; i <= 200; i++) {
  const newElement = document.createElement('p');
    newElement.appendChild(document.createTextNode(`this is paragraph #${i}`));
  
  docFragment.appendChild(newElement);
}

document.body.appendChild(docFragment);