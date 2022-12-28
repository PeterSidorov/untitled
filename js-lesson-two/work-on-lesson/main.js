/*
        WHILE

        let cars = 7;
        while (cars > 0) {
            console.log(cars)
            cars--;
        }

        let i = 0;
        while (i<20){
            console.log(i)
            i++;
        }
 */
/*
         DO WHILE

         let y = 0;

         do {
             console.log(y)
             y++;
         } while (y!=5)
 */
/*
       FOR
       for (let i=0; i<5;i++){
       console.log(i)
}
 */
/*
const carFerrari = {
    model : 'motor',
    country : 'Italy',
    year : 2023,
    color : 'orange'
};
 */
/* Array Массивы
const colors = ['green','red','yellow','white'];
const results = [34,234,45,93,21,3983,343];
 */
/*Functions
const showMessage = () => {
    console.log('Это сообщение из функции showMessage')
};

showMessage();
*/

const checkAge = (name, age) => {
    if (age >= 18) {
        console.log(name + ' идет в армию')
    } else {
        console.log(name + ' продолжает ходить на дискотеки')
    }

}
checkAge('Alex',23);

const sum = (a , b) => {
    return a + b;
}
const result = sum(3,5);
console.log(result)