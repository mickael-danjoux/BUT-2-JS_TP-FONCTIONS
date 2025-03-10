//Copyright (c) 2024 Antho Loup
//French translation and adaptation by Mickaël DANJOUX 2025


console.clear();

// OPÉRATEURS //

/**
 * Écrivez une fonction qui prend un nombre (n) comme argument.
 * Retourne 'odd' si c'est impair, 'even' sinon.
 *
 * @param {number} n
 * @returns {'odd' | 'even'}
 */
function evenOrOdd(n) {
  // Votre code ici
}

// CHAÎNES DE CARACTÈRES //

/**
 * Écrivez une fonction qui prend une chaîne (str) et un nombre (n) comme arguments.
 * Retourne le n-ième caractère de 'str'.
 *
 * @param {string} str
 * @param {number} n
 * @returns {string}
 */
function nthCharater(str, n) {
  // Votre code ici
}

/**
 * Écrivez une fonction qui prend une chaîne (str) comme argument.
 * Retourne la première moitié de str (arrondie vers le haut).
 *
 * @param {string} str
 * @returns {string}
 */
function firstHalf(str) {
  // Votre code ici
}

/**
 * Écrivez une fonction qui prend deux chaînes (str et c) comme arguments.
 * Retourne le nombre de fois où c apparaît dans str.
 *
 * @param {string} str
 * @param {string} c
 * @returns {number}
 */
function numberOccurence(str, c) {
  // Votre code ici
}

// TABLEAUX //

/**
 * Écrivez une fonction qui prend un tableau d'entiers (arr) comme argument.
 * Retourne le nombre de nombres négatifs dans arr.
 *
 * @param {number[]} arr
 * @returns {number}
 */
function negativeCount(arr) {
  // Votre code ici
}

/**
 * Écrivez une fonction qui prend un tableau d'entiers (arr) comme argument.
 * Retourne true si tous les éléments de arr sont identiques, false sinon.
 *
 * @param {number[]} arr
 * @returns {boolean}
 */
function sameElements(arr) {
  // Votre code ici
}

/**
 * Écrivez une fonction qui prend une chaîne (str) comme argument.
 * Retourne str inversée.
 *
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
  // Votre code ici
}

// OBJETS //

/**
 * Écrivez une fonction qui prend un objet (obj) et un opérateur (op, soit 'add', 'sub', 'mul') comme arguments.
 * obj contient les attributs a et b, tous deux optionnels de type nombre.
 * Retourne le résultat de l'opération entre l'attribut a et l'attribut b de l'objet.
 * Si le nombre n'existe pas, remplacez-le par 1.
 *
 * @param {object} obj
 * @param {'add' | 'sub' | 'mul'} op
 * @returns {number}
 */
function opOnObject(obj, op) {
  // Votre code ici
}

/**
 * Écrivez une fonction qui prend un tableau d'objets (arr) comme argument.
 * arr est un tableau d'objets contenant les attributs firstname et lastname, tous deux optionnels de type chaîne.
 * Retourne un tableau contenant la première lettre du prénom et le nom complet.
 * Remplacez les noms inconnus par X
 * (Ex. firstname: "John" lastname: "Doe", sortie: "J Doe")
 *
 * @param {object[]} arr
 * @returns {string[]}
 */
function formatName(arr) {
  // Votre code ici
}

// Ne vous occupez pas de tout ça //

function testFn(func, tests) {
  const results = tests.map(({params}) => func(...params));
  return {succeed: tests.every(({expected}, index) => typeof expected === 'object' ? JSON.stringify(expected) === JSON.stringify(results[index]) : expected === results[index]), actual: results, expected: tests.map(({expected}) => expected)};
}

function printResult(test, result) {
  let output = `Test ${test.fn.name} ${result.succeed ? 'succeeded' : 'failed'}`;

  if (test.details) {
    output += ` (Actual: ${result.actual}, Expected: ${result.expected})`;
  }
  if (test.revealHint) {
    output += ` (Hint: ${atob(test.hint)})`;
  }
  console.log(output);
}

