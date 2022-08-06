import { createMemo, createSignal, createResource } from 'solid-js'
import { SamplesPlayer } from './audio'
import { short_range_flat_notes, fuzzy_note } from './audio'

import { make_ref } from './make_sticky'
import { useLocation } from '@solidjs/router'
import { read, write, owrite } from './play'

const getPlayerController = async (input: boolean) => {
  if (input) {

    let srcs = {}

    short_range_flat_notes.forEach(n => srcs[n] = `${n}.mp3`)

    let p = new SamplesPlayer()
    await p.init({
      srcs,
      base_url: 'assets/audio/'
    })
    return p
  }
}



export default class Solsido {

  onClick() {
    //owrite(this._user_click, true)
  }

  onScroll() {
    this.ref.$clear_bounds()
  }

  user_click() {
    owrite(this._user_click, true)
  }

  get component() {
    return this.m_component()
  }

  constructor() {

    this._user_click = createSignal(false)
    this.r_pc = createResource(this._user_click[0], getPlayerController)
    this.ref = make_ref()
  }

}
