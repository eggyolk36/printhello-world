input.onGesture(Gesture.EightG, function () {
    basic.showIcon(IconNames.Confused)
})
input.onButtonPressed(Button.A, function () {
    mrfishy += 1
    basic.clearScreen()
    led.plot(diyrobeknotsmelly, mrfishy)
    if (mrfishy >= 4) {
        game.addScore(-1)
        mrfishy = -1
    }
})
input.onGesture(Gesture.FreeFall, function () {
    for (let index = 0; index < 4; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Chessboard)
    }
})
input.onGesture(Gesture.SixG, function () {
    basic.showIcon(IconNames.Confused)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . .
            # # . . .
            . # . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            # # # . .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # # .
            # . . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . # # # #
            . # . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . # # #
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . . # #
            . . . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.pause(100)
    }
    basic.clearScreen()
    basic.showString("Score:")
    basic.showNumber(game.score())
    basic.pause(500)
    game.setScore(0)
})
input.onButtonPressed(Button.B, function () {
    diyrobeknotsmelly += 1
    basic.clearScreen()
    led.plot(diyrobeknotsmelly, mrfishy)
    if (diyrobeknotsmelly >= 5) {
        game.addScore(-1)
        diyrobeknotsmelly = -1
    }
})
input.onGesture(Gesture.LogoDown, function () {
    music.playMelody("E B C5 A B G A F ", 120)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # . .
        # # # # .
        . # . # .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.clearScreen()
})
let mrfishy = 0
let diyrobeknotsmelly = 0
let sprite = null
diyrobeknotsmelly = 0
mrfishy = 0
