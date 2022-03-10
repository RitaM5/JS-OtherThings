const clickBtn = () => {
    const inputField = document.getElementById('mail-input');
    const input = inputField.value;
    inputField.value = "";
   
    const valid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(input);
   if(valid){
    error('none');
    success('block');
  
   }else{
    success('none');
    error('block');
 
   }
}
 const success = (value) => {
     const successMsg = document.getElementById('success');
    successMsg.style.display = value;
     successMsg.innerHTML = `<p>is a valid number</p>`;
     
 }
 const error = (value) => {
    const errorMsg = document.getElementById('error');
    errorMsg.style.display = value ;
    errorMsg.innerHTML = `<p>is a invalid number</P>`;
   
}