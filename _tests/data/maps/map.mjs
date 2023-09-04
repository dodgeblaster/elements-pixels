import ground from '../tiles/ground.mjs'
import wall from '../tiles/wall.mjs'

const key = {
    '.': null,
    1: { tile: ground },
    2: { tile: wall }
}

const map = ['.....', '.212.', '.212.']

export default {
    key,
    map
}
