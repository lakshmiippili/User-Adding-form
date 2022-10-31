
    var myform = document.getElementById('my-form')
    
    myform.addEventListener('submit',addlocalStorage)
    function addlocalStorage(e){
        
    var userName =document.getElementById('name').value
    var userEmail=document.getElementById('email').value
    localStorage.setItem('UserName',userName)
    localStorage.setItem('UserEmail',userEmail)
    }