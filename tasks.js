// Github links for:
// Loops and Functions in JS: https://github.com/BahadurKhan10/Javascript-Tasks.git 
// Functions in JS: https://github.com/BahadurKhan10/JavaScript-Function-tasks.git
// TypeScript of Javascript functions and loops: https://github.com/BahadurKhan10/Typescript-Tasks.git
// -------------------------------------------------------------------------------------------------------------------------------------


// 1 Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.


function addNum(num){
    return function(num2){
        return num+num2
    }
}

// Closure of 5
const addFive= addNum(5)
console.log(addFive(10))
console.log(addFive(20))

// Closure of 6
const addSix= addNum(6)
console.log(addSix(10))
console.log(addSix(20))



// -------------------------------------------------------------------------------------------------------------------------------------

// 2. Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function findVal(num,numbers){
    if(numbers.length==0){
        return false
    }

    if(numbers[0]==num){
        return true
    }
    else{
        return findVal(num, numbers.slice(1)) //slice the first element after each iteration
    }
}
console.log(findVal(10,[2,3,6,5,4])) //false
console.log(findVal(6,[2,3,6,5,4])) //true


// -------------------------------------------------------------------------------------------------------------------------------------


// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function addHtmlPara(text) {
    const paragraph = document.createElement("para");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    paragraph.appendChild(newParagraph);
    document.body.appendChild(paragraph);
  }
  
addHtmlPara("This is the end of document");



// Extra Tasks
// ```````````

// Adding paragraph at a specific place in document
// Targeting the id "paragraph"
function addPara(text){
    const paragraph = document.getElementById("paragraphs");
    const newParagraph= document.createElement("p")
    newParagraph.textContent=text
    paragraph.appendChild(newParagraph)
}

addPara("This is digital watch which shows date and time.")


// Now Adding date and time to next paragraph
// which has id ="datetime"
       
function myTimer() {
    d = new Date();
  document.getElementById("datetime").innerHTML = d.toLocaleTimeString() + "  on  " + d.toLocaleDateString();
}
setInterval(myTimer, 1000);


// Output (open index.html)
// 5:45:12 PM  on  4/10/2023
// This is digital watch which shows date and time. 


// -------------------------------------------------------------------------------------------------------------------------------------


// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.


function addNewItem(item){
    const listItem= document.getElementById("myList")
    const newItem= document.createElement("add")
    newItem.textContent=item

    listItem.appendChild(newItem)

}

addNewItem("Pancake") 
//Pancake is added to list of Burger and Pepsi


// -------------------------------------------------------------------------------------------------------------------------------------


// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
// Changed the dateTime container bg to yellow
changeBackgroundColor(myDiv,"yellow")



// Some extra tasks for practice
// ``````````````````````````````

// Create a function which will change the element color with use of button 
function changeElemColor(element,color) {
    const myButton = document.getElementById("myButton1");
    myButton.addEventListener("click", function() {
        element.style.backgroundColor = color;
    });
}
// Changed the dateTime container bg back to white
// By clicking Change Element color button on browser
changeElemColor(myDiv,"white")



// Creating a funciton which will change the color of whole document by click on button
// Yellow mode and Light mode on button named Mode

let yellow=true
function mode() {
    const myButton = document.getElementById("myButton");

    myButton.addEventListener("click",function(){
        if(yellow){
            document.body.style.backgroundColor="#efff10"
            yellow=false
        }
        else{
            document.body.style.backgroundColor="white"
            yellow=true
        }
    })

    
}
mode()


// -------------------------------------------------------------------------------------------------------------------------------------


// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


function storeObj(key,object){
    const myObject= JSON.stringify(object)
    localStorage.setItem(key,myObject)
}

storeObj("myObject",{ name: "Bahadur Khan", age: 20 })
// console.log(localStorage)




// -------------------------------------------------------------------------------------------------------------------------------------

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

function retrievesObj(key){
    const storedObjectStr = localStorage.getItem(key);
    const storedObject= JSON.parse(storedObjectStr)
    console.log(storedObject)
}

retrievesObj("myObject")



// -------------------------------------------------------------------------------------------------------------------------------------

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object

function saveObjectToLocalStorage(obj) {
    // Saving
    for (i in obj) {
      localStorage.setItem(i, JSON.stringify(obj[i]));
    }
    // Retrieving
    const newObj = {};
    for (i in obj) {
      newObj[i] = JSON.parse(localStorage.getItem(i));
    }
    return newObj;
  }


const myObject = {name:"Bahadur Khan", age:20, field:"Software Engineering"}
console.log(saveObjectToLocalStorage(myObject))
  
  