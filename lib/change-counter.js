const addToCounter = () => {
  const counterElement = document.querySelector('#counter_element');

  let counterValue = Number(counterElement.innerHTML) + 1;

  counterElement.innerHTML = counterValue;
}

const decreaseCounter = () => {
  const counterElement = document.querySelector('#counter_element');

  let counterValue = Number(counterElement.innerHTML) - 1;

  counterElement.innerHTML = counterValue;
}


module.exports = {
  addToCounter,
  decreaseCounter
}