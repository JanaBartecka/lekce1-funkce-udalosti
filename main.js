// tady je místo pro náš program

function secteni() {
  // document.querySelector("#vysledek").innerHTML = secti(2, 5);
  let cislo = document.querySelector("#vysledek");
cislo.innerHTML = secti(1, 5);
}
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  let myAlert="Gratulace, právě jsi spustila tuto funkci!"
  let zmenatextu=document.querySelector('.ctverecek');
  zmenatextu.textContent=myAlert
  alert(myAlert);
  console.log(myAlert)
}

function zmenBarvu() {
  let zmenaBarvy=document.querySelector('.ctverecek')
  zmenaBarvy.style.backgroundColor='green'
}


