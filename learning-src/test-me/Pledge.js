class Pledge {
  constructor(fn) {
    this.callbacks = [];
    this.rejectFns = [];
    this.value = undefined;
    this.status = 'pending';
    const resolve = (arg) => {
      if (this.status !== 'pending') return;
      this.status = 'resolved';
      this.value = arg;
      this.handleResolve();
    };
    const reject = (arg) => {
      if (this.status !== 'pending') return;
      this.status = 'rejected';
      this.value = arg;
      this.handleReject();
    };
    fn(resolve, reject);
  }
  
  handleResolve() {
    const fns = this.callbacks.slice();
    for (let i = 0; i < fns.length; i++) {
      if (typeof fns[i] === 'function') {
        fns[i](this.value);
      }
    }
    this.callbacks = [];
  }
  
  handleReject() {
    const fns = this.rejectFns.slice();
    for (let i = 0; i < fns.length; i++) {
      if (typeof fns[i] === 'function') {
        fns[i](this.value);
      }
    }
    this.rejectFns = [];
  }
  
  then(res, rej) {
    this.callbacks.push(res);
    this.rejectFns.push(rej);
    switch (this.status) {
      case 'pending':
        break;
      case 'resolved':
        this.handleResolve();
        break;
      case 'rejected':
        this.handleReject();
        break;
    }
  }
  
  catch(rej) {
    this.then(null, rej);
  }
}

const newPledge = new Pledge((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!')
  }, 500)
})

newPledge.then(console.log).then(console.log); //