import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h3>ming3</h3>
<div id=counter></div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
