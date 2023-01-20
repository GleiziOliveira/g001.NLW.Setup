const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🛑")
    return
  }

  alert("Adicionado com sucesso ✔")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()

/*
const data = {
  run: ["01-02", "01-03", "01-04", "01-05", '01-06'],
  water: ["01-01", "01-07"],
  food: ["01-01", "01-02", '01-08'],
  study: ["01-02", "01-03", "01-04", '01-09','01-12'],
  work: ["01-03", "01-05", "01-07", '01-11'],
  sleep: ["01-02", "01-05", "01-07", '01-10'],
}


nlwSetup.setData(data)
nlwSetup.load()
*/
