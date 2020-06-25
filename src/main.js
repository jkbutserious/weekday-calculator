import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { getWeekday, checkValidDate } from './../src/weekday-calculator.js';

$(document).ready(function () {
  $('#date-form').submit(function (event) {
    event.preventDefault();
    const userMonth = parseInt($("#month").val());
    const userDay = parseInt($("#day").val());
    const userYear = parseInt($("#year").val());

    if (checkValidDate(userYear, userMonth, userDay)) {
      $("#user-weekday").text("Was a " + getWeekday(userYear, userMonth, userDay) + ".");
    }
    else {
      $("#user-weekday").text("Is not a valid date.");
    }
  });
});