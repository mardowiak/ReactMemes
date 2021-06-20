import { memeData } from "./MemesList";
import "./../../App.css";

export default function RegularMemesListCreator() {
    const regularMemeData = memeData.filter(regular => regular.upvotes - regular.downvotes < 5)
    return (<div>
        {regularMemeData.map(meme => <div>
            <h2>{meme.title}</h2>
            <img src={meme.img} />
            <div className="buttons"><button className="upvote-button">Mocne({meme.upvotes})</button>
                <button className="downvote-button">Słabe({meme.downvotes})</button></div>

        </div>)}
    </div>)
}