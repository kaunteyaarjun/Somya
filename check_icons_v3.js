const si = require('react-icons/si');
const vsc = require('react-icons/vsc');

const find = (obj, term) => Object.keys(obj).filter(k => k.toLowerCase().includes(term.toLowerCase()));

console.log('SI - Code:', find(si, 'code').slice(0, 10));
console.log('SI - Studio:', find(si, 'studio').slice(0, 10));
console.log('VSC - Code:', find(vsc, 'code').slice(0, 10));
