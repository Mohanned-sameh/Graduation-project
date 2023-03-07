require("dotenv").config();

const restaurantModel = require("./models/restaurantModel");
const userModel = require("./models/userModel");
const adminModel = require("./models/adminModel");
const orderModel = require("./models/orderModel");
const faker = require("faker");
const connectDB = require("../config/db.js");

const seed = async () => {
  try {
    await connectDB();
    await Promise.all([seedRestaurant(), seedUser(), seedAdmin(), seedOrder()]);
  } catch (error) {
    console.log("DB Error");
    console.log("Err: ", error);
  }
};

const seedRestaurant = async (size = 10) => {
  try {
    const data = [...Array(size).fill(null)].map((_) => {
      return {
        logo: faker.random.word(),
        title: faker.random.word(),
        description: faker.random.word(),
        type: faker.random.word(),
        locations: faker.random.word(),
        opens: faker.random.word(),
        closes: faker.random.word(),
        rate: faker.datatype.number(),
        discount: faker.datatype.boolean(),
      };
    });

    await restaurantModel.insertMany(data, { ordered: false });
    console.log("Done: Seeded Restaurant");
  } catch (error) {
    console.log("Error seeding Restaurant");
    console.log("Err: ", error);
  }
};

const seedUser = async (size = 10) => {
  // TODO
};

const seedAdmin = async (size = 10) => {
  // TODO
};

const seedOrder = async (size = 10) => {
  // TODO
};

seed();
