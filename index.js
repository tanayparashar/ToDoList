var arr=[];
var storedtodo=localStorage.getItem("tasks");
if(storedtodo!==null)
{
    storedtodo=JSON.parse(storedtodo);
    if(arr.length===0)
    { 
        storedtodo.forEach(function (value) {
            var task=document.createElement("div");
            task.setAttribute("class","taskitems");
            var title=document.createElement("span");
            title.innerHTML=value;
            var edit=document.createElement("button");
            edit.innerHTML="edit";
            var del=document.createElement("button");
            del.innerHTML="delete";
            task.appendChild(title);
            task.appendChild(edit);
            task.appendChild(del);
            document.getElementById("items").appendChild(task);
        });
    }
    arr=storedtodo;
}
var selectedToDo=null;
function init()
{
    var ele=document.getElementById("text");
    ele.addEventListener("keydown", function (event) {
        //console.log(event);
        var text=ele.value;
        if(text==="" && event.code ==="Enter")
        {
            event.preventDefault();
            ele.value="";
        }
        else if(event.code ==="Enter" && ele.value!=="")
        {
            event.preventDefault();
            //console.log(text.length);
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
            arr.push(text);
            var narr=JSON.stringify(arr);
            localStorage.setItem("tasks",narr);
            ele.value="";
            document.getElementById("items").appendChild(task);
            //console.log(arr);
        }
        
    });
    var itemsList=document.getElementById("items").childNodes;
    for(var i=0;i<itemsList.length;i++)
    {
        var delButton=itemsList[i].children[2];
        //console.log(itemsList[i].children[0]);
        delButton.addEventListener("click",function (event){
            var item=event.target.parentNode;
            var parent=item.parentNode;
            parent.removeChild(item);
            var temptext=item.children[0].innerHTML;
            storedtodo=storedtodo.filter((val)=>val!=temptext);
            localStorage.setItem("tasks",JSON.stringify(storedtodo));
        });
        //console.log("\n");
    }
    for(var i=0;i<itemsList.length;i++)
    {
        var editButton= itemsList[i].children[1];
        editButton.addEventListener("click",function (event){
            var temptext=event.target.parentNode.children[0].innerHTML;
            //console.log(temptext);
            ele.value=temptext;
            selectedToDo=event.target.parentNode.children[0];
        });
        
    }
    var save=document.getElementById("save");
    save.addEventListener("click",function (event)
    {
        var temptext=selectedToDo.innerHTML;
        selectedToDo.innerHTML=ele.value;
        storedtodo=storedtodo.map(function(val) {
            if(val===temptext)
            {
                return ele.value;
            }
            else{
                return val;
            }
        });
        console.log(storedtodo);
        localStorage.setItem("tasks",JSON.stringify(storedtodo));

    });
}
init();
//console.log(storedtodo);