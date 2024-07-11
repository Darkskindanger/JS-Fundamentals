// 1.
console.log("Exercise 1");
const fetchPokemon = (ms) => {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { name: "pikachu", power: 20 } }, ms);
      reject("An error has occured");
    });
  });
  return promise1;
};

console.log("Program started");
const fetchPokemonNow = async () => {
  try {
    const result = await fetchPokemon(4000);
    console.log(result);
  } catch (error) {
    console.log("We are in an error case, All Done!");
    console.log(error);
  }
};
// fetchPokemonNow();
console.log("Program Finished");

// 2.
console.log("Exercise 2");
const fetchUsers = () => {
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { user: "Monkey", admin: true } }, 3000);
      reject("An error has occured");
    });
  });
  return promise2;
};

const login = (obj) => {
  if (obj.admin === true) {
    console.log("Logged in successfuly");
  } else {
    console.log("Failed to log in, please try again.");
  }
};

console.log("program started");

const loginNow = async () => {
  const result = await fetchUsers();
  console.log(result);
  login(result.data);
};

loginNow();

// 3.
