import { DataTypes } from "sequelize";

import sequelize from "./index.js";

const Contact = sequelize.define(
  "Contact",
  {
    // Model attributes are defined here
    perment_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

export default Contact;
