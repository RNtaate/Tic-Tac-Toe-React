let winMovesObject = {
  '1,2,3': true,
  '4,5,6': true,
  '7,8,9': true,
  '1,4,7': true,
  '2,5,8': true,
  '3,6,9': true,
  '1,5,9': true,
  '3,5,7': true,
};

const winChecker = (movesArray) => {
  if (movesArray.length < 3) return false;

  let holder = 0;
  let middle;
  let last;
  let finalResult = false;

  while (!finalResult && holder < movesArray.length - 2) {
    middle = holder + 1;

    while (middle < movesArray.length - 1) {
      last = middle + 1;

      while (last < movesArray.length) {
        let currentMoveSet = [];
        currentMoveSet = currentMoveSet.concat([
          movesArray[holder],
          movesArray[middle],
          movesArray[last],
        ]);

        currentMoveSet = currentMoveSet.sort().join(',');

        // check the current move set against the win moves
        if (winMovesObject[currentMoveSet]) {
          // we have to update finalResult to true;
          finalResult = true;
          break;
        }
        last = last + 1;
      }
      if (finalResult) break;
      // update the middle variable if the finalResult is still false and we didn't break
      middle = middle + 1;
    }

    //update the holder variable
    holder = holder + 1;
  }

  return finalResult;
};

export default winChecker;
