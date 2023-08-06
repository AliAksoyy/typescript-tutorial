type Bird = {
  type: "bird";
  flySpeed: number;
};

type Horse = {
  type: "horse";
  runSpeed: number;
};

type Animal = Bird | Horse;

function moveAnimal(item: Animal) {
  let speed;
  switch (item.type) {
    case "bird":
      speed = item.flySpeed;
      break;
    case "horse":
      speed = item.runSpeed;
  }
  console.log(speed);
}

moveAnimal({type:"bird", flySpeed:3})
