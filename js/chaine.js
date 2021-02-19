chaine1 = "Bonjour GL2 2021";
/* 
chaine = new String("test");

console.log(chaine.length);
console.log(chaine1.length); */
pos = 0;
while ((indice = chaine1.indexOf('2', pos)) != -1){
    console.log(indice);
    pos = indice + 1 ;
}


