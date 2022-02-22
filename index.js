function init()
{
    var ele=document.getElementById("text");
    ele.addEventListener("keyup", function (event) {
        console.log(event);
        var text=ele.value;
        if(event.code ==="Enter" && text!==null){
            //console.log(text);
            var task=document.createElement("div");
            task.setAttribute("class","taskitems");
            var title=document.createElement("span");
            title.innerHTML=text;
            var edit=document.createElement("button");
            edit.innerHTML="edit";
            var del=document.createElement("button");
            del.innerHTML="delete";
            task.appendChild(title);
            task.appendChild(edit);
            task.appendChild(del);
            document.getElementById("left").appendChild(task);
            ele.value="";
        }
    });
}

init();