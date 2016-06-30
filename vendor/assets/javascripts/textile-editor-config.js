//var teButtons = TextileEditor.buttons;
//
//teButtons.push(new TextileEditorButton('ed_strong',			'bold.png',          '*',   '*',  'b', 'Bold','s'));
//teButtons.push(new TextileEditorButton('ed_emphasis',		'italic.png',        '_',   '_',  'i', 'Italicize','s'));
//teButtons.push(new TextileEditorButton('ed_underline',	'underline.png',     '+',   '+',  'u', 'Underline','s'));
//teButtons.push(new TextileEditorButton('ed_strike',     'strikethrough.png', '-',   '-',  's', 'Strikethrough','s'));
//teButtons.push(new TextileEditorButton('ed_ol',					'list_numbers.png',  ' # ', '\n', ',', 'Numbered List'));
//teButtons.push(new TextileEditorButton('ed_ul',					'list_bullets.png',  ' * ', '\n', '.', 'Bulleted List'));
//teButtons.push(new TextileEditorButton('ed_p',					'paragraph.png',     'p',   '\n', 'p', 'Paragraph'));
//teButtons.push(new TextileEditorButton('ed_h1',					'h1.png',            'h1',  '\n', '1', 'Header 1'));
//teButtons.push(new TextileEditorButton('ed_h2',					'h2.png',            'h2',  '\n', '2', 'Header 2'));
//teButtons.push(new TextileEditorButton('ed_h3',					'h3.png',            'h3',  '\n', '3', 'Header 3'));
//teButtons.push(new TextileEditorButton('ed_h4',					'h4.png',            'h4',  '\n', '4', 'Header 4'));
//teButtons.push(new TextileEditorButton('ed_block',   		'blockquote.png',    'bq',  '\n', 'q', 'Blockquote'));
//teButtons.push(new TextileEditorButton('ed_outdent', 		'outdent.png',       ')',   '\n', ']', 'Outdent'));
//teButtons.push(new TextileEditorButton('ed_indent',  		'indent.png',        '(',   '\n', '[', 'Indent'));
//teButtons.push(new TextileEditorButton('ed_justifyl',		'left.png',          '<',   '\n', 'l', 'Left Justify'));
//teButtons.push(new TextileEditorButton('ed_justifyc',		'center.png',        '=',   '\n', 'e', 'Center Text'));
//teButtons.push(new TextileEditorButton('ed_justifyr',		'right.png',         '>',   '\n', 'r', 'Right Justify'));
//teButtons.push(new TextileEditorButton('ed_justify', 		'justify.png',       '<>',  '\n', 'j', 'Justify'));
//
//// teButtons.push(new TextileEditorButton('ed_code','code','@','@','c','Code'));


var teButtons = TextileEditor.buttons;

teButtons.push(new TextileEditorButton('ed_h1',				"fa fa-header fa-2x",            			'h1',  '\n', '1', 'Text wählen, dann H (Titel) klicken. Titel auf neuer Linie beginnen und leere Linie nach dem Titel!'));
teButtons.push(new TextileEditorButton('ed_strong',			"fa fa-bold fa-2x",          				'*',   '*',  'b', 'Text wählen, dann Fettsatz klicken','s'));
teButtons.push(new TextileEditorButton('ed_emphasis',		"fa fa-italic fa-2x",            			'_',   '_',  'i', 'Text wählen, dann Schrägsatz klicken','s'));
teButtons.push(new TextileEditorButton('ed_underline',		"fa fa-underline fa-2x",  					'+',   '+',  'u', 'Text wählen, dann Unterstreichen klicken','s'));
teButtons.push(new TextileEditorButton('ed_sup',			"fa fa-superscript fa-2x",					' ^',  '^ ', 'h', 'Text wählen, dann Hochstellen klicken'));
teButtons.push(new TextileEditorButton('ed_sub',			"fa fa-subscript fa-2x",           			' ~',  '~ ', 'l', 'Text wählen, dann Tiefstellen klicken'));
//teButtons.push(new TextileEditorButton('ed_int_link', 	"fa fa-link fa-2x", 						'"',   '":CHOOSE_INTERNAL_LINK', 'a', 'Linktext (was der Leser sieht) wählen, dann hier (interner Link) klicken'));
teButtons.push(new TextileEditorButton('ed_ext_link', 		"fa fa-external-link fa-2x", 				'"',   '":EXTERNAL_ADDRESS_HERE', 'a', 'Linktext (was der Leser sieht) wählen, dann hier (externer Link) klicken'));
teButtons.push(new TextileEditorButton('ed_email', 			"fa fa-at fa-2x",         					'"',   '":mailto:PLEASE_ENTER_EMAIL_ADDRESS_HERE', 'a', 'Emailtext (was der Leser sieht) wählen, dann hier (Email) klicken'));
//teButtons.push(new TextileEditorButton('ed_image', 		"fa fa-image fa-2x",         				'!CHOOSE IMAGE NOW!',  '', 'img', 'Cursor einfügen, wo Bild hinkommt, dann Bild klicken'));
//teButtons.push(new TextileEditorButton('ed_mehr', 		"fa fa-plus fa-2x",         				' %{mehr} ',  '', 'span', 'Der Text nach \'mehr\' ist auf der Seite vorerst unsichtbar (in der Vorschau nebenan bleibt er aber sichtbar!)'));
teButtons.push(new TextileEditorButton('ed_help', 			"fa fa-question-circle fa-2x",         		' ',   '',   '', 'Mehr Information: Hier klicken'));

