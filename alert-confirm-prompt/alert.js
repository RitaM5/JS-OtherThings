const maComing = () => {
alert('ma coming');
}
//confirm
const askPicnic = () => {
    const response = confirm('Are you going to picnic?'); 
    console.log(response);
    if(response){
        alert('amk fee ta bkash kore de');
    }
    else{
        console.log('dure giya mor');
    }
}
//prompt
const askName = () => {
    const name = prompt('what is your name');
    console.log(name);
}