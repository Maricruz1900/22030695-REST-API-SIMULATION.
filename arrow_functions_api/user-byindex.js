const lastUser = ['Mafer', 'Arturo', 'Lorena', 'Victor', 'Sol'];

const updateUserByIndex = (index, newValue) => {
  if (index >= 0 && index < lastUser.length) {
    lastUser[index] = newValue;
    return lastUser;
  } else {
    return null;
  }
};

console.log(updateUserByIndex(2, 'NewName')); // Reemplaza 'Lorena' con 'NewName'
console.log(lastUser); // ['Mafer', 'Arturo', 'NewName', 'Victor', 'Sol']

console.log(updateUserByIndex(10, 'InvalidIndex')); // Retorna null ya que el índice 10 está fuera de rango
console.log(lastUser); // ['Mafer', 'Arturo', 'NewName', 'Victor', 'Sol'] (sin cambios en el array)
