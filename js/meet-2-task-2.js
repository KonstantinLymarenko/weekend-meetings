// Напишіть функцію для нормалізації дати
const inputData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 4, name: "Item 4" },
    { id: 7, name: "Item 7" },
];

// ('function should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//       entities: {
//         1: { id: 1, name: "Item 1" },
//         2: { id: 2, name: "Item 2" },
//         4: { id: 4, name: "Item 4" },
//         7: { id: 7, name: "Item 7" },
//       },
//       byId: [1, 2, 4, 7],
//     });

function formatingData(array) {
    const resultObject = {};
    const arrayid = [];
    const entitiesObject = {};

    array.forEach(function(item){
        
        entitiesObject[item.id] = item;
        arrayid.push(item.id);
        
    })
resultObject.entities = entitiesObject;
resultObject.byId = arrayid;

return resultObject;
}
console.log(formatingData(inputData));

const resultObject = formatingData(inputData);
console.log(resultObject.entities['2'].name);