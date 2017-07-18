export default `
  type Employee {
    Empno: Int!
    Ename: String!
    Sal: Int!
    Deptno: Int!
  }

  type Query {
    allEmployees: [Employee!]!
    getEmployee(Empno: Int!): Employee
  }
`;
