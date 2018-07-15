// nodetype.js

(function() {
  'use strict';
  
  // const myArticle = document.querySelector('article#content');
  
  document.querySelector('article#content').addEventListener('click', function(evt) {
    console.log(`A \"${evt.target.nodeName.toLowerCase()}\" element was clicked that has the inner text content of: \n %c${evt.target.textContent}`, 'font-weight: bold;');
  });
  
}());