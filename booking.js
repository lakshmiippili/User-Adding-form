
document.addEventListener("DOMContentLoaded", function () {
    localStorage.getItem();
  });
    if (document.readyState !== "loading") {
        var keys=Object.keys(localStorage)
            keys.forEach(function (key){
                if (key.match(/userDetails/g)){
                var stringifiedDetailsOfPeople = localStorage.getItem(key);
                var detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
                addNewUserOnScreen(detailsOfPeople);}
            })
        }
        var submit=document.getElementById('submit')
        submit.addEventListener('click',addLocalStorage)
        
        function addLocalStorage(e){
            e.preventDefault();
            var u_name =document.getElementById('name').value
            var u_email=document.getElementById('email').value
            if (u_email.length > 0 && u_name.length > 0) {
                var myobj = {
                    u_name:u_name,
                    u_email:u_email
                };
            }
            localStorage.setItem("userDetails"+u_email, JSON.stringify(myobj))
            
                addNewUserOnScreen(myobj)
        }

        
        function addNewUserOnScreen(myobj){
            // if(localStorage.getItem(myobj.u_email)!= null){
            //     deleteUserOnScreen(u_email)
            // }
            var ul=document.getElementById('users')
            var li=document.createElement('li')
            li.appendChild(document.createTextNode(myobj.u_name+" "+myobj.u_email+" "))
            var a1 = document.createElement("input");
            a1.id = "edit";
            a1.type = "button";
            a1.value = "Edit";
            a1.addEventListener('click',function(){
                document.getElementById("name").value = myobj.u_name
                document.getElementById("email").value = myobj.u_email
                li.remove()
            })
            li.appendChild(a1)
            var a2=document.createElement("input")
            a2.id='delete'
            a2.type='button'
            a2.value='Delete'
            a2.addEventListener('click',function(){
                localStorage.removeItem("userDetails" + myobj.u_email)
                li.remove();
            })
            li.appendChild(a2)
            ul.appendChild(li)
        }