const priceCheck = document.querySelector(".priceCheck")
const price = document.querySelectorAll(".pricing .price")
function check() {
    if (priceCheck.checked == true) {
      price[0].innerHTML = "<del>$</del><span>100</span> /Ye"
      price[1].innerHTML = "<del>$</del><span>140</span> /Ye"
      price[2].innerHTML = "<del>$</del><span>199</span> /Ye"
    } else {
      price[0].innerHTML = "<del>$</del><span>20</span> /mo"
      price[1].innerHTML = "<del>$</del><span>40</span> /mo"
      price[2].innerHTML = "<del>$</del><span>60</span> /mo"
    }
}

