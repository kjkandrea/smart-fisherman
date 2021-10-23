import { goFishing } from './FishingPlace/index.js'

/**
 * @places
 * [
 *   {
 *     place: string,
 *     fishList: [
 *       {
 *         fish: '🐡'|'🐠'|'🦑'|'🐋',
 *         cm: number'
 *       }
 *     ]
 *   }
 * ]
 */
const { places } = goFishing()
console.log(places[0])