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

li1 = document.createElement ("li")
    li1.innerHTML = "find elements in the DOM <strong> (5 points)</strong>;"
    li1.classList = "odd"
    ul1.appendChild(li1)

    li2 = document.createElement ("li")
    li2.innerHTML = "create/add/remove elements <strong> (5 points)</strong>;"
    li2.classList = "even"
    ul1.appendChild(li2)

    li3 = document.createElement ("li")
    li3.innerHTML = "change content of the elements <strong> (5 points)</strong>;"
    li3.classList = "odd"
    ul1.appendChild(li3)

    li4 = document.createElement ("li")
    li4.innerHTML = "change styles of the elements <strong> (5 points)</strong>;"
    li4.classList = "even"
    ul1.appendChild(li4)

    li5 = document.createElement ("li")
    li5.innerHTML = "change attributes of the elements <strong> (5 points)</strong>;"
    li5.classList = "odd"
    ul1.appendChild(li5)

    li6 = document.createElement ("li")
    li6.innerHTML = "change classes of the elements <strong> (5 points)</strong>;"
    li6.classList = "even"
    ul1.appendChild(li6)    

document.body.appendChild(ul1)

let a = document.createElement("a");
a.innerText = "link.";
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

    li1 = document.createElement ("li")
    li1.innerHTML = "Create a new repository on Github, named <strong> lab12 (1 point).</strong>"
    li1.classList = "odd"
    ul2.appendChild(li1)

    li2 = document.createElement ("li")
    li2.innerHTML = "Clone this repository to your local machine and work inside it."
    li2.classList = "even"
    ul2.appendChild(li2)

    li3 = document.createElement ("li")
    li3.innerHTML = "Create a new HTML file, called <strong> index.html</strong>, which has only one &lt;h1&gt; tag with &#34;Hello, World!&#34; message <strong>(1 point).</strong>"
    li3.classList = "odd"
    ul2.appendChild(li3)

    li4 = document.createElement ("li")
    li4.innerHTML = "Create a new JavaScript file, called <strong> main.js</strong>, which must contain your program (assignment) described above (<strong>1 point</strong>)."
    li4.classList = "even"
    ul2.appendChild(li4)

    li5 = document.createElement ("li")
    li5.innerHTML = "Link this <strong> main.js </strong> file to your <strong> index.html </strong> file (Note: place your script at the end of the <strong> body </strong> section)."
    li5.classList = "odd"
    ul2.appendChild(li5)

    li6 = document.createElement ("li")
    li6.innerHTML = "Write a JavaScript program in <strong> main.js </strong> to make your <strong> index.html </strong> look identical to this HTML file (<strong>5 points</strong>)."
    li6.classList = "even"
    ul2.appendChild(li6)    

    li7 = document.createElement ("li")
    li7.innerHTML = "After you finish your work, submit it to the Github (<strong>2 points</strong>)."
    li7.classList = "even"
    ul2.appendChild(li7)  

document.body.appendChild(ul2)

let hr4 = document.createElement("hr")
console.log(hr4);
document.body.appendChild(hr4);

let x = document.getElementsByClassName("odd");
console.log(x); 
let y = document.getElementsByClassName("even");
console.log(y);
for (let i=0; i<y.length;i++) {
	y[i].style.color = 'purple'
    x[i].style.color = 'green'
}


