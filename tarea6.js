function encontrarPromedio(arreglo) {
  if (arreglo.length === 0) {
    return 0; // En caso de que el arreglo esté vacío, el promedio es 0.
  }

  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }

  const promedio = suma / arreglo.length;
  return promedio;
}

const miArreglo = [2, 4, 6, 8, 10];
const promedio = encontrarPromedio(miArreglo);
console.log("El promedio es:", promedio);
