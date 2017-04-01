//Code React element here
let person = React.createElement('h1', {}, 'An Awesome Person')
let learning = React.createElement('p', {}, 'Who is learning React')
let js = React.createElement('li', {}, 'JavaScript')
let react = React.createElement('li', {}, 'React')
let movies = React.createElement('li', {}, 'Movies')
let iceCream = React.createElement('li', {}, 'Ice cream')
let interests = React.createElement('ul', {className: "me__interests"}, [js, react, movies, iceCream])
const meInReact = React.createElement('div', {className: "me"}, [person, learning, interests]);

ReactDOM.render(
  meInReact,
  document.getElementById('main')
);
