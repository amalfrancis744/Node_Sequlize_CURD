import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sample', 'root', 'root', {
    host: 'localhost',
   
    dialect:  'mysql' 
  });

  try {
     sequelize.authenticate();
    console.log('Database Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

import ("./contact.js")
import ("./user.js")

sequelize.sync({force:false})
export default sequelize