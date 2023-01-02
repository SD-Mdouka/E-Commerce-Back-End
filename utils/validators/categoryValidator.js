const { param } = require("express-validator");
const validateMiddlewire = require("../../middelweare/validateMiddelWier");

exports.getCategoryValidator =[
         //1-rules
         param('id').isMongoId().withMessage('Invalide format id for category'),
         validateMiddlewire
];
