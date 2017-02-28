function shide(id){
  var element = document.getElementById(id).style;
  if (element.display === "none"){
    element.display = '';
  } else{
    element.display = "none"
  }
}
