import * as PIXI from 'pixi.js'

import Tree from './sprites/tree'
import Base from './sprites/base'

import BaseController from './controllers/baseController'

import {PixelateFilter} from '@pixi/filter-pixelate';
import kerisu from './assets/40316086_p0.png'

var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb})
global.PIXI = PIXI
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
document.body.appendChild(app.view)

var tree = new Tree()
app.stage.addChild(tree)

var player = new Base()
player.position.set(100,400)
player.play()
app.stage.addChild(player)

// const interactionManager = new PIXI.interaction.InteractionManager(app.renderer)
// interactionManager.on('mousedown', jump)
// function jump(){
//     player.setStatus('run')
// }

app.ticker.add(delta => gameLoop(delta))
app.status = play


var baseController = new BaseController(player)

function gameLoop(delta){
    app.status(delta)
}

function play(delta){
    baseController.loop(delta)
}
