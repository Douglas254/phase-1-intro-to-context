// Your code here
/*  
    populates a firstName field from the 0th element
    populates a familyName field from the 1th element
    populates a title field from the 2th element
    populates a payPerHour field from the 3th element
    initializes a field, timeInEvents, to hold an empty Array
    initializes a field, timeOutEvents, to hold an empty Array
*/
const createEmployeeRecord = (passedArray) => {
  return {
    firstName: passedArray[0],
    familyName: passedArray[1],
    title: passedArray[2],
    payPerHour: passedArray[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};
/*
    creates two records
    correctly assigns the first names
    creates more than 2 records
*/
const createEmployeeRecords = (employeePassed) => {
  return employeePassed.map((passedArray) => createEmployeeRecord(passedArray));
};

/*
    creates the correct type
    extracts the correct date
    extracts the correct hour
*/
const createTimeInEvent = (record, passedDate) => {
  let [date, hour] = passedDate.split(" ");
  record.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date: date,
  });
  return record;
};

/*
    creates the correct type
    extracts the correct date
    extracts the correct hour
*/
const createTimeOutEvent = (record, passedDate) => {
  let [date, hour] = passedDate.split(" ");
  record.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date: date,
  });
  return record;
};

/*
    hoursWorkedOnDate calculates the hours worked when given an employee record and a date
    calculates that the employee worked 2 hours
*/
const hoursWorkedOnDate = (record, passedDate) => {
  const eventin = record.timeInEvents.find(
    (event) => event.date === passedDate
  );

  const eventout = record.timeOutEvents.find(
    (event) => event.date === passedDate
  );

  return (eventout.hour - eventin.hour) / 100;
};

/*
    multiplies the hours worked by the employee's rate per hour
    calculates that the employee earned 54 dollars
*/
const wagesEarnedOnDate = (record, passedDate) => {
  const wage = hoursWorkedOnDate(record, passedDate) * record.payPerHour;
  return parseFloat(wage.toString());
};

/*
    aggregates all the dates' wages and adds them together
    calculates that the employee earned 378 dollars

*/
const allWagesFor = (record) => {
  const datespossible = record.timeInEvents.map((event) => event.date);

  const pay = datespossible.reduce((mm, dd) => {
    return mm + wagesEarnedOnDate(record, dd);
  }, 0);

  return pay;
};

/*
  returns an Array with 2 records for Loki and Natalia
*/
const findEmployeeByFirstName = (passedArray, firstName) => {
  return passedArray.find((record) => {
    return record.firstName === firstName;
  });
};

/*
    aggregates all the dates' wages and adds them together
    calculates that the employees earned 770 dollars
    returns an Array with 2 records for Loki and Natalia
    correctly sums the payroll burden to $11,880 when passed an array of employee records
*/
const calculatePayroll = (anotherRecord) => {
  return anotherRecord.reduce((mm, record) => {
    return mm + allWagesFor(record);
  }, 0);
};
