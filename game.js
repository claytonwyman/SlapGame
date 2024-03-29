let health = 100
let name = "Beat the Monster!"
let hits = 0
let surprise = 0

function slap() {
    health--
    hits++
    checkSurprise(1)
    update()
}

function update() {
    document.getElementById("health").innerText = health;
    document.getElementById("hits").innerText = hits;
    document.getElementById("name").innerText = name;
    if (health <= 0) {
        reset()
    }
}

function punch() {
    health -= 5
    hits++
    checkSurprise(5)
    update()
}

function kick() {
    health -= 10
    hits++
    checkSurprise(10)
    update()
}

function heal() {
    health += 20
    update()
}

function reset() {
    health = 100
    hits = 0
    update()
}

function shot() {
    health--
    surprise++
    update()
}

function checkSurprise(num) {
   if (surprise >= 1) {
        health -= num
        surprise--
    } 
}

update()