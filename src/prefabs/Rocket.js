//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);// add to an existng scene, displayList, updateList
        this.isFiring = false;  //track rockets firing stats

        this.sfxRocket = scene.sound.add('sfx_rocket'); //add rocket sfx
    }

    update() {
        // left/right movement
        if (!this.isFiring) {
            if(keyLEFT.isDown && this.x >= 47) {
                this.x -= 2;
            } else if (keyRIGHT.isDown && this.x <= 578) {
                this.x +=2;
            }
        }
        // fire button
        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  //play sfx
        }
        // if fired, move up
        if(this.isFiring && this.y >= 30) {
            this.y -= 2;
        }
        // rest on miss
        if(this.y <= 30) {
            this.isFiring = false;
            this.y = 431;
        }

    }
    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}