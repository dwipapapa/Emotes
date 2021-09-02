
//% weight=100 color=#0fbc11 icon=""
namespace emotes {
    
    //% block
    //% emote.shadow=screen_image_picker
    export function ems(Sprite2: Sprite, emote: Image, lifespan: number) {
        let mySprite2
        let preemote_drawing
        let emo
        let Total_emote
        mySprite2 = sprites.create(emote, SpriteKind.Player)
        preemote_drawing = image.create(mySprite2.width + 3, mySprite2.height + 2)
        preemote_drawing.fill(1)
        preemote_drawing.setPixel(0, 0, 0)
        preemote_drawing.setPixel(mySprite2.width + 3 - 1, 0, 0)
        preemote_drawing.setPixel(mySprite2.width + 3 - 1, mySprite2.height + 1, 0)
        preemote_drawing.setPixel(0, mySprite2.height + 1, 0)
        spriteutils.drawTransparentImage(emote, preemote_drawing, 2, 1)
        Total_emote = image.create(mySprite2.width + 3, mySprite2.height + 5)
        spriteutils.drawTransparentImage(preemote_drawing, Total_emote, 0, 0)
        spriteutils.drawTransparentImage(img`
        1 1 1 
        . 1 . 
        . . . 
        `, Total_emote, Math.round((mySprite2.width + 3) / 2) - 1, mySprite2.height + 2)
        emo = sprites.create(Total_emote, SpriteKind.Player)
        mySprite2.destroy()
        emo.x = Sprite2.x
        emo.bottom = Sprite2.top - 2
        emo.lifespan = lifespan
    }

}
