var post = {
  url: '/first-post',
  title: 'My First Post'
}

// es6 de-structuring assignment
// Similar to CoffeeScript, but important to use the var
var {url,title} = post;

console.log('url', url, 'post', post);
// => 'url', '/first-post', 'post', { url: '/first-post',title: 'My First Post' }
