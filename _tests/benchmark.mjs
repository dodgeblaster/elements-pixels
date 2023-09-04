#!/usr/bin/env node

import benchmark from 'benchmark'

import { makeTileInstructions, makeMapInstructions } from '../index.mjs'
import ground from './data/tiles/ground.mjs'
import map from './data/maps/map.mjs'

let suite = new benchmark.Suite()

function formatNumber(number) {
    return String(number)
        .replace(/\d{3}$/, ',$&')
        .replace(/^(\d|\d\d)(\d{3},)/, '$1,$2')
}

suite
    .add('simple', () => {
        //makeTileInstructions({ tile: ground, x: 0, y: 0 })
        makeMapInstructions({ map, x: 0, y: 0 }, [])
    })
    .on('cycle', (event) => {
        let name = event.target.name.padEnd('simple  '.length)
        let hz = formatNumber(event.target.hz.toFixed(0)).padStart(9)
        process.stdout.write(`${name}${hz} ops/sec\n`)
    })
    .on('error', (event) => {
        process.stderr.write(event.target.error.toString() + '\n')
        process.exit(1)
    })
    .run()
