"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [qtd, setQtd] = useState<number>(3);
  const handleQtd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQtd(value >= 3 ? value : 3);
  };
  return (
    <div className="flex items-center justify-center w-full h-full flex-col gap-11">
      <div className="grid grid-cols-3 w-2/5  font-sans py-5  bg-teal-950">
        <button
          onClick={() => setQtd(qtd - 1 >= 3 ? qtd - 1 : 3)}
       className="flex-1 bg-black hover:bg-slate-900 duration-200 text-[70px]"
       >
          -
        </button>
        <input
          type="number"
          className="bg-transparent text-[50px] text-center outline-none appearance-none"
          value={qtd}
          onChange={handleQtd}
        />
        <button className="bg-black hover:bg-slate-900 duration-200 flex-1 text-[70px]" onClick={() => setQtd(qtd + 1)}>+</button>
      </div>
      <Link href={`/game/${qtd}`} className="text-[40px] rounded-full font-serif bg-orange-800 px-14 py-3 hover:bg-orange-700 duration-200">Jogar</Link>
    </div>
  );
}
