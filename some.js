let sel = [{ id: 1 }, { id: 2 }];
let sel2 = [{ id: 1 }, { id: 3 }];
let sel3 = [{ id: 3 }, { id: 4 }];

let ind = [{ id: 1 }, { id: 2 }, {id: 3}];

// const filter = sel.some(row => ind.includes(row).id)
// const found = sel.some(r=> ind.includes(r))

for(let i=0; i < ind.length;i++){
    if (sel.some(e => e.id === ind[i].id)) {
        console.log(true);
      } else {
        console.log(false);
      }
}