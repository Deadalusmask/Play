import Keyboard from '../utils/keyboard'

class BaseController{
    constructor(base){
        this.base = base
        this.ArrowLeft = new Keyboard('ArrowLeft')
        this.ArrowRight = new Keyboard('ArrowRight')
    }

    loop(delta){
        if(this.ArrowRight.isDown && !this.ArrowLeft.isDown){
            if(!this.base.faceRight){
                this.base.scale.x *= -1
                this.base.faceRight = true
            }
            this.base.setStatus('run')
            this.base.x += 2*delta
        } else if(this.ArrowLeft.isDown && !this.ArrowRight.isDown){
            if(this.base.faceRight){
                this.base.scale.x *= -1
                this.base.faceRight = false
            }
            this.base.setStatus('run')
            this.base.x -= 2*delta
        } else {
            this.base.setStatus('idle')
        }
    }
}

export default BaseController

