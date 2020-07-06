var real1 = document.getElementById('real1');
var imaginary1 = document.getElementById('imaginary1');
var resultfield3=document.getElementById('resultfield3');
var form=document.getElementById('real1_part');

form.addEventListener('submit', function(event)
{
  if(!real1.value || !imaginary1.value){
    alert("Please Enter the numbers!");
  }else{
    var x = parseFloat(real1.value);
    var y= parseFloat(imaginary1.value);
    var result = x*Math.cos(y*Math.PI/180);

   var tan = x*Math.sin(y*Math.PI/180);
    resultfield3.innerText = "answer :"+result+" + j("+tan+")";
    event.preventDefault();
  }
});
