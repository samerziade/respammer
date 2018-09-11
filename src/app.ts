import send from './Client'
import { config } from './config'

const { runCount, interval } = config.application
let count = 0

const timer = setInterval(async () => {
  send(config).then(data => console.info(data))
  count++

  if (runCount > 0 && count === runCount) {
    clearInterval(timer)
  }
}, interval)