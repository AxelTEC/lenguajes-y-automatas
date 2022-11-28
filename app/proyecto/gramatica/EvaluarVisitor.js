import CalculadoraParser from "../antlrJS/CalculadoraParser.js";
import CalculadoraVisitor from "./../antlrJS/CalculadoraVisitor.js";

export default class EvaluarVisitor extends CalculadoraVisitor {
	constructor() {
		super();
		this.memoria = new Map();
		this.resultado = "";
	}
	// Visit a parse tree produced by CalculadoraParser#prog.
	visitProg(ctx) {
		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CalculadoraParser#ImprimirExpr.
	visitImprimirExpr(ctx) {
		let value = this.visit(ctx.expr());
		this.resultado += `${value}\r\n`;
		return 0;
	}

	// Visit a parse tree produced by CalculadoraParser#Asignar.
	visitAsignar(ctx) {
		let id = ctx.ID().getText();
		let value = this.visit(ctx.expr());
		this.memoria.set(id, value);
		return value;
	}

	// Visit a parse tree produced by CalculadoraParser#blank.
	visitNuevaLinea(ctx) {
		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CalculadoraParser#parens.
	visitParentesis(ctx) {
		return this.visit(ctx.expr());
	}

	// Visit a parse tree produced by CalculadoraParser#MulDiv.
	visitMulDiv(ctx) {
		let left = this.visit(ctx.expr(0));
		let right = this.visit(ctx.expr(1));
		if (ctx.op.type === CalculadoraParser.MULT) return left * right;
		return left / right;
	}

	// Visit a parse tree produced by CalculadoraParser#AddSub.
	visitSumRes(ctx) {
		let left = this.visit(ctx.expr(0));
		let right = this.visit(ctx.expr(1));
		if (ctx.op.type === CalculadoraParser.ADD) return left + right;
		return left - right;
	}

	// Visit a parse tree produced by CalculadoraParser#id.
	visitId(ctx) {
		let id = ctx.ID().getText();
		if (id == "E") return 10;
		if (this.memoria.has(id)) return this.memoria.get(id);
		return 0;
	}

	// Visit a parse tree produced by CalculadoraParser#int.
	visitNum(ctx) {
		return parseFloat(ctx.NUM().getText());
	}

	visitExponencial(ctx) {
		let left = this.visit(ctx.expr(0));
		let right = this.visit(ctx.expr(1));
		return left * Math.pow(10, right);
	}

	// Visit a parse tree produced by CalculadoraParser#PowSqrt.
	visitPowSqrt(ctx) {
		let left = this.visit(ctx.expr(0));
		let right = this.visit(ctx.expr(1));
		if (ctx.op.type === CalculadoraParser.POW) return Math.pow(left, right);
		return Math.pow(right, 1 / left);
	}
}
