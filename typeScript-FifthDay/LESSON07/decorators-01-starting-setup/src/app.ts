class Course {
  title: string;
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

    let a = new Course(title, price);
    console.log(a);
  });
}
