
var month_deal = document.querySelector("#month_deal2");
var currentDate = new Date();
var currentMonth = currentDate.getMonth() +1;


  if (currentMonth <= 6) {
    month_deal.src = "Resources/images/orange_15p_off.png";
  } else if (currentMonth >= 7) {
    month_deal.src = "Resources/images/green_15p_off.png";
  }
