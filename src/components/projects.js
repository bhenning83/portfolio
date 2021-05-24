import facebookImg from './assets/images/facebook.png'
import waldoImg from './assets/images/waldo.png'
import beansImg from './assets/images/beans.png'
import toDoImg from './assets/images/to-do.png'
import cvImg from './assets/images/cv.png'
import tnwImg from './assets/images/tnw.png'
import newsweekImg from './assets/images/newsweek.png'
import chessImg from './assets/images/chess.png'
import mastermindImg from './assets/images/mastermind.png'

const Project = (title, thumb, live, source) => {
  const getTitle = () => title;
  const getThumb = () => thumb;
  const getLive = () => live;
  const getSource = () => source;
  return {getTitle, getThumb, getLive, getSource}
}

const fb = Project('Apathetic Facebook', facebookImg, 'https://warm-everglades-80886.herokuapp.com/users/sign_in', 'https://github.com/bhenning83/apathetic_facebook')
const chess = Project('Chess', chessImg, 'https://replit.com/@bhenning83/chess?v=1', 'https://github.com/bhenning83/chess')
const mastermind = Project('Mastermind', mastermindImg, 'https://replit.com/@bhenning83/mastermind?v=1', 'https://github.com/bhenning83/mastermind')
const waldo = Project("Where's Waldo", waldoImg, 'https://brendons-wheres-waldo.herokuapp.com/', 'https://github.com/bhenning83/wheres-waldo')
const cart = Project('Shopping Cart', beansImg, 'https://bhenning83.github.io/shopping-cart/', 'https://github.com/bhenning83/shopping-cart')
const toDo = Project('To-Do List', toDoImg, 'https://bhenning83.github.io/to-do-list/', 'https://github.com/bhenning83/to-do-list')
const cv = Project('CV Generator', cvImg, 'https://bhenning83.github.io/cv-project/', 'https://github.com/bhenning83/cv-project')
const tnw = Project('CV Generator', tnwImg, 'https://bhenning83.github.io/TNW-magazine/', 'https://github.com/bhenning83/TNW-magazine')
const newsweek = Project('CV Generator', newsweekImg, 'https://bhenning83.github.io/newsweek/', 'https://github.com/bhenning83/newsweek')

const projects = [
  fb,
  chess,
  mastermind,
  waldo,
  cart,
  toDo,
  cv,
  tnw,
  newsweek
];

export default projects;