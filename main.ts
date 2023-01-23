input.onGesture(Gesture.EightG, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.A, function () {
    diyrobeknotsmelly += -1
    basic.clearScreen()
    led.plot(diyrobeknotsmelly, mrfishy)
    led.plot(bill, benga)
    if (diyrobeknotsmelly <= 0) {
        diyrobeknotsmelly = 4
        basic.clearScreen()
        led.plot(diyrobeknotsmelly, mrfishy)
        led.plot(bill, benga)
    }
    if (diyrobeknotsmelly == bill && mrfishy == benga) {
        basic.clearScreen()
        led.plot(diyrobeknotsmelly, mrfishy)
        benga = randint(0, 5)
        bill = randint(0, 5)
        led.plot(bill, benga)
        game.addScore(1)
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
input.onButtonPressed(Button.AB, function () {
    mrfishy += 1
    basic.clearScreen()
    led.plot(diyrobeknotsmelly, mrfishy)
    led.plot(bill, benga)
    if (mrfishy >= 5) {
        mrfishy = 0
        basic.clearScreen()
        led.plot(diyrobeknotsmelly, mrfishy)
        led.plot(bill, benga)
    }
    if (diyrobeknotsmelly == bill && mrfishy == benga) {
        basic.clearScreen()
        led.plot(diyrobeknotsmelly, mrfishy)
        benga = randint(0, 5)
        bill = randint(0, 5)
        led.plot(bill, benga)
        game.addScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
    diyrobeknotsmelly += 1
    basic.clearScreen()
    led.plot(diyrobeknotsmelly, mrfishy)
    led.plot(bill, benga)
    if (diyrobeknotsmelly >= 5) {
        diyrobeknotsmelly = 0
        basic.clearScreen()
        led.plot(bill, benga)
        led.plot(diyrobeknotsmelly, mrfishy)
    }
    if (diyrobeknotsmelly == bill && mrfishy == benga) {
        basic.clearScreen()
        led.plot(diyrobeknotsmelly, mrfishy)
        benga = randint(0, 5)
        bill = randint(0, 5)
        led.plot(bill, benga)
        game.addScore(1)
    }
})
input.onGesture(Gesture.Shake, function () {
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
input.onGesture(Gesture.LogoDown, function () {
    rockpaper = randint(1, 3)
    basic.showString("rock paper scissors SHOE!")
    if (rockpaper == 1) {
        basic.clearScreen()
        rockpaper = randint(1, 3)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showString("ROCK!")
        if (rockpaper == 2) {
            basic.clearScreen()
            rockpaper = randint(1, 3)
            basic.showLeds(`
                . # . # .
                . . # . .
                . # . # .
                # # . # #
                # # . # #
                `)
            basic.showString("SCISSORS!")
            if (rockpaper == 3) {
                basic.clearScreen()
                rockpaper = randint(1, 3)
                basic.showLeds(`
                    . . . . .
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.showString("PAPER!")
            }
        }
    }
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showIcon(IconNames.Confused)
})
let rockpaper = 0
let bill = 0
let mrfishy = 0
let diyrobeknotsmelly = 0
let benga = 0
let diusy = 0
benga = randint(0, 5)
diyrobeknotsmelly = randint(0, 5)
mrfishy = 0
bill = 0
rockpaper = randint(1, 3)
