/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = Object.values(allEmployees).flat();
  
  return employees[Symbol.iterator]();
}

