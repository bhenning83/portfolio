const delay = (time) => {
  return new Promise((resolve, reject) => {
    if (isNaN(time)) {
      reject(new Error('Not a valid number'))
    }
    setTimeout(resolve, time);
  })
}

export default delay