var real = document.getElementById('real');
var imaginary = document.getElementById('imaginary');
var resultfield2=document.getElementById('resultfield2');
var form=document.getElementById('real_part');

form.addEventListener('submit', function(event)
{
  if(!real.value || !imaginary.value){
    alert("Please Enter the numbers!");
  }else{
    var x = parseFloat(real.value);
    var y= parseFloat(imaginary.value);
    var result = x*x + y*y;
   var mod = Math.sqrt(result);
   var angle = y/x;
   var tan = Math.atan(angle)*(180/Math.PI);
    resultfield2.innerText = "Modulus :"+mod+"  Angle :"+tan;
    event.preventDefault();
  }
});
