const calculate = document.querySelector('#calculate');

const IMC = () => {
  const name = document.querySelector('#name').value;
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#result');

  if (name !== '' && height !== '' && weight !== '') {

    const IMC_value = (weight / (height * height)).toFixed(1);

    let classification = '';

    if (IMC_value < 18.5) {
      classification = 'abaixo do peso.';
    } else if (IMC_value < 25) {
      classification = 'com peso ideal. Parabéns!';
    } else if (IMC_value < 30) {
      classification = 'levemente acima do peso.';
    } else if (IMC_value < 35) {
      classification = 'com obesidade grau I.';
    } else if (IMC_value < 40) {
      classification = 'com obesidade grau II';
    } else {
      classification = 'com obesidade grau III. Cuidado!'
    }

    result.textContent = `${name}, seu IMC é ${IMC_value} e você está ${classification}`;

  } else {
    result.textContent = 'Preencha todos os campos'
  }
}

calculate.addEventListener('click', IMC);
