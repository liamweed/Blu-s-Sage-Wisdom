
let messageIntro = [
    "The neighbor’s squirrel told me ",
    "I sniffed something important, and ",
    "Every good dog knows ",
    "Between belly rubs, I discovered ",
    "While chasing my tail, I realized ",
    "The wind whispered to my floppy ears ",
    "When I buried that bone last week ",
    "I heard at the dog park ",
    "In the backyard at midnight, I thought ",
    "While stealing your sock, I figured out ",
    'The mustard industry is ',
    'I am just a rabbit dog, I dont know what '
];

let messageMiddle = [
    "there’s a secret to unlimited belly rubs .",
    "the mailman is actually a treat thief ",
    "all sticks lead to ultimate happiness ",
    "digging a hole is the solution to everything ",
    "tug-of-war is a metaphor for life ",
    "you’ve been holding out on the good snacks ",
    "butt scratches are the key to world peace ",
    "every shoe smells like a new adventure ",
    "the couch cushions are hiding treasure ",
    "zoomies are a universal truth ", 
    'WAIT wheres my collar? '
];

let messageEnd = [
    "...so throw the ball already!",
    "...and now I demand a treat!",
    "...woof, time for a nap.",
    "...but I’ll probably forget by tomorrow.",
    "...so belly rubs are the only logical response.",
    "...and that’s why we’re best friends!",
    "...but first, let me sniff your shoe.",
    "...so let's go for a walk, right now!",
    "...and I’m wagging my tail just thinking about it.",
    "...woof-woof, case closed!",
    '... so I think youre a mustard barron - like me.',
    '... so NO i wont come inside!',
    '... and now I will return to my deer leg'
];



let wis = document.getElementById('wiz');


let photo = document.getElementById('bluePhoto');


let getWisdom = function(){
    let message = messageIntro[Math.floor(Math.random() * messageIntro.length)] + messageMiddle[Math.floor(Math.random() * messageMiddle.length)] + messageEnd[Math.floor(Math.random() * messageEnd.length)];
    wis.innerHTML = message;
}

let noWisdom = function(){
    wis.innerHTML = "More Pets = More Wisdom";
}

photo.onclick = getWisdom;
photo.onmouseup = noWisdom;
