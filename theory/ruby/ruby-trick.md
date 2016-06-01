#### 1. Useful functions to calulate month/year range in ruby

```ruby
Array of years using range
((yr=Date.current.year)-9..yr).to_a#=> [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]
Array of years using lambda
Array.new(10){|i| Date.current.year-i}#=> [2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001]
Array of months
Date::MONTHNAMES.compact#=> ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
Array of abbreviated months
Date::MONTHNAMES.compact.collect{|m| m[0..2]}#=> ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
Array of abbreviated months with index (ps. collect_with_index is core extension method added to array)
Date::MONTHNAMES.compact.collect_with_index{|m, i| [m[0..2], i]}#=> [["Jan", 1], ["Feb", 2], ["Mar", 3], ["Apr", 4], ["May", 5], ["Jun", 6], ["Jul", 7], ["Aug", 8], ["Sep", 9], ["Oct", 10], ["Nov", 11], ["Dec", 12]]

```
