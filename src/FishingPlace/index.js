import fishEntries from '../data/fishEntries.js'
import usStates from '../data/usStates.js'

export class FishingPlace {
  constructor (fishEntries, states, howMany) {
    // this._places = states
    const fishList = this.genFishList(fishEntries, howMany)
    console.log(fishList)
  }

  genFishList(fishEntries, howMany) {
    const candidate = this.getCandidate(fishEntries)
    return Array(howMany).fill(null).map(_ => this.pickFish(candidate))
  }

  getCandidate(fishEntries) {
    return fishEntries
    .map(item => ({
      fish: item.fish,
      range: Math.floor(item.percentage * 100)
    }))
    .reduce((candidate, { fish, range }) =>
      candidate.concat(Array(range).fill(fish))
    , [])
  }

  pickFish(candidate) {
    return candidate[this.getRandomNumber(0, candidate.length)]
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

export const goFishing = () => new FishingPlace(fishEntries, usStates, 3000)