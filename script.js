btn_gen = document.getElementById("gen")

btn_att = document.getElementById("att")

p = document.getElementById("code")

c = document.getElementById("center_block")

att_e = false

alphabet = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM".split("")

function get_c() {
    let i = 0
    let result = []
    while (i != 13) {
        result.push(Math.floor(Math.random() * 10))
        i++
    }
    return String(result).split(",").join(" ")
}

btn_gen.addEventListener("click", function() {
    c.style = "color: aqua"
    let timerId = setInterval(() => c.value = get_c(), 50)
    setTimeout(() => clearInterval(timerId), 3500)
    setTimeout(() => c.style = "color: red", 4000)
    setTimeout(() => att_e = true, 4100)
})

btn_att.addEventListener("click", function() {
    if (att_e) {
        let r = "Starting attacking..."
        p.textContent = r
        setTimeout(() => {
            r = ""
            t = Math.floor(Math.random() * 91)+30
            t *= 1000
            let tid2 = setInterval(() => {p.textContent = r; r += alphabet[Math.floor(Math.random() * 62)]}, 5)
            let tid3 = setInterval(() => {clearInterval(tid2); r += "\n"; tid2 = setInterval(() => {p.textContent = r; r += alphabet[Math.floor(Math.random() * 62)]}, 10)}, 750)
            setTimeout(() => clearInterval(tid3), t)
            setTimeout(() => clearInterval(tid2), t + 1)
            setTimeout(() => {p.textContent = ""; p.style = "font-size: 70px; text-align: center; margin-top: 40%; color: red"; setTimeout(() => p.textContent = "TARGET HACKED", 1000)}, t+1000)
        }, 1000)
    }
})