//  question:1
var car={
    make :"honda",
    model:"car1",
    year :2003
}
Object.freeze(car);
car.make="kia";
console.log(car);
//  question:2
var user={
    name:"sai",
    age:22,
    email:"saicharan255@gmail.com"
}
console.log( Object.isFrozen(user));
//  question:3
var product={
    name:"bat",
    category:"cricket",
    price:12000
}
console.log(Object.isSealed(product));
// // question:4
var laptop={
    brand:"honda",
    model:"suv",
    price:25000,
}
console.log(Object.keys(laptop));
// // question:5
var house={
    location:"hyd",
    size:"250sq",
    price:1.50000
}
console.log(Object.values(house));
// question:6
var smartphone={
brand:"oneplus",
price:122000,
}
Object.seal(smartphone);
smartphone.price=15000
console.log(Object.isSealed(smartphone));
// question:7
var book={
    title:"harry potter",
    published_year:"1998",
}
Object.freeze(book);
book.published_year=2001;
console.log(Object.isFrozen(book));
console.log(book);
// // question:8
var person={
    firstname:"sai",
    lastname:"tummala"
}
console.log(Object.keys(person));
console.log(Object.values(person));
// // question:9
var course={
    title:"full stack",
    trainer:"vamsi",
    duration:"6 months",
}
console.log(Object.entries(course));
delete course.duration;
console.log(course);
// // question:10
var employee={
    name:"sai",
    positon:"front-end developer",
    salary:150000
}
Object.seal(employee);
employee.positon="full stack"
console.log(Object.keys(employee));
employee.new="hi";
console.log(employee);

// question 1
var a="sai ram charan"
console.log(a.slice(4,7).toLocaleUpperCase());
// // question 2
var b="sai charan"
console.log(b.toUpperCase());
console.log(b.length);
// // question 3
var c="sai charan"
console.log(c.charAt(2).charCodeAt(0));
// // question 4
var d="   saicharan    "
console.log(d.trim().slice(1,5));
// question 5
var e="hello"
var f="WORLD"
console.log(e.concat(" ",f.toLowerCase()));
// question 6
var g="   saicharan";
console.log(g.trimStart().slice(1));
// question 7
var h="sai charan"
console.log(h.charAt(2).toUpperCase());
// question 8
var i="   saicharan  "
var j="Tummala"
console.log(i.trim().concat(" ",j));
// question 9
var input=" HelloWorld ";
console.log(input.trim().toUpperCase().substring(1,6));

// question 10
let string1="HELLO";
let string2="WORLD";
console.log(string1.toLowerCase().concat(" ",string2.toLowerCase()).charAt(0));
