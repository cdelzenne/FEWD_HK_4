var cValue;
var fValue;

document.getElementById('convert').onclick = convert;

function convert(){
  cValue = (document.getElementById('cValue').value);
  fValue = (document.getElementById('fValue').value);
  if (cValue == "" && fValue == ""){
    document.getElementById('error').innerHTML = "please enter a temp";
  } else if (cValue != "" && fValue != ""){
    document.getElementById('error').innerHTML = "please enter one temp";
  } else if (cValue != ""){
    document.getElementById('fValue').value = (cValue * 9 / 5 + 32);
    document.getElementById('error').innerHTML = "";
  } else{
    document.getElementById('cValue').value = ((fValue - 32) * 5 / 9);
    document.getElementById('error').innerHTML = "";
  }
}

// After a conversion, clicking on convert again will give an error because both fields are populated. 
// How to automaticaaly empty the field that I'm not typing in?