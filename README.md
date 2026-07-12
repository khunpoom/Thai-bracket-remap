# Thai Bracket Remap

An Obsidian plugin that remaps two rarely-used Thai characters to square brackets while typing in the editor:

- Typing `ฃ` inserts `[` instead
- Typing `ฅ` inserts `]` instead

`ฃ` and `ฅ` are obsolete Thai consonants that no longer appear in modern Thai spelling, so this plugin repurposes their keyboard positions as convenient shortcuts for typing square brackets — handy for wiki-links (`[[...]]`) and Markdown syntax without reaching for a different keyboard layout.

The remap happens instantly as you type, with no extra keystrokes needed.

## Installation

### Via BRAT (recommended for beta/manual installs)
1. Install the **BRAT** community plugin.
2. In BRAT, choose "Add Beta plugin" and enter: `khunpoom/Thai-bracket-remap`
3. BRAT will install and keep it updated automatically.

### Manual installation
1. Download `manifest.json` and `main.js` from the [latest release](https://github.com/khunpoom/Thai-bracket-remap/releases).
2. Create a folder named `thai-bracket-remap` inside your vault's `.obsidian/plugins/` directory.
3. Place both files inside it:
   ```
   YourVault/.obsidian/plugins/thai-bracket-remap/
     ├── manifest.json
     └── main.js
   ```
4. In Obsidian, go to Settings → Community plugins, disable Restricted mode if needed, then reload and enable "Thai Bracket Remap".

## Customizing the character mapping
Open `main.js` and edit the `CHAR_MAP` object:
```js
const CHAR_MAP = {
	'ฃ': '[',
	'ฅ': ']',
};
```
Add or change character pairs as you like, then reload the plugin for changes to take effect.

---

## ภาษาไทย

ปลั๊กอิน Obsidian เล็กๆ ที่แปลงตัวอักษรไทยที่แทบไม่ได้ใช้แล้ว (ฃ, ฅ) ให้กลายเป็นวงเล็บเหลี่ยมขณะพิมพ์:

- พิมพ์ `ฃ` → ได้ `[`
- พิมพ์ `ฅ` → ได้ `]`

ทำงานทันทีที่พิมพ์ในหน้าต่างแก้ไข (editor) ของ Obsidian โดยไม่ต้องกด backspace ลบเอง เหมาะสำหรับพิมพ์ wiki-link (`[[...]]`) หรือ syntax Markdown โดยไม่ต้องสลับ layout คีย์บอร์ด

### วิธีติดตั้ง (manual install)
1. เปิดโฟลเดอร์ vault ของคุณ แล้วไปที่ `.obsidian/plugins/` (ถ้าไม่มีโฟลเดอร์ `plugins` ให้สร้างขึ้นมาเอง)
2. สร้างโฟลเดอร์ใหม่ชื่อ `thai-bracket-remap`
3. คัดลอกไฟล์ `manifest.json` และ `main.js` ใส่ในโฟลเดอร์นั้น
4. เปิด Obsidian → Settings → Community plugins → ปิด Restricted mode ถ้าเปิดอยู่ → Reload → เปิดใช้งานปลั๊กอิน

### ถ้าอยากแก้ไขคู่ตัวอักษรอื่น
เปิดไฟล์ `main.js` แล้วแก้ใน object `CHAR_MAP` ตามต้องการ แล้วรีโหลดปลั๊กอิน
