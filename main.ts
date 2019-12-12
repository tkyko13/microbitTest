
let x = 2
let y = 2
basic.forever(function () {
    led.unplot(x, y)
    x += input.acceleration(Dimension.X) / 1000
    y += input.acceleration(Dimension.Y) / 1000
    x = Math.constrain(x, 0, 4)
    y = Math.constrain(y, 0, 4)
    led.plot(x, y)
})