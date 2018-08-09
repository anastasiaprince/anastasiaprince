import someFunction from './someFile';

const $ = require('jquery');

console.log('Tasty Brunch, just trying to use jQuery!', $('body'));

document.addEventListener('DOMContentLoaded', () => {
  console.log('initialized');
  someFunction();
});
