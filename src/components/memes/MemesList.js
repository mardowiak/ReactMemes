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
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
export const memeData = [
  {
    id: 1,
    title: "Mem1",
    upvotes: 7,
    downvotes: 1,
    img: mem1,
  },
  {
    id: 2,
    title: "Mem2",
    upvotes: 9,
    downvotes: 20,
    img: mem2,
  },
  {
    id: 3,
    title: "Mem3",
    upvotes: 5,
    downvotes: 3,
    img: mem3,
  },
  {
    id: 4,
    title: "Mem4",
    upvotes: 2,
    downvotes: 3,
    img: mem4,
  },
  {
    id: 5,
    title: "Mem5",
    upvotes: 6,
    downvotes: 11,
    img: mem5,
  },
  {
    id: 6,
    title: "Mem6",
    upvotes: 44,
    downvotes: 23,
    img: mem6,
  },
  {
    id: 7,
    title: "Mem7",
    upvotes: 66,
    downvotes: 54,
    img: mem7,
  },
  {
    id: 8,
    title: "Mem8",
    upvotes: 4,
    downvotes: 1,
    img: mem8,
  },
  {
    id: 9,
    title: "Mem9",
    upvotes: 0,
    downvotes: 0,
    img: mem9,
  },
  {
    id: 10,
    title: "Mem10",
    upvotes: 777,
    downvotes: 77,
    img: mem10,
  },
];

function memes(state = memeData, action) {
  switch (action.type) {
    default:
      return state
  }
}


export const store = createStore(memes, composeWithDevTools())
window.store = store;