$(function () {
  $(".order-form")
    .parsley()
    .on("form:success", function (formInstance) {
      axios.defaults.headers.post["Content-Type"] = "application/json";
      axios
        .post("https://formsubmit.co/ajax/sebastian.jurek44@gmail.com", {
          name: "PotwierdzenieZamowienia",
          message: "Zamówienie",
          email: document.querySelector("#email").value,
          "Imie i Naziwsko": document.querySelector("#name").value,
          adres: document.querySelector("#adress").value,
          "Lisi Zakątek": document.querySelector("#candle1").value,
          "Przysmak Lisa": document.querySelector("#candle2").value,
          "Romantyczny Lis": document.querySelector("#candle3").value,
          wysylka: document.querySelector("#shipping").value,
          "numer paczkomatu": document.querySelector("#paczkomat").value,
          miasto: document.querySelector("#city").value,
          kodPocztowy: document.querySelector("#zip-code").value,
          telefon: document.querySelector("#phone").value,
          dodatkoweInformacje: document.querySelector("#info").value,
        })
        .then((response) => console.log("axios dziala"))
        .catch((error) => console.log(error));

      // Show order info
      const submitBtn = document.querySelector(".btn");

      const orderInfo = document.querySelector(".order-info");
      const orderSumText = document.querySelector("#order-sum");

      const candle = [];

      for (n = 1; n < 4; n++) {
        const numberOfCandle = "#candle" + n;
        if (document.querySelector(numberOfCandle).value == "") {
          document.querySelector(numberOfCandle).value = 0;
        }
        candle[n] = Number(document.querySelector(numberOfCandle).value);
      }

      const candlePrice = 39;

      const shipping = Number(document.querySelector("#shipping").value);
      const orderSum =
        candle[1] * candlePrice +
        candle[2] * candlePrice +
        candle[3] * candlePrice +
        shipping;
      console.log("Sumowa zamówienia to: " + orderSum);

      orderSumText.innerHTML = orderSum + " zł";
      orderInfo.classList.add("order-info-show");

      if (window.innerWidth < 768) {
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
      }

      submitBtn.innerText = "✓ Wysłane!";
      submitBtn.disabled = true;
      event.preventDefault();
    });
});
