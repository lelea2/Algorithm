/**
 * Compare 2 string and check whether they are isomorphic
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 */

//Idea: create a hashmap table
//For example,"egg" and "add" are isomorphic, "foo" and "bar" are not.

// a method for getting key of a target value (check key exists)
// This hash map table is created
// Get key given taget value
public Character getKey(HashMap<Character,Character> map, Character target) {
    //Checking for loop
    for (Map.Entry<Character,Character> entry : map.entrySet()) {
        if (entry.getValue().equals(target)) { //if value === target given, then return the key
            return entry.getKey();
        }
    }
    return null;
}

//Checking for isomorphic between 2 arrays
//Let assume that S is key and t is value that need to mapped/compared to value stored by key
//Notice special case (null, empty string, string length not equal, return boolean right away)
public boolean isIsomorphic(String s, String t) {
    if (s == null || t == null) { //If either of these string is empty, return false right away
        return false;
    }
    if(s.length() != t.length()) { //If 2 strings are not equal in length, return false right away
        return false;
    }
    if(s.length() == 0 && t.length() == 0) { //If both empty string, return true right away
        return true;
    }
    //Create a hashmap to store mapping character
    HashMap<Character, Character> map = new HashMap<Character,Character>();
    //We only need to loop once since 2 array is equal in size
    for(int i=0; i<s.length(); i++) {
        char c1 = s.charAt(i); //s will be key
        char c2 = t.charAt(i); //t will be value in hashmap
        Character c = getKey(map, c2); //get key from value
        if(c != null && c != c1) { //if key exist, but not the same as what we retrieve from s, return false
            return false;
        } else if(map.containsKey(c1)) { //map has key, but value is not equal
            if(c2 != map.get(c1)) {
                return false;
            }
        } else {
            map.put(c1,c2); //put new key and hashmap and continue looping
        }
    }
    return true; //If everything matched with key in hashmap, return true
}

