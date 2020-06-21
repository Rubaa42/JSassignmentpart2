// CHP NO 21 TILL 25
// QS NO 1
// var firstName=prompt('Enter your first name');
// var lastNmae =prompt('Enter your last name');
// var fullName=firstName+' '+lastNmae;
// alert('Hello,'+fullName);

// QS NO 2
// var phone=prompt('Please enter your favourite mobile phone model');
// var phone1=phone.length;
// document.write('My favourite phone is: '+phone+'<br>'+'Length of string: '+phone1);
// document.write('<br>','<br>');

// QS NO 3
var string='Pakistani';
var index=string.indexOf('n');
document.write("String: "+string+"<br>"+"Index of 'n': "+index);
document.write('<br>','<br>');

// QS NO 4
var string='Hello World';
var index=string.lastIndexOf('l');
document.write("String: "+string+"<br>"+"Last index of 'l': "+index);
document.write('<br>','<br>');

// QS NO 5
var string='Pakistani';
var char=string.charAt(3);
document.write("String: "+string+"<br>"+"Character at index 3: "+char);
document.write('<br>','<br>')

// QS NO 6
// var firstName=prompt('Enter your first name');
// var lastNmae =prompt('Enter your last name');
// var fullName=firstName.concat( ' '+lastNmae);
// alert('Hello,'+fullName);
// document.write('<br>','<br>');

// QS NO 7
var city='Hyderabad';
var newText = city.replace("Hyder", "Islam");
document.write('City: '+city+'<br>'+'After replacement: '+newText);
document.write('<br>','<br>');

// QS NO 8
var message = '“Ali and Sami are best friends. They play cricket and football together.”';
var replace=message.replace(/and/g , '&');
document.write('Before replacement: '+message+'<br>'+'After replacement: '+replace);
document.write('<br>','<br>');

// QS NO 9
var string='472';
var convert=parseInt(string);
document.write('Value: '+string+'<br>'+'Type: '+typeof(string)+'<br>'+'Value: '+convert+'<br>'+'Type: '+typeof(convert));
document.write('<br>','<br>');

// QS NO 10
// var userInput=prompt('Enter a word in lower case: ');
// var upperCase=userInput.toUpperCase();
// document.write('User input: '+userInput+'<br>'+'Upper case: '+upperCase);
// document.write('<br>','<br>');

// QS NO 11
// var userInput=prompt('Enter a word in lower case: ');
// var char1=userInput.slice(0,1);
// var convert=char1.toUpperCase()
// var charOther=userInput.slice(1);
// document.write('User input: '+userInput+'<br>'+'Title case: '+convert+charOther);
// document.write('<br>','<br>');

// QS NO 12
var num = 35.36 ; 
var num1=35.36*100;
var newNum=num1.toString();
document.write('Number: '+num+'<br>'+'Result: '+newNum);
document.write('<br>','<br>');

// QS NO 13
// var input=prompt('Enter the Username: ');
// var ASCII1='!';
// var index=0;
// var res1 =ASCII1.charCodeAt(index);
// console.log(res1);
// var ASCII2 ='code of , is'+ 44; 
// var ASCII3 ='code of . is'+ 46; 
// var ASCII4 ='code of @ is'+ 64;
// if(input==ASCII1 && input==input ){
//     alert('Please enter a valid user name.')
// }
// else{
//     document.write(input)
// }
// document.write('<br>','<br>');

// QS NO 14
// var search=prompt("Welcome to Pie In The Sky Bakery.What do you want to order sir/ma'am?")
// var B= search.toUpperCase()
// var B= search.toLowerCase()


// var A=['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// if(B == A[0]){
//     document.write (A[0]+" "+"is <strong>available</strong> at index 0 in our bakery")
// }
// else if(B == A[1]){
//     document.write (A[1]+" "+"is <strong>available</strong> at index 1 in our bakery")
// }
// else if(B == A[2]){
//     document.write (A[2]+" "+"is <strong>available</strong> at index 2 in our bakery")
// }
// else if(B == A[3]){
//     document.write (A[3]+" "+"is <strong>available</strong> at index 3 in our bakery")
// }
// else if(B == A[4]){
//     document.write (A[4]+" "+"is <strong>available</strong> at index 4 in our bakery")
// }
// else
// {
//     document.write("Sorry! this item is <strong>not available</strong> in our bakery")
// }
// document.write('<br>','<br>');

