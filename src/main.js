import '../src/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Entry } from '../js/Entry.js';

$(document).ready(function(){
  $("#journal-form").submit(function(event)
  {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newEntry = new Entry(title, body);
    $("#titleOutput").text(newEntry.title);
    $("#bodyOutput").text(newEntry.body);
    $("#wordCountResult").text(newEntry.GetWords(body));
    $("#vowerlCountResult").text(newEntry.GetVowels(body));



  });
});
