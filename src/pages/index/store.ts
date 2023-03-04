import { createStore } from '~/lib/store'

export const pageStore = createStore(
  () => {
    return {
      counts: [3, 3, 3],
    }
  },
  {
    plus(s, idx: number) {
      s.counts[idx]++
    },
  }
)
