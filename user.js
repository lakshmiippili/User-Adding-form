
    
   
    var myform = document.getElementById('my-form')
    
    myform.addEventListener('submit',addlocalStorage)
    function addlocalStorage(e){
        e.preventDefault();
        var u_name =document.getElementById('name').value
        var u_email=document.getElementById('email').value
        if (u_email.length > 0 && u_name.length > 0) {
            var myobj = {
                u_name:u_name,
                u_email:u_email
        
            };
    
    localStorage.setItem(u_name, JSON.stringify(myobj))
    addLineElement(myobj)
    }
    function addLineElement(myobj)
    {
        var ul= document.getElementById('users')
        var li =document.createElement('li')
        li.appendChild(document.createTextNode(myobj.u_name+" "+myobj.u_email+" ")
        )
        console.log(li)
        ul.appendChild(li)
    }

    }