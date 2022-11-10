// TODO: create a component that displays a single bakery item
import { Component } from 'react'

class BakeryItem extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    return (
      <div>
        <img src={this.props.info.image} style={{width:"20%"}}></img>
        <h3>{this.props.info.name}</h3>
        <p>{this.props.info.description}</p>
      </div>
    )
  }
}
export default BakeryItem
