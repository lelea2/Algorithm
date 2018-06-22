// script to create multiplication table
var color_td;
document.write("<table border='1px'>");

for(var i = 1; i < 10; i++) {

  document.write("<tr style='height:30px;'>");

  for(var j = 1; j < 10; j++) {

    if(j == 1 || i == 1) {
      color_td = "#ccc";
    }
    else {
      color_td = "#fff";
    }

    document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
  }
  document.write("</tr>");
}

document.write("</table>");