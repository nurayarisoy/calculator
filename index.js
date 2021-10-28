window.onload = () => {
  var sayilar = document.querySelectorAll(".number");
  var operator = document.querySelectorAll(".operator");
  var back = document.getElementById("back")
  var operatorArray = ["-", "+", "*", "/"];

  var equation = document.querySelector(".equation");
  var selectedOperator = "";
  var leftPart = "";
  var rightPart = "";
 for (var i = 0; i < sayilar.length; i++) {
      sayilar[i].addEventListener("click", function() {

          document.querySelector(".screen").innerHTML += this.value;


          if (selectedOperator == "") {
              leftPart += this.value;

          } else if (selectedOperator != "") {
              rightPart += this.value;

          }


      }, false)
  }


  for (var i = 0; i < operator.length; i++) {
      operator[i].addEventListener("click", function() {
          selectedOperator = this.value;

          if (document.querySelector(".screen").innerHTML[0] === "-") {
              if (!document.querySelector(".screen").innerHTML.includes("+") &&
                  !document.querySelector(".screen").innerHTML.includes("*") &&
                  !document.querySelector(".screen").innerHTML.includes("/")) {

                  document.querySelector(".screen").innerHTML += selectedOperator
              }


          } else if (!document.querySelector(".screen").innerHTML.includes("+") &&
              !document.querySelector(".screen").innerHTML.includes("-") &&
              !document.querySelector(".screen").innerHTML.includes("*") &&
              !document.querySelector(".screen").innerHTML.includes("/")) {

              document.querySelector(".screen").innerHTML += selectedOperator
          }

      }, false)
  }
  back.addEventListener("click", function() {
      var newValue = document.querySelector(".screen").innerHTML
      document.querySelector(".screen").innerHTML = newValue.substring(0, newValue.length - 1)
  })
  equation.addEventListener("click", function() {

      switch (selectedOperator) {
          case "+":

              var plus = parseFloat(parseFloat(leftPart) + parseFloat(rightPart));
              document.querySelector(".screen").innerHTML = round(plus, 5);
              leftPart = plus;
              rightPart = "";
              break;
          case "-":
              var min = parseFloat(parseFloat(leftPart) - parseFloat(rightPart));
              document.querySelector(".screen").innerHTML = round(min, 5);
              leftPart = min;
              rightPart = "";
              break;
          case "*":
              var multiplication = parseFloat(parseFloat(leftPart) * parseFloat(rightPart));
              document.querySelector(".screen").innerHTML = round(multiplication, 5);
              leftPart = multiplication;
              rightPart = "";
              break;
          case "/":
              var divide = parseFloat(parseFloat(leftPart) / parseFloat(rightPart));
              document.querySelector(".screen").innerHTML = round(divide, 5);
              leftPart = divide;
              rightPart = "";
              break;

          default:
              break;
      }

  })
  var del = document.getElementById("delete");
  console.log(del);
  del.addEventListener("click", function() {
      selectedOperator = "";
      leftPart = "";
      rightPart = "";
      document.querySelector(".screen").innerHTML = "";
  }, false)

  function round(value, step) {
      step = Math.pow(10, step);
      return Math.round(value * step) / step;
  }

}