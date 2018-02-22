import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Board from './components/Board'

const players = [
  { id: 1, name: 'Arno', score: 4 },
  { id: 2, name: 'Mat', score: 6 },
  { id: 3, name: 'Mike', score: 3 },
  { id: 4, name: 'Wouter', score: 4 },
  { id: 5, name: 'Bram', score: 5 },
  { id: 6, name: 'Mimi', score: 3 }
]

describe('<App />', () => {
  const app = shallow(<App />)
  const board = <Board players={players} />

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })

  it('contains a Board', () => {
    expect(app).toContainReact(board)
  })
})