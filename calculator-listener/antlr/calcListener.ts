// Generated from calculator-listener/antlr/calc.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NumberContext } from "./calcParser";
import { ParenthesesContext } from "./calcParser";
import { PowerContext } from "./calcParser";
import { MultiplicationOrDivisionContext } from "./calcParser";
import { AdditionOrSubtractionContext } from "./calcParser";
import { StartContext } from "./calcParser";
import { ExpressionContext } from "./calcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `calcParser`.
 */
export interface calcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `Number`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by the `Number`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by the `Parentheses`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParentheses?: (ctx: ParenthesesContext) => void;
	/**
	 * Exit a parse tree produced by the `Parentheses`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParentheses?: (ctx: ParenthesesContext) => void;

	/**
	 * Enter a parse tree produced by the `Power`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by the `Power`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;

	/**
	 * Enter a parse tree produced by the `MultiplicationOrDivision`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicationOrDivision?: (ctx: MultiplicationOrDivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplicationOrDivision`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicationOrDivision?: (ctx: MultiplicationOrDivisionContext) => void;

	/**
	 * Enter a parse tree produced by the `AdditionOrSubtraction`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditionOrSubtraction?: (ctx: AdditionOrSubtractionContext) => void;
	/**
	 * Exit a parse tree produced by the `AdditionOrSubtraction`
	 * labeled alternative in `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditionOrSubtraction?: (ctx: AdditionOrSubtractionContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `calcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}

