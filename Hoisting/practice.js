//hoisting























//variable
// console.log(name);
// var name = 'bharat';



//function
// function car(){
//     console.log(car);
//     var car ='volvo';
// }
// car()
















// console.log(name);
// let name = 'bharat';


// #name2


// function car(){
//     console.log(car1);
//     let car1 ='volvo';
// }
// car()




















//fn hoisting

	// hi(); 
	
	// function hi(){ 
	// 	var a = 5
	// 	console.log(a);
	// }


//arrow

//     hi2()
//console.log(hi2()); 

//     let hi2 = () =>{ 
// 	let name = 'fn runs second time';
// 	console.log(name);
// }















//undeclared variable
// function num(){
//     y = 10;
    
// }

// num();
// console.log(y);
// console.log(b);














//scope  -


	// var x = 10;
	// function test()
	// {
	// 	var x = 20;
	// }
	
	// test();
	// console.log(x);












    
	
	// var x = 10;
	// function test()
	// {
	// 	if (false) {
	// 		var x = 50;
	// 	}
	
	// 	console.log(x);
	// }
	// test();












    
	// var x = 10;
	// console.log(x);
	
	// if (true) {
	// 	var x = 20;
	// 	console.log(x);
	// }
	  

	// console.log(x);


















    //var + let
	 var x = 10;
	// console.log(x);
	
	// function test()
	// {
	// 	var x = 20;
	// 	console.log(x);
	
	// 	if (true) {
	// 		let x = 30;
	// 		console.log(x);
	// 	}
	
	// 	console.log(x);
	// }
	
	// test();
	// console.log(x);







    //var is function scoped while let const block scoped









	//lexical scope-definition space not invocation space














// const myName = "billu";


// function getName() {
//   return myName;
// }
















 
// function showLastName() {
// 	const lastName = "badshah";
// 	return lastName;
//   }
  
 
//   function displayFullName() {
// 	const fullName = "billu " + lastName;
// 	return fullName;
//   }
  
//   console.log(displayFullName());

















  function showLastName() {
	const lastName = "badshah";
	return lastName;
  }
  
  
  function displayFullName() {
	const fullName = "billu " + showLastName();
	return fullName;
  }
  

  console.log(displayFullName();
  
  















