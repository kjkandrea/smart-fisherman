import { generateFishingPlace } from './FishingPlace/index.js'
import logger from './logger.js'

/**
 * @places
 *   {
 *     placeName: string,
 *     fishList: {
 *         fish: '🐡'|'🐠'|'🦑'|'🐋',
 *         cm: number'
 *      }[]
 *   }[]
 */
const { places } = generateFishingPlace(10000, ['⛴'])
console.log('is ready')

/**
 * @QUIZ : 2,200cm 이상의 🐋 3마리 잡기
 */

// Array method chain
const fishing1 = places =>
  places.map(({ fishList }) => fishList).
    flat().
    filter(({ fish }) => fish === '🐋').
    filter(({ cm }) => 2200 <= cm).
    splice(0, 3)

// Lodash chain
import _ from 'lodash'

const fishing2 = places =>
  _.chain(places).
    map(({ fishList }) => fishList).
    flatten().
    filter(({ fish }) => fish === '🐋').
    filter(({ cm }) => 2200 <= cm).
    take(3).
    value()

// Lazy chain
import Lazy from 'lazy.js'

const fishing3 = places =>
  Lazy(places).
    map(({ fishList }) => fishList).
    flatten().
    filter(({ fish }) => fish === '🐋').
    filter(({ cm }) => 2200 <= cm).
    take(3).
    value()

// Ramda & handmade Lazy
import R from 'ramda'
import L, { take } from './lazy.js'

const fishing4 = R.pipe(
  L.map(({ fishList }) => fishList),
  L.flatten,
  L.filter(({ fish }) => fish === '🐋'),
  L.filter(({ cm }) => 2200 <= cm),
  take(3),
)

logger('Array method chain', fishing1.bind(null, places))
logger('Lodash chain', fishing2.bind(null, places))
logger('Lazy chain', fishing3.bind(null, places))
logger('Ramda & handmade Lazy', fishing4.bind(null, places))