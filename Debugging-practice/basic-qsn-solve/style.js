//40.5 practice problem.
//১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। 
setTimeout(() => {
   // console.log('this is big');
}, 3500);
//console.log('me is big');
//২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও |
//prompt
const interNumber = () => {
    const number = prompt('inter a number value');
    if(isNaN(number)){
       return alert("please inter a number value");
    }
  else { const sum = parseInt(number) + 200;
    alert("the sum is:" + sum);
    return;}
}
//৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও |
//confirm
const askSome = () => {
    const response = confirm('Are you wanna to see your website location?'); 
    //console.log(response);
    if(response){
        alert('yaa,i wanna see');
    }
    //console.log(location.href=("https://www.facebook.com"));
}
//9.একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে।
 /*const clickBtn = () => {
       const nameField = document.getElementById('name');
         const name = nameField.value;
         nameField.value="";
       const priceField = document.getElementById('price');
         const price = priceField.value;
         priceField.value="";
        window.localStorage.setItem(name, price);
         
}*/
//১০. যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 

/*const clickBtn = () => {
  const nameField = document.getElementById('name');
  const name = nameField.value;
  nameField.value = "";
  const priceField = document.getElementById('price');
  const price = priceField.value;
  priceField.value = "";
  displayProduct();
  addProductToProperty(name, price);
}
//fst get data korte hobe.jodi local storage a object available thake to seta te new data dhukaice then set kore dice. r jodi na thake to new creat kore set kre dise.
const getItem = () => {
  const property = window.localStorage.getItem('property');
  if (property) {
      obj = JSON.parse(property);
  }
  else {
      obj = {};
  }
  return obj;
}

const addProductToProperty = (name, price) => {
  const property = getItem();//propert namok object nisi.

  property[name] = price;//property te key r value set korse.

  const propertyStringified = JSON.stringify(property);

  localStorage.setItem('property', propertyStringified);

}

const displayProduct = () => {
  const property = getItem();
  const ul = document.getElementById('products');

  ul.innerHTML = '';//ata na korle same data file barbar run hbe new data ar sathe.

  for (const item in property) {
      //console.log(item);
      const li = document.createElement('li');
      li.innerHTML = `
      ${item} ${property[item]}
          `;
      ul.appendChild(li);
  }
}
displayProduct();*///display te propertygulo jate theke jay.

//42 no prblm:
//৪. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে|
//fst object destructuring:
const company = {work:'web-developer', salary:50000, framework:'react'};
 
 const {salary} = company;
 console.log('balance :',salary); 
 //2nd array destructuring:
 const numbers = [23, 45, 67, 30];
 //const {1:balance} = numbers;//avabeo kra jay 0: dile fst position,2: dile 2nd position avabei chole.and
 const [,balance] = numbers;//1 ta koma dile 2nd position,2 ta cmma dile 3rd position amne asbe.
 console.log(balance);

//১৩. গুগলে সার্চ কনসোল এর ডকুমেন্টেশন খুঁজে বের করো। তারপর এমন কিছু একটা করো। যাতে তুমি একটা ফর লুপ ১ মিলিয়ন বার চালানোর পর, পুরা কোড চলতে কত সময় লাগছে সেটা বের করে ফেলতে পারবে
console.time();
let counter = 0 ;
for(let i=0; i<1000000; i++){
  counter = counter + i;
}
console.timeEnd();