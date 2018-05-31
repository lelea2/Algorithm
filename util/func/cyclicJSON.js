// http://blog.vjeux.com/2011/javascript/cyclic-object-detection.html
const input = {
  "title": "Event Segmentation",
  "app": 114,
  "params": {
    "events": [
      {
        "type": "Visit: Home",
        "filters": [
          {
            "property": null,
            "op": "=",
            "values": []
          }
        ],
        "groupBy": []
      },
      {
        "type": "Signup",
        "filters": [
          {
            "property": "Plan",
            "op": "in",
            "values": [
              "enterprise",
              "premier"
            ]
          },
          {
            "property": "Did demo",
            "op": "=",
            "values": [
              true
            ]
          }
        ],
        "groupBy": []
      }
    ],
    "metric": "uniques",
    "range": "Last 30 days"
  }
};
input.a = input;

// O(n^2)
const isCyclic = (obj) => {
  const seenObjects = [];
  const detectCycle = (obj) => {
    if (obj && typeof obj === 'object') {
      if (seenObjects.indexOf(obj) !== -1) {
        return true;
      }
      seenObjects.push(obj);
      for (let key in obj) {
        if (obj.hasOwnProperty(key) && detectCycle(obj[key])) {
          console.log(obj, 'cycle at ' + key);
          return true;
        }
      }
    }
    return false;
  }
  return detectCycle(obj);
}

console.log('---- Check cyclic: ', isCyclic(input));
