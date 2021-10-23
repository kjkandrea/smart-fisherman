import { goFishing } from './FishingPlace/index.js'

/**
 * @places
 * [
 *   {
 *     state: 'alaska',
 *     fishList: [
 *       {
 *         fish: '🐡',
 *         cm: 30'
 *       }
 *     ]
 *   }
 * ]
 */
const { places } = goFishing()
console.log(places[0])