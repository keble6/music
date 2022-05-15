let noteLength = 0.5
music.setTempo(60 / noteLength)
basic.forever(function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Double))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    for (let yn = 0; yn <= 4; yn++) {
        for (let xn = 0; xn <= 4; xn++) {
            led.plot(xn, yn)
            basic.pause(noteLength * 1000 / 2)
            led.unplot(xn, yn)
            basic.pause(noteLength * 1000 / 2)
        }
    }
})
