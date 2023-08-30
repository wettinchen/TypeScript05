const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === "add") return a + b
    return "" + a + b
}

let myVal: string = addOrConcat(2, 2, "concat") as string