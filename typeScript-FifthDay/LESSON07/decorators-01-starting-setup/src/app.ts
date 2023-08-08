interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};
function Required(target: any, propName: string) {
  console.log(target);
  console.log(propName);
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
console.log(registeredValidators);

}
function PositiveNumber(target: any, propName: string) {
  console.log(target);
  console.log(propName);
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  console.log("aaaa", obj.constructor.name);
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  console.log(objectValidatorConfig);
  if (!objectValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objectValidatorConfig) {
    console.log(prop)
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = <HTMLFormElement>document.querySelector("form");

if (courseForm) {
  courseForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    const titleEl = document.querySelector("#title") as HTMLInputElement;
    const priceEl = document.querySelector("#price") as HTMLInputElement;

    const title = titleEl.value;
    const price = Number(priceEl.value);

    let createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
      alert("Invalid input please try again");
      return;
    }

    console.log(createdCourse);
  });
}
