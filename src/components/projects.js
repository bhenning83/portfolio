import facebookImg from './assets/images/facebook.png'
import waldoImg from './assets/images/waldo.png'
import beansImg from './assets/images/beans.png'
import toDoImg from './assets/images/to-do.png'
import cvImg from './assets/images/cv.png'
import tnwImg from './assets/images/tnw.png'
import newsweekImg from './assets/images/newsweek.png'
import chessImg from './assets/images/chess.png'
import mastermindImg from './assets/images/mastermind.png'

const Project = (title, thumb, live, source, desc) => {
  const getTitle = () => title;
  const getThumb = () => thumb;
  const getLive = () => live;
  const getSource = () => source;
  const getDesc = () => desc
  return {getTitle, getThumb, getLive, getSource, getDesc}
}

const fb = Project(
  'Apathetic Facebook', 
  facebookImg, 
  'https://warm-everglades-80886.herokuapp.com/users/sign_in', 
  'https://github.com/bhenning83/apathetic_facebook',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue in venenatis feugiat, eros arcu bibendum odio, vel mollis nisi eros at quam. Sed mollis tempor pharetra. Nulla eget posuere urna, id bibendum lectus. Mauris id nisi sapien. Mauris id pharetra velit. Curabitur ullamcorper accumsan posuere. Cras mattis pellentesque odio, vel venenatis turpis vestibulum sed."
  )
const chess = Project(
  'Chess', 
  chessImg, 
  'https://replit.com/@bhenning83/chess?v=1', 
  'https://github.com/bhenning83/chess',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue in venenatis feugiat, eros arcu bibendum odio, vel mollis nisi eros at quam. Sed mollis tempor pharetra. Nulla eget posuere urna, id bibendum lectus. Mauris id nisi sapien. Mauris id pharetra velit. Curabitur ullamcorper accumsan posuere. Cras mattis pellentesque odio, vel venenatis turpis vestibulum sed."
  )
const mastermind = Project(
  'Mastermind', 
  mastermindImg, 
  'https://replit.com/@bhenning83/mastermind?v=1', 
  'https://github.com/bhenning83/mastermind',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue in venenatis feugiat, eros arcu bibendum odio, vel mollis nisi eros at quam. Sed mollis tempor pharetra. Nulla eget posuere urna, id bibendum lectus. Mauris id nisi sapien. Mauris id pharetra velit. Curabitur ullamcorper accumsan posuere. Cras mattis pellentesque odio, vel venenatis turpis vestibulum sed."
  )
const waldo = Project(
  "Where's Waldo", 
  waldoImg, 
  'https://brendons-wheres-waldo.herokuapp.com/', 
  'https://github.com/bhenning83/wheres-waldo',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue in venenatis feugiat, eros arcu bibendum odio, vel mollis nisi eros at quam. Sed mollis tempor pharetra. Nulla eget posuere urna, id bibendum lectus. Mauris id nisi sapien. Mauris id pharetra velit. Curabitur ullamcorper accumsan posuere. Cras mattis pellentesque odio, vel venenatis turpis vestibulum sed."
  )
const cart = Project(
  'Shopping Cart', 
  beansImg, 
  'https://bhenning83.github.io/shopping-cart/', 
  'https://github.com/bhenning83/shopping-cart',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue in venenatis feugiat, eros arcu bibendum odio, vel mollis nisi eros at quam. Sed mollis tempor pharetra. Nulla eget posuere urna, id bibendum lectus. Mauris id nisi sapien. Mauris id pharetra velit. Curabitur ullamcorper accumsan posuere. Cras mattis pellentesque odio, vel venenatis turpis vestibulum sed."
  )
const toDo = Project(
  'To-Do List', 
  toDoImg, 
  'https://bhenning83.github.io/to-do-list/', 
  'https://github.com/bhenning83/to-do-list',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue in venenatis feugiat, eros arcu bibendum odio, vel mollis nisi eros at quam. Sed mollis tempor pharetra. Nulla eget posuere urna, id bibendum lectus. Mauris id nisi sapien. Mauris id pharetra velit. Curabitur ullamcorper accumsan posuere. Cras mattis pellentesque odio, vel venenatis turpis vestibulum sed."
  )
const cv = Project(
  'CV Generator', 
  cvImg, 
  'https://bhenning83.github.io/cv-project/', 
  'https://github.com/bhenning83/cv-project',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue in venenatis feugiat, eros arcu bibendum odio, vel mollis nisi eros at quam. Sed mollis tempor pharetra. Nulla eget posuere urna, id bibendum lectus. Mauris id nisi sapien. Mauris id pharetra velit. Curabitur ullamcorper accumsan posuere. Cras mattis pellentesque odio, vel venenatis turpis vestibulum sed."
  )
const tnw = Project(
  'CV Generator', 
  tnwImg, 
  'https://bhenning83.github.io/TNW-magazine/', 
  'https://github.com/bhenning83/TNW-magazine',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue in venenatis feugiat, eros arcu bibendum odio, vel mollis nisi eros at quam. Sed mollis tempor pharetra. Nulla eget posuere urna, id bibendum lectus. Mauris id nisi sapien. Mauris id pharetra velit. Curabitur ullamcorper accumsan posuere. Cras mattis pellentesque odio, vel venenatis turpis vestibulum sed."
  )
const newsweek = Project(
  'CV Generator', 
  newsweekImg, 
  'https://bhenning83.github.io/newsweek/', 
  'https://github.com/bhenning83/newsweek',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, augue in venenatis feugiat, eros arcu bibendum odio, vel mollis nisi eros at quam. Sed mollis tempor pharetra. Nulla eget posuere urna, id bibendum lectus. Mauris id nisi sapien. Mauris id pharetra velit. Curabitur ullamcorper accumsan posuere. Cras mattis pellentesque odio, vel venenatis turpis vestibulum sed."
  )

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