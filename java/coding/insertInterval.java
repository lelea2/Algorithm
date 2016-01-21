//Given a set of non-overlapping & sorted intervals
//insert a new interval into the intervals (merge if necessary).


//Special Java solution (Interval class)
public ArrayList<Interval> insert(ArrayList<Interval> intervals, Interval newInterval) {

    ArrayList<Interval> result = new ArrayList<Interval>();

    for(Interval interval: intervals){
        if(interval.end < newInterval.start){
            result.add(interval);
        }else if(interval.start > newInterval.end){
            result.add(newInterval);
            newInterval = interval;
        }else if(interval.end >= newInterval.start || interval.start <= newInterval.end){
            newInterval = new Interval(Math.min(interval.start, newInterval.start), Math.max(newInterval.end, interval.end));
        }
    }

    result.add(newInterval);

    return result;
}
