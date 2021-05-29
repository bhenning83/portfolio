import facebookImg from './assets/images/facebook.png'
import waldoImg from './assets/images/waldo.png'
import beansImg from './assets/images/beans.png'
import toDoImg from './assets/images/to-do.png'
import cvImg from './assets/images/cv.png'
import tnwImg from './assets/images/tnw.png'
import newsweekImg from './assets/images/newsweek.png'
import chessImg from './assets/images/chess.png'
import mastermindImg from './assets/images/mastermind.png'
import waldomock from './assets/images/mocks/waldomock.png'
import facebookmock from './assets/images/mocks/fbMock.png'
import cvmock from './assets/images/mocks/cvMock.png'
import chessmock from './assets/images/mocks/chessMock.png'
import mastermindmock from './assets/images/mocks/mastermindMock.png'
import beansmock from './assets/images/mocks/beansMock.png'
import tnwmock from './assets/images/mocks/tnwMock.png'
import toDomock from './assets/images/mocks/toDoMock.png'
import newsweekmock from './assets/images/mocks/newsweekMock.png'
import fbPhoneMock from './assets/images/mocks/fbPhone.png'
import newsweekPhoneMock from './assets/images/mocks/newsweekPhoneMock.png'
import tnwPhoneMock from './assets/images/mocks/tnwPhoneMock.png'
import toDoPhoneMock from './assets/images/mocks/toDoPhoneMock.png'
import beansPhoneMock from './assets/images/mocks/beansPhoneMock.png'

const Project = (title, thumb, mock, live, source, desc, phoneMock = '') => {
  const getTitle = () => title;
  const getThumb = () => thumb;
  const getMock = () => mock
  const getLive = () => live;
  const getSource = () => source;
  const getDesc = () => desc
  const getPhoneMock = () => phoneMock
  return {getTitle, getThumb, getLive, getMock, getPhoneMock, getSource, getDesc}
}

const fb = Project(
  'Apathetic Facebook', 
  facebookImg, 
  facebookmock,
  'https://warm-everglades-80886.herokuapp.com/users/sign_in', 
  'https://github.com/bhenning83/apathetic_facebook',
  "The moms have taken over Facebook and it was about time someone built a new one. This app is built with Ruby on Rails and features the whole shibang: user authentication, API calls, error handling, sessions tracking...sign up (fake emails/passwords will work) and come say hi.",
  fbPhoneMock,
  )
const chess = Project(
  'Chess', 
  chessImg, 
  chessmock,
  'https://replit.com/@bhenning83/chess?v=1', 
  'https://github.com/bhenning83/chess',
  "I told a friend I was writing a chess game and he said, 'Oh wow. So you would need to know how to play chess to make that?' ...yes, Trevor. I also needed to know the logic behind being able to move the pieces around the board, determing legal vs illegal moves, taking opponent pieces, and determining check and checkmate. The game is played entirely in the console; the live preview runs the game in a simulated online console. However, saving the game won't work as it utilizes local storage. To use the save game feature, head to my Github repo, fork it, clone it, bundle install it, and run it locally."
  )
const mastermind = Project(
  'Mastermind', 
  mastermindImg, 
  mastermindmock,
  'https://replit.com/@bhenning83/mastermind?v=1', 
  'https://github.com/bhenning83/mastermind',
  "This program allows you to play Mastermind against the computer, either as the mastermind or as the code breaker. When playing as the mastermind, the computer uses intelligence to guess your code. And yes, I have lost against my own program. The game is played entirely in the console; the live preview runs the game in a simulated online command line."
  )
const waldo = Project(
  "Where's Waldo", 
  waldoImg, 
  waldomock,
  'https://brendons-wheres-waldo.herokuapp.com/', 
  'https://github.com/bhenning83/wheres-waldo',
  "This app is built in Ruby on Rails and uses React for the user interface. API calls are made from the front end to access data in the backend (character coordinates, high scores, player names, etc.). I never advocate for cheating, but in the interest of allowing you to see the full functionality of the app, just hit the 'W' key at any time to access the high scores."
  )
const cart = Project(
  'Shopping Cart', 
  beansImg, 
  beansmock,
  'https://bhenning83.github.io/shopping-cart/', 
  'https://github.com/bhenning83/shopping-cart',
  "No, I won't take your money. Yet. Built in React, This project was an opportunity to practice the functionality of adding products to a shopping cart. If you happen to be a coffee roaster, let's collab. I have some ideas.",
  beansPhoneMock
  )
const toDo = Project(
  'To-Do List', 
  toDoImg, 
  toDomock,
  'https://bhenning83.github.io/to-do-list/', 
  'https://github.com/bhenning83/to-do-list',
  "I had to work through a long list of tasks to bring this app to life. Oh the irony. The app allows you to toggle between viewing in task mode or in project mode. It's written entirely in Vanilla JS, and it uses local storage, so your tasks are loaded in with each session. Might I suggest adding 'Reach Out to Brendon Henning' to your list.",
  toDoPhoneMock
  )
const cv = Project(
  'CV Generator', 
  cvImg, 
  cvmock,
  'https://bhenning83.github.io/cv-project/', 
  'https://github.com/bhenning83/cv-project',
  "Forms galore. Or forms horror, depending on how you feel. I went both ways while building this one. This was built in React and was a great exercise in form validation."
  )
const tnw = Project(
  'TNW Magazine', 
  tnwImg, 
  tnwmock,
  'https://bhenning83.github.io/TNW-magazine/', 
  'https://github.com/bhenning83/TNW-magazine',
  "The goal here was to recreate TNW's magazine layout with media queries to make it responsive. Sure, you can view it on your desktop. But I went through all that hard work, so you could at least check it out on mobile as well.",
  tnwPhoneMock
  )
const newsweek = Project(
  'Newsweek', 
  newsweekImg, 
  newsweekmock,
  'https://bhenning83.github.io/newsweek/', 
  'https://github.com/bhenning83/newsweek',
  "If you were wondering what was happening on June 23, 2020, look no further. Using Bootstrap, I recreated Newsweek's magazine. It's easy to forget it's not the real site, so don't get frustrated when none of the links or buttons work.",
  newsweekPhoneMock
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