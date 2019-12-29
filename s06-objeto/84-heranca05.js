console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() {
  return this.split('')
    .reverse()
    .join('');
};

console.log('Escola Cod3r'.reverse());

Array.prototype.firts = function() {
  return this[0];
};

console.log([1, 2, 3, 4, 5].firts());
console.log(['a', 'b', 'c'].firts());

// Muito cuidado para não sobrescrever um comportamento padrão
String.prototype.toString = function() {
  return 'Lascou tudo';
};

console.log('Escola Cod3r'.reverse());
