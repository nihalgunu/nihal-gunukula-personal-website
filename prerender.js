const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

// List of your EJS pages
const pages = [
  { name: 'index', data: {} },
  { name: 'about', data: {} },
  { name: 'applications', data: {} },
  { name: 'research', data: {} },
  { name: 'resume', data: {} }
];

pages.forEach(page => {
  const templateString = fs.readFileSync(path.join(__dirname, 'views', `${page.name}.ejs`), 'utf-8');
  const html = ejs.render(templateString, page.data);
  fs.writeFileSync(path.join(__dirname, 'public', `${page.name}.html`), html);
});

console.log('Pages have been rendered to HTML!');
