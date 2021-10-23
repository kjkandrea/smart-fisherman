import fishEntries from '../data/fishEntries.js'
import usStates from '../data/usStates.js'

export class FishingPlace {
  constructor (fishEntries, states, howMany) {
    // this._places = states
    const fishList = this.genFishList(fishEntries, howMany)
    console.log(fishList.some(
      fish => fish.fish === '🐋' && fish.cm >= 2000)
    )
  }

  genFishList(fishEntries, howMany) {
    const candidate = this.getCandidate(fishEntries)
    return Array(howMany).fill(null).map(_ => this.pickFish(candidate))
  }

  getCandidate(fishEntries) {
    return fishEntries
    .map(item => ({
      fish: item.fish,
      range: item.range,
      length: Math.floor(item.percentage * 100),
    }))
    .reduce((candidate, { fish, range, length }) =>
      candidate.concat(Array(length).fill({
        fish,
        range
      }))
    , [])
  }

  pickFish(candidate) {
    const { fish, range: [min, max] } = candidate[getRandomNumber(0, candidate.length)]
    const cm = getRandomNumber(min, max)
    return {
      fish,
      cm
    }
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const goFishing = () => new FishingPlace(fishEntries, usStates, 1000)