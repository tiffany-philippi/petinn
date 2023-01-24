var db = openDatabase("booking", "1.0", "Reservations", 4048);
db.transaction(function (create) {
  create.executeSql(
    "CREATE TABLE reservations (pet TEXT, service TEXT, checkin TEXT, checkout TEXT)"
  );
});

var service = document.getElementById("service");
var petName = document.getElementById("petName");
var checkin = document.getElementById("checkin");
var checkoutResultcheckout = document.getElementById("checkout");

var formatToday = new Date().toISOString().split("T")[0];
checkin.min = formatToday;
checkin.value = formatToday;

service.addEventListener("change", function (result) {
  var checkoutDiv = document.getElementById("checkoutDiv");
  var selected = result.target.value;

  if (selected !== "creche") checkoutDiv.style.display = "block";
  else checkoutDiv.style.display = "none";
});

// Definir fim da hospedagem com +1 a partir da entrada do pet
checkin.addEventListener("change", function (result) {
  if (service === "hospedagem") {
    var checkinDate = result.target.value;
    var formatDate = checkinDate.replace("-", ",");
    var day = new Date(formatDate).getDate() + 1;
    var month = new Date(formatDate).getMonth();
    var year = new Date(formatDate).getFullYear();

    var setNextDay = new Date(year, month, day);
    checkout.min = setNextDay.toISOString().split("T")[0];
    checkout.value = setNextDay.toISOString().split("T")[0];
  } else {
    checkout.value = null;
  }
});

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
});

function booking() {
  db.transaction(function (save) {
    var messageDiv = document.querySelector("#message");
    save.executeSql(
      "INSERT INTO reservations (pet, service, checkin, checkout) VALUES (?, ?, ?, ?)",
      [petName.value, service.value, checkin.value, checkout.value],
      function (save, result) {
        messageDiv.style.display = "block";
        messageDiv.innerHTML = `A reserva de ${petName.value} foi realizada`;
        setTimeout(hide, 3000);
        function hide() {
          messageDiv.style.display = "none";
        }
      }
    );
  });
}
