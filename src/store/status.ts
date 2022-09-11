import { atom, Atom } from 'nanostores'
import { useStore } from '@nanostores/react'

//=> ATOM
export const _pageLoad = atom<boolean>(false)
export const _live2dLoad = atom<boolean>(false)
export const _coverHeight = atom<number>(8)

//=> FUNCTIONS
export const $ = (Store: Atom, pureValue: boolean = false) =>
	pureValue ? Store.get() : useStore(Store)
