document.getElementById("calculate").addEventListener("click", function () {
  // Input Field select on getelement by ID
  const incomeEl = parseFloat(document.getElementById("income").value);
  const softwareEl = parseFloat(document.getElementById("software").value);
  const coursesEl = parseFloat(document.getElementById("courses").value);
  const internetEl = parseFloat(document.getElementById("internet").value);

  //   calculation
  const costBalance = softwareEl + coursesEl + internetEl;
  const savingBalance = incomeEl - costBalance;
  //   showing Result Summary field
  const expensesEl = document.getElementById("total-expenses");
  expensesEl.innerText = costBalance.toFixed(2);
  const balaceEl = document.getElementById("balance");
  balaceEl.innerText = savingBalance.toFixed(2);
  //   Hidden remove by result Summary
  const resultEl = document.getElementById("results");
  resultEl.classList.remove("hidden");
});

// calculate Saving Button

document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    // Input Field select on getelement by ID
    const incomeEl = parseFloat(document.getElementById("income").value);
    const softwareEl = parseFloat(document.getElementById("software").value);
    const coursesEl = parseFloat(document.getElementById("courses").value);
    const internetEl = parseFloat(document.getElementById("internet").value);
    //   calculation
    const costBalance = softwareEl + coursesEl + internetEl;
    const savingBalance = incomeEl - costBalance;
    //   Calculate saving percentace
    const savingEl = parseFloat(document.getElementById("savings").value);
    const savings = (savingEl * savingBalance) / 100;
    const savingAmountEl = document.getElementById("savings-amount");
    savingAmountEl.innerText = savings;
    const remainingBalanceEl = document.getElementById("remaining-balance");
    const remainingBalance = savingBalance - savings;
    remainingBalanceEl.innerText = remainingBalance;
  });
