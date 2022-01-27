// This code should load images one at a time. Can you find and fix the bug?
const startTime = Date.now();

async function loadImage(url) {
  console.log(`Starting to load ${url}`);
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Finished loading url: ${url} at ${Date.now() - startTime}`);
      resolve();
    }, 2000);
  });
  return await promise;
}

// Loads resources one at a time in the order they were requested
class SerialLoader {
  loadQueue = [];
  loading = false;
  loadNextResource = async function () {
    if (!this.loadQueue.length) return;
    this.loading = true;
    console.log(this.loadQueue);
    const resource = this.loadQueue.shift(); // [http://www.bolt.com/resource1]
    console.log(this.loadQueue); 

    await loadImage(resource); // execute later 

    this.loading = false;
    if (this.loadQueue.length) {
      this.loadNextResource();
    }
  }
  addRequest(url) {
    this.loadQueue.push(url); // this.loadQueue = [http://www.bolt.com/resource1, ....]
    if (!this.loading) {
      this.loadNextResource();
    }
  }
}

const myLoader = new SerialLoader();

myLoader.addRequest('http://www.bolt.com/resource1');
myLoader.addRequest('http://www.bolt.com/resource2');
myLoader.addRequest('http://www.bolt.com/resource3');