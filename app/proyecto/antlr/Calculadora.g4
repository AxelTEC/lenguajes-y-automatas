grammar Calculadora;
import LexicaComun;

prog : stat+ ;

stat: 'imprimir' '(' expr ')' NEWLINE   # imprimirExpr
    | ID '=' expr NEWLINE               # asignar
    | NEWLINE                           # nuevaLinea
    ;   

expr: expr op=(POW|SQRT) expr           # PowSqrt
    | expr op=(MULT|DIV) expr           # MulDiv
    | expr op=(ADD|SUB) expr            # SumRes
    | NUM                               # num 
    | ID                                # id
    | '(' expr ')'                      # parentesis
    | expr 'E' expr                     # Exponencial
    ;

