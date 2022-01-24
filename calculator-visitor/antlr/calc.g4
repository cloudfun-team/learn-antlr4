grammar calc;
/* Tokens (terminal) */
POW: '^';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
NUMBER: '-'?[0-9]+;
WHITESPACE: [ \r\n\t]+ -> skip;
/* Production Rules (non-terminal) */
start : expression;
expression
   : NUMBER                                               # Number
   | '(' inner=expression ')'                                   # Parentheses
   | left=expression operator=POW right=expression        # Power
   | left=expression operator=(MUL|DIV) right=expression  # MultiplicationOrDivision
   | left=expression operator=(ADD|SUB) right=expression  # AdditionOrSubtraction
   ;