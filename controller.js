const controller = function(cipher){
  'use strict';

  const shiftError = {
                      "status": "error",
                      "error": "Shift is out of bound"
                    };
  const textError = {
                      "status": "error",
                      "error": "No text provided"
                    };

  function errorHandler(res, err) {
    res.status(400).json(err);
  }

  function decode(req, res){
    if ( Number(req.body.shift) > 25 ||
          Number(req.body.shift) < -25 ||
          req.body.shift.length < 1){
      errorHandler(res, shiftError);
      return;
    }
    if ( req.body.text.length < 1 ) {
      errorHandler(res, textError);
      return;
    }

    res.json(
      { "status" : "ok",
        "text": cipher.decode(req.body.text, req.body.shift)
        });
  };

  return {
    decode: decode
  }
};

module.exports = controller;
