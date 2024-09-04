function sum(table) {
    let x = 0;
    let y = table.length - 1;
    let total = 0;
    for (count = x; count <= y; count++) {
      total += table[count];
    };
    return total;
  };
  
  
  console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));