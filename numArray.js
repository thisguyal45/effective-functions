var regexp  = new RegExp('{{([^}]+)}}', 'g');
const randomBoolean = () => Math.random() >= 0.5;
const merge = Object.assign({}, obj1, obj2);