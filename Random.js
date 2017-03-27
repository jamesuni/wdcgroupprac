
//The <adjective> <noun> was <verb ending in -ing>





//why not just have massive javascript arrays?


function sentence() {
    
    var noun =
        [
            "cat",
            "mouse",
            "bicycle",
            "fridge",
            "plastic bag",
            "globe",
            "frog",
            "brain",
            "shoe",
            "student",
            "pipe",
            "oven glove",
            "book",
            "hamster",
            "species",
            "reality",
            "onion",
            "sock-puppet",
            "pig",
            "family",
            "computer program",
            "python",
            "optimist",
            "hotdog"
        ];
    
    var adverb =
        [
            "reluctantly",
            "carefully",
            "heroically",
            "blasphemously",
            "enthusiastically",
            "absent-mindedly",
            "quickly",
            "haphazardly",
            "inconsistently",
            "repeatedly",
            "arguably",
            "alledgedly",
            "still",
            "finally",
            "almost",
            "eternally",
            "sheepishly",
            "impatiently"
        ];
    
    var adjective =
        [
            "funny",
            "smelly",
            "dead",
            "chubby",
            "hairy",
            "stupid",
            "brainy",
            "futuristic",
            "confused",
            "attractive",
            "dishevelled",
            "pointy",
            "unfortunate",
            "inconvenient",
            "flattened",
            "burnt",
            "frozen",
            "domesticated",
            "filthy",
            "blithering",
            "heroic",
            "flabby",
            "crumpled",
            "anacronistic",
            "hopeful",
            "prudish",
            'orange'
        ];
    
    var verb =
    [
        "freezing",
        "dropping",
        "failing",
        "drowning",
        "flying",
        "running",
        "cooking",
        "forgetting",
        "remembering",
        "drinking",
        "scaring",
        "deep-frying",
        "astounding",
        "contemplating",
        "heckling",
        "laughing at",
        "avoiding",
        "comforting",
        "spending",
        "gift-wrapping",
        "unpacking",
        "fobbing off",
        "politely ignoring",
        "pretending to be",
        "treading on",
        "programming",
        "feeding",
        "corresponding with",
        "calming",
        "outraging",
        "mystifying",
        "rolling"
    ];
    
    
//     Math.floor((Math.random() * 100) + 1);
//
//The result could be: 52 
//    
    
//    var nounRand = ;
//    var nounRandTwo = );
//    
//    alert(nounRand + " vs " + nounRandTwo);

    var selectNoun =    noun[Math.floor((Math.random()) * noun.length)];
    var selectNounTwo = noun[Math.floor((Math.random()) * noun.length)];

    var selectAdjective =    adjective[ Math.floor((Math.random()) * adjective.length) ];
    var selectAdjectiveTwo = adjective[ Math.floor((Math.random()) * adjective.length) ];

    var selectAdverb = adverb[ Math.floor((Math.random()) * adverb.length) ];
    
    var selectVerb = verb[ Math.floor((Math.random()) * verb.length) ];  
    
    var answer = "\"The " + selectAdjective + " " + selectNoun + " was " + selectAdverb + " " + selectVerb + " the " + selectAdjectiveTwo + " " + selectNounTwo + " when...\"";
    
//    alert(answer);
    
    document.getElementById('randomBox').innerHTML = answer;
    
//    return 
    
    
}





