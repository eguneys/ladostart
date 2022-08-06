import './rhythm.css'
import { createSignal, createEffect, onMount, onCleanup } from 'solid-js'
import g from '~/modules/music/glyphs'
import { read, write, owrite } from '~/modules/play'
import { useSolsido } from '~/modules/providers'
import Sol_Rhythm from '~/modules/sol_rhythm'

import { _VStaff } from '~/components/util'

export default function Index() {

  let sol_rhythm = new Sol_Rhythm(useSolsido())

  return (<main>
     <RExercises exercises={sol_rhythm._exercises}/>
      </main>)
}


const RExercises = props => {
  return (<div class='rhythm-exercises'>
    <h2> Yardstick Exercise </h2>
    <div class="yardstick-wrap">
      <Yardstick beats={props.exercises.yardstick} />
    </div>

    <h2> Notes Exercise </h2>
    <div class="main-staff">
      <_VStaff/>
    </div>
</div>)
}


const Yardstick = props => {

  return (<>
    <yardstick>
      <For each={props.beats}>{beat =>
        <For each={beat.divisions}>{ sub =>
          <stick/>
        }</For>
      }</For>
    </yardstick>
      </>)
}
