class myArray {

    constructor() {
        this.length = 0
        this.data   = {}
    }

    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.data
    }

    pop() {
        if (this.data[0]) {
            const lastItem = this.data[this.length - 1]
            delete this.data[this.length - 1]
            this.length--
            return lastItem
        } else {
            return undefined
        }
    }

    delete(index) {
        if (this.data[index]) {
            let item = this.data[index]
            this.switchIndex(index)
            return item
        } else {
            return undefined
        }
    }

    unshift() {
        this.switchIndexAll()
        return this.data
    }
    
    switchIndexAll() {
        for (let i = this.length - 1; i >= 0; i--) {
            let item = this.data[i + 1]
            console.log(item)
        }
    }

    switchIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

}

const firstArray = new myArray()