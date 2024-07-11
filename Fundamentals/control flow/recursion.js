// The process of a function calling itself within itself with an exit clause to prevent an infinite loop

// Non recursive
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("hooray");
}

countDown(3);

function countDownRecursive(n) {
  if (n <= 0) {
    // replaces the 'let i=n' and 'i>0'
    console.log("hooray");
    return; //exit clause
  }
  console.log(n);
  countDownRecursive(n - 1); // This fires everytime the increment is more than 0, replacing the 'i--' in the prior for loop
}

// Non recursive
function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}

console.log(sumRange(7));

// Recursive version

function sumRangeRecursive(n, total = 0) {
  if (n <= 0) {
    return total;
  }
  return sumRangeRecursive(n - 1, total + n);
}

// Real world example:

function printChildren(tree) {
  //
}

function printChildrenRecursive(tree) {
  if (tree.children.length === 0) {
    return;
  }
  tree.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

// call flow
printChildrenRecursive("John");
printChildrenRecursive("Jim"); //no children so automatically exits
return;
printChildrenRecursive("zoe");
printChildrenRecursive("kyle");
return;
printChildrenRecursive("sophia");
return;
return; //Exiting Johns tree
return; //Exiting Jims tree

const tree = {
  name: "John",
  children: [
    { name: "Jim", children: [] },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};
