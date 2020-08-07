it('should be an equal number', async () => {
  // do something async here and get a value
    expect(1).toBe(1);
});
// This logs to the console:
// "Success: should be an equal number"

it('should be an equal number', () => {
    expect(1).toBe(2);
});
// This logs to the console:
// "Failure: should be an equal number"

function it(strMsg, callback) {
  try {
    const execution = callback();
    if (execution && execution.then) {
      execution.then(() => {
        console.log(`Success: ${strMsg}`);
      }).catch(ex => throw ex);
    } else {
      console.log(`Success: ${strMsg}`);
    }
  } catch(ex) {
     console.log(`Failure: ${strMsg}`);
  }

}


async function expect(value) {

  return {
     toBe: async (expectedValue) => {
        if (value !== expectedValue) {
           throw new Error('failure');
        }
     }
  };
}

expect(1).toBe(2);

