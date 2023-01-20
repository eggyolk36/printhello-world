def on_gesture_eight_g():
    basic.show_icon(IconNames.CONFUSED)
input.on_gesture(Gesture.EIGHT_G, on_gesture_eight_g)

def on_button_pressed_a():
    global mrfishy
    mrfishy += 1
    basic.clear_screen()
    led.plot(diyrobeknotsmelly, mrfishy)
    if mrfishy >= 4:
        game.add_score(-1)
        mrfishy = -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_free_fall():
    for index in range(4):
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.yawn),
            SoundExpressionPlayMode.IN_BACKGROUND)
        basic.show_icon(IconNames.SMALL_DIAMOND)
        basic.show_icon(IconNames.SMALL_SQUARE)
        basic.show_icon(IconNames.DIAMOND)
        basic.show_icon(IconNames.SQUARE)
        basic.show_icon(IconNames.CHESSBOARD)
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def on_gesture_six_g():
    basic.show_icon(IconNames.CONFUSED)
input.on_gesture(Gesture.SIX_G, on_gesture_six_g)

def on_gesture_screen_down():
    basic.show_icon(IconNames.SMALL_HEART)
    music.play_sound_effect(music.builtin_sound_effect(soundExpression.sad),
        SoundExpressionPlayMode.IN_BACKGROUND)
    basic.show_icon(IconNames.HEART)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.show_icon(IconNames.HEART)
    music.play_sound_effect(music.builtin_sound_effect(soundExpression.sad),
        SoundExpressionPlayMode.IN_BACKGROUND)
    basic.show_icon(IconNames.SMALL_HEART)
    basic.show_icon(IconNames.HEART)
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_ab():
    for index2 in range(1):
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . . . .
                        # # . . .
                        . # . . .
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # . . .
                        # # # . .
                        . . # . .
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # # # . .
                        # # # # .
                        # . . # .
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . # # # .
                        . # # # #
                        . # . . #
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # # #
                        . . # # #
                        . . # . .
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . # #
                        . . . # #
                        . . . # .
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . #
                        . . . . #
                        . . . . #
        """)
        basic.pause(100)
    basic.clear_screen()
    basic.show_string("Score:")
    basic.show_number(game.score())
    basic.pause(500)
    game.set_score(0)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global diyrobeknotsmelly
    diyrobeknotsmelly += 1
    basic.clear_screen()
    led.plot(diyrobeknotsmelly, mrfishy)
    if diyrobeknotsmelly >= 5:
        game.add_score(-1)
        diyrobeknotsmelly = -1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_logo_down():
    music.play_melody("E B C5 A B G A F ", 120)
    basic.show_leds("""
        . . . . .
                . # # # .
                # # # . .
                # # # # .
                . # . # .
    """)
    music.play_sound_effect(music.builtin_sound_effect(soundExpression.giggle),
        SoundExpressionPlayMode.UNTIL_DONE)
    basic.clear_screen()
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

mrfishy = 0
diyrobeknotsmelly = 0
sprite = None
diyrobeknotsmelly = 0
mrfishy = 0
led.plot(Math.random(), Math.random())