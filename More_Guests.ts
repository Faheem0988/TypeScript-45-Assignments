

let Guest_List :string[] = ['fayyaz','ayyaz','farhan'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'fayyaz' ;

let new_Guest :string = 'toqeer' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

console.log(`Mr. ${absent_Guest} is not coming to the party. `) ;

console.log('Good News! we find a big table so we are inviting 3 more guests.')


Guest_List.unshift('azhar') ;
Guest_List.splice(2 , 0 , 'taha');
Guest_List.push('taimoor');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' +Guest_List[i] +',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}