// QS NO 15
// var pass=prompt('Enter your password');
// var alpha=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var num=[1,2,3,4,5,6,7,8,9,0];

// if(pass!==num){
//     if(pass==aplha && num==pass){
//         document.write('Entered password: '+pass)
//     }

//     document.write('Password cannot begin with a number <br> Please enter a valid password')
// }

// QS NO 16
var str='University of Karachi';
for(i=0;i<str.length;i++){
    document.write(str[i]+ '<br>')
}
document.write('<br>','<br>');

// QS NO 17
// var input=prompt('Enter a word');
// var index=input.charAt(input.length - 1);
// document.write('User input: '+input+'<br>'+'Last character of input: '+index);
// document.write('<br>','<br>');

// QS NO 18
// var str='“The quick brown fox jumps over the lazy dog”.';

// document.write('Text: '+str+'<br>'+index)


// CHP NO 26 TILL 30
// QS NO 1
// var num=prompt('Enter a positive Integer');
// var num1=Math.round(num);
// var num2=Math.floor(num);
// var num3=Math.ceil(num);
// document.write('number: '+num+'<br>'+'round off value: '+num1+'<br>'+'floor value: '+num2+'<br>'+'ceil value: '+num3)
// document.write('<br>','<br>');

// QS NO 2
// var num=prompt('Enter a negative Integer');
// var num1=Math.round(num);
// var num2=Math.floor(num);
// var num3=Math.ceil(num);
// document.write('number: '+num+'<br>'+'round off value: '+num1+'<br>'+'floor value: '+num2+'<br>'+'ceil value: '+num3)
// document.write('<br>','<br>');

// QS NO 3
// var num=prompt('Enter a number');
// var num1=Math.abs(num);
// document.write('The absolute value of '+' '+num+ ' '+ 'is '+num1);
// document.write('<br>','<br>');

// QS NO 4
// var dice=(Math.random()*6) + 1;
// var floor =Math.floor(dice);
// document.write('Random dice value: '+floor);
// document.write('<br>','<br>');

// QS NO 5
// var head =prompt('Enter heads user name');
// var tail =prompt('Enter tails user name');
// var toss=Math.random()*2;
// var floor =Math.floor(toss);
// if(floor===0){
//     document.write(head+'<br>'+'random coin value: '+'Heads')
// }
// else {
//     document.write(tail+'<br>'+'random coin value: '+'Tails')  
// }

//  QS NO 6
// var num=Math.random()*100 + 1;
// var numFloor=Math.floor(num);
// document.write('random number between 1 and 100: '+numFloor);
// document.write('<br>','<br>');

//  QS NO 7
// var input=prompt('Enter your weight in kilograms');
// // var possible='kgs';var possible1='kilograms';
// var convert=parseInt(input);
// document.write('The weight of user is '+ convert+' Kilograms');
// document.write('<br>','<br>');

//  QS NO 8
// var secretNum=Math.random()*10 + 1;
// var convert = Math.floor(secretNum);
// var num=+prompt('Enter a number between 1 and 10');
// if(num===convert){
//     alert('Congratulations!')
// }
// else{
//     alert('Try again!')
// }


// CHP 31 TILL 34
// QS NO 1
var currentDate=new Date();
document.write(currentDate);
document.write('<br>','<br>');

// QS NO 2
var monNames=['January','February','March','April','May','June','July','August','September','October','November','December']
var current=new Date();
var month=current.getMonth();
var today= monNames[month];
document.write('Current month: '+today);
document.write('<br>','<br>');

// QS NO 3
var daysName=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
var current=new Date();
var day=current.getDay();
var today= daysName[day];
document.write('Today is '+today);
document.write('<br>','<br>');

