const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const allInputs = document.querySelectorAll('.add-goal-input');
const goalSettingMessage = document.querySelector('.goal-setting p');
const allCheckboxes = document.querySelectorAll('.add-goal-checkbox');
const checkbox1 = document.querySelector('.checkbox1');
const checkbox2 = document.querySelector('.checkbox2');
const checkbox3 = document.querySelector('.checkbox3');
const test = document.querySelector('#test');
const button = document.querySelector('button');
const progressBar = document.querySelector('.progress-bar-inner');

allInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input1.value !== '' && input2.value !== '' && input3.value !== '') {
      goalSettingMessage.innerHTML = 'Good. Now try to complete these today!';
      goalSettingMessage.style.color = 'gray';
    } else {
      goalSettingMessage.innerHTML = 'Please set all the 3 goals!';
      goalSettingMessage.style.color = 'red';
      progressBar.innerHTML = '';
      checkbox1.checked = false;
      input1.classList.remove('strike');
      input1.classList.remove('input-strike');
      progressBar.classList.remove('progress-bar-one');
      checkbox2.checked = false;
      input2.classList.remove('strike');
      input2.classList.remove('input-strike');
      progressBar.classList.remove('progress-bar-two');
      checkbox3.checked = false;
      input3.classList.remove('strike');
      input3.classList.remove('input-strike');
      progressBar.classList.remove('progress-bar-three');
    }

    checkbox1.addEventListener('click', () => {
      if (
        checkbox1.checked &&
        input1.value !== '' &&
        input2.value !== '' &&
        input3.value !== ''
      ) {
        input1.classList.add('strike');
        input1.classList.add('input-strike');
        goalSettingMessage.style.color = 'gray';
      } else {
        input1.classList.remove('strike');
        input1.classList.remove('input-strike');
        goalSettingMessage.innerHTML = 'Good. Now try to complete these today!';
        goalSettingMessage.style.color = 'gray';
        progressBar.innerHTML = '';
        progressBar.classList.remove('progress-bar-one');
        checkbox1.checked = false;
      }
    });

    checkbox2.addEventListener('click', () => {
      if (
        checkbox2.checked &&
        input1.value !== '' &&
        input2.value !== '' &&
        input3.value !== ''
      ) {
        input2.classList.add('strike');
        input2.classList.add('input-strike');
      } else {
        input2.classList.remove('strike');
        input2.classList.remove('input-strike');
        goalSettingMessage.innerHTML = 'Good work! Two more to go!';
        progressBar.classList.remove('progress-bar-two');
        goalSettingMessage.style.color = 'gray';
        progressBar.innerHTML = '';
        progressBar.classList.remove('progress-bar-one');
        checkbox2.checked = false;
      }
    });

    checkbox3.addEventListener('click', () => {
      if (
        checkbox3.checked &&
        input1.value !== '' &&
        input2.value !== '' &&
        input3.value !== ''
      ) {
        input3.classList.add('strike');
        input3.classList.add('input-strike');
        goalSettingMessage.style.color = 'gray';
      } else {
        input3.classList.remove('strike');
        input3.classList.remove('input-strike');
        goalSettingMessage.style.color = 'gray';
        progressBar.innerHTML = '';
        progressBar.classList.remove('progress-bar-one');
        checkbox3.checked = false;
      }
    });

    allCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', () => {
        if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
          progressBar.innerHTML = '3/3 completed';
          goalSettingMessage.innerHTML = `Congratulations! You've done it!`;

          progressBar.classList.add('progress-bar-three');
          goalSettingMessage.style.color = 'gray';
        } else if (
          (checkbox1.checked && checkbox2.checked) ||
          (checkbox2.checked && checkbox3.checked) ||
          (checkbox1.checked && checkbox3.checked)
        ) {
          progressBar.innerHTML = '2/3 completed';
          goalSettingMessage.innerHTML = `Just a step away, keep going!`;
          progressBar.classList.add('progress-bar-two');
          progressBar.classList.remove('progress-bar-three');
          goalSettingMessage.style.color = 'gray';
        } else if (
          checkbox1.checked ||
          checkbox2.checked ||
          checkbox3.checked
        ) {
          progressBar.innerHTML = '1/3 completed';
          goalSettingMessage.innerHTML = `Good work! Two more to go!`;
          progressBar.classList.add('progress-bar-one');
          progressBar.classList.remove('progress-bar-three');
          progressBar.classList.remove('progress-bar-two');
          goalSettingMessage.style.color = 'gray';
        } else if (
          !checkbox1.checked &&
          !checkbox2.checked &&
          !checkbox3.checked
        ) {
          goalSettingMessage.innerHTML =
            'Good. Now try to complete these today!';
        }
      });
    });
  });
});
