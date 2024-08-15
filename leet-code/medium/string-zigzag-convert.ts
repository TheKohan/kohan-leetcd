function convert(s: string, numRows: number): string {
  const rowMap = {};
  let direction = 'up';
  let actualRow = 1;
  if (numRows === 1) return s;
  for (let i = 0; i <= s.length - 1; i++) {
    if (actualRow === numRows) {
      rowMap[actualRow] = (rowMap[actualRow] ?? '') + s[i];
      direction = 'down';
      actualRow--;
    } else if (actualRow === 1) {
      rowMap[actualRow] = (rowMap[actualRow] ?? '') + s[i];
      direction = 'up';
      actualRow++;
    } else if (actualRow !== numRows || actualRow !== 1) {
      rowMap[actualRow] = (rowMap[actualRow] ?? '') + s[i];
      if (direction === 'up') {
        actualRow++;
      } else {
        actualRow--;
      }
    }
  }

  return Object.values(rowMap).join('');
}
