import Keyboard from '../utils/keyboard'



class BaseController{
    constructor(base){
        this.base = base

        this.g = 0.5
        this.jumpSpeed = 10
        this.moveSpeed = 3
        this.jumpCount = 2

        this._faceRight = true
        this._vV = 0
        this._landed = true
        this._jumpCount = this.jumpCount

        this.ArrowLeft = new Keyboard('ArrowLeft')
        this.ArrowRight = new Keyboard('ArrowRight')
        this.Space = new Keyboard(' ')
        this.Space.press = () => {
            if(this._landed||this._jumpCount>0){
                this._jumpCount -= 1
                this._vV = this.jumpSpeed
                this._landed = false
            }
        }
    }

    _h_move(delta){
        if(this.ArrowRight.isDown && !this.ArrowLeft.isDown){
            if(!this._faceRight){
                this.base.scale.x *= -1
                this._faceRight = true
            }
            this.base.x += this.moveSpeed*delta
            return 'run'
        } else if(this.ArrowLeft.isDown && !this.ArrowRight.isDown){
            if(this._faceRight){
                this.base.scale.x *= -1
                this._faceRight = false
            }
            this.base.x -= this.moveSpeed*delta
            return 'run'
        } else {
            return 'idle'
        }
    }

    loop(delta){
        if(this._landed){
            let status = this._h_move(delta)
            this.base.setStatus(status)
        } else {

            let distance = this._vV*delta

            if(this.base.y-distance>400){
                this.base.y = 400
                this._landed = true
                this._jumpCount = this.jumpCount
            }else{
                this.base.y -= distance
                this._vV -= this.g * delta
            }
            this._h_move(delta)
            this.base.setStatus('jump')
        }
        if(this.base.x>750){
            this.base.x = 750
        }
        if(this.base.x<50){
            this.base.x = 50
        }
    }
}

export default BaseController

