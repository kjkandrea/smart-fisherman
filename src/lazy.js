export const curry = f => (a, ...bs) =>
  bs.length ? f(a, ...bs) : (...bs) => f(a, ...bs);

// 지연 평가가 이루어지는 친구들 네임스페이스
const L = {}

L.range = function *(stop) {
  let i = -1;
  while (++i < stop) yield i;
}

// 추상화. filter 기능을 위임
// 홀수를 뽑아라
L.filter = curry(function *(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

// 추상화. mapping 기능을 위임
// 제곱하여 맵핑하라
L.map = curry(function *(f, iter) {
  for (const a of iter) {
    yield f(a)
  }
});


L.flatten = function *(iter) {
  for (const a of iter) {
    a && a[Symbol.iterator] ? yield* a : yield a;
  }
}

// 추상화 take 기능을 위임
// length 만큼 take 하라
export const take = curry(function take(length, iter) {
  const res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length === length) return res;
  }
  return res;
});

// 추산화 reduce 기능을 위임
// 누산하라
export const reduce = curry(function(f, acc, iter) {
  if (arguments.length === 2) { // 난 이게 뭔지 모르겠어. 나중에 천천히 읽어보자
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a)
  }
  return acc
});

export const add = curry((a, b) => a + b);

export const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);
export const go = (...as) => reduce(go1, as);

export const takeWhile = curry(function(f, iter) {
  iter = iter[Symbol.iterator]();
  iter.return = null;
  let res = [];
  return function recur() {
    for (const a of iter) {
      const b = go1(a, f);
      if (!b) return res;
      if (b instanceof Promise) return b.then(
        async b => b ? (res.push(await a), recur()) : res);
      res.push(a);
    }
    return res;
  } ();
});

// takeWhile(a => a < 2, [Promise.resolve(1), Promise.resolve(2)]).then(console.log)

export default L;