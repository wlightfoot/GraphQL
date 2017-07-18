export default {
  Query: {
    allEmployees: (parent, args, { models }) => models.Employee.findAll(),
    getEmployee: (parent, { Empno }, { models }) =>
      models.Employee.findOne({
        where: {
          Empno,
        },
      }),
  },
};
