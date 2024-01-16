import DoorModel from "@/models/door";
import Gift from "./gift";
import { openTheDoor, updateDoors } from "@/utils/functions";
import { Dispatch, SetStateAction } from "react";

export default function DoorGrid({
  doors,
  setDoors
}: {
  doors: DoorModel[];
  setDoors: Dispatch<SetStateAction<DoorModel[] | undefined>>;
}) {
  return (
    <div className="w-full h-full box-border flex flex-wrap justify-around gap-2 items-center ">
      {doors.map((door) => {
        const { number, selected, isOpen, withGift } = door;

        const handleSelect = () => {
          if (isOpen) return;
          setDoors(updateDoors(doors, door.changeSelection()));
        };

        const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          setDoors(openTheDoor(doors, door));
        };
        return (
          <div
            className={`w-72 h-80 border-4 border-orange-950 rounded-t-full  shadow-yellow-600 shadow-inner flex  flex-col
           after:w-full after:bg-neutral-600 pt-7 after:shadow-md after:shadow-neutral-600 after:h-2 after:mt-auto relative ${
             selected && !isOpen ? "border-yellow-500" : "border-orange-950"
           } ${isOpen ? "bg-transparent" : "bg-zinc-800"}`}
            key={door.number}
            onClick={handleSelect}
          >
            {!isOpen && (
              <div className="flex w-full h-full flex-col">
                <p className="self-center font-bold text-3xl text-orange-300">
                  {number}
                </p>
                <span
                  onClick={handleOpen}
                  className="w-10 h-10 bg-orange-800 ml-2 border-amber-900 border-2 rounded-full mt-[50%]"
                />
              </div>
            )}
            {withGift && isOpen && <Gift />}
          </div>
        );
      })}
    </div>
  );
}