// QS NO 4
// var daysName=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
// var current=new Date();
// var day=current.getDay();
// var today= daysName[day];
// if(today=='Sat' || today=='Sun'){
//     alert("It's Fun day")
// }
// document.write('<br>','<br>');

// QS NO 5
var date=new Date();
var current=date.getDate();
if(current < '16'){
    document.write(' “First fifteen days of the month”')
}
else{
    document.write('“Last days of the month”')
}
document.write('<br>','<br>');

// QS NO 6
var day=new Date();
var miliSeconds=day.getTime();
var minutes= miliSeconds/(1000*60*60);
document.write('Current Date: '+day +'<br>'+ 'Elapsed milliseconds since January 1,1970: '+miliSeconds+ '<br>'+ 'Elapsed minutes since January 1,1970: '+minutes+'<br>'+'<br>');

// QS NO 7
// var day=new Date();
// var hour=day.getHours();
// if(hour >= 0 && hour < 12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// QS NO 8
var laterDate=new Date(2020, 11 , 31 , 0 , 0 , 0);
document.write(laterDate+ '<br>'+ '<br>');

// QS NO 9
var day = new Date();
var ramadan= new Date(2020, 3 , 25 , 0 , 0 , 0);
var diff = day - ramadan;
var diffOut=diff/(1000 * 60 * 60 * 24);
var convert= Math.floor(diffOut);
document.write(convert +' days have passed since 1st Ramadan, 2020'+ '<br>'+ '<br>');

// QS NO 10
var reference=new Date(2015 , 0 , 1 , 0 ,0 ,0);
var reference1=new Date(2015, 11 , 5 , 22 , 50 , 16);
var diff = reference1 - reference;
var diff1 = diff / (1000);
var convert = Math.floor(diff1)
document.write('On reference date '+ reference1 + ',' +convert +' seconds had passed since beginning of 2015 '+ '<br>'+ '<br>');

// QS NO 11
var current= new Date();
var string=current.toString();
var copy = string.slice(16,18);
var replace = copy - 1;
var previous= string.slice(0,16);
var previous1 =string.slice(18,58);
document.write('Current date: '+current + '1 hour ago, it was '+ previous +replace + previous1 +'<br>'+'<br>');

// QS NO 12
// var currentDate=new Date(2015 , 11 , 5 , 23 ,9 ,37 );
// var backDate= new Date(1915 , 11 , 5 , 23 ,9 ,37  );
// alert('Current date: '+ currentDate + '   '+ '100 years back, it was '+ backDate);

// QS NO 13
// var age= + prompt('Enter your age');
// var today=new Date();
// var set=today.getFullYear()-age;
// document.write('Your age is: '+age+'<br>'+'Your Birthyear is: '+set+'<br>'+'<br>');


// QS NO 14
// document.write('<strong><h3>K-Electric Bill</h3></strong>');
// var customerName= prompt('Enter your name');
// var month=prompt('Enter the month');
// var unit=+prompt('Enter the units');
// var charges=16;
// var latePay=350;
// var netAmount=unit*charges;
// var conv=netAmount.toFixed(2);
// var grossAmount=netAmount + latePay;
// var conv1=grossAmount.toFixed(2);

// document.write('Customer Name: '+ customerName+'<br>'+'Month: '+ month+'<br>'+ 'Number of units: '+unit+'<br>'+'Charges per unit: '+charges+'<br>'+'<br>'+'Net Amount Payable(within Due Date): '+conv+ '<br>'+'Late payment surcharges: '+latePay +'<br>'+'Gross Amount Payable (After Due Date): '+ conv1+'<br>'+'<br>');

// CHP 35 TILL 38
// QS NO 1
function time(){
    var day = new Date();
    document.write(day);
}

time();
document.write('<br>'+ '<br>');

// QS NO 2
// function names(){
//     var firstName=prompt('Enter your first name');
//     var lastName =prompt('Enter your last name');
//     var fullName=firstName+' '+lastName;
//     alert('Hello,'+fullName);
// }

// names();

