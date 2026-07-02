const { Plugin } = require('obsidian');
const { EditorView } = require('@codemirror/view');

// แผนที่การแปลงตัวอักษร: พิมพ์ตัวซ้าย -> ได้ตัวขวาแทน
const CHAR_MAP = {
	'ฃ': '[',
	'ฅ': ']',
};

module.exports = class ThaiBracketRemapPlugin extends Plugin {
	onload() {
		const inputFilter = EditorView.inputHandler.of((view, from, to, text) => {
			// ถ้ามีการพิมพ์หลายตัวอักษรพร้อมกัน (เช่น วาง/IME คำยาว) จะไม่ยุ่งด้วย
			if (text.length !== 1) return false;

			const replacement = CHAR_MAP[text];
			if (replacement === undefined) return false;

			view.dispatch({
				changes: { from, to, insert: replacement },
				selection: { anchor: from + replacement.length },
				userEvent: 'input.type',
			});
			return true;
		});

		this.registerEditorExtension(inputFilter);
	}

	onunload() {
		// Obsidian จะถอด editor extension ที่ลงทะเบียนไว้ให้อัตโนมัติ
	}
};
