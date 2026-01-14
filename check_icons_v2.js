const icons = require('react-icons/si');
const keys = Object.keys(icons);

const find = (term) => keys.filter(k => k.toLowerCase().includes(term.toLowerCase()));

console.log('VS Code:', find('visual'));
console.log('VS Code (alt):', find('vscode'));
console.log('Cinema:', find('cinema'));
console.log('Three:', find('three'));
console.log('Kali:', find('kali'));
console.log('Godot:', find('godot'));
console.log('Maya:', find('maya'));
console.log('Spline:', find('spline'));
console.log('Unreal:', find('unreal'));
