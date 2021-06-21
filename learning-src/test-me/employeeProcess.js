// Hi there! - Kia

/*

["manager", "a", "b"], // A is the manager of B
["peer", "b", "c"] // These two members have the same manager
["is_manager", "a", "c"] // Is A in the management chain of B? // true
*/


const input = [
    ["peer", "C", "D"],  
    ["peer", "B", "C"],
    ["manager", "A", "D"],
    ["is_manager", "A", "D"],
    ["peer", "D", "W"],
    ["is_manager", "A", "W"],
    ["manager", "Z", "A"],
    ["is_manager", "Z", "C"],
  ];
  
  
  
  // A <> B
  
  // A is the manager for C
  // is_manager C and B is false
  
  // D is the manager for A
  // is_manager C and D is true
  
  
  class Employee {
    constructor(name) {
      this.name = name; 
    }
    
    getGroupId() {
      return this.groupId;
    }
   
    getManager() {
       return this.manager;
    }
  }
  const people: [C,D, B]
  
  const hashTable = {
     C: group_id
     D: group_id,
     B: group_id,
     A: group_id_1,
  }
  const managerTable = {
    group_id: A
    group_id_1: Z
  }
  
  // A & B are peers
  // C & D are peers
  // C & A are peers
  
  
  function updateGroup() {
    Object.keys(peerTable).map(group => {
      
    });
  }
  
  function processData(data) {
    const peerTable = {};
    const managerTable = {};
    for (let i = 0 ; i < data.length; i++) {
       const [checkFunc, person1, person2] = data[i];
       if (checkFunc === 'peer') {
         let uuid = generateUUID();
         // peerTable[1] & peerTable[2] // process repeatedDAta
         if (peerTable[1] && peerTable[2]) { // check for right uuid
            if (managerTable[peerTable[p1]]) { // is a manager
              peerTable[2] = peerTable[p1];
            } else if (managerTable[peerTable[p2]]) { // there is a manager
              peerTable[1] = peerTable[p2];
            } else { // peers
               // 
            } 
              
         } 
         if (peerTable[person1] && !peerTable[person2]) { 
            peerTable[person2] = peerTable[person1];
         } else if (!peerTable[person1] && peerTable[person2]) {
           peerTable[person1] = peerTable[person2];
         } else {
           peerTable[person1] = peerTable[person2] = uuid;
         }
       } else if (checkFunc === 'manager') {
         let group_id = generateUUID();
         if (!peerTable[person2]) { // groupid exists for manager
            peerTable[person2] = group_id;
         }
          managerTable[peerTable[person2]] = manager;
          if (!peerTable[manager]) {
             peerTable[manager] = generateUUID();
          }
       } else if (checkFunc === 'is_manager') {
          checkManager(person2, person1);
       }
    } 
  }
  
    function checkManager(employee, manager) {
       const groupId = peerTable[employee];
      if (!managerTable[groupId]) {
        return false;
      }
      if (managerTable[groupdId] === manager) {
        return true;
      } else {
        return checkManger(managerTable[groupId], manager);
      }
    }
  