export function createStore() {
    let count = 0
    const subscribers = []
    let random
    return {
        get count() {
            return count
        },
        random() {
            random = Math.floor(Math.random() * 9)
            if (count === random) {
                if (count === 8) {
                    count = random - 1
                } else {
                    count = random + 1
                }
            } else {
                count = random
            }
            subscribers.forEach((fn) => fn())
            console.log(subscribers)
        },
        subscribe(fn) {
            subscribers.push(fn)
        },
    }
}