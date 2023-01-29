const employees = [
    {firstName:'Riya', job:"FrontendDeveloper", salary:1500},

    {firstName:'Bharat', job:"BackendDeveloper", salary:3000},

    {firstName:'Atul', job:"Devops", salary:3200},

    {firstName:'Mayur', job:"FullStackDeveloper", salary:5000},

    {firstName:'Savinder', job:"Security Analyst", salary:2800},

]

// [Riya-1500, bharrat-3000]
console.log(employees.map(x=> x.firstName+ "-" +x.salary))

console.log(employees.filter(x => x.salary<3200))

//[Riya, Bharat, Savinder]--> Chaining
console.log(employees.filter(x => x.salary<3200).map(x=> x.firstName))

let isSalaryLess = employees.reduce((acc,curr)=>{
    if(curr.salary<3200){
     acc.push(curr.firstName)
    }
    return acc

},[])
console.log(isSalaryLess)