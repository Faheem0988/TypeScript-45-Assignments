

let Guest_List :string[] = ['fayyaz','ayyaz','farhan'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'fayyaz' ;
let new_Guest :string = 'toqeer' ;
Guest_List[0] = new_Guest ;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party. `) ;
console.log('Good News! we find a big table so we are inviting 3 more guests.')

// yahan per mene array me 3 guest add kiye hain.
Guest_List.unshift('azhar') ;
Guest_List.splice(2 , 0 , 'taha');
Guest_List.push('taimoor');

// yahan per mene 6 guest k array ko print karwaya hai.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
// sorry message to guest not inviting.
console.log('\nsorry we can not arrange big table, only two peoples will be invited.');
// yahan par mene guest remove kiye hain.
while(Guest_List.length >2){
  let remove_Guest =  Guest_List.pop();
  console.log(`sorry Mr. ${remove_Guest}, you are not invited for Dinner.`);
}
// humare bache hue 2 invited guest.
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' +Guest_List[i] +',\n\nYou are still invited.\n\nThank You!\n\n')
}
// mene sare guest array se remove kar diye hain.
Guest_List.splice(0, 2);
console.log(Guest_List);