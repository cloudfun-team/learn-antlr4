import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { calcLexer } from './antlr/calcLexer';
import { AdditionOrSubtractionContext, calcParser, MultiplicationOrDivisionContext, NumberContext, ParenthesesContext, PowerContext, StartContext } from './antlr/calcParser';
import { calcVisitor } from './antlr/calcVisitor';
import { createInterface } from 'readline';

const fns: Record<string, (a: number, b: number) => number> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '^': (a, b) => Math.pow(a, b),
};
class CalculatorVisitor extends AbstractParseTreeVisitor<number> implements calcVisitor<number> {
  protected defaultResult(): number {
    throw new Error('Method not implemented.');
  }
  private _calcOp(ctx: AdditionOrSubtractionContext | MultiplicationOrDivisionContext | PowerContext) {
    return fns[ctx._operator.text](super.visit(ctx._left), super.visit(ctx._right));
  }
  visitStart(ctx: StartContext) {
    return super.visit(ctx.expression());
  }
  visitNumber(ctx: NumberContext) {
    return Number(ctx.NUMBER().toString());
  }
  visitParentheses(ctx: ParenthesesContext) {
    return super.visit(ctx._inner);
  }
  visitPower(ctx: PowerContext) {
    // return Math.pow(super.visit(ctx._left), super.visit(ctx._right));
    return this._calcOp(ctx);
  }
  visitAdditionOrSubtraction(ctx: AdditionOrSubtractionContext) {
    // const left = super.visit(ctx._left);
    // const op = ctx._operator.text;
    // const right = super.visit(ctx._right);
    // return op === '+' ? left + right : left - right;
    return this._calcOp(ctx);
  }
  visitMultiplicationOrDivision(ctx: MultiplicationOrDivisionContext) {
    // const left = super.visit(ctx._left);
    // const op = ctx._operator.text;
    // const right = super.visit(ctx._right);
    // return op === '*' ? left * right : left / right;
    return this._calcOp(ctx);
  }
 
}

createInterface(process.stdin).on('line', line => {
  const inputStream = CharStreams.fromString(line);
  const lexer = new calcLexer(inputStream);
  const tokens = new CommonTokenStream(lexer);
  const parser = new calcParser(tokens); // 初始化语法解析器
  const calc = new CalculatorVisitor();
  const astTree = parser.start(); // start 函数对应 g4 文件里的入口 Rule
  const result = calc.visit(astTree);
  console.log(result);
});