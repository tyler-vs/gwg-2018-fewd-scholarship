// nodetype.js

(function() {
  'use strict';
  
  // const myArticle = document.querySelector('article#content');
  
  console.log('try clicking only em or strong elements');
  
  document.querySelector('article#content').addEventListener('click', function(evt) {
    // use a conditional to check if element clicked is of 
    // a certain node type.
    if (evt.target.nodeName === 'EM' || evt.target.nodeName === 'STRONG') {
      console.log(`A \"${evt.target.nodeName.toLowerCase()}\" element was clicked that has the inner text content of: \n %c${evt.target.textContent}`, 'font-weight: bold;');
    } else {
      console.log('woops, wrong node type selected.');
    }
  });
  
}());