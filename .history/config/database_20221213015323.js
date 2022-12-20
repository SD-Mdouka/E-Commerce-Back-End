const dbConnection = () => {
  const mongoose = require("mongoose");
  // **Middel test connection
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      console.log("====================================");
      console.log(`connect database and : ${conn.connection.host}`);
      console.log("====================================");
    })
    .catch((error) => {
      console.log("====================================");
      console.error(`connect database and : ${error}`);
      console.log("====================================");
      process.exit(1);
    });
};
module.exports = dbConnection;
