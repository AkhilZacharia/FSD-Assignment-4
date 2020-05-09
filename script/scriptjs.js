var src =document.getElementsByClassName("ans");

// Q1.  get an array and to read the first element of an array.Check whether it is prime or not
function primeEl1(arr,len){
    if(len>1){
        var Format ="^([0-9]+)";
        for(i=1;i<len;i++){
            Format +="[,]([0-9]+)"
        }
        Format +="$";
        var arrFormat = new RegExp(Format);
    }
    else{
        var arrFormat =/^([0-9]+)$/;
    }
    if((arrFormat.test(arr))){
        // alert("valid") ;
    var items = [];
      items.push(arr);
      function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }
      var pCh = isPrime(items[0]);
      if (pCh ||items[0]===2||items[0]===3) {
        src[0].innerHTML="<h6>"+items[0]+" is prime </h6>";
      } else {
        src[0].innerHTML="<h6>"+items[0]+" is not prime </h6>";
      } 
    }
    else{
        alert("Accepted Format 1,2,3,... Also make sure the array length is satisfied");
    }
}
//***************end****************** */

//Q 2. JavaScript program to find the most frequent item of an array
function arrayQ2(arr,len){
    if(len>1){
        var Format ="^([0-9]+)";
        for(i=1;i<len;i++){
            Format +="[,]([0-9]+)"
        }
        Format +="$";
        var arrFormat = new RegExp(Format);
    }
    else{
        var arrFormat =/^([0-9]+)$/;
    }
    if((arrFormat.test(arr))){
    var items = [];
    items.push(arr);
    var countMax = 1; 
    var counter = 0;
    var item;
    for (i=0; i<arr.length; i++){
        for (j=i; j<arr.length; j++){
                if (arr[i] == arr[j]){
                counter++;
                }
                if (countMax<counter){
                    countMax=counter;
                  item = arr[i];
                }
        }
        counter=0; 
    }
    src[1].innerHTML="<h6> The element "+item+" has the maximum frequency of "+countMax+" </h6>"; 
    }
    else{
        alert("Accepted Format 1,2,3,... Also make sure the array length is satisfied");
    }
}
//***************end****************** */

//Q3  JavaScript program which accept a string as input and swap the case of each character. 
function upLo(st){
    var outSt ="";
    var up=/[A-Z]{1}/;
    for(x of st){
        if ((up.test(x))) {
            outSt += x.toLowerCase();
        } else {
            outSt += x.toUpperCase();
        }
    }
    src[2].innerHTML="<h6>"+outSt+" </h6>"; 
}
//***************end****************** */
//Q7 JavaScript program that accept two integers and display the larger using  findLarge() function.
function findLarge(int1,int2){
    var large ="";
    (int1>int2)?large=int1:large=int2;
    src[6].innerHTML="<h6>"+large+"</h6>";
}

//***************end****************** */
//Q8. JavaScript program using for…in to read the objects from an array entered by an user and to arrange it in alphabetical order.

    function sort4(arr,len){
        if(len>1){
            var Format ="^([A-Za-z]+)";
            for(i=1;i<len;i++){
                Format +="[,]([A-Za-z]+)"
            }
            Format +="$";
            var arrFormat = new RegExp(Format);
        }
        else{
            var arrFormat =/^([A-Za-z]+)$/;
        }
        if((arrFormat.test(arr))){
        var items = [];
        items.push(arr);
        for(x in items){
            items.sort();
        }
        src[7].innerHTML="<h6>"+items+" </h6>"; 
        }
        else{
            alert("Accepted Format 1,2,3,... Also make sure the array length is satisfied");
        }
    } 

//***************end****************** */
//Q 6 . truncate a string
function truncate(str,limit){
    var out ="";
    if(str.length>limit){
        out= str.substring(0,limit)
    }else{
        out = str;
    }
    src[5].innerHTML="<h6>"+out+"</h6>";
}


//************************************end****************************************

//Q 4 . sum of squares of the elements of an array

function sqSum4(){
    var arr =[2,3,1];
    var out =0;
    for(i=0;i<arr.length;i++){
        out += Math.pow(arr[i],2);
    }
    src[3].innerHTML=`Sum of squares of the elements of the array [${arr}] is ${out}`;
}
//************************************end****************************************

//Q 5 .JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.
function oddEven(){
    var out ="";
    var line ="";
    for(i=0;i<=15;i++){
        (i%2===0)?out="even":out="odd";
        line +="<li>"+i+" is "+out+"</li>";

    }
    src[4].innerHTML="<h6>"+line+"</h6>";
}
//************************************end****************************************

// Q 9.JavaScript program to print the letters of the word “Javascript” as below in each line using for…of.
function jsGen(){
    var text ="javascript"
    var out ="";
    var line ="";
    for(x of text){
    out += x;
    line +="<li>"+out+"</li>";

    }
    src[8].innerHTML="<h6>"+line+"</h6>";
}
// *********************************Question 9 Ends********************************

//Question no 10. * ** *** **** **** pattern
function patternGen(ptrnNo){
    for(j=0;j<1;j++){
    var op =""
    var ln ="";
    for(i=0;i<ptrnNo;i++){
        op +="*";
        ln +="<li>"+op+"</li>";
    }
   src[9].innerHTML=ln+"<h6>"+ptrnNo+"</h6>";
}
}
//*******************************pattern ending****************************************