// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculadoraListener from './CalculadoraListener.js';
import CalculadoraVisitor from './CalculadoraVisitor.js';

const serializedATN = [4,1,17,52,2,0,7,0,2,1,7,1,2,2,7,2,1,0,4,0,8,8,0,11,
0,12,0,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,24,8,1,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,3,2,33,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,5,2,47,8,2,10,2,12,2,50,9,2,1,2,0,1,4,3,0,2,4,0,3,1,0,10,11,1,
0,6,7,1,0,8,9,57,0,7,1,0,0,0,2,23,1,0,0,0,4,32,1,0,0,0,6,8,3,2,1,0,7,6,1,
0,0,0,8,9,1,0,0,0,9,7,1,0,0,0,9,10,1,0,0,0,10,1,1,0,0,0,11,12,5,1,0,0,12,
13,5,2,0,0,13,14,3,4,2,0,14,15,5,3,0,0,15,16,5,14,0,0,16,24,1,0,0,0,17,18,
5,13,0,0,18,19,5,4,0,0,19,20,3,4,2,0,20,21,5,14,0,0,21,24,1,0,0,0,22,24,
5,14,0,0,23,11,1,0,0,0,23,17,1,0,0,0,23,22,1,0,0,0,24,3,1,0,0,0,25,26,6,
2,-1,0,26,33,5,12,0,0,27,33,5,13,0,0,28,29,5,2,0,0,29,30,3,4,2,0,30,31,5,
3,0,0,31,33,1,0,0,0,32,25,1,0,0,0,32,27,1,0,0,0,32,28,1,0,0,0,33,48,1,0,
0,0,34,35,10,7,0,0,35,36,7,0,0,0,36,47,3,4,2,8,37,38,10,6,0,0,38,39,7,1,
0,0,39,47,3,4,2,7,40,41,10,5,0,0,41,42,7,2,0,0,42,47,3,4,2,6,43,44,10,1,
0,0,44,45,5,5,0,0,45,47,3,4,2,2,46,34,1,0,0,0,46,37,1,0,0,0,46,40,1,0,0,
0,46,43,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,5,1,0,0,0,50,
48,1,0,0,0,5,9,23,32,46,48];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CalculadoraParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'imprimir'", "'('", "')'", "'='", "'E'", 
                            "'*'", "'/'", "'+'", "'-'", "'**'", "'..'" ];
    static symbolicNames = [ null, null, null, null, null, null, "MULT", 
                             "DIV", "ADD", "SUB", "POW", "SQRT", "NUM", 
                             "ID", "NEWLINE", "WS", "COMMENT", "LINE_COMMENT" ];
    static ruleNames = [ "prog", "stat", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculadoraParser.ruleNames;
        this.literalNames = CalculadoraParser.literalNames;
        this.symbolicNames = CalculadoraParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculadoraParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.stat();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 24578) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculadoraParser.RULE_stat);
	    try {
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new ImprimirExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 11;
	            this.match(CalculadoraParser.T__0);
	            this.state = 12;
	            this.match(CalculadoraParser.T__1);
	            this.state = 13;
	            this.expr(0);
	            this.state = 14;
	            this.match(CalculadoraParser.T__2);
	            this.state = 15;
	            this.match(CalculadoraParser.NEWLINE);
	            break;
	        case 13:
	            localctx = new AsignarContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 17;
	            this.match(CalculadoraParser.ID);
	            this.state = 18;
	            this.match(CalculadoraParser.T__3);
	            this.state = 19;
	            this.expr(0);
	            this.state = 20;
	            this.match(CalculadoraParser.NEWLINE);
	            break;
	        case 14:
	            localctx = new NuevaLineaContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 22;
	            this.match(CalculadoraParser.NEWLINE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, CalculadoraParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 26;
	            this.match(CalculadoraParser.NUM);
	            break;
	        case 13:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 27;
	            this.match(CalculadoraParser.ID);
	            break;
	        case 2:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 28;
	            this.match(CalculadoraParser.T__1);
	            this.state = 29;
	            this.expr(0);
	            this.state = 30;
	            this.match(CalculadoraParser.T__2);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 48;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 46;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowSqrtContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 34;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 35;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 36;
	                    this.expr(8);
	                    break;

	                case 2:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 37;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 38;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===6 || _la===7)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 39;
	                    this.expr(7);
	                    break;

	                case 3:
	                    localctx = new SumResContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 40;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 41;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 42;
	                    this.expr(6);
	                    break;

	                case 4:
	                    localctx = new ExponencialContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 43;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 44;
	                    this.match(CalculadoraParser.T__4);
	                    this.state = 45;
	                    this.expr(2);
	                    break;

	                } 
	            }
	            this.state = 50;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CalculadoraParser.EOF = antlr4.Token.EOF;
CalculadoraParser.T__0 = 1;
CalculadoraParser.T__1 = 2;
CalculadoraParser.T__2 = 3;
CalculadoraParser.T__3 = 4;
CalculadoraParser.T__4 = 5;
CalculadoraParser.MULT = 6;
CalculadoraParser.DIV = 7;
CalculadoraParser.ADD = 8;
CalculadoraParser.SUB = 9;
CalculadoraParser.POW = 10;
CalculadoraParser.SQRT = 11;
CalculadoraParser.NUM = 12;
CalculadoraParser.ID = 13;
CalculadoraParser.NEWLINE = 14;
CalculadoraParser.WS = 15;
CalculadoraParser.COMMENT = 16;
CalculadoraParser.LINE_COMMENT = 17;

CalculadoraParser.RULE_prog = 0;
CalculadoraParser.RULE_stat = 1;
CalculadoraParser.RULE_expr = 2;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NuevaLineaContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEWLINE() {
	    return this.getToken(CalculadoraParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterNuevaLinea(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitNuevaLinea(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitNuevaLinea(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.NuevaLineaContext = NuevaLineaContext;

class ImprimirExprContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(CalculadoraParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterImprimirExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitImprimirExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitImprimirExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.ImprimirExprContext = ImprimirExprContext;

class AsignarContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CalculadoraParser.ID, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(CalculadoraParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterAsignar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitAsignar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitAsignar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.AsignarContext = AsignarContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParentesisContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterParentesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitParentesis(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.ParentesisContext = ParentesisContext;

class SumResContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(CalculadoraParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CalculadoraParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterSumRes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitSumRes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitSumRes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.SumResContext = SumResContext;

class ExponencialContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterExponencial(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitExponencial(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitExponencial(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.ExponencialContext = ExponencialContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MULT() {
	    return this.getToken(CalculadoraParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(CalculadoraParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.MulDivContext = MulDivContext;

class NumContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(CalculadoraParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.NumContext = NumContext;

class PowSqrtContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	POW() {
	    return this.getToken(CalculadoraParser.POW, 0);
	};

	SQRT() {
	    return this.getToken(CalculadoraParser.SQRT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterPowSqrt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitPowSqrt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitPowSqrt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.PowSqrtContext = PowSqrtContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CalculadoraParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculadoraListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.IdContext = IdContext;


CalculadoraParser.ProgContext = ProgContext; 
CalculadoraParser.StatContext = StatContext; 
CalculadoraParser.ExprContext = ExprContext; 
