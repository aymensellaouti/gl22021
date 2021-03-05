const t = [1, 2, 11, 14, 4, 22, 5, 13];

/* console.log(t.filter((element) => element != 2));
 */

 console.log(t.map((element) => {
    if (element % 2 ) {
        return element + 3;
    } else {
        return element - 4;
    }
}));



/* console.log(t.slice(-2)); */

/* t.splice(t.indexOf(4), 1);
console.log(t);
 */
/* console.log(
  t.sort(function (a, b) {
    return b - a;
  })
); */
/* t.forEach((value, indice) => {
    console.log(`ma valeur est ${value} et mon indice est ${indice}`);
}); */

/* console.log(t.indexOf(2));  */
