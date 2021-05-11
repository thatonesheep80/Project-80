guest_name_array = [];

function submit() 
{
 var display_guest = [];
 for (var j = 1; j<= 4; j++); 
  {
    var name = document.getElementById( "guest_name_input" +j ).value;
    guest_name_array.push (name);
  }
  console.log (guest_name_array);

  var length_of_array = guest_name_array.length;

  for (var k = 0; k < length_of_array; k++)
  {
      display_guest.push ("<h3> Name - " + guest_name_array[k] + "</h3>");
  }

  document.getElementById("display_name_horizontally").innerHTML = display_guest;

  var remove_commas = display_guest.join(" ");
  document.getElementById("display_name_without_commas").innerHTML = display_guest;

  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";
 }

 function sorting()
 {
   student_name_array.sort();
   
   var display_sorted_array = [];

   var length_of_array = student_name_array.length;

   for (var k = 0; k < length_of_array; k++)
  {
      display_sorted_array.push ("<h3> Name - " + student_name_array [k] + "</h3>");
  }

  var remove_commas = display_sorted_array.join(" ");
  document.getElementById("display_name_without_commas").innerHTML = remove_commas;
 }