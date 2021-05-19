import initialMeme from "./img/initialMeme.jpg";
export default function FirstMeme() {
  const memeData = [
    {
      title: "Sukces",
      upvotes: 10,
      downvotes: 3,
      img: "C:UsersMarcinDesktopReactMemes\bruhsrccomponentsmemesimg",
    },
  ];
  return (
    <div>
      <h4>{memeData[0].title}</h4>
      <img src={initialMeme}></img>
      <div>
        <button>Mocne</button>
        <button>Słabe</button><p>Ocena: {memeData[0].upvotes-memeData[0].downvotes}</p>
      </div>
    </div>
  );
}
