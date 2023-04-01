import type { InjectionKey, UnwrapNestedRefs } from 'vue'

interface Action<S> {
  [key: string]: (store: UnwrapNestedRefs<S>, ...args: any[]) => any
}

type SliceOne<T> = T extends [any, ...infer U] ? U : never

type NormalizedStoreAction<S, A extends Action<S>> = {
  [key in keyof A]: (...args: SliceOne<Parameters<A[key]>>) => ReturnType<A[key]>
}

interface StoreStatus<S, A extends Action<S>> {
  store: UnwrapNestedRefs<S>
  actions: NormalizedStoreAction<S, A>
}

export function createStore<S extends {}, A extends Action<S>>(
  store: () => S,
  actions: A,
  symbolName?: string,
) {
  type Status = StoreStatus<S, A>

  const storeKey: InjectionKey<Status> = Symbol(symbolName)

  const provideStore = () => {
    const data: Status = createStatus()

    provide(storeKey, data)

    return data
  }

  const injectStore = () => {
    const data = inject(storeKey)

    if (!data) throw new Error('Inject failed')

    return data
  }

  return {
    provide: provideStore,
    inject: injectStore,
  }

  function createStatus() {
    const newStore = reactive(store())
    const newActions: any = {}

    Object.keys(actions).forEach((action) => {
      const fn = actions[action]
      newActions[action] = fn.bind(actions, newStore)
    })

    const data: Status = {
      store: newStore,
      actions: newActions,
    }
    return data
  }
}
