var estado = 0;
var colorLinea = "blue";
document.addEventListener("mousedown",presionarMouse);
document.addEventListener("mouseup",soltarMouse);
document.addEventListener("mousemove",dibujarMouse);
var cuadrito = document.getElementById ("area_de_Dibujo");
var papel = cuadrito.getContext("2d");
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal ,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3 ;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujarMouse(evento){
  if (estado == 1) {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}
function presionarMouse(evento){
  estado = 1;
  x = evento.layerX;
  y = evento.layerY;
}
function soltarMouse(evento){
  estado = 0;
  x = evento.layerX;
  y = evento.layerY;
}

dibujarLinea("blue",1,1,1,499,papel);
dibujarLinea("blue",1,499,499,499,papel);
dibujarLinea("blue",499,499,499,1,papel);
dibujarLinea("blue",499,1,1,1,papel);
