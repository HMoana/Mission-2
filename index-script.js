// ~~~ h2 logo styling ~~~

const styleLogo = document.getElementById(`logo`);

styleLogo.style.fontSize = `50px`;
styleLogo.style.fontFamily = `'Babylonica'`;

// ~~~ for loop nav links to create id ~~~

const navLinks = document.getElementsByTagName(`a`);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].id = `link-` + i;
}

// ~~~ use ids to add mouseenter event changing font style ~~~

const home = document.getElementById(`link-0`);
const pL = document.getElementById(`link-1`);
const iP = document.getElementById(`link-2`);
const cM = document.getElementById(`link-3`);
const readMorePl = document.getElementById(`link-4`);
const readMoreiP = document.getElementById(`link-5`);

home.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.fontSize = `30px`;
    event.target.style.fontFamily = `'Babylonica'`;
    setTimeout(() => {
      event.target.style.fontSize = ``;
      event.target.style.fontFamily = ``;
    }, 1000);
  },
  false
);

pL.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.fontSize = `30px`;
    event.target.style.fontFamily = `'Babylonica'`;
    setTimeout(() => {
      event.target.style.fontSize = ``;
      event.target.style.fontFamily = ``;
    }, 1000);
  },
  false
);

iP.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.fontSize = `30px`;
    event.target.style.fontFamily = `'Babylonica'`;
    setTimeout(() => {
      event.target.style.fontSize = ``;
      event.target.style.fontFamily = ``;
    }, 1000);
  },
  false
);

cM.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.fontSize = `30px`;
    event.target.style.fontFamily = `'Babylonica'`;
    setTimeout(() => {
      event.target.style.fontSize = ``;
      event.target.style.fontFamily = ``;
    }, 1000);
  },
  false
);

readMorePl.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.fontSize = `30px`;
    event.target.style.fontFamily = `'Babylonica'`;
    setTimeout(() => {
      event.target.style.fontSize = ``;
      event.target.style.fontFamily = ``;
    }, 1000);
  },
  false
);

readMoreiP.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.fontSize = `30px`;
    event.target.style.fontFamily = `'Babylonica'`;
    setTimeout(() => {
      event.target.style.fontSize = ``;
      event.target.style.fontFamily = ``;
    }, 1000);
  },
  false
);

//  ~~~ newsletter subscription form ~~~

const email = document.getElementById(`email`);
const errorElement = document.getElementById(`error`);
const subButton = document.getElementById(`button`);
const successElement = document.getElementById(`success`);

subButton.addEventListener(`click`, (e) => {
  let message = [];
  if (email.value === `` || email.value == null) {
    message.push(`Enter your Email Address`);
  }
  if (email.value === `` || email.value == null) {
    errorElement.innerText = message;
    errorElement.style.color = `red`;
  } else {
    e.preventDefault();
    errorElement.innerText = successElement.innerText;
    successElement.innerText = `Thanks for subscribing!`;
    successElement.style.color = `#64aa4b`;
  }
  email.value = ``;
});

// ~~~ contact form submit ~~~

const userName = document.getElementById(`names`);
const userEmail = document.getElementById(`emails`);
const submit = document.getElementById(`submit`);
const contactError = document.getElementById(`contactError`);
const contactSuccessEl = document.getElementById(`contactSuccess`);

submit.addEventListener(`click`, (e) => {
  let messages = [];
  if (userName.value === `` || userName.value == null) {
    messages.push(`Please enter all fields`);
  }
  if (userName.value === `` || userName.value == null) {
    contactError.innerText = messages;
    contactError.style.color = `red`;
  }
  if (userEmail.value === `` || userEmail.value == null) {
    messages.join(`,`);
  }
  if (userEmail.value === `` || userEmail.value == null) {
    contactError.innerText = messages;
    contactError.style.color = `red`;
  } else {
    e.preventDefault();
    contactError.innerText = contactSuccessEl.innerText;
    contactSuccessEl.innerText = ` ✓ Successful`;
    contactSuccessEl.style.color = `#64aa4b`;
  }
  userName.value = ``;
  userEmail.value = ``;
});

// ~~~ add counter to welcome banner ~~~

const countEl = document.getElementById(`counter-value`);

let interval = 6500;

function counting() {
  let startValue = 0;
  let endValue = parseInt(countEl.getAttribute(`data-val`));
  console.log(endValue);
  let duration = interval / endValue;
  let counter = setInterval(function () {
    startValue += 1;
    countEl.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}
counting();

// ~~~ counter mouseenter event styling ~~~

const counterStyle = document.getElementById(`counter`);

counterStyle.addEventListener(
  "mouseenter",
  (event) => {
    event.target.style.fontSize = `30px`;
    event.target.style.color = `#333`;
    setTimeout(() => {
      event.target.style.fontSize = ``;
      event.target.style.color = ``;
    }, 1000);
  },
  false
);
