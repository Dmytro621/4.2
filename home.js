      let number = prompt("Введіть тризначне число: ");

      let a = Math.floor(number / 100);
      let b = Math.floor((number / 10) % 10);
      let c = number % 10;

      if (a === b && b === c) {
        alert("Всі цифри однакові.");
      } else {
        alert("Не всі цифри однакові.");
      }

      if (a === b || b === c || a === c) {
        alert("Є однакові цифри.");
      } else {
        alert("Немає однакових цифр.");
      }