// Generated from c:\Users\aknxn\OneDrive\Documents\5to_semestre\lenguajes_automatas\compilador-online\antlr\Calculadora.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class CalculadoraLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, ID=6, NUM=7, NEWLINE=8, WS=9, 
		COMMENT=10, LINE_COMMENT=11, MULT=12, DIV=13, ADD=14, SUB=15, POW=16, 
		SQRT=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "ID", "NUM", "NEWLINE", "WS", 
			"COMMENT", "LINE_COMMENT", "MULT", "DIV", "ADD", "SUB", "POW", "SQRT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'imprimir'", "'('", "')'", "'='", "'E'", null, null, null, null, 
			null, null, "'*'", "'/'", "'+'", "'-'", "'**'", "'..'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "ID", "NUM", "NEWLINE", "WS", "COMMENT", 
			"LINE_COMMENT", "MULT", "DIV", "ADD", "SUB", "POW", "SQRT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public CalculadoraLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Calculadora.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\23~\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3"+
		"\7\6\78\n\7\r\7\16\79\3\b\5\b=\n\b\3\b\6\b@\n\b\r\b\16\bA\3\b\3\b\6\b"+
		"F\n\b\r\b\16\bG\5\bJ\n\b\3\t\5\tM\n\t\3\t\3\t\3\n\6\nR\n\n\r\n\16\nS\3"+
		"\n\3\n\3\13\3\13\3\13\3\13\7\13\\\n\13\f\13\16\13_\13\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\f\3\f\3\f\3\f\7\fj\n\f\f\f\16\fm\13\f\3\f\3\f\3\r\3\r\3\16"+
		"\3\16\3\17\3\17\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3\22\3]\2\23\3\3\5"+
		"\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21"+
		"!\22#\23\3\2\6\6\2\62;C\\aac|\3\2\62;\4\2\13\13\"\"\4\2\f\f\17\17\2\u0086"+
		"\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2"+
		"\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2"+
		"\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2"+
		"\2\2\3%\3\2\2\2\5.\3\2\2\2\7\60\3\2\2\2\t\62\3\2\2\2\13\64\3\2\2\2\r\67"+
		"\3\2\2\2\17<\3\2\2\2\21L\3\2\2\2\23Q\3\2\2\2\25W\3\2\2\2\27e\3\2\2\2\31"+
		"p\3\2\2\2\33r\3\2\2\2\35t\3\2\2\2\37v\3\2\2\2!x\3\2\2\2#{\3\2\2\2%&\7"+
		"k\2\2&\'\7o\2\2\'(\7r\2\2()\7t\2\2)*\7k\2\2*+\7o\2\2+,\7k\2\2,-\7t\2\2"+
		"-\4\3\2\2\2./\7*\2\2/\6\3\2\2\2\60\61\7+\2\2\61\b\3\2\2\2\62\63\7?\2\2"+
		"\63\n\3\2\2\2\64\65\7G\2\2\65\f\3\2\2\2\668\t\2\2\2\67\66\3\2\2\289\3"+
		"\2\2\29\67\3\2\2\29:\3\2\2\2:\16\3\2\2\2;=\5\37\20\2<;\3\2\2\2<=\3\2\2"+
		"\2=?\3\2\2\2>@\t\3\2\2?>\3\2\2\2@A\3\2\2\2A?\3\2\2\2AB\3\2\2\2BI\3\2\2"+
		"\2CE\7\60\2\2DF\t\3\2\2ED\3\2\2\2FG\3\2\2\2GE\3\2\2\2GH\3\2\2\2HJ\3\2"+
		"\2\2IC\3\2\2\2IJ\3\2\2\2J\20\3\2\2\2KM\7\17\2\2LK\3\2\2\2LM\3\2\2\2MN"+
		"\3\2\2\2NO\7\f\2\2O\22\3\2\2\2PR\t\4\2\2QP\3\2\2\2RS\3\2\2\2SQ\3\2\2\2"+
		"ST\3\2\2\2TU\3\2\2\2UV\b\n\2\2V\24\3\2\2\2WX\7\61\2\2XY\7,\2\2Y]\3\2\2"+
		"\2Z\\\13\2\2\2[Z\3\2\2\2\\_\3\2\2\2]^\3\2\2\2][\3\2\2\2^`\3\2\2\2_]\3"+
		"\2\2\2`a\7,\2\2ab\7\61\2\2bc\3\2\2\2cd\b\13\2\2d\26\3\2\2\2ef\7\61\2\2"+
		"fg\7\61\2\2gk\3\2\2\2hj\n\5\2\2ih\3\2\2\2jm\3\2\2\2ki\3\2\2\2kl\3\2\2"+
		"\2ln\3\2\2\2mk\3\2\2\2no\b\f\2\2o\30\3\2\2\2pq\7,\2\2q\32\3\2\2\2rs\7"+
		"\61\2\2s\34\3\2\2\2tu\7-\2\2u\36\3\2\2\2vw\7/\2\2w \3\2\2\2xy\7,\2\2y"+
		"z\7,\2\2z\"\3\2\2\2{|\7\60\2\2|}\7\60\2\2}$\3\2\2\2\f\29<AGILS]k\3\b\2"+
		"\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}