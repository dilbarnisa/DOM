
// //id//
// const title = document.getElementById('main-heading');
// console.log(title);


// //class//
// const listItems = document.getElementsByClassName('list-items')
// console.log(listItems);

// //tagName//
// const listItems = document.getElementsByTagName('list-items');
// console.log(listItems);


// //querySelector//
// const container = document.querySelector('div');
// console.log(container);

// //querySelectorAll//
// const container1 = document.querySelectorAll('div');
// console.log(container1);

// //creating element//
// const ul = document.querySelector('ul');
// const li = document.createElement('li');


// //adding elements//
// ul.append(li)


// //modifying the text//
// li.innerText = 'item5';



//event handler//
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


//add event handler to an elemnt//
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });


  //adding many elements to same btn//
  var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Moused out!<br>";
}


