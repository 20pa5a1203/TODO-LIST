var task=document.getElementById("input");
let input="";
const task_list=document.getElementById("task_list");
task.addEventListener("keyup",e=>{
    if(e.key=="Enter"){
        input = task.value;
        var id= new Date().getTime();
        var id2=id+1;
        var id3=id+2;
        id3=id3.toString();
        id2=id2.toString();
        id=id.toString();
        // const values={id:input};
        // arr.push(values);
        var div=document.createElement("div");
        div.setAttribute("id","list");
        div.setAttribute("class","list");
        res=`
        <div class="list_item">
        <div class="item_name">
        <p class="list_item" id=${id3}>${input}</p>
        </div>
        <div class="item_box">
        <input type="checkbox" name="" id=${id}>
        <p class="delete" id=${id2}>&#10005;</P> </div>
        </div>
        <hr>
        `;
        // res=res.join("");
        div.innerHTML=res;
        task_list.appendChild(div);
        task.value="";
        var checkbox=document.getElementById(id);
        checkbox.addEventListener('click',()=>{
            const tar=document.getElementById(id3);
            tar.classList.toggle("straik");
        });
        var del=document.getElementById(id2);
        del.addEventListener("click",()=>{
            task_list.removeChild(div);
        });
        
    }

})
// console.log(arr);