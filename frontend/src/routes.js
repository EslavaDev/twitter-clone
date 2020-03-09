const routes = module.exports = require('next-routes')();

routes
.add('index', '/', 'index')
.add('home', '/home', 'home')
.add('about', '/about', 'home')
.add('contact', '/contact', 'contact')