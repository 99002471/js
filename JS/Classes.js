//syntax of creating a class
class employee
{
    constructor(id,name,address)
    {
        this.empId=id;
        this.empName=name;
        this.empAddress=address;
    }
    display()
    {
        alert("The name is "+this.empName)
        alert("The id is "+this.empId)
        alert("The address of employee is "+this.empAddress)
    }
}
const e=new employee(123,"aditya","hyderabad")
console.log(e)
console.log(JSON.stringify(e));