import { atom, Atom } from 'nanostores'
import { useStore } from '@nanostores/react'

//=> ATOM
export const _pageLoad = atom<boolean>(false)
export const _live2dLoad = atom<boolean>(false)

//=> FUNCTIONS
export const $ = (Store: Atom, pureValue: boolean = false) =>
	pureValue ? Store.get() : useStore(Store)
