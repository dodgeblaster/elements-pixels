const DEFAULT_COLOR = 'rgb(199, 192, 176)'

// 323,725 ops/sec
export function makeTileInstructions({ tile, x, y }) {
    const size = 1
    const instructions = []
    for (let i = 0; i < tile.definition.length; i++) {
        const row = tile.definition[i]
        for (let ii = 0; ii < row.length; ii++) {
            const pixel = row[ii]
            const item = {
                color: tile.colors[pixel] || DEFAULT_COLOR,
                x: x + i * size,
                y: y + ii * size,
                height: size,
                width: size
            }
            instructions.push(item)
        }
    }

    return instructions
}

function makeTileInstructions_mutate({ tile, x, y }, instructions) {
    const size = 1
    for (let i = 0; i < tile.definition.length; i++) {
        const row = tile.definition[i]
        for (let ii = 0; ii < row.length; ii++) {
            const pixel = row[ii]
            const item = {
                color: tile.colors[pixel] || DEFAULT_COLOR,
                x: x + i * size,
                y: y + ii * size,
                height: size,
                width: size
            }
            instructions.push(item)
        }
    }
}

// 50,821 ops/sec
export function makeMapInstructions({ map, x, y }, instructions) {
    const tileKey = map.key
    for (let i = 0; i < map.map.length; i++) {
        const row = map.map[i]
        for (let ii = 0; ii < row.length; ii++) {
            const icon = map.map[i][ii]
            if (tileKey[icon]) {
                makeTileInstructions_mutate(
                    {
                        x: x + ii * 16,
                        y: y + i * 16,
                        tile: tileKey[icon].tile
                    },
                    instructions
                )
            }
        }
    }
}
