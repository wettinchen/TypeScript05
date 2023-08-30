const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") return a + b
    return "" + a + b
}

let myVal: string = addOrConcat(2, 2, "concat") as string

// Be careful! TypeScript sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number