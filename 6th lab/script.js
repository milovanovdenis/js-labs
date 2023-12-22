var colors ={
    2: ["#efe5da", "#796e6b"],
    4: ["#eddfc9", "#796e6b"],
    8: ["#f1b179", "#fefbff"],
    16: ["#f69564", "#fefbff"],
    32: ["#f57c61", "#fefbff"],
    64: ["#f65d3b", "#fefbff"],
    128: ["#edce71", "#fefbff"],
    256: ["#edcc61", "#fefbff"],
    512: ["#ebc850", "#fefbff"],
    1024: ["#ecc53e", "#fefbff"]
}

var ctx = document.getElementById("canvas").getContext("2d")

numbers = [
    [0, 0, 0, 0],
    [2, 0, 8, 4],
    [1024, 32, 64, 0],
    [2, 2, 2, 2]
]

function addPlate (i, j, n) {
    ctx.fillStyle = colors[n][0]
    ctx.fillRect(128 * j, 128 * i, 128, 128)
    ctx.fillStyle = colors[n][1]
    ctx.fillText(n, 64 + 128 * j, 64 + 128 * i)
}

ctx.textBaseLine = "bottom"
ctx.textAlign = "center"
ctx.font = 'bold 50px sans-serif'

ctx.save()

for (let i=0; i<4; i++) {
    for (let j=0; j<4; j++) {
        if (numbers[i][j]) {
            addPlate(i, j, numbers[i][j])
        }
    }
}
