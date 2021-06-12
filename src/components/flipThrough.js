import delay from './delay'

const flipThrough = async () => {
  const flash = document.getElementById('photo-flash')
  const pic1 = document.getElementById('about-pic-1');
  const pic2 = document.getElementById('about-pic-2');
  const pic3 = document.getElementById('about-pic-3');
  pic1.style.display = 'block'
  pic2.style.display = 'block'
  pic3.style.display = 'block'
  await delay(1000)
  flash.style.animation = 'pour1 0.5s';
  pic1.style.display = 'none';
  await delay(600)
  flash.style.animation = 'pour2 0.5s';
  pic2.style.display = 'none';
  await delay(600)
  flash.style.animation = 'pour3 0.5s';
  pic3.style.display = 'none';
}

export default flipThrough
