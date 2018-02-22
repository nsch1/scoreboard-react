import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Player, { playerShape } from '../components/Player'
import PropTypes from 'prop-types'
import './Board.css'

const sortByScore = (arr) => {
  return arr.concat().sort((a, b) => {
    return b.score - a.score
  })
}

export default class Board extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired,
    updatePlayer: PropTypes.func.isRequired
  }

  render() {
    const { players } = this.props

    return (
      <div>
        <Title content="Scoreboard" />
        <ul className="Board">
          {sortByScore(players).map((player, index) => (
            <Player key={index} { ...player } />
          ))}
        </ul>
      </div>
    )
  }
}