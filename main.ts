function doSomething () {
    let list: number[] = []
    for (let value of list) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    }
    game.showLongText("śćźńłó co tam co tam", DialogLayout.Bottom)
}
let mySprite: Sprite = null
game.showLongText("śćźńłó co tam co tam", DialogLayout.Bottom)
game.showLongText("śćźńłó co tam co tam", DialogLayout.Bottom)
game.showLongText("śćźńłó co tam co tam", DialogLayout.Bottom)
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 . . . . . 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 3 3 . . . . . . . . . . . 
    . . . . 3 . . . . . . . . . . . 
    . . . . . 3 3 . . . . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . . . . 3 3 . . . . 
    . . . . . . . . . . . . 3 3 3 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
doSomething()
