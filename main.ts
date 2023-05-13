basic.forever(function () {
    basic.showString("music!")
    basic.showIcon(IconNames.Surprised)
    if (input.isGesture(Gesture.TiltLeft)) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    }
})
