/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const debug = require("debug")("items:database");
const chalk = require("chalk");
const mongoose = require("mongoose");

const connectDB = (connectionString) =>
  new Promise((resolve, reject) => {
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret._id;
        delete ret.__v;
      },
    });
    mongoose.connect(connectionString, (error) => {
      if (error) {
        reject(error);
        return;
      }
      debug(chalk.bold.bgMagenta.greenBright(`Database connected`));
      resolve();
    });
  });
module.exports = connectDB;
