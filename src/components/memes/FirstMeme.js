import initialMeme from "./img/initialMeme.jpg";
import { useState } from "react";
export default function FirstMeme() {
  const [upvotes, setUpvotes] = useState(10);
  const [downvotes, setDownvotes] = useState(3);
  const memeData = [
    {
      title: "Sukces",
      upvotes: upvotes,
      downvotes: downvotes,
      img: "C:UsersMarcinDesktopReactMemes\bruhsrccomponentsmemesimg",
    },
  ];
  return (
    <div>
      <h4>{memeData[0].title}</h4>
      <img src={initialMeme}></img>
      <div>
        <button onClick={() => setUpvotes(upvotes + 1)}>Mocne</button>
        <button onClick={() => setDownvotes(downvotes + 1)}>Słabe</button>
        <p>Ocena: {memeData[0].upvotes - memeData[0].downvotes}</p>
      </div>
    </div>
  );
}
