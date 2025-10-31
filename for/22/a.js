let array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for(let i = 0; i < array.length; i++){
    switch (array[i]){
        case 'Monday':
            console.log(`${array[i]} будний день`);
            break;
        case 'Tuesday':
            console.log(`${array[i]} будний день`);
            break;
        case 'Wednesday':
            console.log(`${array[i]} будний день`);
            break;
        case 'Thursday':
            console.log(`${array[i]} будний день`);
            break;
        case 'Friday':
            console.log(`${array[i]}будний день`);
            break;
        case 'Saturday':
            console.log(`${array[i]} выходной`);
            break;
        case 'Sunday':
            console.log(`${array[i]} выходной`);
            break;

    }
}