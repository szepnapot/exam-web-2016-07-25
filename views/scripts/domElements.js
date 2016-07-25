const domElements = (function(){

  return {
    shift: document.querySelector('.shift'),
    text : document.querySelector('.encodedText'),
    button: document.querySelector('.decodeButton'),
    output: document.querySelector('.output'),
    outputText: document.querySelector('.decoded'),
    alertBox: document.querySelector('.alert-danger'),
    loadingIcon: document.querySelector('.loading')
  }

})();
