"use client";
import { useEffect, useState } from "react";
import DoorGrid from "./doorGrid";
import DoorModel from "@/models/door";
import { createDoor } from "@/utils/functions";
import Link from "next/link";

export default function Game({ params }: { params: { doorQtd: string } }) {
  const [doors, setDoors] = useState<DoorModel[] | undefined>();
  useEffect(() => {
    const qtd = Number(params.doorQtd);
    const doorWithGift = Math.floor(Math.random() * qtd) + 1;
    const doors = createDoor(qtd, doorWithGift);
    setDoors(doors);
  }, []);

  return (
    <div className="w-full h-full flex flex-col py-7 ">
      {doors && <DoorGrid doors={doors} setDoors={setDoors} />}
      <Link
        className="self-center font-serif text-3xl bg-yellow-800 p-3 px-7 rounded-lg"
        href={"/"}
      >
        Restart
      </Link>
    </div>
  );
}
