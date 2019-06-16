let health = 100
let name = "Target"
let hits = 0
let surprise = 0

function slap() {
    health--
    hits++
    if (surprise >= 1) {
        health--
        surprise--
    }
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
    if (surprise >= 1) {
        health -= 5
        surprise--
    }
    update()
}

function kick() {
    health -= 10
    hits++
    if (surprise >= 1) {
        health -= 10
        surprise--
    }
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

update()