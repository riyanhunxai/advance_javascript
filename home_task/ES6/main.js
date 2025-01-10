function Counter() {
    let count = 0;
    return function (click) {
      if (click === "increment") {
        count++;
      } else if (click === "decrement") {
        count--;
      } else if (click === "reset") {
        count = 0;
      }
      return count;
    };
  }
  let counterHandle = Counter();
  const counterValue = document.getElementById("counter-Value");
  const increment = document.getElementById("increment");
  const decrement = document.getElementById("decrement");
  const reset = document.getElementById("reset");
  increment.addEventListener("click", () => {
    counterValue.textContent = counterHandle("increment");
  });
  decrement.addEventListener("click", () => {
    counterValue.textContent = counterHandle("decrement");
  });
  reset.addEventListener("click", () => {
    counterValue.textContent = counterHandle("reset");
  });






