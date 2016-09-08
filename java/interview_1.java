// Problem: Write a function that splits a text into single words.
public static void main (String [] args) {
  String[] myresult;
  System.out.println(“Please enter your text: “);
  Scanner in = new Scanner(System.in);
  String mystr = in.nextline(); // Read String into variable
  myresult = mystr.split (“ +”); // this will ignore all the space
  for (int i =0; i<myresult.length; i++)
    System.out.println(myresult[i]);
}


// Problem: Write a function that splits a text into single words, without using split() or StringTokenizer etc that does the same job.
public static void main (String[] args) {
  System.out.println(“Please enter your text: “);
  Scanner in = new Scanner (System.in);
  while (in.hasNext())
  {
    System.out.println(in.next());
  }
}

// Problem: Write a function that splits a text into single words, without using split() or StringTokenizer etc that does the same job, and without using Scanner.next().
public static void main (String[] args) {
  System.out.println (“Please enter your text: “);
  Scanner in = new Scanner (System.in);
  String mystr = in.nextln();
  ArrayList<String> myarr = new ArrayList<String>();
  for (int i=0; i<mystr.length; i++) {
    String word = “”;
    if(mystr[i] != “ “) {
      word += mystr[i];
    }
    else { // seeing space
      if (word != “”)
myarr.add(word);
      word = “”;
    }
}
if (word != “”)
  myarr.add(word);
for (int =0; j<myarr.size(); j++)
  System.out.println (myarr.get(i));
}

//Problem: Write a function that splits a text into single words, without using split() or StringTokenizer etc that does the same job, and without using Scanner.next(). Use indexOf() and/or substring() instead.

public static void main (String[] args) {
  System.out.println (“Please enter your text: “);
  Scanner in = new Scanner (System.in);
  String mystr = in.nextln();
  ArrayList<String> myarr = new ArrayList<String>();
  while (mystr.indexOf (“ “) != -1)
    if (mystr.indexOf(“ “) ! = 0)
      myarr.add (mystr.substr(0, mystr.indexOf(“ “));
    mystr = mystr.substr(mystr.indexOf(“ “)+1);
  }
  myarr.add(mystr);
}
