//s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

class Node {
    int num;
    ArrayList<Node> list;
    char symbol;
    boolean isList;

    public Node(char s) {
        symbol=s;
    }

    public Node(int n){
        list = new ArrayList<Node>();
        isList=true;
        num=n;
    }

    public String toString(){
        String s = "";
        if(isList) {
            s += num + ":" + list.toString();
        } else {
            s += symbol;
        }
        return s;
    }
}

public class Solution {
  public String decodeString(String s) {
    int i = 0;
    Stack<Node> stack = new Stack<Node>();
    stack.push(new Node(1));
    String t = "";
    while (i < s.length()) {
      char c = s.charAt(i);
      // new Node
      if (c >= '0' && c <= '9') { // number
        t += c;
      } else if (c == '[') {
        if (t.length() > 0) {
          int num = Integer.parseInt(t);
          stack.push(new Node(num));
          t = "";
        }
      } else if (c == ']') {
        Node top = stack.pop();
        if (stack.isEmpty()) {

        } else {
          stack.peek().list.add(top);
        }
      } else {
        stack.peek().list.add(new Node(c));
      }
      i++;
    }
    return getString(stack.peek());
  }

  public String getString(Node node) {
    String s= "";
    if (node.isList) {
      for(int i=0; i<node.num; i++){
        for(Node t: node.list)
          s+= getString(t);
      }
    } else {
      s+=node.symbol;
    }

    return s;
  }
}
