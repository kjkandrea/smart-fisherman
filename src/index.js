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
    .map(({ fishList }) => fishList)
    .flat()
    .filter(({ fish }) => fish === '🐋')
    .filter(({ cm }) => 2200 <= cm)
    .splice(0, 3)

// Lodash chain
import _ from 'lodash'
const fishing2 = places =>
    _.chain(places)
      .map(({ fishList }) => fishList)
      .flatten()
      .filter(({ fish }) => fish === '🐋')
      .filter(({ cm }) => 2200 <= cm)
      .take(3)
      .value()

// Lazy chain
import Lazy from 'lazy.js'
const fishing3 = places =>
  Lazy(places)
    .map(({ fishList }) => fishList)
    .flatten()
    .filter(({ fish }) => fish === '🐋')
    .filter(({ cm }) => 2200 <= cm)
    .take(3)
    .value()



logger('Array method chain', fishing1.bind(null, places))
logger('Lodash chain', fishing2.bind(null, places))
logger('Lazy chain', fishing3.bind(null, places))

// Lodash flow