
/**
 * Set items ls
 * @param {*} key 
 * @param {*} arr 
 * @returns 
 */

function dataSend(key,arr){
 let data = JSON.stringify(key,arr);
 localStorage.setItem(key,data);
 return true;
};
/**
 * Get items for localstors
 * @param {*} key 
 * @returns 
 */
function dataGet(key){
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false;
};