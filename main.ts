input.onButtonPressed(Button.A, function () {
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
    music.ringTone(262)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("BOOOOOOOOOOOOOOOOOOOOO")
    basic.showIcon(IconNames.Sad)
    music.ringTone(262)
    basic.showString("HELLO SON, I AM YOUR FATHER")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("BOOOOOOOOOOOOOOOOOOOOO")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
    music.playMelody("A F E F D G E F ", 120)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.yawn), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Chessboard)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("BOOOOOOOOOOOOOOOOOOOOO")
})
