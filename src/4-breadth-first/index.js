const { graph_a } = require("../data");

const isKitFound = (name) => name === "Kit" ? true : false;

const searchKit = (start, graph) => {
  const search_queue = [start];
  const searched = []
  let steps = 0;

  while (search_queue.length > 0) {
    steps++;
    const currentName = search_queue.shift();

    if (!searched.includes(currentName)) {
      if (isKitFound(currentName)) {
        
        return {
          kitExists: true,
          stepsExecuted: steps
        }
      }
      else {
        searched.push(currentName);
        search_queue.push(...graph[currentName]);
        console.log(`iter: ${steps}, currentName: ${currentName}`);
        console.log(`iter: ${steps}, searched: ${searched}`);
        console.log(`iter: ${steps}, search_queue: ${search_queue}`);
        console.log(`----`);
      }
    }
  }

  return {
    kitExists: false,
    stepsExecuted: steps
  }
}

console.log(searchKit("Tom", graph_a));
// iter: 1, currentName: Tom
// iter: 1, searched: Tom
// iter: 1, search_queue: Eleanor,Lucy,Teddy
// ----
// iter: 2, currentName: Eleanor
// iter: 2, searched: Tom,Eleanor
// iter: 2, search_queue: Lucy,Teddy,James,Willow
// ----
// iter: 3, currentName: Lucy
// iter: 3, searched: Tom,Eleanor,Lucy
// iter: 3, search_queue: Teddy,James,Willow,Willow,Ellis
// ----
// iter: 4, currentName: Teddy
// iter: 4, searched: Tom,Eleanor,Lucy,Teddy
// iter: 4, search_queue: James,Willow,Willow,Ellis,Wyatt
// ----
// iter: 5, currentName: James
// iter: 5, searched: Tom,Eleanor,Lucy,Teddy,James
// iter: 5, search_queue: Willow,Willow,Ellis,Wyatt,Sawyer,Daisy
// ----
// iter: 6, currentName: Willow
// iter: 6, searched: Tom,Eleanor,Lucy,Teddy,James,Willow
// iter: 6, search_queue: Willow,Ellis,Wyatt,Sawyer,Daisy,Audrey,Daisy
// ----
// iter: 8, currentName: Ellis
// iter: 8, searched: Tom,Eleanor,Lucy,Teddy,James,Willow,Ellis
// iter: 8, search_queue: Wyatt,Sawyer,Daisy,Audrey,Daisy,Daisy
// ----
// iter: 9, currentName: Wyatt
// iter: 9, searched: Tom,Eleanor,Lucy,Teddy,James,Willow,Ellis,Wyatt
// iter: 9, search_queue: Sawyer,Daisy,Audrey,Daisy,Daisy,Sawyer
// ----
// iter: 10, currentName: Sawyer
// iter: 10, searched: Tom,Eleanor,Lucy,Teddy,James,Willow,Ellis,Wyatt,Sawyer
// iter: 10, search_queue: Daisy,Audrey,Daisy,Daisy,Sawyer
// ----
// iter: 11, currentName: Daisy
// iter: 11, searched: Tom,Eleanor,Lucy,Teddy,James,Willow,Ellis,Wyatt,Sawyer,Daisy
// iter: 11, search_queue: Audrey,Daisy,Daisy,Sawyer,Kit
// ----
// iter: 12, currentName: Audrey
// iter: 12, searched: Tom,Eleanor,Lucy,Teddy,James,Willow,Ellis,Wyatt,Sawyer,Daisy,Audrey
// iter: 12, search_queue: Daisy,Daisy,Sawyer,Kit,Audrey
// ----
// { kitExists: true, stepsExecuted: 16 }

console.log(searchKit("James", graph_a));
// iter: 1, currentName: James
// iter: 1, searched: James
// iter: 1, search_queue: Sawyer,Daisy
// ----
// iter: 2, currentName: Sawyer
// iter: 2, searched: James,Sawyer
// iter: 2, search_queue: Daisy
// ----
// iter: 3, currentName: Daisy
// iter: 3, searched: James,Sawyer,Daisy
// iter: 3, search_queue: Kit
// ----
// { kitExists: true, stepsExecuted: 4 }