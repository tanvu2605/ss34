function addItem() {
    var value = document.getElementById("input").value;
  
    var li = document.createElement("li");
    li.textContent = value;
    document.getElementById("list").appendChild(li);
  }
  
  document.querySelector("button").addEventListener("click", addItem);