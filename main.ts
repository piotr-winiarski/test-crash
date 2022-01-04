function doSomething3 () {
    for (let value of list) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    }
    game.showLongText("śćźńłó co tam co tam", DialogLayout.Bottom)
}
function doSomething () {
    for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    }
    game.showLongText("śćźńłó co tam co tam", DialogLayout.Bottom)
}
function doSomething2 () {
    for (let value of list) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    }
    game.showLongText("śćźńłó co tam co tam", DialogLayout.Bottom)
}
function doSomething4 () {
    for (let value of list) {
        tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    }
    game.showLongText("śćźńłó co tam co tam", DialogLayout.Bottom)
}
let list = 0
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
