/**
 * Created by vvarbanov on 7.11.2015 г..
 */
var buttons = document.getElementsByTagName("button");

var boxElement = {
    className: function(className){
        this.className = className;
        return this.className;
    },
    getElement: function(className){
        this.className = className;
        return document.getElementsByClassName(this.className);
    },
    getState: function(element){
        return this.getElement(element)[0].classList.contains("hide") ? "hidden" : "showing";
    },
    show: function(element){
        if(this.getState(element) === "hidden"){
            this.getElement(element)[0].classList.remove("hide");
        }
    },
    hide: function(element){
        if(this.getState(element) === "showing"){
            this.getElement(element)[0].classList.add("hide");
        }
    }
};

for (var p in buttons){
    var num = parseFloat(p);
    if(!isNaN(num)){
        if(buttons[num].id === ''){
            buttons[num].addEventListener("click", function(event){
                document.getElementById("targetImg").src = event.target.previousElementSibling.children[0].firstElementChild.src;
            });
        }
    }
};



