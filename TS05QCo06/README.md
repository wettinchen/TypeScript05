## TypeScript 05
## Chapter 05: Type Assertions and Type Casting
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Type Assertions vs Type Casting
        https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

###  4. What are Type Assertions?

###  5. Starter Code
        設定 One, Two, Three 的類別
        宣告 a 為 "hello"，類別為 string

###  6. Converting Types with Assertions
        宣告 b 為 "hello"，使用 as 指定類別為 string 或 number
        宣告 c 為 "hello"，使用 as 指定類別為 "hello"

###  7. Angle Bracket Syntax instead of "as"
        宣告 d 為 "world"，使用 <> 指定類別為 string
        宣告 e 為 "world"，使用 <> 指定類別為 string 或 number

###  8. Narrowing Return Values with Assertions
        宣告 addOrConcat函數 類別為 number 或 string，
        參數 a, b 類別為 number，c 類別為 add 或 concat
        宣告 myVal，類別為 string，
        限縮 addOrConcat(2, 2, "concat") 類別為 string，避免顯示錯誤

###  9. Caution: Assertions allow mistakes!
        宣告 nextVal，類別為 number，
        限縮 addOrConcat(2, 2, "concat") 類別為  number，
        有錯誤卻不會顯示錯誤

### 10. Double Casting and the unknown type
        設置 10 的類別為 string，會顯示錯誤
        設置 10 的類別為 unknown 的類別為為 string，不會顯示錯誤

### 11. DOM Selection Types
        (1)宣告 img，使用 document.querySelector()，html 元素標籤為 img
        宣告 myImg，使用 document.getElementById()，id 為 myId
        (2)使用 Assertions 設定 img 類別為 HTMLImageElement，設定 img 的路徑不會顯示錯誤

### 12. Non-Null Assertions
        (1)使用 Non-Null Assertions 設定 img 類別為 HTMLImageElement
        (2)使用 Non-Null Assertions 設定 img 自動選取類別，
        使用 Assertions 設定 img 類別為 HTMLImageElement

### 13. Angle Brackets and the DOM
        宣告 nextImg 使用 document.getElementById()，id 為 nextId
        使用 Angle Brackets 設定 img 類別為 HTMLImageElement

### 14. Student Challenge
        修改原始的 JavaScipt 程式碼

### 15. Solution 1: Beginners

### 16. Solution 2: Type Assertion