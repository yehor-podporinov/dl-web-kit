import { BN } from './bn'

describe('performs BN unit test', () => {
  describe('performs constructor', () => {
    test('formRaw should return correct value', () => {
      expect(BN.fromRaw(1, 1).valueOf()).toBe('10')
      expect(BN.fromRaw(1, 2).valueOf()).toBe('100')
      expect(BN.fromRaw(1, 3).valueOf()).toBe('1000')
      expect(BN.fromRaw(1, 18).valueOf()).toBe('1000000000000000000')
      expect(BN.fromRaw(0.1, 6).valueOf()).toBe('100000')
      expect(BN.fromRaw(0.123, 6).valueOf()).toBe('123000')
    })

    test('fromFraction should return correct value', () => {
      expect(
        BN.fromBigInt('1000000000000000000', 18).fromFraction(18).valueOf(),
      ).toBe('1')

      expect(BN.fromBigInt('1000000000000000000', 18).valueOf()).toBe(
        BN.fromRaw(1, 18).valueOf(),
      )
    })
  })

  describe('performs math operations', () => {
    test('multiply should return correct value', () => {
      expect(BN.fromRaw(1, 1).mul(BN.fromRaw(0, 1)).valueOf()).toBe('0')
      expect(BN.fromRaw(2, 1).mul(BN.fromRaw(3, 1)).valueOf()).toBe('60')

      expect(BN.fromRaw(2, 18).mul(BN.fromRaw(3, 12)).valueOf()).toBe(
        '6000000000000000000',
      )
    })
    test('divide should return correct value', () => {
      expect(BN.fromRaw(2, 1).div(BN.fromRaw(3, 1)).valueOf()).toBe('0.6')
      expect(BN.fromRaw(2, 18).div(BN.fromRaw(3, 16)).valueOf()).toBe(
        '0.666666666666666666',
      )
    })
    test('adding should return correct value', () => {
      expect(BN.fromRaw(2, 1).add(BN.fromRaw(3, 1)).valueOf()).toBe('50')
      expect(BN.fromRaw(2, 18).add(BN.fromRaw(3, 6)).valueOf()).toBe(
        '5000000000000000000',
      )
    })
    test('subtract should return correct value', () => {
      expect(BN.fromRaw(2, 1).sub(BN.fromRaw(3, 1)).valueOf()).toBe('-10')
      expect(BN.fromRaw(2, 18).sub(BN.fromRaw(3, 6)).valueOf()).toBe(
        '-1000000000000000000',
      )
    })
    test('compare should return correct value', () => {
      expect(BN.fromRaw(2, 18).isGreaterThan(BN.fromRaw(1, 18))).toBe(true)
      expect(BN.fromRaw(1, 18).isLessThan(BN.fromRaw(2, 18))).toBe(true)
      expect(BN.fromRaw(2, 18).isGreaterThanOrEqualTo(BN.fromRaw(2, 18))).toBe(
        true,
      )
      expect(BN.fromRaw(2, 18).isLessThanOrEqualTo(BN.fromRaw(2, 18))).toBe(
        true,
      )
    })
  })

  describe('performs formatting', () => {
    test('formatting should return correct string', () => {
      expect(
        BN.fromRaw(1, 1).mul(BN.fromRaw(0, 1)).format({
          decimals: 2,
        }),
      ).toBe('0.00')

      expect(
        BN.fromRaw(2, 18).mul(BN.fromRaw(3, 18)).format({
          decimals: 0,
          groupSeparator: ',',
        }),
      ).toBe('6,000,000,000,000,000,000')

      expect(
        BN.fromRaw(2, 18).mul(BN.fromRaw(3, 18)).format({
          decimals: 6,
          groupSeparator: ',',
        }),
      ).toBe('6,000,000,000,000,000,000.000000')

      expect(
        BN.fromRaw(2, 18).mul(BN.fromRaw(3, 18)).format({
          decimals: 6,
          groupSeparator: '.',
          decimalSeparator: ',',
        }),
      ).toBe('6.000.000.000.000.000.000,000000')

      expect(
        BN.fromRaw(2, 18).mul(BN.fromRaw(3, 18)).format({
          decimals: 6,
          groupSeparator: '.',
          decimalSeparator: ',',
          groupSize: 2,
        }),
      ).toBe('6.00.00.00.00.00.00.00.00.00,000000')
    })
  })

  test('MAX_UINT256 should return correct value', () => {
    expect(BN.MAX_UINT256.valueOf()).toBe(
      '115792089237316195423570985008687907853269984665640564039457584007913129639935',
    )
  })
})
