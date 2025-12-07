import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from './counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should start with count of 0', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
  })

  it('should increment count', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('should decrement count', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    store.decrement()
    expect(store.count).toBe(1)
  })

  it('should reset count', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    store.reset()
    expect(store.count).toBe(0)
  })

  it('should compute doubleCount correctly', () => {
    const store = useCounterStore()
    store.setCount(5)
    expect(store.doubleCount).toBe(10)
  })

  it('should compute isPositive correctly', () => {
    const store = useCounterStore()
    expect(store.isPositive).toBe(false)
    store.increment()
    expect(store.isPositive).toBe(true)
  })
})
