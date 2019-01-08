(function() {
  'use strict';

  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');
  var four = document.getElementById('four');
  var five = document.getElementById('five');
  var six = document.getElementById('six');
  var btn = document.getElementById('btn');
  var result_half = document.getElementById('result_half');
  var result_year = document.getElementById('result_year');

  // 値のチェック
  function checkInput() {
    if (
      one.value.match(/^[1-9][0-9]*$/) !== null &&
      two.value.match(/^[1-9][0-9]*$/) !== null &&
      three.value.match(/^[1-9][0-9]*$/) !== null &&
      four.value.match(/^[1-9][0-9]*$/) !== null &&
      five.value.match(/^[1-9][0-9]*$/) !== null &&
      six.value.match(/^[1-9][0-9]*$/) !== null
    ) {
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled');
    }
  }

  // 給付金の計算
  btn.addEventListener("click", function() {
    var past_wage; // 過去6か月賃金
    var daily_wage; // 休業開始時賃金日額
    var monthly_wage; // 賃金月額
    var half_wage;  // 育児休業開始6か月までの支給額
    var year_wage;  // 育児休業開始6か月経過後の支給額
    var str_half;
    var str_year;

    // 金額が入力されていない場合は、ボタンを押させない
    if (this.classList.contains('disabled') === true) {
      return;
    }

    past_wage =  parseInt(one.value) +  parseInt(two.value) +  parseInt(three.value) +  parseInt(four.value) +  parseInt(five.value) +  parseInt(six.value);
    console.log(past_wage);
    daily_wage = Math.floor(past_wage / 180);
    monthly_wage = daily_wage * 30;

    // 賃金月額の下限上限の監視
    if (monthly_wage > 449700){
      monthly_wage = 449700;
    } else if (monthly_wage < 74400){
      monthly_wage = 74400;
    }

    half_wage = Math.floor(monthly_wage * 0.67);
    str_half = "ひと月の支給額は、 " + half_wage.toLocaleString() + "円です。";
    result_half.textContent = str_half;

    year_wage = Math.floor(monthly_wage * 0.5);
    str_year = "ひと月の支給額は、 " + year_wage.toLocaleString() + "円です。";
    result_year.textContent = str_year;
  });

  one.addEventListener('keyup', checkInput);
  two.addEventListener('keyup', checkInput);
  three.addEventListener('keyup', checkInput);
  four.addEventListener('keyup', checkInput);
  five.addEventListener('keyup', checkInput);
  six.addEventListener('keyup', checkInput);

})();