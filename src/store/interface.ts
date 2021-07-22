import { UserModuleTypes } from './modules/user'

export interface RootStateTypes {
  count: number
}

export interface AllStateTypes extends RootStateTypes {
  user: UserModuleTypes
}
