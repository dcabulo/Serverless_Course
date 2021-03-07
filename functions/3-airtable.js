require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appeeE8SWgusuVDzR")
  .table("Products");

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((item) => {
      const { id } = item;
      const { name, image, price } = item.fields;
      const url = image[0].url;
      return { id, name, url, price };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
