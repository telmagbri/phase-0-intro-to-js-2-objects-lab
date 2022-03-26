// Write your solution in this file!
const employee = {
    name : "Bob",
    address : "New York"
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {
        ...employee,
        [key] : value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const copyOfEmployee = {...employee};
    delete copyOfEmployee.name;
    return copyOfEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}