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

// Array method chain
const fishing1 = places =>
  places
    .flatMap(({ fishList }) => fishList)
    .filter(({ fish }) => fish === '🐋')
    .filter(({ cm }) => 2200 <= cm)
    .splice(0, 3)

logger('Array method chain', fishing1.bind(null, places))

// Lodash chain
import _ from 'lodash'
const fishing2 = places =>
    _.chain(places)
      .flatMap(({ fishList }) => fishList)
      .filter(({ fish }) => fish === '🐋')
      .filter(({ cm }) => 2200 <= cm)
      .take(3)
      .value()
logger('Lodash chain', fishing2.bind(null, places))