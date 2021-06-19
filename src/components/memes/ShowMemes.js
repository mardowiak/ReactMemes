import { connect } from "react-redux";

function ShowMemes({ memes }) {
  const hotMemes = memes.filter(meme => meme.upvote > 5)

  return (<div>

    {hotMemes.map(meme => <div><h2>{meme.title}</h2>
      <img src={meme.img} alt="img" />
      <div>
        <button >Mocne({meme.upvotes})</button>
        <button>Słabe({meme.downvotes})</button>
      </div>

    </div>)}
  </div>)

}
const mapStateToProps = state => ({
  memes: state
})

export default connect(mapStateToProps, {})(ShowMemes)
