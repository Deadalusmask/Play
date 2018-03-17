import Tree1 from '../assets/Tree1.png'

class Tree extends PIXI.Sprite {
    constructor(){
        let texture = PIXI.Texture.fromImage(Tree1);
        super(texture)
        this.scale.set(2,2)
    }
}

export default Tree