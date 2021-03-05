const somme = (operation, ...args) => {
  console.log(args);
  console.log(operation);
  operation === "+" ? (total = 0) : (total = 1);
  args.forEach((x) => {
    if (operation === "+") {
      total += x;
    } else if (operation === "*") {
      total *= x;
    }
  });
  console.log(total);
};

somme("*", 1, 2, 3, 4, 5);


try {

} catch (e) {
    
}