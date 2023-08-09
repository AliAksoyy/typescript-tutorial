class Input {
  template: HTMLTemplateElement;
  hostEl: HTMLDivElement;
  el: HTMLFormElement;
  constructor() {
    this.template = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostEl = document.getElementById("app")! as HTMLDivElement;

    const importNode = document.importNode(this.template.content, true);
    this.el = importNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostEl.insertAdjacentElement("afterbegin", this.el);
  }
}

let a = new Input();
