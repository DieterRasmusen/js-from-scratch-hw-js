/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

// const filter = () => {}


function filter(array, callback) => {
  const result = []; 
  for (let i = 0; i<array.length; i++) {
    const element = array[i]; // выцепляем текущий элемент
    const shouldInclude = callback(element, i); // преобразуем его
    if(shouldInclude) {
      result.push(element)
    }
  }
  return result;
};





// const numbers = [0, 2, -3, 34, 66, -944, 0.4446];
// const newNumber = numbers.filter((element, index) => {
//   return element > 0 && element % 2 == 0;
// })


