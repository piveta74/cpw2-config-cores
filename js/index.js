const $ = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document)

const onChangeRangesRGBA = () => {
    const red = $('#red').value
    const green = $('#green').value
    const blue = $('#blue').value
    const alpha = $('#alpha').value

    $('#color-display-rgba').style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

$all('#color-ranges-rgba input[type=range]').forEach((range) => (range.oninput = onChangeRangesRGBA))

const onChangeRangesHSL = () => {
    const hue = $('#hue').value
    const saturation = $('#saturation').value + '%'
    const lightness = $('#lightness').value + '%'

    $('#color-display-hsl').style.backgroundColor = `hsl(${hue}, ${saturation}, ${lightness})`
    console.log(hue)
    console.log(saturation)
    console.log(lightness)
}

$all('#color-ranges-hsl input[type=range]').forEach((range) => (range.oninput = onChangeRangesHSL))