// QS NO 3
// function sum(){
//     var num1=+prompt('Enter 1st number to be added');
//     var num2=+prompt('Enter 2nd number to be added');
//     var z= num1 + num2;
//     return z;
// }

// var out = alert(sum());

// QS NO 4
// function calc(num1 , opr , num2){
//     var num3=+prompt('Enter 1st number');
//     var opr =prompt('Enter operator');
//     var num4=+prompt('Enter 2nd number');

//     if(opr === '+'){
//         return num3 + num4;
//     }
//     else if(opr === '-'){
//         return num3 - num4;
//     }
//     else if(opr === '*'){
//         return num3 * num4;
//     }
//     else if(opr === '/'){
//         return num3 / num4;
//     }
//     else{
//         return 'Enter correct operator'
//     }
// }
// var result = document.write('The output is: '+ calc());
// document.write('<br>'+ '<br>');

// QS NO 5
// function square(num){
//    return num*num;
// }

// var out1= square(prompt('Enter a number'));
// alert(out1);

// QS NO 6
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else{
//       for(var i = n; i >= 1; i--){
//         var answer = answer * i;
//       }
//       return answer;
//     }  
// }
// var input = factorial(prompt('Enter a Number'));
// alert(input);


// QS NO 7
// function number(){
//     var start=+prompt('Enter starting number');
//     var end=+prompt('Enter last number');

//     for(var i=start ; i <= end; i++ ){
//         result = i;
//         document.write(result +'<br>');
//     }
    
// }
// var out3= number();

// QS NO 8
// function hypo(){
//     var base = +prompt('Enter value of base');
//     var perp = +prompt('Enter value of perpendicular');
//     function two(b,p){
//         var b =base * base;
//         var p =perp* perp;
//         var h = (+b) + (+p);
//         document.write('Hypotenuse2 = '+ b +'   +   '+ p+'<br>');
//         document.write('Hypotenuse2 = ' + h+'<br>');
//     }
//     document.write('Hypotenuse2 = Base2 + Perpendicular2'+'<br>');
//     two();
// }

// var z = hypo();

// QS NO 9
// part 1
// function rectangleArea(width,height){
//     var area =width  * height;
//     alert( 'Area of rectangle is: '+ area);
// }
// var v= rectangleArea(15,30);

// part2
// function rectangleArea(width , height){
//     var width= +prompt('Enter width of triangle');
//     var height= +prompt('Enter height of triangle');
//     var area =width  * height;
//     alert( 'Area of rectangle is: '+ area);
// }
// var v= rectangleArea();


// QS NO 10
// function palindrome(){
//     var word = prompt('Enter a word');
//     var check='';
//     for( var j = word.length-1 ; j >= 0 ; j--){
//         check += word[j]
//     }
//     if(check === word){
//         alert('Entered word '+ word +' is a Palindrome')
//     }
//     else{
//         alert('Entered word '+ word +' is not a Palindrome')
//     }
// }

// var g=palindrome();

// QS NO 11
// function strings(str){
//     var str =prompt('Enter a sentence in lower case');
//     var copy =str.slice(0,1);
//     var conv = copy.toUpperCase();
//     var rem = str.slice(1);
//     var convert = rem.toLowerCase(); 
//     for(var i = 1 ; i<=str.length ; i++){
//         if(str === '  '){
//             var cop = str.slice(0,1);
//             var conv1 = cop.toUpperCase();
//             var rem1 = str.slice(1);
//             var out = rem1.toLowerCase();
//         }
       
//     }
//     document.write('String entered: '+ str+'<br>'+'Output: '+ conv+rem+' '+ conv1+out );
// }
// var g=strings();


// QS NO 14
// function calcCircumference(){
//     var pi = 3.142;
//     var radius = +prompt('Enter the radius:');
//     var circum=2 * pi * radius;
//     alert('The circumference of circle is: '+ circum);
//     function calcArea(){
//         var area = pi * radius * radius;
//         alert('The Area of circle is: '+ area);
//     }
//     calcArea();
// }

// calcCircumference();

