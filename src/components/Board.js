import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Player from '../components/Player'
import './Board.css'

const sortByScore = (arr) => {
  return arr.concat().sort((a, b) => {
    return b.score - a.score
  })
}

export default class Board extends PureComponent {
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