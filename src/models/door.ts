export default class DoorModel {
  #doorNumber: number;
  #withGift: boolean;
  #selected: boolean;
  #doorOpen: boolean;
  constructor(
    doorNumber: number,
    withGift: boolean = false,
    selected: boolean = false,
    isOpen: boolean = false
  ) {
    this.#doorNumber = doorNumber;
    this.#doorOpen = isOpen;
    this.#selected = selected;
    this.#withGift = withGift;
  }
  get number() {
    return this.#doorNumber;
  }
  get withGift() {
    return this.#withGift;
  }
  get selected() {
    return this.#selected;
  }
  get isOpen() {
    return this.#doorOpen;
  }

  deselect() {
    return new DoorModel(this.number, this.withGift, false, this.isOpen);
  }
  open() {
    return new DoorModel(this.number, this.withGift, this.selected, true);
  }
  changeSelection() {
    return new DoorModel(
      this.number,
      this.withGift,
      !this.selected,
      this.isOpen
    );
  }
}
