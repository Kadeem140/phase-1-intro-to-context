// Your code here
const arr = ['Kadeem','Beckford','Mr.', 30]
function createEmployeeRecord(arr){
   const employeeObj = {
            firstName : arr[0],
            familyName: arr[1],
            title: arr[2],
            payPerHour: arr[3],
            timeInEvents: [],
            timeOutEvents: []
   }
   return employeeObj
}

function createEmployeeRecords(arrOfArrays){
    const newArray = []
    for ( const element of arrOfArrays){
       newArray.push(createEmployeeRecord(element))
    }
    return newArray

}


function createTimeInEvent(employeeObj, dateStamp){

        const date = dateStamp.substr(0,10);
        const hour = dateStamp.substr(11, 14);
        const numberedHour = parseInt(hour, 10)

        const subObject = {
            type : "TimeIn",
            hour : numberedHour,
            date : date
        }
        
         employeeObj.timeInEvents.push(subObject)
         return employeeObj
}

function createTimeOutEvent(employeeObj, dateStamp){

    const date = dateStamp.substr(0,10);
        const hour = dateStamp.substr(11, 14);
        const numberedHour = parseInt(hour, 10)

        const timeOutObj = {
            type : "TimeOut",
            hour : numberedHour,
            date : date
        }

        employeeObj.timeOutEvents.push(timeOutObj)
         return employeeObj



}

function hoursWorkedOnDate(employeeObj, dateStamp){
       console.log(dateStamp, "stamp") //
       //if employeeObj.timeInEvents[0].hour == date
       //run: 
       if(employeeObj.timeInEvents[0].date == dateStamp){
            const employeeTimeIn = employeeObj.timeInEvents[0].hour / 100
            const employeeTimeOut = employeeObj.timeOutEvents[0].hour / 100

            const totalHoursWorked =  employeeTimeOut - employeeTimeIn
            return totalHoursWorked
       }
        
}

function wagesEarnedOnDate(employeeObj, dateStamp){
        const result = hoursWorkedOnDate(employeeObj, dateStamp)
        const payrate = employeeObj.payPerHour
        return result * payrate
}

function allWagesFor(employeeObj){
    // console.log(employeeObj, "employee obj")
    const datesWorked = employeeObj.timeInEvents.map(e =>{
        console.log(wagesEarnedOnDate(employeeObj, e) , "func results")
    })

    const initialValue = 0;
    const sumWithInitial = datesWorked.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue);
    console.log(sumWithInitial, "sum")
}