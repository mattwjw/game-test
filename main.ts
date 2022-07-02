input.onButtonPressed(Button.A, function () {
    Item.move(1)
})
input.onButtonPressed(Button.AB, function () {
    Item.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Item.move(-1)
})
let Item: game.LedSprite = null
Item = game.createSprite(0, 5)
let Evil_elvis = game.createSprite(2, 2)
basic.forever(function () {
    if (Item.isTouching(Evil_elvis)) {
        game.gameOver()
    }
})
