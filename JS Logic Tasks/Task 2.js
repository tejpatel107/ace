// Task 2 - Merge Overlapping Intervals

function MergeOverlappingIntervals(intervals) {
  if (intervals.length === 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    let prevStart = res[res.length - 1][0];
    let prevEnd = res[res.length - 1][1];

    if (start <= prevEnd) {
      if (end > prevEnd) {
        res[res.length - 1][1] = end;
      }
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
}
