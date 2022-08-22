// Write your code here!
// const element = document.createElement("div");
// document.body.append(element);
// const ul = document.createElement("ul");
// // console.log(document.body);

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
//  }
  
//   element.append(ul);

// Remove main element from document//
const main = document.getElementById("main");
main.remove(main);

// "has a 'newHeader' variable that points to node 'h1#victory'"
// ("Make sure you create an <h1> with id 'victory'").eql('H1')

// Create an <h1> with id 'victory'//
// Create a newHeader variable that points to node 'h1#victory

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.append(newHeader);

// const head = document.getElementById("victory");
// head.textContent = "YOUR-NAME is the champion";
// const variable = document.getElementById("victory").innerHTML = "newHeader";
