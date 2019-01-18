//Write a method to remove duplicate characters from a string (case in-sensitive;
//so if both “H” and “h” appear in the input, neither will appear in the output)

//Example:
//removeDuplicates(“Hello my name is Katherine”)
//=>“oysKtr”

// function removeDuplicates(str) {
//     const hashTable = {};
//     for (let i = 0; i < str.length; i++) {
//         const character = str[i].toLowerCase();
//         if (hashTable[character]) {
//             hashTable[character] += 1;
//         } else {
//             hashTable[character] = 1;
//         }
//     }
//     let result = '';
//     Object.keys(hashTable).forEach((item) => {
//         if (hashTable[item] === 1) {
//             result += item;
//         }
//     });
//     return result;
// }

// console.log(removeDuplicates("Hello my name is Katherine"));





// Write a function to return the nth element in a Fibonacci sequence.
// 0 1 1 2 3 5 8 13 21 34 55 ...
// n = 4, output => 3

// function fibonacci(n) {
//     let fibo = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo[n];
// }

// console.log(fibonacci(4));




/**
Let’s say you are creating a Video Player app and you need to build a VolumeSlider
component to control the volume of the video. The VolumeSlider consists of:
- A title or label for the slider
- An <input> with type “range” to increase or decrease the volume
- A label indicating what the current volume level is.
 - The volume range goes from 0-100 and on render starts at 50.
Not all functionality needs to be completely implemented, but please show how
any events/interactions would occur, and how you will store the current volume level.
**/

class VolumneSlider extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          currVolume: 50,
      };
  }

  handleOnChange(e) {
      let value = e.target.value;
      this.setState({
          currVolume: value
      });
  }

  render() {
      const { currVolume } = this.state;
      return (
          <div>
              <label>Volumne: {currVolume}</label>
              <input type="range" min="0" max="100" defaultValue={50} value={currVolume}
                  onChange={this.handleOnChange}
              />
          </div>
      );
  }
}
