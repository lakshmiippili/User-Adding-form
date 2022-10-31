
    
   
    var myform = document.getElementById('my-form')
    
    myform.addEventListener('submit',addlocalStorage)
    function addlocalStorage(e){
        u_name =document.getElementById('name').value
        u_email=document.getElementById('email').value
        const myobj ={
            u_name,u_email
        }  
    
    localStorage.setItem('myobj',JSON.stringify(myobj))
    let newobj = localStorage.getItem(myobj)
    console.log(JSON.parse(myobj))
    }


