# Thai Bracket Remap

ปลั๊กอิน Obsidian เล็กๆ ที่แปลงตัวอักษรขณะพิมพ์:
- พิมพ์ `ฃ` → ได้ `[`
- พิมพ์ `ฅ` → ได้ `]`

ทำงานทันทีที่พิมพ์ในหน้าต่างแก้ไข (editor) ของ Obsidian โดยไม่ต้องกด backspace ลบเอง

## วิธีติดตั้ง (manual install)

1. เปิดโฟลเดอร์ vault ของคุณ แล้วไปที่ `.obsidian/plugins/`
   (ถ้าไม่มีโฟลเดอร์ `plugins` ให้สร้างขึ้นมาเอง)
2. สร้างโฟลเดอร์ใหม่ชื่อ `thai-bracket-remap`
3. คัดลอกไฟล์ `manifest.json` และ `main.js` ใส่ในโฟลเดอร์นั้น
   ผลลัพธ์ควรได้โครงสร้างแบบนี้:
   ```
   YourVault/.obsidian/plugins/thai-bracket-remap/
     ├── manifest.json
     └── main.js
   ```
4. เปิด Obsidian → Settings → Community plugins
5. ถ้า "Restricted mode" เปิดอยู่ ให้ปิดก่อน (Turn off restricted mode)
6. กด Reload หรือปิดเปิด Obsidian ใหม่ ปลั๊กอิน "Thai Bracket Remap" จะโผล่มาในรายการ
7. เปิดใช้งาน (toggle เป็นสีเขียว)

## วิธีทดสอบ
เปิดโน้ตใดก็ได้ แล้วลองพิมพ์ตัวอักษร ฃ หรือ ฅ ในโหมดแก้ไข ควรจะได้ `[` และ `]` แทนทันที

## ถ้าอยากแก้ไขคู่ตัวอักษรอื่น
เปิดไฟล์ `main.js` แล้วแก้ใน object นี้:
```js
const CHAR_MAP = {
	'ฃ': '[',
	'ฅ': ']',
};

## ใช้ Claude เขียนให้ทั้งหมด
```
เพิ่มหรือแก้คู่ตัวอักษรได้ตามต้องการ แล้วรีโหลดปลั๊กอิน (ปิด-เปิด toggle ใน Community plugins) เพื่อให้มีผล
