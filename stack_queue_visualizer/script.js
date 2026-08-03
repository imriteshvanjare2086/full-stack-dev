let stack = [];
const stackInput = document.querySelector(".stack1 input");
const stackContainer = document.querySelector(".stack .container");
const stackButtons = document.querySelectorAll(".stack1 button");

stackButtons[0].addEventListener("click", () => {
  let value = stackInput.value.trim();
  if (value === "") {
    alert("Pls Enter Some Value to Push!!");
    return;
  }
  stack.push(value);      
  stackInput.value = "";
  renderStack();
});

stackButtons[1].addEventListener("click", () => { 
  if (stack.length === 0) {
    alert("Stack is Empty !!");
    return;
  }
  
  const topNode = stackContainer.firstChild;
  topNode.style.background = "red";
  setTimeout(() => {
    stack.pop();          
    renderStack();       
  }, 300); 
});

stackButtons[2].addEventListener("click", () => { 
  if (stack.length === 0) {
    alert("Stack is Empty !!");
    return;
  }
  alert("Top Element in Stack : " + stack[stack.length - 1]);
});

function renderStack() {
  stackContainer.innerHTML = "";
 
  stack.slice().reverse().forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = item; 
    div.style.margin = "2px 100px";
    div.style.background = (index === 0) ? "rgba(254, 143, 31, 1)" : "rgba(241, 255, 38, 1)"; 
    div.style.border = "1px solid black";
    div.style.borderRadius = "5px";
    stackContainer.appendChild(div);
  });
}


let queue = [];
const queueInput = document.querySelector(".Queue1 input");
const queueContainer = document.querySelector(".Queue .container");
const queueButtons = document.querySelectorAll(".Queue1 button");

queueButtons[0].addEventListener("click", () => { 
  let value = queueInput.value.trim();
  if (value === "") {
    alert("Please Enter Some Value to Push !!");
    return;
  }
  queue.push(value);
  queueInput.value = "";
  renderQueue();
});

queueButtons[1].addEventListener("click", () => { 
  if (queue.length === 0) {
    alert("Queue is Empty !!");
    return;
  }
  const frontNode = queueContainer.firstChild;
  frontNode.style.background = "red";
  setTimeout(() => {
    queue.shift();
    renderQueue();
  }, 300);
});

queueButtons[2].addEventListener("click", () => { 
  if (queue.length === 0) {
    alert("Queue is Empty !!");
    return;
  }
  alert("Front Element in Queue : " + queue[0]);
});

function renderQueue() {
  queueContainer.innerHTML = "";
  queue.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = item;
    div.style.display = "inline-block";
    div.style.padding = "5px 20px";
    div.style.margin = "20px 5px";
    div.style.background = (index === 0) ? "rgba(254, 143, 31, 1)" : "rgba(241, 255, 38, 1)"; 
    div.style.border = "1px solid black";
    div.style.borderRadius = "5px";
    queueContainer.appendChild(div);
  });
  
}
