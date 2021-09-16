/**
 * 给定一个 m x n 二维字符网格 board 和一个单词（字符串）列表 words，找出所有同时在二维网格和字典中出现的单词。
 * 单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母在一个单词中不允许被重复使用。
 *
 * 更多描述参考： [findWords.md](./findWords.md)
 *
 * @param board
 * @param words
 */
export default function findWords(
  board: Array<Array<string>>,
  words: Array<string>,
): Array<string> {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      for (let l = 0; l < board.length; l++) {
        for (let m = 0; m < board[l].length; m++) {
          if (words[i][j] !== board[l][m]) {
            return [];
          }
        }
      }
    }
  }
  return words;
}
