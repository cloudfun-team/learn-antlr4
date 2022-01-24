import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { calcLexer } from './antlr/calcLexer';
import { AdditionOrSubtractionContext, calcParser, MultiplicationOrDivisionContext, NumberContext } from './antlr/calcParser';
import { calcListener } from './antlr/calcListener';
import { createInterface } from 'readline';

const fns: Record<string, (a: number, b: number) => number> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '^': (a, b) => Math.pow(a, b),
};
class CalculatorListener implements calcListener {
  private _stack: number[];
  constructor() {
    this._stack = [];
  }
  private _calcOp(op: string) {
    // 默认是深度优先遍历，会先遍历到左边的值，stack.push 后左边的值在栈的下面。
    const right = this._stack.pop();
    const left = this._stack.pop();
    this._stack.push(fns[op](left, right));
  }
  /* 对外输出最终结果的函数 */
  getResult() {
    return this._stack.pop();
  }
  exitPower() {
    // const right = this._stack.pop();
    // const left = this._stack.pop();
    // const result = Math.pow(left, right);
    // this._stack.push(result);
    this._calcOp('^');
  }
  exitAdditionOrSubtraction(ctx: AdditionOrSubtractionContext) {
    // const right = this._stack.pop();
    // const left = this._stack.pop();
    // const result = ctx._operator.text === '+' ? left + right : left - right;
    // this._stack.push(result);
    this._calcOp(ctx._operator.text);
  }
  exitMultiplicationOrDivision(ctx: MultiplicationOrDivisionContext) {
    // const right = this._stack.pop();
    // const left = this._stack.pop();
    // const result = ctx._operator.text === '*' ? left * right : left / right;
    // this._stack.push(result);
    this._calcOp(ctx._operator.text);
  }
  exitNumber(ctx: NumberContext) {
    this._stack.push(Number(ctx.NUMBER().toString()));
  }
}

createInterface(process.stdin).on('line', line => {
  const inputStream = CharStreams.fromString(line);
  const lexer = new calcLexer(inputStream);
  const tokens = new CommonTokenStream(lexer);
  const parser = new calcParser(tokens); // 初始化语法解析器
  const listener = new CalculatorListener();
  const astTree = parser.start(); // start 函数对应 g4 文件里的入口 Rule
  ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, astTree);
  console.log(listener.getResult());
});