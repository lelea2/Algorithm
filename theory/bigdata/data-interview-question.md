* References:

http://www.entrepreneur.com/article/245020

http://www.businessinsider.com/apple-brain-busting-interview-questions-answers-2012-6?op=1

### 1. If you have 2 eggs, and you want to figure out what's the highest floor from which you can drop the egg without breaking it, how would you do it? What's the optimal solution?

http://datagenetics.com/blog/july22012/index.html

http://www.programmerinterview.com/index.php/puzzles/2-eggs-100-floors-puzzle/

* One egg: start at first floor, floor by floor
* Many egg: can walk binary-tree, devide posibility in half
* 2 eggs:


### 2. How many tenis balls fit in the bus?

* Calculate volume of the bus and volume of the tennis ball and do divison accordingly

### 3. You have 100 coins laying flat on a table, each with a head side and a tail side. 10 of them are heads up, 90 are tails up. You can't feel, see or in any other way find out which side is up. Split the coins into two piles such that there are the same number of heads facing up in each pile. How did you do it?

Pick any 10 coins and make a small pile. You now have 90 coins in a pile (call it pile A), and 10 coins in a new pile (call it pile B).  You don't know where the heads are, but you do know that there are 10 of them in total, and therefore however many heads there are in pile A, there is 10 minus this many in pile B.

**Pile A contains:**
- n heads
- 90-n tails

**Pile B contains:**
- 10-n heads
- the rest tails, 10-(10-n) = n tails.

Pile A has n heads, and pile B has n tails; So we know that there are always the same number of heads in pile A as there are tails in pile B. Flip over all the coins in pile B. We now have the same number of heads in both piles.
