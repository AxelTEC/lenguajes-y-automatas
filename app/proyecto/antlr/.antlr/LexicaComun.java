// Generated from c:\Users\aknxn\OneDrive\Documents\5to_semestre\lenguajes_automatas\compilador-online\antlr\LexicaComun.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LexicaComun extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ID=1, NUM=2, NEWLINE=3, WS=4, COMMENT=5, LINE_COMMENT=6, MULT=7, DIV=8, 
		ADD=9, SUB=10, POW=11, SQRT=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"ID", "NUM", "NEWLINE", "WS", "COMMENT", "LINE_COMMENT", "MULT", "DIV", 
			"ADD", "SUB", "POW", "SQRT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, "'*'", "'/'", "'+'", "'-'", 
			"'**'", "'..'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ID", "NUM", "NEWLINE", "WS", "COMMENT", "LINE_COMMENT", "MULT", 
			"DIV", "ADD", "SUB", "POW", "SQRT"
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


	public LexicaComun(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "LexicaComun.g4"; }

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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\16c\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\3\2\6\2\35\n\2\r\2\16\2\36\3\3\5\3\"\n\3\3\3\6\3%"+
		"\n\3\r\3\16\3&\3\3\3\3\6\3+\n\3\r\3\16\3,\5\3/\n\3\3\4\5\4\62\n\4\3\4"+
		"\3\4\3\5\6\5\67\n\5\r\5\16\58\3\5\3\5\3\6\3\6\3\6\3\6\7\6A\n\6\f\6\16"+
		"\6D\13\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\7\7O\n\7\f\7\16\7R\13\7\3"+
		"\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\f\3\r\3\r\3\r\3B\2"+
		"\16\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\3\2\6\6\2"+
		"\62;C\\aac|\3\2\62;\4\2\13\13\"\"\4\2\f\f\17\17\2k\2\3\3\2\2\2\2\5\3\2"+
		"\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\3\34\3\2"+
		"\2\2\5!\3\2\2\2\7\61\3\2\2\2\t\66\3\2\2\2\13<\3\2\2\2\rJ\3\2\2\2\17U\3"+
		"\2\2\2\21W\3\2\2\2\23Y\3\2\2\2\25[\3\2\2\2\27]\3\2\2\2\31`\3\2\2\2\33"+
		"\35\t\2\2\2\34\33\3\2\2\2\35\36\3\2\2\2\36\34\3\2\2\2\36\37\3\2\2\2\37"+
		"\4\3\2\2\2 \"\5\25\13\2! \3\2\2\2!\"\3\2\2\2\"$\3\2\2\2#%\t\3\2\2$#\3"+
		"\2\2\2%&\3\2\2\2&$\3\2\2\2&\'\3\2\2\2\'.\3\2\2\2(*\7\60\2\2)+\t\3\2\2"+
		"*)\3\2\2\2+,\3\2\2\2,*\3\2\2\2,-\3\2\2\2-/\3\2\2\2.(\3\2\2\2./\3\2\2\2"+
		"/\6\3\2\2\2\60\62\7\17\2\2\61\60\3\2\2\2\61\62\3\2\2\2\62\63\3\2\2\2\63"+
		"\64\7\f\2\2\64\b\3\2\2\2\65\67\t\4\2\2\66\65\3\2\2\2\678\3\2\2\28\66\3"+
		"\2\2\289\3\2\2\29:\3\2\2\2:;\b\5\2\2;\n\3\2\2\2<=\7\61\2\2=>\7,\2\2>B"+
		"\3\2\2\2?A\13\2\2\2@?\3\2\2\2AD\3\2\2\2BC\3\2\2\2B@\3\2\2\2CE\3\2\2\2"+
		"DB\3\2\2\2EF\7,\2\2FG\7\61\2\2GH\3\2\2\2HI\b\6\2\2I\f\3\2\2\2JK\7\61\2"+
		"\2KL\7\61\2\2LP\3\2\2\2MO\n\5\2\2NM\3\2\2\2OR\3\2\2\2PN\3\2\2\2PQ\3\2"+
		"\2\2QS\3\2\2\2RP\3\2\2\2ST\b\7\2\2T\16\3\2\2\2UV\7,\2\2V\20\3\2\2\2WX"+
		"\7\61\2\2X\22\3\2\2\2YZ\7-\2\2Z\24\3\2\2\2[\\\7/\2\2\\\26\3\2\2\2]^\7"+
		",\2\2^_\7,\2\2_\30\3\2\2\2`a\7\60\2\2ab\7\60\2\2b\32\3\2\2\2\f\2\36!&"+
		",.\618BP\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}