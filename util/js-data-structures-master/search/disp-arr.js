function dispArr(arr) {
  var result = "";
  for (var i = 0; i < arr.length; ++i) {
     result += arr[i] + " ";
     if (i % 10 == 9) {
        result += "\n";
    }
  }
  if (i % 10 != 0) {
     result += "\n";
  }
  print(result);
}
