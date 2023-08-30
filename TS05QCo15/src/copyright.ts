// Original JavaScipt code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear

// First variation as Beginners
let year: HTMLElement | null
year = document.getElementById("year")
let thisYear: string
thisYear = new Date().getFullYear().toString()
if (year) {
    year.setAttribute("datetime", thisYear)
    year.textContent = thisYear
}
