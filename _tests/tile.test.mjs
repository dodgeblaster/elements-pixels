import test from 'node:test'
import assert from 'node:assert'
import { makeTileInstructions } from '../index.mjs'
import ground from './data/tiles/ground.mjs'

test('makeTileInstructions can make instructions', () => {
    const result = makeTileInstructions({
        tile: ground,
        x: 0,
        y: 0
    })

    assert.deepEqual(result, [
        { color: 'rgb(199, 192, 176)', x: 0, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 0, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 7, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 1, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 1, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 2, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 2, y: 3, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 2, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 10, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 2, y: 11, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 2, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 2, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 3, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 3, y: 4, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 3, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 11, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 3, y: 12, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 3, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 3, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 4, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 1, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 5, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 5, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 6, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 0, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 7, y: 1, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 7, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 4, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 7, y: 5, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 7, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 7, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 4, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 8, y: 5, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 8, y: 6, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 8, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 13, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 8, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 8, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 1, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 9, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 5, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 9, y: 6, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 9, y: 7, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 9, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 9, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 10, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 5, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 11, y: 6, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 11, y: 7, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 11, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 11, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 4, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 12, y: 5, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 12, y: 6, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 12, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 11, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 12, y: 12, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 12, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 12, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 4, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 13, y: 5, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 13, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 12, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 13, y: 13, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 13, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 13, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 2, height: 1, width: 1 },
        { color: 'hsl(262, 0%, 15%)', x: 14, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 14, y: 15, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 0, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 1, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 2, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 3, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 4, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 5, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 6, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 7, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 8, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 9, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 10, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 11, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 12, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 13, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 14, height: 1, width: 1 },
        { color: 'rgb(199, 192, 176)', x: 15, y: 15, height: 1, width: 1 }
    ])
})
