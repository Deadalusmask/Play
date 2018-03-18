import * as PIXI from 'pixi.js'

import Tree from './sprites/tree'
import Base from './sprites/base'

import BaseController from './controllers/baseController'

import {PixelateFilter} from '@pixi/filter-pixelate';
import kurisu from './assets/40316086_p0.png'

var app = new PIXI.Application(800, 500, {backgroundColor : 0x1099bb})
global.PIXI = PIXI
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
document.body.appendChild(app.view)

var bg = PIXI.Sprite.fromImage(kurisu)
bg.position.set(-100,-100)
app.stage.addChild(bg)

var tree = new Tree()
tree.position.set(200,200)
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

let rectangle = new PIXI.Graphics();
rectangle.beginFill(0x66CCFF);
rectangle.drawRect(40, 417, 720, 5);
rectangle.endFill();
app.stage.addChild(rectangle);


app.ticker.add(delta => gameLoop(delta))
app.status = play


var baseController = new BaseController(player)

function gameLoop(delta){
    app.status(delta)
}

function play(delta){
    baseController.loop(delta)
}
