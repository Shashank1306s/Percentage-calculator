var numfield1= document.getElementById('numfield1');
var numfield2=document.getElementById('numfield2');
var resultfield1 = document.getElementById('resultfield1');
var form = document.getElementById('xIsWhatPercentageOfy');

form.addEventListener('submit', function(event)
{
if (!numfield1.value || !numfield2.value){
alert("Please Enter The Numbers!");}
else {

    var x =parseFloat(numfield1.value);
    var y = parseFloat(numfield2.value);

     var result = x/y;
     var percent = result * 100;
     resultfield1.innerText = "Answer : "+percent+"%";
    event.preventDefault();
  }
});
