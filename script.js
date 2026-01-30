//Javascript - Lesson 4
//Task 1
const click = document.getElementById("click");
click.addEventListener("click", () => console.log("The button was pressed!"));
//Task 2
const doubleclick = document.getElementById("click");
const doubleDiv = document.getElementById("doubleDiv");
doubleclick.addEventListener("dblclick", () => {
    doubleDiv.style.backgroundColor = "green";
});
//Task 3 
document.addEventListener("dblclick", () => console.log("Double click detected!"));
//Task 4
const data = document.getElementById("data");
data.addEventListener("dblclick", () => data.innerText = "Double clicked!");
const data2 = document.getElementById("data2");
data2.addEventListener("dblclick", () => data2.innerText = "Double clicked!");
const data3 = document.getElementById("data3");
data3.addEventListener("dblclick", () => data3.innerText = "Double clicked!");
const data4 = document.getElementById("data4");
data4.addEventListener("dblclick", () => data4.innerText = "Double clicked!");
const data5 = document.getElementById("data5");
data5.addEventListener("dblclick", () => data5.innerText = "Double clicked!");
const data6 = document.getElementById("data6");
data6.addEventListener("dblclick", () => data6.innerText = "Double clicked!");
const data7 = document.getElementById("data7");
data7.addEventListener("dblclick", () => data7.innerText = "Double clicked!");
const data8 = document.getElementById("data8");
data8.addEventListener("dblclick", () => data8.innerText = "Double clicked!");
const data9 = document.getElementById("data9");
data9.addEventListener("dblclick", () => data9.innerText = "Double clicked!");
//Task 5
const img1 = document.getElementById("img1");
img1.addEventListener("dblclick", () => console.log("A driver in a helmet"));
const img2 = document.getElementById("img2");
img2.addEventListener("dblclick", () => console.log("A black car driving up a mountain"));
const img3 = document.getElementById("img3");
img3.addEventListener("dblclick", () => console.log("A red car driving across a river"));
//Task 6
const header = document.getElementById("header");
header.addEventListener("dblclick", () => header.innerHTML = "<h1>Double clicked!</h1>");
//Task 7
document.addEventListener("keydown", (event) => console.log("You have pressed: " + event.key));
//Task 8
const input = document.getElementById("input");
input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        const inputValue = event.target.value;
        console.log("You have typed: " + inputValue);
        event.target.value = "";
    }
});
//Task 9
document.addEventListener("keyup", (event) => console.log("You have released: " + event.key));