type Bird = {
  type: "bird";
  flyS: number;
};

type Horse = {
  type: "horse";
  runS: number;
};

type Animal = Bird | Horse;

function move(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyS;
      break;
    case "horse":
      speed = animal.runS;
      break;
  }
  console.log(speed);
}

move({ type: "bird", flyS: 3 });
