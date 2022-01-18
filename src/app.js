const dataset1 = [
  1,
  1,
  10,
  34,
  21,
  10,
  38,
  1,
  10,
  21,
  null,
  undefined,
  function() {}
];
const dataset2 = ["mama", "papa", "perro", "gato"];
//1
const onlynumbers = dataset1.filter(arr => typeof arr == "number");
console.log(onlynumbers);
//2
const EliminaDuplicados = arr => {
  return [...new Set(arr)];
};
console.log(EliminaDuplicados(dataset1));

//3
function contarLetras(letras) {
  var objeto = {};
  for (var i in letras) {
    for (var j in letras[i]) {
      objeto[letras[i][j]] = (objeto[letras[i][j]] || 0) + 1;
    }
  }
  return objeto;
}
console.log(contarLetras(dataset2));

//4
const reorder = dataset2.reverse();
console.log(dataset2);

//5
const reverseString = str =>
  str
    .split("")
    .reverse()
    .join("");

const ReOrder = dataset2.reverse();
const reverseArray = array => array.map(a => reverseString(a));

console.log(reverseArray(dataset2));

/*
1 - Crees una funcion que limpie el array (elmine todo lo que no sean numeros) 
2 - Crees una funcion que devuelva el array sin repeticiones dataset1
3 - cuente las repeticiones de letras en el dataset2
4 - que me devuleva el array al reves
5 - que me devuelva el array al reves pero con las palabras al reves

// REGLAS
* Usar programacion funcional (no usar objetos)
* Aplicar currificacion
* Prohibido break en los bucles

*/
