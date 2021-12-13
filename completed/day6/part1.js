// Naive solution (Memory is the limit)
// Works up to 194 days for example.txt
// Works up to 144 days for input.txt
const part1 = (state, days) => {
  if (days === 0) return state.length;

  for (let i = 0; i < state.length; i++) {
    if (state[i] === 0) {
      state[i] = 6;
      state.push(8 + 1);
    } else {
      state[i]--;
    }
  }

  return part1(state, days - 1);
};

export default part1;
