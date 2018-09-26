//1. Skapa slumpmässiga dokument

const group = ['sandals', 'ballerinas', 'boots', 'sneakers', 'heels', 'slippers' ];
const color = ['black', 'green', 'yellow', 'red', 'navyblue', 'white'];

// function to generate a single document with props: name, category, price
generateRandomDocument = () => {
  let itemColor = randomElement(color);
  let itemGroup = randomElement(group);
  let itemPrice = Math.floor(300 + (Math.random()* 700));

  let item = {
    name : itemColor + " " + itemGroup,
    category: itemGroup,
    price: itemPrice,
  }
  return item
}
// function for randomize elements from list
randomElement = (list) => {
  let r = Math.random() * list.length;
  // console.log(list[Math.floor(r)]);
  return list[Math.floor(r)];
}
//function to generate list with documents
generateListWithDocs = (count) => {
  let list = [];
  while(count > 0){
    list.push(generateRandomDocument());
    count--;
  }
  // console.log(list);
  return list
}

module.exports = {
  generateListWithDocs: generateListWithDocs
}
