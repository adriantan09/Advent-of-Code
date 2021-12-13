// Efficient solution (Infinity is the limit)
// Works up to 8127 days for example.txt
// Works up to 8080 days for input.txt
const part2 = (initialFishes, days) => {
  // Each bucket index = the current age of a fish
  // Each bucket value = the number of fish at that age
  const buckets = new Array(9).fill(0);

  // Populate the buckets from the initial amount of fish
  initialFishes.forEach((fish) => buckets[fish]++);

  for (let i = 0; i < days; i++) {
    // Remove all fish that have just been born
    const newFishes = buckets.shift();

    // New fish start with an age of 8 so are
    // added to the end of the list
    buckets.push(newFishes);

    // The number of fish that just 'gave birth' is equivalent
    // to the number of newFish that were borm. Existing fish
    // have their life reset back to 6
    buckets[6] += newFishes;
  }

  return buckets.reduce((f1, f2) => f1 + f2);
};

export default part2;
