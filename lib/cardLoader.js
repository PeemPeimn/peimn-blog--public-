import Card from '../components/card'

const CardLoader = (props) => {
  
  const posts = props.posts
  var Cards = []

  for ( const post of posts ){
    Cards.push(Card(post))
  }

  return Cards
}

export default CardLoader