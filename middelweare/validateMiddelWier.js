const { validationResult } = require("express-validator");

const validateMiddlewire = (req, res, next) => {
   //2- test middelwire for rules
   const errors = validationResult(req);
    if(!errors.isEmpty()){
      //3-errors as a middle
      return res.status(400).json({errors:errors.array()})
    }
  next();
  };
  module.exports = validateMiddlewire;
