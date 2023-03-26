import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputForm = document.querySelector('.form');
const firstdelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name = "step"]');
const amount = document.querySelector('input[name="amount"]');
let delayTime = null;
let stepValue = null;
let promiseCount = null;



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, (delayTime += stepValue));

  })
}

function onSubmit(evt) {
  evt.preventDefault();
  delayTime = Number(firstdelay.value);
  stepValue = Number(delayStep.value);
  promiseCount = Number(amount.value);
  for (let i = 1; i < promiseCount; i+=1) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
  refs.formEl.reset();
}

inputForm.addEventListener('submit', onSubmit)