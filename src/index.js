import * as PIXI from 'pixi.js'

import Tree from './sprites/tree'
import Base from './sprites/base'
import kurisu from './assets/kurisu.png'

import BaseController from './controllers/baseController'


let app = new PIXI.Application(800, 500, {backgroundColor : 0x1099bb})
global.PIXI = PIXI
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
document.body.appendChild(app.view)

let bg = PIXI.Sprite.fromImage(kurisu)
app.stage.addChild(bg)

let tree = new Tree()
tree.position.set(300,200)
app.stage.addChild(tree)

let ground = new PIXI.Graphics();
ground.beginFill(0xffffec);
ground.drawRect(40, 420, 720, 5);
ground.endFill();
app.stage.addChild(ground);


let infoText = new PIXI.Text('Info Text',{fontSize: 16,fill : 0x66ddec});
infoText.position.set(20,20)
app.stage.addChild(infoText);


let mark = new PIXI.Graphics();
mark.beginFill(0xff00ff);
mark.drawRect(0, 0, 1, 1);
mark.endFill();
mark.pivot.set(0.5);
app.stage.addChild(mark);


let player = new Base()
player.position.set(100,400)
app.stage.addChild(player)

// const interactionManager = new PIXI.interaction.InteractionManager(app.renderer)
// interactionManager.on('mousedown', jump)
// function jump(){
//     player.setStatus('run')
// }


app.ticker.add(delta => gameLoop(delta))
app.status = play

let baseController = new BaseController(player)

function gameLoop(delta){
    app.status(delta)
}

function play(delta){
    baseController.loop(delta)
    infoText.text = 'position: '+baseController.base.x.toFixed(2)+', '+baseController.base.y.toFixed(2)+'\tsize: '+baseController.base.width+', '+baseController.base.height
    mark.position.set(baseController.base.x, baseController.base.y)
}
