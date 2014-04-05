// JavaScript Document

function Mascara(objeto, evt, mask) {
 
var LetrasU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var LetrasL = 'abcdefghijklmnopqrstuvwxyz';
var Letras  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var Numeros = '0123456789';
var Numeros2 = '0123456789-.';
var NumChassi = 'ABCDEFGHJKLMNPRSTUVWXYZabcdefghjklmnprstuvwxyz0123456789-.'
var Fixos  = '().-:/ '; 
var Charset = " !\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_/`abcdefghijklmnopqrstuvwxyz{|}~";
var Litragem = '0123456789,';

evt = (evt) ? evt : (window.event) ? window.event : "";
var value = objeto.value;
if (evt) {
 var ntecla = (evt.which) ? evt.which : evt.keyCode;
 tecla = Charset.substr(ntecla - 32, 1);
 if (ntecla < 32 || ntecla == 46 || ntecla == 37 || ntecla == 39 ) return true;

 var tamanho = value.length;
 if (tamanho >= mask.length) return false;

 var pos = mask.substr(tamanho,1); 
 while (Fixos.indexOf(pos) != -1) {
  value += pos;
  tamanho = value.length;
  if (tamanho >= mask.length) return false;
  pos = mask.substr(tamanho,1);
 }

 switch (pos) {
   case '#' : if (Numeros.indexOf(tecla) == -1) return false; break;
   case 'A' : if (LetrasU.indexOf(tecla) == -1) return false; break;
   case 'a' : if (LetrasL.indexOf(tecla) == -1) return false; break;
   case 'Z' : if (Letras.indexOf(tecla) == -1) return false; break;
   case 'X' : if (Numeros2.indexOf(tecla) == -1) return false; break;
   case 'C' : if (NumChassi.indexOf(tecla) == -1) return false; break;
   case 'L' : if (Litragem.indexOf(tecla) == -1) return false; break;
   case '*' : objeto.value = value; return true; break;
   default : return false; break;
 }
}
objeto.value = value; 
return true;
}

function MascaraCEP(objeto, evt) { 
return Mascara(objeto, evt, '##.###-###');
}

function MascaraRG(objeto, evt) { 
return Mascara(objeto, evt, '#########');
}

function MascaraTEL(objeto, evt) { 
return Mascara(objeto, evt, '(##) ####-####');
}

function MascaraCPF(objeto, evt) { 
return Mascara(objeto, evt, '###.###.###-##');
}

function MascaraCNPJ(objeto, evt) { 
return Mascara(objeto, evt, '##.###.###/####-##');
}

function MascaraNUMERO(objeto, evt) { 
return Mascara(objeto, evt, 'XXXXXXXXXXXXXXX');
}

function MascaraPLACA(objeto, evt){
return Mascara(objeto, evt, 'ZZZ-####');
}

function MascaraCHASSI(objeto, evt){
return Mascara(objeto, evt, 'CCCCCCCCCCCCCCCCC')	
}

function MascaraDATA(objeto, evt){
return Mascara(objeto, evt, '##/##/####')	
}
function MascaraANO(objeto, evt){
return Mascara(objeto, evt, '####')	
}
function MascaraLITRAGEM(objeto, evt){
return Mascara(objeto, evt, 'LLLLLLL')	
}

function MascaraHORA(objeto, evt){
return Mascara(objeto, evt, '##:##:##')	
}

function MascaraMESANO(objeto, evt){
return Mascara(objeto, evt, '##/####')	
}

function MascaraCARTAO(objeto, evt){
return Mascara(objeto, evt, '####.####.####.####')	
}