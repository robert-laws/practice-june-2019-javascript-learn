// practice area

// template literals

let cardTemplate = (title, image) => {
  return (`
    <div class="card" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="${title}">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, modi ullam repellat, illo repudiandae perspiciatis fugit.</p>
      </div>
    </div>
  `)
}

document.querySelector("#myText").innerHTML = cardTemplate("Bob Cobb", "/images/mountains.png")

// destructuring

let person = {
  firstName: "bob",
  lastName: "cobb",
  age: 33
}

let person2 = {
  firstName: "kal",
  lastName: "kool",
  age: 23
}

let greeting = ({firstName = 'unknown', lastName = 'unknown'}) => {
  return `hello, ${firstName} ${lastName}, how are you?`;
}

document.querySelector("#myGreeting").innerHTML = greeting(person2);