import { connect} from "react-redux";

function ShowMemes({ memes }) {
  return (<div>
    {memes.map(meme => <div><h2>{meme.title}</h2>
      <img src={meme.img} alt="img" />
      <div>
        <button>Mocne({meme.upvotes})</button>
        <button>Słabe({meme.downvotes})</button>
      </div>

    </div>)}
  </div>)

}
const mapStateToProps = state => ({
  memes: state
})

export default connect(mapStateToProps, {})(ShowMemes)
