const CategoryModel = require("../modules/CategoryModel");

exports.getCategory = (req, res) => {
  const name = req.body.name;
  console.log(req.body);
  const newCategoryModel = new CategoryModel({ name });
  newCategoryModel
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};
