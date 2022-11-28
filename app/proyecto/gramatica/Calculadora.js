import antlr4 from "antlr4";
import CalculadoraLexer from "../antlrJS/CalculadoraLexer.js";
import CalculadoraParser from "../antlrJS/CalculadoraParser.js";
import EvaluarVisitor from "./EvaluarVisitor.js";

export const compilar = (input) => {
	console.log(input);
	const chars = new antlr4.InputStream(input);
	const lexer = new CalculadoraLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new CalculadoraParser(tokens);
	const tree = parser.prog();
	let x = new EvaluarVisitor();
	tree.accept(x);
	return x.resultado;
};

//console.log(tree.toStringTree(parser.ruleNames)); //imprime el arbol en forma de string
