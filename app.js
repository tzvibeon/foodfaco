function dom(id){
    return document.querySelector(id);
}
 dom('#btn').addEventListener("click",function(e){
     dom("#bg-modal").style.display="flex";
 });


 dom(".close").addEventListener("click",(e)=>{
    dom("#bg-modal").style.display="none";
 })

 //window close if touch anywhere
 window.onclick=(e)=>{
     if(e.target==dom("#bg-modal")){

        dom("#bg-modal").style.display="none";

     }
 }
 //Regular expression valid invalid check


 let nameReg=/[a-zA-Z]{5,16}[0-9]{3}$/;
 let emailReg=/((^[a-z]{5,})[a-zA-Z0-9]+\@[a-z]{5}\.[a-z]{3}$)/;
 dom("#name").addEventListener("keyup",(e)=>{
     e.preventDefault();
    if(nameReg.test(e.target.value)){
        dom('.valid-feedback').style.display="flex";
        dom(".invalid-feedback").style.display="none";
        dom("#name").style.border="2px solid green";
        dom("#name").style.boxShadow="2px 2px 7px green";

        // form.name.classList.add('is-valid');
        // form.name.classList.remove('is-invalid');
        dom(".sub").removeAttribute('disabled')

    }else{
        
        dom(".invalid-feedback").style.display="flex";
        dom('.valid-feedback').style.display="none";
        dom("#name").style.border="2px solid red"
        dom("#name").style.boxShadow="2px 2px 7px red";
        // form.name.classList.add('is-valid');
        // form.name.classList.remove('is-invalid');
        dom(".sub").setAttribute('disabled','disabled')

    }


 })
 dom("#email").addEventListener("keyup",(e)=>{
    e.preventDefault();
   if(emailReg.test(e.target.value)){
       dom('.evalid-feedback').style.display="flex";
       dom(".einvalid-feedback").style.display="none";
       dom("#email").style.border="2px solid green";
       dom("#email").style.boxShadow="2px 2px 7px green";
      
       dom(".sub").removeAttribute('disabled')

   }else{
       
       dom(".einvalid-feedback").style.display="flex";
       dom('.evalid-feedback').style.display="none";
       dom("#email").style.border="2px solid red"
       dom("#email").style.boxShadow="2px 2px 7px red";
       dom(".sub").setAttribute('disabled','disabled')

   }


})


