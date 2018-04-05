var outPut = document.getElementById("outPut");
var result = document.getElementById("result");
var Myresult = document.getElementById("Myresult");


var shoppingList = ["Apple", "papaya", "kiwifruit", "zapote blanco", "huckleberry", "banana", "fig", "lime", "xigua", "vanilla", "yiessas", "tamarind", "umkolo", "quince", "imbu elderberry", "juneberry", "mango", "strawberry", "nectarine", "date", "cherry", "orange", "watermelon", "grape raspberry"];

function addItem(){
  var arrayList = document.getElementById('listName').value;
  if(arrayList == ""){
    alert("Empyt string not accepted");
  }else{
       if(shoppingList.indexOf(arrayList) > -1){
         alert("Given item Already exisit in position #" + shoppingList.indexOf(arrayList));
      }else{
        shoppingList.push(arrayList);
        alert("Sucessfully Added");
      }
  }
}

function showItem(){
  for(myItem of shoppingList){
    outPut.innerHTML += "<li>" + myItem + "</li>";
  }
}

/*************      Crack Gram **********************/

var count = 0;
var resultArray = [];
var t1 = document.getElementById('val1');
var t2 = document.getElementById('val2');
var t3 = document.getElementById('val3');

for(b=0; b<3; b++){
  resultArray.push(Math.floor(Math.random()*9));
}
result.innerHTML += resultArray;

function checkResult() {
  count = 0;
  var myArray = [t1.value,t2.value,t3.value];
  for(var k=0; k<resultArray.length; k++){
    Myresult.innerHTML += crack(myArray[k],resultArray[k]);
  }
  if(count == 3){
    Myresult.innerHTML += " You guessed it";
  }else{
    Myresult.innerHTML += "<br>";
  }
}

function crack(a,b) {
  if(a>b){ return "L"; }
  if(a<b){ return "H"; }
  if(a==b){
    count++;
    return a;
  }
}
