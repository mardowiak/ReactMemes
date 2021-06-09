import mem1 from "../../img/mem1.jpg";
import mem2 from "../../img/mem2.jpg";
import mem3 from "../../img/mem3.jpg";
import mem4 from "../../img/mem4.jpg";
import mem5 from "../../img/mem5.jpg";
import mem6 from "../../img/mem6.jpg";
import mem7 from "../../img/mem7.jpg";
import mem8 from "../../img/mem8.jpg";
import mem9 from "../../img/mem9.jpg";
import mem10 from "../../img/mem10.jpg";

import {MemesContext} from "../context/MemesContext"
import MemesListCreator from "./MemesListCreator"

export default function MemesList() {
  const memeData = [
    {
      title: "Mem1",
      upvotes: 7,
      downvotes: 0,
      img: mem1,
    },
    {
      title: "Mem2",
      upvotes: 0,
      downvotes: 0,
      img: mem2,
    },
    {
      title: "Mem3",
      upvotes: 0,
      downvotes: 0,
      img: mem3,
    },
    {
      title: "Mem4",
      upvotes: 0,
      downvotes: 0,
      img: mem4,
    },
    {
      title: "Mem5",
      upvotes: 6,
      downvotes: 0,
      img: mem5,
    },
    {
      title: "Mem6",
      upvotes: 0,
      downvotes: 0,
      img: mem6,
    },
    {
      title: "Mem7",
      upvotes: 0,
      downvotes: 0,
      img: mem7,
    },
    {
      title: "Mem8",
      upvotes: 4,
      downvotes: 0,
      img: mem8,
    },
    {
      title: "Mem9",
      upvotes: 0,
      downvotes: 0,
      img: mem9,
    },
    {
      title: "Mem10",
      upvotes: 0,
      downvotes: 0,
      img: mem10,
    },
  ];

  return (
    <MemesContext.Provider value={memeData}>
    <MemesListCreator />
    </MemesContext.Provider>
  );
}
