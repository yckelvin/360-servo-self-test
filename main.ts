input.onButtonPressed(Button.A, function () {
    degree += -5
    microIoT.microIoT_showUserText(0, "Current Degree")
    microIoT.microIoT_showUserText(1, convertToText(degree))
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, degree)
})
input.onButtonPressed(Button.AB, function () {
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
})
input.onButtonPressed(Button.B, function () {
    degree += 5
    microIoT.microIoT_showUserText(0, "Current Degree")
    microIoT.microIoT_showUserText(1, convertToText(degree))
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, degree)
})
let degree = 0
microIoT.microIoT_initDisplay()
microIoT.microIoT_clear()
degree = 90
microIoT.microIoT_showUserText(0, "Current Degree")
microIoT.microIoT_showUserText(1, convertToText(degree))
microIoT.microIoT_ServoRun(microIoT.aServos.S1, degree)
