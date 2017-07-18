export default (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    Empno: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    Ename: {
      type: DataTypes.STRING
    },
    Sal: {
      type: DataTypes.INTEGER
    },
    Deptno: {
      type: DataTypes.INTEGER
    }
  }, {
    schema: 'dbo',
    tableName: 'Emp',
    timestamps: false
  });

  return Employee;
};
