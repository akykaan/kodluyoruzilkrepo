let itemsArray=localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')):[];

function newElement() {
    let userListDOM = document.querySelector("#list");
    var input = document.getElementById("task").value;
    
    if (input.length == 0 || isEmpty(input)) {
        $(".error").toast("show");
    }
    else if (input.length > 0 ) {

        $(".success").toast("show");
        let li = document.createElement("li");
        li.innerHTML = input;
        let span=document.createElement("span");
        span.setAttribute("onclick","deleteElement()");
        span.setAttribute("class", "delete close");
        span.ariaHidden="true";
        span.innerHTML="&times";
        userListDOM.append(li);
        li.appendChild(span);
        itemsArray.push(JSON.parse(JSON.stringify(li)));
        localStorage.setItem('items',JSON.stringify(itemsArray));
    } 
}

function isEmpty(str) {
    return !str.trim().length;
}

function deleteElement() {
    
    var ul=document.querySelector("ul");
    var li=document.getElementsByTagName("li");
    var del=document.getElementsByClassName("delete");


    for(var i=0; i<del.length; i++){
        del[i].addEventListener("click",deleteListElement);
    }
    for(var i=0; i<li.length; i++){
        li[i].addEventListener("click",liClick);
    }
    
    localStorage.clear();
    itemsArray=[];

}

function deleteListElement() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function liClick() {
    this.classList.toggle("checked");
}