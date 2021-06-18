import { memeData } from "./MemesList";
import { useState } from "react";

export default function HotMemeList() {

  const hotMemesList = memeData.map((meme) => (
    <div>
      <h2>{meme.title}</h2>
      <img src={meme.img}></img>
      <div>
        <button>Mocne({meme.upvotes})</button>
      </div>
      <div>
        <button>Słabe({meme.downvotes})</button>
      </div>
    </div>
  ));

  return <div>{hotMemesList}</div>;
}
