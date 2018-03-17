class Keyboard{
    constructor(key){
        this.key = key;
        this.isDown = false;
        this.isUp = true;
        this.press = undefined;
        this.release = undefined;
        document.addEventListener(
            "keydown", this.downHandler.bind(this), false
        );
        document.addEventListener(
            "keyup", this.upHandler.bind(this), false
        );
    }

    downHandler(event){
      if (event.key === this.key) {
        if (this.isUp && this.press) this.press();
        this.isDown = true;
        this.isUp = false;
      }
      event.preventDefault();
    };

    upHandler(event) {
      if (event.key === this.key) {
        if (this.isDown && this.release) this.release();
        this.isDown = false;
        this.isUp = true;
      }
      event.preventDefault();
    };

}

export default Keyboard