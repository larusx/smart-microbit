function 原地右转() {
    makerobo.MotorRunDual(
        makerobo.Motors.Left,
        255,
        makerobo.Motors.Right,
        -255
    )
}
function 原地左转() {
    makerobo.MotorRunDual(
        makerobo.Motors.Left,
        -255,
        makerobo.Motors.Right,
        255
    )
}
function 右转() {
    makerobo.MotorRunDual(
        makerobo.Motors.Left,
        255,
        makerobo.Motors.Right,
        0
    )
}
function 左转() {
    makerobo.MotorRunDual(
        makerobo.Motors.Left,
        0,
        makerobo.Motors.Right,
        255
    )
}
function 后退() {
    makerobo.MotorRunDual(
        makerobo.Motors.Left,
        -255,
        makerobo.Motors.Right,
        -255
    )
}
function 前进() {
    makerobo.MotorRunDual(
        makerobo.Motors.Left,
        2500,
        makerobo.Motors.Right,
        2500
    )
}
function 停止() {
    makerobo.MotorRunDual(
        makerobo.Motors.Left,
        0,
        makerobo.Motors.Right,
        0
    )
}
basic.showIcon(IconNames.Happy)
TM1650.showNumber(100)
while (!(input.buttonIsPressed(Button.A))) {
    停止()
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (ps2controller.button_pressed(ps2controller.PS2Button.Up) == 1) {
        前进()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Down) == 1) {
        后退()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Left) == 1) {
        左转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Right) == 1) {
        右转()
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Triangle) == 1) {
        makerobo.MotorRun(makerobo.Motors.Centre, 255)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.Square) == 1) {
        music.play(music.stringPlayable("E D C D E E E E ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("D D D D E E E E ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("E D C D E E E E ", 120), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("D D E D C C C C ", 120), music.PlaybackMode.UntilDone)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.R1) == 1) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.R2) == 1) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (ps2controller.button_pressed(ps2controller.PS2Button.L1) == 1) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (false) {

    } else {
        停止()
        makerobo.MotorRun(makerobo.Motors.Centre, 0)
    }
})
