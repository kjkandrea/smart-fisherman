import { goFishing } from './FishingPlace/index.js'

/**
 * @places
 * [
 *   {
 *     placeName: string,
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