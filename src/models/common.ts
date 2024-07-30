import { RootState, AppDispatch } from '@src/store'

export interface IThunkAPI {
  dispatch: AppDispatch
  state: RootState
  rejectValue: any
}
