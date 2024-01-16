import DoorModel from "@/models/door";

export const createDoor = (qtd: number, withGift: number): DoorModel[] => {
  return Array.from({ length: qtd }, (_, index) => {
    const doorNumber = index + 1;
    return new DoorModel(doorNumber, doorNumber === withGift);
  });
};

export const updateDoors = (
  doors: DoorModel[],
  doorModified: DoorModel
): DoorModel[] => {
  return doors.map((door) => {
    if (door.number === doorModified.number) {
      return doorModified;
    } else {
      return door.isOpen ? door : door.deselect();
    }
  });
};

export const openTheDoor = (
  doors: DoorModel[],
  doorUpdated: DoorModel
): DoorModel[] => {
  return doors.map((door) => {
    if (doorUpdated.withGift) return door.open();
    if (door.number === doorUpdated.number) return door.open();
    else return door;
  });
};
