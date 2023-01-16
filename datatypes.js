// DATATYPES 

// 7 PRIMITIVE Datatypes

// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

// String

// Just like using dot notation, we access properties/methods from non-primitives (Objects).
// We do it with primitve datatype also like in string. It is a behind the scene concept.

let x = "Riya";
// --> The first one is just a simple string primitive, like we generally declare.

let y = String (22); //or we can also do: let y = String ("Javascript");
// --> This second one will also be treated like the same above one. But how it is the same?
// --> Because, String() is a function which is taking a parameter for doing type conversion.
// --> It will just coerce/convert this parameter to a string primitive like 22 will be converted into "22" string.

// Check x and y, both datatypes and it will be the same.

// console.log(typeof x);  
// console.log(typeof y);

// That's why both thr above first two codes are not different.

let z = new String("HtmlCSS");
// --> This approach of creating a string is different from those two above.   
// --> It is referring to a string constructor. Also note, a string function and  a string constructor are two different things.

// console.log(typeof z);
// --> The output says that: it is not a string primitive but an object.

// --> String constructor doesn't create a string primitive. It creates a string object.
// --> With a new keyword here, we have created an object instance from this contructor.
// --> If you want to more about this, refer the section "String primitives and String Objects" in MDN link given below.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#string_primitives_and_string_objects

// Accessing existing properties/methods

// console.log(x.length);  
// --> behind the scene, it does console.log( (new String (x)).length)
//- -> 
// console.log(x.toUpperCase()); 
// console.log(z.length);
// console.log(z.toUpperCase());

// --> We know we could access the existing properties (length) and methods like (toUpperCase). How?
// --> So, behind the scenes, what it does is --> console.log(x.length);  --> console.log( (new String (x)).length)
// --> So, as soon as we put dot notation, we see the inbuilt properties. And,
// --> Javascript automatically converts string primitives into a temporary wrapper objects.
// --> Just after accesing the property with help of wrapper object, it destroys the wrapper object at the same time there only.

// Wrapper Object concept applies on string, number and boolean primitive types.

// To understand and know more about how wrapper object works, read the below article links.

// https://javascriptrefined.io/the-wrapper-object-400311b29151
// https://programmingwithmosh.com/javascript/javascript-wrapper-objects/

// Setting new properties/methods

x.length = 15; // console.log( (new String (x)).length)
x.check = "We're just checking." //console.log( (new String (x)).check)

// console.log(x.length, x.check);

z.length = 25; 
z.check = "We're just checking z"
// console.log(z.length, z.check);

// console.log(Object.getOwnPropertyDescriptor(z,'length'));
// console.log(Object.getOwnPropertyDescriptor(z, 'check'));

// Refer the below article links for more understanding.
// https://dev.to/abdelrahmanahmed/javascript-s-primitive-wrapper-objects-4agb

// Check the second article link's comment section because it will tell you  
// if wrapper objects are also mutuable just like any other non primitive objects?

// Symbol - it represents a unique value.

let a = Symbol("unique a");
let b = Symbol("unique a");

// Check if both are same/equal to each other.
// console.log(a === b);
// It will be proved.

// Number - It simply stores a number
// Range --> (numbers between -(253 − 1) and 253 − 1). In addition to representing floating-point numbers,
let num = Number(100 / "Riya") 
// console.log(num); 
// console.log(typeof NaN);
// console.log(typeof num);

// num points to NaN because 100 / "Riya" can not be represented.
// typeof NaN says it's a number type and so does the typeof num also.
// NaN simply represents when anything is out of context in numeric values as per Ecmascript. It is not an operator or anything.

// BigInt - When the range goes above (253 − 1)  2 raised to the power of 53 - 1 ,
// it is preferred to use for operation of calculation consistencies.

// Null - We have the intention to explicitely defind null value when we want something to put as an option or optional value.
// Just like, in form fill-up, middle name section is not necessarily filled, so we can keep it as null.

let firstName = "Riya";
let middleName = null;
let lastName = "Tiwari"

// console.log(typeof middleName);

// Undefined - Javascript simply says you have declared the variable but not with any value assigned to it.
// Just leaving an unassigned declared variable is undefined to JS.

let favouriteCookie; 
// we can also assign undefined like this but makes not much sense.
// let favouriteCookiess = Undefined; it will also have the same output.
// console.log(typeof favouriteCookie);

// console.log(typeof null);

// Null technically presents itself as an object datatype which is not true and it is a bug.
// It is a primitive datatype only.

// We have reason to believe typeof null === “object” is a bug that could bite real content,
// from our spidering of the web. - Brendan Eich

// I think it is too late to fix typeof. The change proposed for typeof
// null will break the existing code. - Crockford 

// Boolean 
// Boolean values are true and false which are useful in cases like decision making. 
// Like if passMarks is true, it will execute the block accordinly only.

let passMarks = false;

// if (passMarks){
//     console.log("You've passed the exam.");
// } else {
//     console.log("You have failed.");
// }
