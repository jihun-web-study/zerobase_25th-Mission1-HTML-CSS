function getColorNames(color) {
  for (let index = 0; index < 9; index++) {
    console.log(`--color-${color}-${index + 1}00: #`);
  }
}
/* getColorNames("gray");
getColorNames("blue");
getColorNames("red");
getColorNames("yellow");
getColorNames("green");
getColorNames("brown");
getColorNames("purple"); */

console.log("----------------------------------------------------------");

function getFontnames(arr) {
  const [type, weight, size, lineHeight] = arr;
  size.forEach((fontSize) => {
    console.log(
      `--${type}-${weight}-${fontSize}: var(--${weight}) ${fontSize}px / var(--line--height-${lineHeight}) "Noto Sans KR",sans-serif;`
    );
  });
}
` --title-bold-24: var(--bold) 16px / var(--line--height-115) "Noto Sans KR", sans-serif;`;

const TITLE_BOLD = ["title", "bold", [16, 18, 24, 28, 32], 115];
const TITLE_MEDIUM = ["title", "medium", [16, 18, 24, 28, 32], 115];
const TEXT_REGULAR = ["text", "regular", [12, 13, 14, 16, 18, 20], 150];
const TEXT_MEDIUM = ["text", "medium", [12, 14, 16, 18, 20], 120];
const TEXT_BOLD = ["text", "bold", [12, 14, 16, 18, 20], 150];

getFontnames(TITLE_BOLD);
getFontnames(TITLE_MEDIUM);
getFontnames(TEXT_REGULAR);
getFontnames(TEXT_MEDIUM);
getFontnames(TEXT_BOLD);