const testSuite = [
  {
    fn: evenOrOdd,
    inOut: [{params: [1], expected: 'odd'}, {params: [6], expected: 'even'}, {params: [-42], expected: 'even'}, {params: [1773], expected: 'odd'}],
    details: false,
    revealHint: false,
    hint: 'T3BlcmF0b3IgJSBpcyBmb3IgbW9kdWxvLCB5b3UgY2FuIGFsc28gdXNlIHRlcm5hcnkgb3BlcmF0b3IgIQ'
  },
  {
    fn: nthCharater,
    inOut: [{params: ['abcd',1], expected: 'a'}, {params: ['zyxbwpl',5], expected: 'w'}, {params: ['gfedcba',3], expected: 'e'}],
    details: false,
    revealHint: false,
    hint: 'SSBiZWxpZXZlIGluIHlvdSA7KQ=='
  },
  {
    fn: firstHalf,
    inOut: [{params: ['abcd'], expected: 'ab'}, {params: ['Javascript'], expected: 'Javas'}, {params: ['Hello World'], expected: 'Hello '}],
    details: false,
    revealHint: false,
    hint: 'VXNlIHNsaWNlIGFuZCBNYXRoIG9iamVjdA'
  },
  {
    fn: numberOccurence,
    inOut: [
      {params: ['how many times does the character occur in this sentence?', 'm'], expected: 2},
      {params: ['how many times does the character occur in this sentence?', 'h'], expected: 4},
      {params: ['how many times does the character occur in this sentence?', '?'], expected: 1},
      {params: ['how many times does the character occur in this sentence?', 'z'], expected: 0}
    ],
    details: false,
    revealHint: false,
    hint: 'VXNlIGEgZm9yIGxvb3AgYW5kIGEgY291bnRlciB2YXJpYWJsZQ'
  },
  {
    fn: negativeCount,
    inOut: [
      {params: [[1,2,3,4]], expected: 0},
      {params: [[1,-2,3,-4]], expected: 2},
      {params: [[-1,-22,-333]], expected: 3},
    ],
    details: false,
    revealHint: false,
    hint: 'VXNlIHJlZHVjZSBhbmQgYW4gYW5vbnltb3VzIGZ1bmN0aW9u'
  },
  {
    fn: sameElements,
    inOut: [
      {params: [[1,2,3,4]], expected: false},
      {params: [[-42,-42,-42]], expected: true},
      {params: [[100,100,10]], expected: false},
    ],
    details: false,
    revealHint: false,
    hint: 'VXNlIGV2ZXJ5IGFuZCBhbiBhbm9ueW1vdXMgZnVuY3Rpb24'
  },
  {
    fn: reverseString,
    inOut: [{params: ['hello'], expected: 'olleh'}, {params: ['Javascript'], expected: 'tpircsavaJ'}],
    details: false,
    revealHint: false,
    hint: 'VXNlIHNwbGl0LCBqb2luIGFuZCByZXZlcnNlIChBcnJheSk'
  },
  {
    fn: opOnObject,
    inOut: [{params: [{a: 38, b:4}, 'add'], expected: 42}, {params: [{a: 3, b:14}, 'mul'], expected: 42}, {params: [{b:43}, 'sub'], expected: -42}, {params: [{a:42}, 'mul'], expected: 42}, {params: [{}, 'sub'], expected: 0}],
    details: false,
    revealHint: false,
    hint: 'VXNlID8/IG9wZXJhdG9ycw=='
  },
  {
    fn: formatName,
    inOut: [{params: [[{firstname: "John", lastname: "Doe"}, {lastname: "Mysterious"}, {}]], expected: ['J Doe', 'X Mysterious', 'X X']}],
    details: false,
    revealHint: false,
    hint: 'VXNlIGJhY2sgdGljayBgIHRvIGZvcm1hdCB0aGUgb3V0cHV0'
  }
];

testSuite.map((test) => printResult(test, testFn(test.fn, test.inOut)));
