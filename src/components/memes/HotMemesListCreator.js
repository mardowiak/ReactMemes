import { memeData } from "./MemesList";

export default function HotMemesListCreator() {
    const hotMemeData = memeData.filter(hot => hot.upvotes - hot.downvotes > 5)
    return (<div>
        {hotMemeData.map(meme => <div>
            <h2>{meme.title}</h2>
            <img src={meme.img} />
            <div className="buttons"><button className="upvote-button">Mocne({meme.upvotes})</button>
                <button className="downvote-button">Słabe({meme.downvotes})</button></div>

        </div>)}
    </div>)
}