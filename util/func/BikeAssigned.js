/* 
Your previous Plain Text content is preserved below:

******** Design a bike sharing service ********
  
  **** Part 1 - Bike Tracking ****
  
  A new bike sharing service, called SF Bike Share, wants to track bikes as they are checked out.
  
  For example, when Bike 1 is checked out, they store it in an array, like:
  
  [ 1 ]
  
  And when it is returned, they store it in the array again, like:
  
  [ 1, 1 ]
  
  In other words, a bike that is returned will always have a second entry in the array.
  
  For example:
  
  [1, 2, 7, 2, 1, 1, 1, 2, 1, 2, 1]
  
  Means that:
  
  Bike 1 was checked out and returned 3 times.
  
  Bike 2 was checked out and returned 2 times.
  
  Bike 7 was checked out, but not yet returned.
  
  Write a function that returns all bikes that are currently checked out.

 */

// const hashArr = {};
// const getCheckOut = (arr) => {
//   arr.map((i) => {
//     const item = `${i}`;
//     if (hashArr[item]) {
//        hashArr[item]++; 
//     } else {
//        hashArr[item] = 1;
//     }
//   });
//   const checkOut = [];
//   Object.keys(hashArr).map((i) => {
//     if (hashArr[i] % 2 === 0) {
//         // bike returned 
//     } else {
//        checkOut.push(parseInt(i, 10));
//     }
//   });
//   console.log(checkOut);
//   return checkOut;
// };

// getCheckOut([1, 2, 7, 2, 1, 1, 1, 2, 1, 2, 1]);

// **** Part 2 - Object Design ****
  
//   Design SF Bike Share.
  
//   * SF Bike Share consists of many Bikes.
  
//   * New Bikes should be able to be created and added to SF Bike Share.

//   * Bikes should be able to be checked out and returned.
  
//   * On each Bike, you should be able to track how many times it has been checked out and returned. From the example in Part 1, this means that Bike 1 would show 3, Bike 2 would show 2, and Bike 7 would show 0.

//   * To test your design, create Bike 1, Bike 2, and Bike 7. Then check out and return Bike 1 three times, Bike 2 two times. Check out but do not return Bike 7.


// class Bike {
//    constructor(name) {
//       this.name = name;
//       this.checkout = 0;
//       this.returned = 0;
//    }
  
//    getName() {
//       return this.name; 
//    }
  
//    getCheckout() {
//      return this.checkout; 
//    }
  
//    setCheckout() {
//      if (this.checkout > this.returned) {
//        // error out 
//        console.log("cannot checkout");
//      } else {
//         this.checkout += 1; 
//      }
//    }
  
//    getReturned() {
//       this.returned;
//    }
  
//    setReturned() {
//       this.returned += 1; 
//    }
// }

// const SFBikes = [];
// SFBikes.push(new Bike("Bike 1"));
// SFBikes.push(new Bike("Bike 2"));
// SFBikes.push(new Bike("Bike 7"));

// console.log(SFBikes);

// // [1, 2, 7, 2, 1, 1, 1, 2, 1, 2, 1]
// SFBikes[0].setCheckout();
// SFBikes[0].setCheckout();
// SFBikes[1].setCheckout();
// SFBikes[2].setCheckout();
// SFBikes[1].setReturned();
// SFBikes[0].setReturned();
// SFBikes[0].setCheckout();
// SFBikes[0].setReturned();
// SFBikes[1].setCheckout();
// SFBikes[0].setCheckout();
// SFBikes[1].setReturned();
// SFBikes[0].setReturned();

// console.log(SFBikes);

/*
  **** Bike Share Part 3: Stations and Sponsors ****

  Now that SF Bike Share is a success, we want to expand!
  
We’ll be opening up multiple new bike share stations, which are places where bikes can be rented from. We also have a number of corporate sponsors who want to put their logos on stations. 

  * Improve SF Bike Share to support Stations. Stations can hold either 3, 5, or 10 bikes.

  * Allow any number of sponsors to be assigned to stations. For example:

Station 1: Sponsor A and Sponsor B
Station 2: Sponsor B and Sponsor C
Station 3: Sponsor C
Station 4: Sponsor A, Sponsor C, and Sponsor D
 * Allow new bikes to be randomly assigned to a “home” station. For example:

Station 1: 50% chance of a bike being assigned to this home station
Station 2: 20% chance of a bike being assigned to this home station
Station 3: 20% chance of a bike being assigned to this home station
Station 4: 10% chance of a bike being assigned to this home station
Note that bikes can only have one home station and the odds must add up to 100% across all stations
 * When a bike is assigned to a full station, try to assign it to another station. If all stations are full, display an error to the user.

 * Write code to test your design.

*/

const BIKE_NUMBER = [3, 5, 10];

class Station {
   
  constructor(sponsor) {
     
     this.sponsor = sponsor; 
     this.bikeNumber = BIKE_NUMBER[Math.floor(Math.random() * 2)];
     this.bike = 0;
  }
  
  assignBike() {
    if (this.bikeNumber <= this.bike) {
      console.log('Cannot assign bike'); 
      throw new Error('');
    } else {
       this.bike++; 
    }
  }
  
  takeBike() {
    if (this.bike === 0) {
       console.log('No bike'); 
    } else {
        this.bike--; 
    }
  }
  
  nearlyFull() {
     if (this.bike / this.bikeNumber * 100 > 50) {
        return true; 
     } else {
        return false; 
     }
  }
  
}

const StationArr = [
  new Station('A, B'),
  new Station('B, C'),
  new Station('C'),
  new Station('A, C, D'),
];

console.log(StationArr);

const assignBike = () => {
  const allowStation = StationArr.filter((item) => {
     return item.nearlyFull() !== true;
  });
  console.log('>>> allowStation', allowStation);

  const rand = Math.floor(Math.random() * 10) + 1; // generate number from 1 to 10;
  try {
    if (rand <= 5 && rand >= 1) { // Station 1
      StationArr[0].assignBike();
    } else if (rand <= 7 && rand >=6) { // Station 2
      StationArr[1].assignBike();
    } else if (rand <=9 && rand >=8) { // Station3 
      StationArr[2].assignBike();
    } else { // Station 4
      StationArr[3].assignBike();
    }
  } catch (ex) {
    throw new Error(`${ex.message}`); 
  }
};

let i = 10;
while (i !== 0) {
   try {
      assignBike();
      console.log(StationArr);
      i--;
   } catch (ex) {
      console.log('Fail to assign bike -- retry');
   }
}
