export default function Gift() {
  const gifts = [
    "https://i.giphy.com/6hUuvhV3bgnFC.webp",
    "https://i.giphy.com/4UX67HE5yk5iM.webp",
    "https://media.tenor.com/lBB_MJBfYnEAAAAi/video-games-angry.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnIza2Z3dWk1NTJqYmppNjNyYWcyc2Z0ajdiMGg1M3IzYXJkOWJyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9VxtnYZg3d3noErint/giphy.gif",
    "https://media0.giphy.com/media/6oMFYqwjd4ru0/200w.webp?cid=ecf05e47wqogi17s3j3zcfoy3l5psiiuogoyp6d9f2z00ioq&ep=v1_gifs_related&rid=200w.webp&ct=s"
  ];
  const randomGift = gifts[Math.floor(Math.random() *gifts.length)]
  
  return (
    <div className="absolute bottom-0 left-2/4 h-56 w-56 items-center flex -translate-x-2/4">
      <img src={randomGift} className=" object-contain h-full w-full" alt="grats icon" />
    </div>
  );
}
