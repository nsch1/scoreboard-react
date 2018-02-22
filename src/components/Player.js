import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Player.css'

export const playerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

export default class Player extends PureComponent {
  static propTypes = playerShape.isRequired

  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
      </li>
    )
  }
}