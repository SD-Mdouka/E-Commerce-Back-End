const { default: slugify } = require("slugify");

const CategoryModel = require("../modules/CategoryModel");
const expressAsyncHandler = require("express-async-handler");

exports.getCategory = (req, res) => {
  // const name = req.body.name;
  // console.log(req.body);
  res.send();
};
exports.craeteCategory = expressAsyncHandle(async (req, res) => {
  const name = req.body.name;
  // form async await
  const category = await CategoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
  // CategoryModel.create({ name, slug: slugify(name) })
  //   .then((category) => {
  //     res.status(201).json({ data: category });
  //   })
  //   .catch((err) => {
  //     res.status(400).send(err);
  //   });
});
