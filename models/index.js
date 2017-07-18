import Sequelize from 'sequelize';

const sequelize = new Sequelize('SampleDb','username','password', {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: { instanceName: 'SQL2016TRAINING'}
});

const db = {
  Employee: sequelize.import('./employee'),
};

db.sequelize = sequelize;

export default db;
