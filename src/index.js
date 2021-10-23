import { generateFishingPlace } from './FishingPlace/index.js'
import logger from './logger.js'

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
const { places } = generateFishingPlace()

/**
 * @QUIZ : 2,200cm 이상의 🐋 3마리 잡기
 */

// Array chain
const fishing = places =>
  places
    .flatMap(({ fishList }) => fishList)
    .filter(({ fish }) => fish === '🐋')
    .filter(({ cm }) => 2200 <= cm)
    .splice(0, 3)

logger('array chain', fishing.bind(null, places))