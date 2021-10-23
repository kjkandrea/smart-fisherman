# smart-fisherman
![fisherman](https://raw.githubusercontent.com/kjkandrea/smart-fisherman/master/fisher.jpeg?raw=true)

다양한 방법으로 물고기를 잡아볼 수 있는 객체 생성자.

## Installation
```
npm install
```

## Documentation

### generateFishingPlace
`generateFishingPlace` 를 통해 낚시터를 생성할 수 있습니다.
```
import { generateFishingPlace } from './FishingPlace/index.js'

const { places } = generateFishingPlace()
```

`generateFishingPlace` 는 다음과 같은 인자를 받을 수 있습니다.

``` typescript
generateFishingPlace(
    states: string[], // 낚시 장소들
    howMany: number, // 낚시 장소 당 생성되는 물고기 수
) => { places }
```

places 는 다음과 같은 구조를 지닙니다.
``` typescript
type Places = {
  placeName: string,
  fishList: {
      fish: '🐡'|'🐠'|'🦑'|'🐋',
      cm: number'
   }[]
}[]
const { places: Places } = generateFishingPlace()
```

생성된 `places` 를 통해 Array method, lodash, ramda 등으로 낚시를 즐겨보세요.

## Example

`lazy.js` 로 낚시 하기

``` javascript
import { generateFishingPlace } from './FishingPlace/index.js'
import logger from './logger.js'
import Lazy from 'lazy.js'

const { places } = generateFishingPlace()

const fishing = places =>
  Lazy(places).
    map(({ fishList }) => fishList).
    flatten().
    filter(({ fish }) => fish === '🐋').
    filter(({ cm }) => 2200 <= cm).
    take(3).
    value()

logger('My Lazy chain', fishing.bind(null, places))
```