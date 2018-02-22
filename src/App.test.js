import React from 'react'
import { shallow } from 'enzyme'
import App, { players } from './App'
import Board from './components/Board'

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