import './index.css'

const GetItem = props => {
  const {item} = props
  const {imageUrl, name, description} = item
  return (
    <li className="list-item">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="main-head">{name}</h1>
      <p className="desc">{description}</p>
    </li>
  )
}
export default GetItem
