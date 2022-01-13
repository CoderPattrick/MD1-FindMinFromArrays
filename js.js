let arr1= [3, 5, 1, 8, -3, 7, 8];
let arr2= [7, 12, 6, 9, 20, 56, 89];
let arr3= [];
let arr4= [0, 0, 0, 0, 0, 0];
let newArr=[];
function pullmin(x){
    let min = x[0];
    for (let i = 1; i <x.length; i++) {
        if(min>x[i]){
            min = x[i];
        }
    }
    if(x.length != 0){
        newArr.push(min);
    }
    return min;
}
pullmin(arr1);
pullmin(arr2);
pullmin(arr3);
pullmin(arr4);
document.write(newArr.join())
