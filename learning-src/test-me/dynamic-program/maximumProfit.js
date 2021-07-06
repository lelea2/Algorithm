// We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i]. 
// You're given the startTime, endTime and profit arrays, you need to output the maximum profit you can take such that there are no 2 jobs in the subset with overlapping time range.

// Dynamic programming solution. O(N^2) runtime, O(N) space
// First sort all the jobs in ascending order based on their end time. This makes checking if two jobs overlap or not easier. 
// State: maxGain[i]: Given the first i jobs, the max profit we can get by selecting jobs[i]. 
// Function: maxGain[i] = max {maxGain[i], maxGain[j] + jobs[i].gain}, for j in [0, i)
// Initialization: maxGain[i] = jobs[i].gain, as we know by selecting jobs[i], we at least have a profit of jobs[i].gain.
// Answer:  the max value of maxGain[i].
// https://leetcode.com/problems/maximum-profit-in-job-scheduling/

class Job {
  constructor(startTime, endTime, profit) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.profit = profit;
  }
}

function jobScheduling(startTime = [], endTime = [], profit = []) {
  const jobs = [];
  for (let i = 0; i < startTime.length; i++) {
    jobs.push(new Job(startTime[i], endTime[i], profit[i]));
  }
  jobs.sort((a, b) => a.endTime > b.endTime);

  //dp[i]: max profit out of 0 to ith jobs
  //dp[i] = Math.max(dp[i - 1], max profit out of 0 to ith jobs, including the ith job)
  const dp = new Array(startTime.length);
  dp[0] = jobs[0].profit;
  for (let i = 1; i < jobs.length; i++) {
    let currProfit = jobs[i].profit;
    //find the max profit out of all 0 to i - 1 jobs that has no intersection with the current job.
    //A linear search causes TLE; since we already sorted jobs based on their end time and the dp
    //array is sorted in non-decreasing nature(always pick the max possible value). This means as long
    //as we find the largest j, j < i, that jobs[j].endTime <= jobs[i].startTime, we can just skip all
    //the rest jobs k with k < j, because dp[k] <= dp[j].
    let lastNonOverLapIdx = binarySearch(jobs, 0, i - 1, jobs[i].startTime);
    currProfit += lastNonOverLapIdx >= 0 ? dp[lastNonOverLapIdx] : 0;
    dp[i] = Math.max(currProfit, dp[i - 1]);
  }
  console.log('>>> dp', dp);
  return dp[jobs.length - 1];
}


function binarySearch(jobs = [], l, r, t) {
  while (l < r - 1) {
    let mid = Math.floor(l + (r - l) / 2);
    console.log('>>>mid', mid);
    if (jobs[mid].endTime <= t) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  if (jobs[r] && jobs[r].endTime <= t) {
    return r;
  } else if (jobs[l] && jobs[l].endTime <= t) {
    return l;
  }
  return -1;
}


console.log(jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60])); // 150

///////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Alternative solution ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// O(n^2) run time loop through every job
function jobSchedulingv1(startTime = [], endTime = [], profit = []) {
  const jobs = [];
  for (let i = 0; i < startTime.length; i++) {
    jobs.push(new Job(startTime[i], endTime[i], profit[i]));
  }
  jobs.sort((a, b) => a.endTime > b.endTime);
  const maxGain = new Array(jobs.length);
  for(let i = 0; i < maxGain.length; i++) {
    maxGain[i] = jobs[i].profit;
  }

  for (let i = 1; i < maxGain.length; i++) {
    for (let j = 0; j < i; j++) {
      if (jobs[i].startTime >= jobs[i].endTime) {
        maxGain = Math.max(maxGain[i], maxGain[j] + jobs[i].profit);
      }
    }
  }
  let max = -Infinity;
  for (let i = 0; i < maxGain.length; i++) {
    if (maxGain[i] > max) {
      max = maxGain[i];
    }
  }
  return max;
}
