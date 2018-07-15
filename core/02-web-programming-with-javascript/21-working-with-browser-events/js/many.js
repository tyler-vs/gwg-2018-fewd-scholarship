// many.js

(function() {
  
  'use strict';  


  function init() {
    console.log('howdy!');
    // 'use strict';

    const myCustomDiv = document.createElement('div');

    for( let i = 1; i <= 200; i++ ) {
      
      const newElement = document.createElement('p');
      
      // hmm, not working?
      // newElement.textContext = 'This is paragraph number ' + i + '.';
      newElement.appendChild(document.createTextNode('This is paragraph number ' + i + '.'));

      newElement.addEventListener('click', function() {
        console.log('a paragraph element was clicked.');
      });

      myCustomDiv.appendChild(newElement);
    } // end for loop

    document.body.appendChild(myCustomDiv);
  }

  // window.onload = init;
  // init();
  window.addEventListener('load', init);
  
}());