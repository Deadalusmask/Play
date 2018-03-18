import BaseIMG from '../assets/Base.png'
import BaseData from '../assets/Base.json'

class Base extends PIXI.Container {
    constructor(){
        super()
        const baseTexture = new PIXI.BaseTexture.from(BaseIMG, PIXI.SCALE_MODES.NEAREST, 1)
        const spritesheet = new PIXI.Spritesheet(baseTexture, BaseData)
        this.frames = []

        spritesheet.parse(() => {
            for (var i = 0; i < 9; i++) {
                this.frames.push(PIXI.Texture.fromFrame('Base ' + i + '.ase'))
            }
        })
        let idle = new PIXI.extras.AnimatedSprite(this.frames.slice(0,1))
        let run = new PIXI.extras.AnimatedSprite(this.frames.slice(3,9))
        let jump = new PIXI.extras.AnimatedSprite(this.frames.slice(1,2))
        let dash = new PIXI.extras.AnimatedSprite(this.frames.slice(2,3))
        for(let key in this.anims){
            this.anims[key].anchor.set(0.5);
            this.anims[key].position.set(this.anims[key].width/2,this.anims[key].height/2)
        }
        this.anims = {
            'idle': idle,
            'run': run,
            'jump': jump,
            'dasj': dash
        }
        this.animationSpeed = 0.2
        this._animationSpeed = 0.2
        this.scale.set(2)
        this.pivot.x = 17
        this.pivot.y = 16

        this.addChild(this.anims['idle'])
        this.getChildAt(0).play()
    }

    set animationSpeed(value) {
        this._animationSpeed = value
        for(let key in this.anims){
            this.anims[key].animationSpeed = value
        }
    }

    get animationSpeed() {
        return this._animationSpeed
    }

    setStatus(status){
        if(this.anims[status] && this.getChildAt(0) != this.anims[status]){
            this.removeChildAt(0)
            this.addChild(this.anims[status])
            this.getChildAt(0).play()
        }
    }

}

export default Base