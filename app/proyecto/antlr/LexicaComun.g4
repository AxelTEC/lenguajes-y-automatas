lexer grammar LexicaComun;

/* Básicos */
ID: [a-zA-Z0-9_]+ ; //Identificadores
NUM: SUB? ([0-9])+ ('.'[0-9]+)?; // numeros
NEWLINE:  '\r'? '\n' ;  //Saltos del linea (end Statement)
WS : [ \t]+ -> skip ; //ingora espacios en blancos
COMMENT: '/*' .*? '*/' -> skip;//skip bloque de comentarios
LINE_COMMENT: '//' ~[\r\n]* -> skip;//skip lineas de comentarios

/* Operadores */
MULT: '*';
DIV: '/' ;
ADD: '+' ;
SUB: '-' ;
POW: '**';
SQRT: '..';
