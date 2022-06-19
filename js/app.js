$(document).ready(function() {
    $("#formOne").submit(function(event) {
      const person1 = $("#person1").val();
      const person2 = $("#person2").val();
      const animal= $("#animal").val();
      const exclamation = $("#exclamation").val();
      const verb = $("#verb").val();
      const noun = $("#noun").val();
  
      $(".person1").text(person1);
      $(".person2").text(person2);
      $(".animal").text(animal);
      $(".exclamation").text(exclamation);
      $(".verb").text(verb);
      $(".noun").text(noun);
  
      $("#story").show();
  
      event.preventDefault();
    });
  });