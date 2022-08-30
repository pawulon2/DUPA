
var ul = document.querySelector("ul");
var div = document.createElement("div");
var button = document.createElement("button");
var li = document.createElement("li");



div.classList.add("zwijanie");

ul.appendChild(div);

div.append(li,button);
li.classList.add("taskClass");

li.innerHTML="dupaa";
button.innerHTML='Del';