import {Component} from 'react'

import Slider from 'react-slick'
import GetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  ReactSlick = () => {
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return settings
  }

  render() {
    const {settings} = this.ReactSlick()
    const {planetsList} = this.props
    return (
      <div className="slider-container">
        <h1 className="heading">PLANETS</h1>
        <div className="cont" data-testid="planets">
          <Slider {...settings}>
            {planetsList.map(each => (
              <GetItem key={each.id} item={each} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}
export default PlanetsSlider
