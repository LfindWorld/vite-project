// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootStateTypes, AllStateTypes } from './interface'
import user from './modules/user'

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

export const store = createStore<RootStateTypes>({
  strict: true,
  state: {
    count: 0
  },
  modules: {
    user
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore (): Store<AllStateTypes> {
  return baseUseStore<AllStateTypes>(key)
}
