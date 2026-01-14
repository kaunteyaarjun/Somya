const icons = require('react-icons/si');
const targetIcons = [
    'Visual', 'Figma', 'After', 'Blender', 'Next', 'React', 'Type', 'Tailwind', 'Framer',
    'Three', 'Godot', 'Kali', 'Cinema', 'Creative', 'Unreal', 'Autodesk', 'Python', 'Rust', 'Docker', 'Wire'
];

targetIcons.forEach(target => {
    const matches = Object.keys(icons).filter(key => key.toLowerCase().includes(target.toLowerCase()));
    console.log(`${target}:`, matches.slice(0, 5)); // Show first 5 matches
});
