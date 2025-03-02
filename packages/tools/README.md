# @distributedlab/tools
These packages aim to provide developers with a set of commonly used functions and features for building web applications, such as handling big numbers, date manipulation, subscribing to and receiving notifications when certain events occur with EventEmitter, and more.

![version (scoped package)](https://badgen.net/npm/v/@distributedlab/tools)
![types](https://badgen.net/npm/types/@distributedlab/tools)
![tree-shaking](https://badgen.net/bundlephobia/tree-shaking/@distributedlab/tools)
![checks](https://badgen.net/github/checks/distributed-lab/web-kit/main)

## Getting Started

### Installing

```
yarn add @distributedlab/tools
```

#### Work with big numbers
```ts
import { BN } from '@distributedlab/tools';

const amountA = BN.fromRaw(2, 18)
const amountB = BN.fromRaw(3, 18)

console.log(amountA.add(amountB).format({
  decimals: 18,
  decimalSeparator: '.',
  groupSeparator: ',',
  groupSize: 3,
}))
```

#### Work with dates
```ts
import { time } from '@distributedlab/tools';

const currentDate = time()

console.log(currentDate.format('YYYY-MM-DD'))
```

## Running the tests

```
yarn test
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](../../LICENSE) file for details
