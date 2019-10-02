

let friend = 'Josh';

switch (friend) {
    case "Autumn":
        console.log("Hey Autumn, when are we going rock wall climbing?");
        break;
    case "Danielle":
        console.log("Hey Danielle, how is Finn?");
        break;
    case "Josh":
        console.log("Hey Josh, let's go to Target!");
        break;
    default: //if none of your cases are met
        console.log(`I'm sorry, ${friend}, but do I know you?`);//don't have to break after default
        //above is string interprelation.  The alternate is "I'm sorry,",friend,", but do I know you?"
    }




    /*
? Challenge:
? Write a dessert menu;
? If the dessert is pie, console.log 'Pie, pie, me oh my!'
? If the dessert if cake, console.log 'Cake is great!'
? If the dessert is ice cream, console.log 'I scream for ice cream!'
? Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = 'pizza';
switch (dessert) {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "cake":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log("Not on the menu.");    
}

