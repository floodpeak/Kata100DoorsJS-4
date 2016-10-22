import {expect} from 'chai'
import getDoorTogglePoints from '../getDoorTogglePoints'

describe('100 doors', ()=>{
  it('should be [1] for door 1', ()=>{
    expect(getDoorTogglePoints(1)).to.be.eql([1])
  })
})
