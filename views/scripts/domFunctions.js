const domFunctions = (function(){

  function getInput(){
    return {
      "shift" : domElements.shift.value,
      "text" : domElements.text.value
    }
  }

  function loading(){
    domElements.loadingIcon.classList.toggle("hidden");
  }

  function showAlert(error){
    domElements.alertBox.textContent = '' + error;
    domElements.output.classList.add('hide');
    domElements.alertBox.classList.remove("hidden");
    setTimeout(function(){
      domElements.alertBox.classList.add("hidden");
    }, 3000);
  }

  function resetAndFillOutput(text){
    domElements.output.classList.remove('hide');
    domElements.outputText.textContent = '' + text;
  }

  function showDecoded(err, cont) {
    loading();
    if (err || cont.status !== 'ok') {
      showAlert(cont.error);
      return;
    }
    resetAndFillOutput(cont.text);
  }

  function decode(){
    loading();
    ajax.makeRequest('POST', 'decode', getInput(), showDecoded);
  }

  return {
    decode: decode
  }

})();
