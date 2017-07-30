const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const RATIO = Math.PI * 2 / DAY
const PHASE_SHIFT = 12 * HOUR * RATIO

function intensity(miliseconds) {
  let time = miliseconds * RATIO
  let x = Math.cos(time + PHASE_SHIFT) * 0.4
  x += Math.cos(time * 2 + PHASE_SHIFT) * 0.2
  x += Math.cos(time * 4 + PHASE_SHIFT) * 0.2
  x = ((x + 1) / 2) / 8
  return x
}

for(var i = 0; i < DAY; i += HOUR / 6) {
  chance = intensity(i);
  let timedate = new Date(i)
  const time = timedate.toLocaleTimeString('en-US', {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC"
  })
  console.log(time, chance);
}
