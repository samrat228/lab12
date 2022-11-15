let h1_arr = document.getElementsByTagName("h1")
let h = h1_arr[0]
h.innerHTML = "Lab12 Assignment";
h.style.color = "blue"
//document.body.appendChild(h);
//console.log(document);

let hr = document.createElement("hr")
console.log(hr)
document.body.appendChild(hr)

let h2 = document.createElement("h2")
h2.innerHTML = "Task"
h2.style.color = "red"
document.body.appendChild(h2)

let p1 = document.createElement("p")
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:" 
document.body.appendChild(p1)

let ul1 = document.createElement("ul")
document.body.appendChild(ul1);

let li1 = document.createElement("li")
li1.innerHTML = "find elements in the DOM (<strong>5 points</strong>);"
li1.style.color = "green"
ul1.appendChild(li1);

let li2 = document.createElement("li")
li2.innerHTML = "create/add/remove elements (<strong>5 points</strong>);"
li2.style.color = "purple"
ul1.appendChild(li2);

let li3 = document.createElement("li")
li3.innerHTML = "change content of the elements (<strong>5 points</strong>);"
li3.style.color = "green"
ul1.appendChild(li3);

let li4 = document.createElement("li")
li4.innerHTML = "change styles of the elements (<strong>5 points</strong>);"
li4.style.color = "purple"
ul1.appendChild(li4);

let li5 = document.createElement("li")
li5.innerHTML = "change attributes of the elements (<strong>5 points</strong>);"
li5.style.color = "green"
ul1.appendChild(li5);

let li6 = document.createElement("li")
li6.innerHTML = "change classes of the elements (<strong>5 points</strong>)."
li6.style.color = "purple"
ul1.appendChild(li6);

let a = document.createElement("a");
a.innerText = "link";
a.setAttribute("href", "https://github.com/yessen/nu_web_programming/tree/main/week12");
let p2 = document.createElement("p");
p2.innerHTML = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this ";
p2.appendChild(a);
document.body.appendChild(p2);

let hr2 = document.createElement("hr")
console.log(hr2)
document.body.appendChild(hr2)

let h3 = document.createElement("h2")
h3.innerHTML = "Submission"
h3.style.color = "red"
document.body.appendChild(h3)

let p3 = document.createElement("p");
p3.innerHTML = "To submit your work, follow these instructions:"
document.body.appendChild(p3);

let ul2 = document.createElement("ul")
document.body.appendChild(ul2);

let li7 = document.createElement("li")
li7.innerHTML = "Create a new repository on Github, named <strong>lab12 (1 point)</strong>."
li7.style.color = "green"
ul2.appendChild(li7);

let li8 = document.createElement("li")
li8.innerHTML = "Clone this repository to your local machine and work inside it."
li8.style.color = "purple"
ul2.appendChild(li8);

let li9 = document.createElement("li")
li9.innerHTML = "Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with 'Hello, World!' message (<b>1 point</b>)."
li9.style.color = "green"
ul2.appendChild(li9);

let li10 = document.createElement("li")
li10.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>)."
li10.style.color = "purple"
ul2.appendChild(li10);

let li11 = document.createElement("li")
li11.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section)."
li11.style.color = "green"
ul2.appendChild(li11); 

let li12 = document.createElement("li")
li12.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>)."
li12.style.color = "purple"
ul2.appendChild(li12);

let li13 = document.createElement("li")
li13.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."
li13.style.color = "green"
ul2.appendChild(li13);

let hr4 = document.createElement("hr")
console.log(hr4);
document.body.appendChild(hr4);
