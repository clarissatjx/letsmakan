// Function to get image path for each dish
function getDishImagePath(dishName) {
    const imageMap = {
        'Bak Kut Teh': 'img/bak_kut_teh.png',
        'Kaya Toast': 'img/kaya_toast.png',
        'Chilli Crab': 'img/chilli_crab.png',
        'Rojak': 'img/rojak.png',
        'Laksa': 'img/laksa.png',
        'Ice Kacang': 'img/ice_kacang.png',
        'Chicken Rice': 'img/chicken_rice.png',
        'Satay': 'img/satay.png',
        'Char Kway Teow': 'img/char_kway_teow.png',
        'Bak Chor Mee': 'img/bak_chor_mee.png', 
        'Nasi Lemak': 'img/nasi_lemak.png',
        'Popiah': 'img/popiah.png',
        'Hokkien Mee': 'img/hokkien_mee.png',
        'Oyster Omelette': 'img/oyster_omelette.png',
        'Black Pepper Crab': 'img/black_pepper_crab.png',
        'Murtabak': 'img/murtabak.png'
    };
    
    return imageMap[dishName];
}

// Function to create dish image element
function createDishIllustration(dishName) {
    const img = document.createElement('img');
    const imagePath = getDishImagePath(dishName);
    img.src = imagePath;
    img.alt = dishName;
    img.className = 'dish-illustration';
    
    // Handle image loading errors
    img.onerror = function() {
        // Use a placeholder image service or fallback
        this.src = 'https://via.placeholder.com/120x120/FFD93D/333333?text=' + encodeURIComponent(dishName.substring(0, 3));
        this.onerror = null; // Prevent infinite loop
    };
    
    return img;
}

const personalityDishes = {
    'INTJ': {
        name: 'Bak Kut Teh',
        description: 'You\'re strategic, independent, and have a deep, complex flavor profile. Like Bak Kut Teh, you appreciate tradition but with your own unique twist.',
        tagline: 'Shiok ah! Deep and complex, just like your flavor',
        strengths: ['Always has a master plan', 'Comes up with genius solutions', 'Independent and self-sufficient', 'Sees the big picture'],
        weaknesses: ['Overthinks everything', 'Forgets to reply messages', 'Too intense for some people'],
        compatible: ['Kaya Toast', 'Hokkien Mee', 'Char Kway Teow'],
        traits: ['Strategic', 'Independent', 'Complex', 'Thoughtful'],
        emoji: '🍖'
    },
    'INTP': {
        name: 'Kaya Toast',
        description: 'You\'re analytical, innovative, and enjoy the perfect balance of sweet and savory. Like Kaya Toast, you find beauty in simplicity and precision.',
        tagline: 'Simple on the outside, genius on the inside',
        strengths: ['Can fix anything with Google', 'Always questioning everything', 'Super curious about random stuff', 'Finds loopholes in everything'],
        weaknesses: ['Procrastinates until the last minute', 'Forgets to eat when hyperfocused', 'Social battery dies fast'],
        compatible: ['Bak Kut Teh', 'Ice Kacang', 'Oyster Omelette'],
        traits: ['Analytical', 'Innovative', 'Precise', 'Curious'],
        emoji: '🍞'
    },
    'ENTJ': {
        name: 'Chilli Crab',
        description: 'You\'re bold, ambitious, and command attention. Like Chilli Crab, you\'re not afraid to be the star of the show with your powerful presence.',
        tagline: 'Power lah! Not shy to be the star',
        strengths: ['Boss energy', 'Always makes the first move', 'Gets things done', 'Natural born leader'],
        weaknesses: ['Too direct sometimes', 'Impatient with slow people', 'Forgets to chill'],
        compatible: ['Chicken Rice', 'Nasi Lemak', 'Satay'],
        traits: ['Bold', 'Ambitious', 'Commanding', 'Confident'],
        emoji: '🦀'
    },
    'ENTP': {
        name: 'Rojak',
        description: 'You\'re creative, energetic, and love mixing unexpected elements. Like Rojak, you bring together diverse ideas in surprising and delightful ways.',
        tagline: 'Anything also can mix - creative and unpredictable',
        strengths: ['Comes up with the wackiest ideas but it works out', 'Debates everything for fun', 'Never runs out of energy', 'Challenges everyone\'s thinking'],
        weaknesses: ['Starts 10 projects, finishes 2', 'Forgets important dates', 'Can\'t stick to one thing'],
        compatible: ['Satay', 'Murtabak', 'Ice Kacang'],
        traits: ['Creative', 'Energetic', 'Unpredictable', 'Adventurous'],
        emoji: '🥗'
    },
    'INFJ': {
        name: 'Laksa',
        description: 'You\'re insightful, empathetic, and have layers of depth. Like Laksa, you combine rich flavors with warmth and complexity that touches the soul.',
        tagline: 'Warm and comforting, like a hug in a bowl',
        strengths: ['Reads people like a book', 'Always there for friends', 'Gives the best advice', 'Sees through fake people'],
        weaknesses: ['Takes everything personally', 'Needs alone time to recharge', 'Overthinks social situations'],
        compatible: ['Chicken Rice', 'Bak Chor Mee', 'Popiah'],
        traits: ['Insightful', 'Empathetic', 'Deep', 'Warm'],
        emoji: '🍜'
    },
    'INFP': {
        name: 'Ice Kacang',
        description: 'You\'re idealistic, creative, and full of colorful layers. Like Ice Kacang, you\'re a delightful mix of sweetness, texture, and unexpected surprises.',
        tagline: 'Sweet and colorful, always full of surprises',
        strengths: ['Creative and artsy', 'Super empathetic', 'Stays true to themselves', 'Daydreams the best scenarios'],
        weaknesses: ['Too scared to ask their crush out', 'Cries at sad movies', 'Procrastinates by daydreaming'],
        compatible: ['Laksa', 'Kaya Toast', 'Satay'],
        traits: ['Idealistic', 'Creative', 'Layered', 'Sweet'],
        emoji: '🍧'
    },
    'ENFJ': {
        name: 'Chicken Rice',
        description: 'You\'re charismatic, caring, and bring people together. Like Hainanese Chicken Rice, you\'re a beloved classic that everyone can enjoy and connect over.',
        tagline: 'Everyone also like - the classic that unites us all',
        strengths: ['Everyone\'s favorite person', 'Organizes the best group outings', 'Makes everyone feel valued', 'Natural people person'],
        weaknesses: ['Cares too much about what others think', 'Forgets to take care of themselves', 'Gets hurt easily'],
        compatible: ['Laksa', 'Popiah', 'Satay'],
        traits: ['Charismatic', 'Caring', 'Unifying', 'Classic'],
        emoji: '🍗'
    },
    'ENFP': {
        name: 'Satay',
        description: 'You\'re enthusiastic, social, and love bringing people together. Like Satay, you\'re perfect for gatherings and bring warmth and flavor to any occasion.',
        tagline: 'Always ready for makan session with friends',
        strengths: ['Life of the party', 'Always has fun ideas', 'Brings positive vibes', 'Enthusiastic about everything'],
        weaknesses: ['Room is a mess but knows where everything is', 'Says yes to everything', 'Gets distracted easily'],
        compatible: ['Chicken Rice', 'Rojak', 'Murtabak'],
        traits: ['Enthusiastic', 'Social', 'Warm', 'Gathering'],
        emoji: '🍢'
    },
    'ISTJ': {
        name: 'Char Kway Teow',
        description: 'You\'re reliable, practical, and appreciate well-crafted traditions. Like Char Kway Teow, you value skill, consistency, and getting things done right.',
        tagline: 'Steady lah - reliable and always on point',
        strengths: ['Never late for anything', 'Remembers everyone\'s birthdays', 'Organized to the max', 'Gets things done properly'],
        weaknesses: ['Hates last-minute plans', 'Sticks to routine too much', 'Too scared to try new things'],
        compatible: ['Bak Kut Teh', 'Nasi Lemak', 'Bak Chor Mee'],
        traits: ['Reliable', 'Practical', 'Traditional', 'Skilled'],
        emoji: '🍝'
    },
    'ISFJ': {
        name: 'Bak Chor Mee',
        description: 'You\'re warm, dependable, and find joy in taking care of others. Like Bak Chor Mee, you\'re comforting, familiar, and always there when needed.',
        tagline: 'Always there when you need comfort food',
        strengths: ['Remembers what everyone likes', 'Always brings snacks to share', 'The friend who checks up on you', 'Never forgets to say thank you'],
        weaknesses: ['Puts others before themselves', 'Gets taken advantage of', 'Can\'t say no to helping'],
        compatible: ['Laksa', 'Popiah', 'Chicken Rice'],
        traits: ['Warm', 'Dependable', 'Caring', 'Comforting'],
        emoji: '🍲'
    },
    'ESTJ': {
        name: 'Nasi Lemak',
        description: 'You\'re organized, efficient, and know how to bring everything together perfectly. Like Nasi Lemak, you\'re a complete package that works harmoniously.',
        tagline: 'Complete package - everything also have, all balanced',
        strengths: ['Plans everything perfectly', 'Gets everyone organized', 'Always on time', 'Takes charge naturally'],
        weaknesses: ['Too controlling sometimes', 'Can\'t go with the flow', 'Judges messy people'],
        compatible: ['Chilli Crab', 'Char Kway Teow', 'Chicken Rice'],
        traits: ['Organized', 'Efficient', 'Complete', 'Harmonious'],
        emoji: '🍛'
    },
    'ESFJ': {
        name: 'Popiah',
        description: 'You\'re sociable, caring, and love wrapping people in warmth. Like Popiah, you bring together different elements to create something wholesome and satisfying.',
        tagline: 'Bringing everyone together, one wrap at a time',
        strengths: ['Remembers everyone\'s preferences', 'The group mom friend', 'Makes everyone feel included', 'Initiates group activities'],
        weaknesses: ['Cares too much about being liked', 'Can\'t say no to people', 'Gets upset when people don\'t appreciate'],
        compatible: ['Chicken Rice', 'Bak Chor Mee', 'Satay'],
        traits: ['Sociable', 'Caring', 'Wholesome', 'Inclusive'],
        emoji: '🌯'
    },
    'ISTP': {
        name: 'Hokkien Mee',
        description: 'You\'re practical, hands-on, and appreciate the art of getting things done. Like Hokkien Mee, you\'re straightforward, flavorful, and no-nonsense.',
        tagline: 'No nonsense, just good food - straightforward and solid',
        strengths: ['Can fix anything', 'Stays calm in chaos', 'Independent and chill', 'Gets straight to the point'],
        weaknesses: ['Too private, disappears sometimes', 'Doesn\'t show emotions much', 'Hates small talk'],
        compatible: ['Bak Kut Teh', 'Char Kway Teow', 'Black Pepper Crab'],
        traits: ['Practical', 'Hands-on', 'Straightforward', 'Flavorful'],
        emoji: '🍜'
    },
    'ISFP': {
        name: 'Oyster Omelette',
        description: 'You\'re artistic, flexible, and enjoy unique combinations. Like Oyster Omelette, you\'re a creative blend that surprises and delights.',
        tagline: 'Creative and unique - always surprising people',
        strengths: ['Super creative and artsy', 'Goes with the flow', 'Stays true to themselves', 'Appreciates the little things'],
        weaknesses: ['Too scared to speak up sometimes', 'Takes criticism too personally', 'Procrastinates planning'],
        compatible: ['Ice Kacang', 'Kaya Toast', 'Murtabak'],
        traits: ['Artistic', 'Flexible', 'Unique', 'Surprising'],
        emoji: '🦪'
    },
    'ESTP': {
        name: 'Black Pepper Crab',
        description: 'You\'re bold, action-oriented, and love living in the moment. Like Black Pepper Crab, you\'re spicy, exciting, and always up for an adventure.',
        tagline: 'Spicy and bold - always ready for action',
        strengths: ['Spontaneous and fun', 'Never says no to adventure', 'Thrives on adrenaline', 'Makes things happen'],
        weaknesses: ['Acts first, thinks later', 'Gets bored easily', 'Hates sitting still'],
        compatible: ['Chilli Crab', 'Murtabak', 'Hokkien Mee'],
        traits: ['Bold', 'Action-oriented', 'Spicy', 'Adventurous'],
        emoji: '🦀'
    },
    'ESFP': {
        name: 'Murtabak',
        description: 'You\'re spontaneous, fun-loving, and bring energy wherever you go. Like Murtabak, you\'re stuffed with excitement and always ready to share the joy.',
        tagline: 'Stuffed with excitement - always ready to share the joy',
        strengths: ['Brings the party vibes', 'Makes everyone laugh', 'Lives in the moment', 'Always up for anything'],
        weaknesses: ['Room is a disaster zone', 'Avoids serious conversations', 'Gets bored of routine'],
        compatible: ['Satay', 'Rojak', 'Black Pepper Crab'],
        traits: ['Spontaneous', 'Fun-loving', 'Energetic', 'Joyful'],
        emoji: '🥙'
    }
};

const storyQuestions = [
    {
        story: "You have a planned hang out with 2 of your friends later and decided to eat at a hawker centre first.",
        question: "What's your game plan?",
        options: [
            { 
                text: "Check Google Maps, plan bus route, calculate what time must leave house, don't wanna be late", 
                personality: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ'] 
            },            
            {
                text: "Later then see lah, just wing it. If I get lost, I'll call friend to rescue.", 
                personality: ['ENFP', 'ESFP', 'ISFP', 'INFP']
            },            
            {
                text: "Ask the group chat, make sure everyone knows how to go, suggest meeting at nearest MRT first.", 
                personality: ['ESFJ', 'ENFJ', 'ISFJ', 'INFJ']
            },            
            {
                text: "Check nearest bus stop/MRT station. I’ll just go to that MRT first and find the hawker centre on the way.",
                personality: ['ENTP', 'ESTP', 'ISTP', 'INTP']
            }            
        ]
    },
    {
        story: "Before leaving the house, you stand in front of your wardrobe. Outside weather? Hot. Humid. Confirm sweat. And hawker centre don't have aircon.",
        question: "What you end up wearing?",
        options: [
            { 
                text: "Simple and safe — comfy drifit tee + shorts.", 
                personality: ['ISTJ', 'ISFJ', 'ISTP', 'INTJ'] 
            },
            { 
                text: "Whatever feels good today — colours, patterns, vibes all must match my mood.", 
                personality: ['ENFP', 'ESFP', 'INFP', 'ENFJ'] 
            },
            { 
                text: "Practical but still look presentable — breathable top, clean fit, can take nice pics also.", 
                personality: ['ENTJ', 'ESTJ', 'ESFJ', 'ENTP'] 
            },
            { 
                text: "I just throw on whatever’s nearest to me and go. Not that deep lah.", 
                personality: ['INTP', 'ISFP', 'ESTP', 'INFJ'] 
            }
        ]
    },    
    {
        story: "You and your friends step into a super crowded hawker centre. Wah, the smell...",
        question: "What catches your eye first?",
        options: [
            { text: "Wah the queue damn long — must be quite legit.", personality: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'] },
            { text: "Eh what is that stall? never see before leh.", personality: ['ENFP', 'ENTP', 'ESTP', 'ISFP'] },
            { text: "Hold up, I need to scan all the stalls first before deciding.", personality: ['INTJ', 'INTP', 'ISTP', 'INFJ'] },
            { text: "I see what my friends hype up first", personality: ['ENFJ', 'INFP', 'ESFP', 'ENTJ'] }
        ]
    },
    {
        story: "You notice a stall called “Auntie’s Secret Recipe”. The queue sibeh long.",
        question: "What you do?",
        options: [
            { text: "Queue!!! Long queue = good food (basic singaporean math)", personality: ['ESTP', 'ESFP', 'ENTP', 'ENFP'] },
            { text: "Gonna google to check the reviews first", personality: ['INTJ', 'INTP', 'ISTJ', 'ISTP'] },
            { text: "Ask the uncle/aunty in front if nice or not.", personality: ['ENFJ', 'ESFJ', 'ENTJ', 'ESTJ'] },
            { text: "Aiya skip lah. I not in the mood to queue.", personality: ['ISFJ', 'ISFP', 'INFJ', 'INFP'] }
        ]
    },
    {
        story: "You see a sign saying the stall has been around for 30 years. Auntie inside flipping wok like masterchef.",
        question: "What impresses you most?",
        options: [
            { text: "The dedication. 30 years still going strong.", personality: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'INTJ', 'INFJ'] },
            { text: "The passion… can feel the love she put inside the food.", personality: ['ENFJ', 'ENFP', 'ESFP', 'INFP', 'ISFP', 'ENTJ'] },
            { text: "The consistency! every plate look exactly the same.", personality: ['ISTP', 'ESTP', 'INTP', 'ENTP'] }
        ]
    },
    {
        story: "You’re down to two choices — your usual favourite or something totally new.",
        question: "Which one?",
        options: [
            { text: "My usual, why risk disappointment?", personality: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'INTJ', 'INTP', 'ISTP', 'INFJ'] },
            { text: "Gotta try something new!", personality: ['ENFP', 'ENTP', 'ESTP', 'ISFP'] },
            { text: "I get both and share-share with my friends.", personality: ['ENFJ', 'ESFP', 'INFP', 'ENTJ'] },
        ]
    },
    {
        story: "When you order, the hawker aunty smiles and asks, “First time here ah? Want recommendation?”",
        question: "How you respond?",
        options: [
            { text: "Tell me what’s good!", personality: ['ENFJ', 'ENFP', 'ESFJ', 'ESFP', 'ESTP', 'ENTP', 'ENTJ', 'ESTJ'] },
            { text: "Thank you aunty, but I already know what I want", personality: ['INFJ', 'INFP', 'INTJ', 'INTP', 'ISTJ', 'ISFJ', 'ISTP', 'ISFP'] }
        ]
    },
    {
        story: "Another stall gives you the wrong order… but it actually looks quite tasty leh.",
        question: "Your move?",
        options: [
            { 
                text: "Just take it. Maybe nice also.", 
                personality: ['ENFP', 'ESFP', 'ENTP', 'ESTP', 'ISFP', 'INFP'] 
            },
            { 
                text: "Sorry aunty... I think this isn't my order :(", 
                personality: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ', 'ISFJ', 'ESFJ'] 
            },
            { 
                text: "I look around to find who this belongs to — maybe aunty mix up, I help settle.", 
                personality: ['INFJ', 'INTP', 'ISTP', 'ENFJ'] 
            }
        ]
    },
    {
        story: "You and your friends finally got all your food. You’re balancing your tray, scanning for seats. The hawker centre is extremely crowded and there aren't any empty tables that you can see. One couple clearly finishing but taking their own sweet time.",
        question: "What you do first?",
        options: [
            { 
                text: "Stand nearby and hover, hopefully they get the hint", 
                personality: ['ISTJ', 'ESTJ', 'ENTJ', 'ISTP'] 
            },
            { 
                text: "Ask politely if they’re leaving soon.", 
                personality: ['ENFJ', 'ESFJ', 'ENFP', 'ESFP'] 
            },
            { 
                text: "Just find another spot, no need to stress, confirm have one.", 
                personality: ['INFP', 'ISFP', 'INFJ', 'INTP'] 
            },
            { 
                text: "Let’s strategise — we split up and find seats.", 
                personality: ['ENTP', 'ESTP', 'INTJ', 'ISFJ'] 
            }
        ]
    },    
    {
        story: "You finally sit down with your food. Your friends wants to try a bite before you even start.",
        question: "How you react?",
        options: [
            { 
                text: "Take lah take! Sharing is caring.", 
                personality: ['ENFJ', 'ENFP', 'ESFP', 'ENTP'] 
            },
            { 
                text: "Takes a bite first before offering to your friend", 
                personality: ['ISFJ', 'INFP', 'INFJ', 'ISFP'] 
            },
            { 
                text: "Let's eat our own food first", 
                personality: ['ISTJ', 'INTJ', 'ISTP', 'INTP'] 
            },
            { 
                text: "Ok lah you try mine, I try yours also — fair trade.", 
                personality: ['ESTP', 'ESTJ', 'ENTJ', 'ESFJ'] 
            }
        ]
    },        
    {
        story: "At the next table, someone damn loud saying another stall is super good.",
        question: "What you think?",
        options: [
            { 
                text: "Serious? I gotta check it out now", 
                personality: ['ENFP', 'ESFP', 'ENTP', 'ESTP']
            },
            { 
                text: "Interesting… but let me observe the stall first and search it up.", 
                personality: ['INTJ', 'ENTJ', 'ISTJ', 'ESTJ', 'INTP', 'ISTP']
            },
            { 
                text: "Maybe next time! (I'll probably forget about it)", 
                personality: ['INFJ', 'INFP', 'ISFJ', 'ISFP', 'ENFJ', 'ESFJ']
            }
        ]
    },
    {
        story: "Your clique just entered the hawker centre and asks you join them. They all sharing food in the middle family-style.",
        question: "What you do?",
        options: [
            { text: "I'll help arrange plates!", personality: ['ENTJ', 'ESTJ', 'ENFJ', 'ESFJ'] },
            { text: "Eh let’s order MORE!", personality: ['ENFP', 'ENTP', 'ESFP', 'ESTP'] },
            { text: "I'll join but I'll eat my own dish~.", personality: ['INTJ', 'INTP', 'ISTJ', 'ISTP', 'INFJ', 'INFP', 'ISFJ', 'ISFP'] }
        ]
    },
    {
        story: "You’re full and happy. Hawker centre is still buzzing with life!",
        question: "What next?",
        options: [
            { text: "Dessert + stay chit-chat awhile.", personality: ['ENFJ', 'ENFP', 'ESFJ', 'ESFP', 'ENTP', 'ESTP'] },
            { text: "Go home, I'm done for the day already", personality: ['INTJ', 'INTP', 'ISTJ', 'ISTP', 'INFJ', 'INFP', 'ISFJ', 'ISFP'] },
            { text: "Chill awhile then go, no rush to leave", personality: ['ENTJ', 'ESTJ'] }
        ]
    },
    {
        story: "Walking out, you think back about the whole makan session.",
        question: "What you remember most?",
        options: [
            { text: "The food — the flavours are on point.", personality: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP'] },
            { text: "The people — the banter, the vibes, the yapping!", personality: ['ENFJ', 'ENFP', 'ESFP', 'INFJ', 'INFP', 'ENTJ'] },
            { text: "Everything — the chaos, the smell, the whole experience.", personality: ['ENTP', 'ESTP', 'INTJ', 'INTP'] }
        ]
    }
];


// Quiz state
let currentQuestion = 0;
let scores = {
    'I': 0, 'E': 0,
    'N': 0, 'S': 0,
    'F': 0, 'T': 0,
    'J': 0, 'P': 0
};

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const storyText = document.getElementById('story-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress');
const resultContent = document.getElementById('result-content');

startBtn.addEventListener('click', startQuiz);



function startQuiz() {
    // Clear saved results when starting a new quiz
    localStorage.removeItem('letsmakan_result');
    localStorage.removeItem('letsmakan_timestamp');
    
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestion = 0;
    scores = { 'I': 0, 'E': 0, 'N': 0, 'S': 0, 'F': 0, 'T': 0, 'J': 0, 'P': 0 };
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= storyQuestions.length) {
        showResults();
        return;
    }

    const storyQuestion = storyQuestions[currentQuestion];
    storyText.textContent = storyQuestion.story;
    questionText.textContent = storyQuestion.question;
    optionsContainer.innerHTML = '';

    storyQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(option.personality));
        optionsContainer.appendChild(button);
    });

    // Update progress
    const progress = ((currentQuestion + 1) / storyQuestions.length) * 100;
    progressFill.style.width = progress + '%';
}

function selectOption(personalityTypes) {
    // Score each personality type
    personalityTypes.forEach(type => {
        // Extract dimensions from personality type
        if (type[0] === 'I') scores['I']++;
        if (type[0] === 'E') scores['E']++;
        if (type[1] === 'N') scores['N']++;
        if (type[1] === 'S') scores['S']++;
        if (type[2] === 'F') scores['F']++;
        if (type[2] === 'T') scores['T']++;
        if (type[3] === 'J') scores['J']++;
        if (type[3] === 'P') scores['P']++;
    });

    currentQuestion++;
    
    // Add a small delay for better UX
    setTimeout(() => {
        showQuestion();
    }, 300);
}

function determinePersonality() {
    const personality = 
        (scores['I'] > scores['E'] ? 'I' : 'E') +
        (scores['N'] > scores['S'] ? 'N' : 'S') +
        (scores['F'] > scores['T'] ? 'F' : 'T') +
        (scores['J'] > scores['P'] ? 'J' : 'P');
    
    return personality;
}

function showResults() {
    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    const personality = determinePersonality();
    const dish = personalityDishes[personality];

    // Save result to localStorage
    localStorage.setItem('letsmakan_result', personality);
    localStorage.setItem('letsmakan_timestamp', Date.now().toString());

    renderResults(dish);
}

function renderResults(dish) {
    resultContent.innerHTML = `
        <div class="result-card">
            <div class="dish-illustration-container" id="main-dish-illustration"></div>
            <h2>You are ${dish.name}!</h2>
            <p class="tagline">${dish.tagline}</p>
            <p class="dish-description">${dish.description}</p>
            
            <div class="strengths-weaknesses">
                <div class="strengths">
                    <h3>Strengths</h3>
                    <ul>
                        ${dish.strengths.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
                <div class="weaknesses">
                    <h3>Weaknesses</h3>
                    <ul>
                        ${dish.weaknesses.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="compatible-section">
                <h3>Most Compatible With</h3>
                <div class="compatible-dishes">
                    ${dish.compatible.map((comp, index) => {
                        return `<div class="compatible-item" id="compatible-${index}">
                            <span class="compatible-illustration"></span>
                            <span class="compatible-name">${comp}</span>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            <div class="share-section">
                <p>Share your result with friends!</p>
            </div>
            <div class="results-buttons">
                <button id="view-all-dishes-btn" class="btn-secondary">View All Dishes</button>
                <button id="restart-btn-inline" class="btn-primary">Start Over</button>
            </div>
        </div>
    `;
    
    // Add main dish illustration
    const mainContainer = document.getElementById('main-dish-illustration');
    if (mainContainer) {
        const img = createDishIllustration(dish.name);
        mainContainer.appendChild(img);
    }
    
    // Add compatible dish illustrations
    dish.compatible.forEach((comp, index) => {
        const compContainer = document.querySelector(`#compatible-${index} .compatible-illustration`);
        if (compContainer) {
            const compImg = createDishIllustration(comp);
            compImg.classList.add('compatible-dish-img');
            compContainer.appendChild(compImg);
        }
    });
    
    // Add event listener for view all dishes button
    const viewAllBtn = document.getElementById('view-all-dishes-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', () => {
            window.open('dishes.html', '_blank');
        });
    }
    
    // Add event listener for inline restart button
    const restartBtnInline = document.getElementById('restart-btn-inline');
    if (restartBtnInline) {
        restartBtnInline.addEventListener('click', restartQuiz);
    }
}

function restartQuiz() {
    // Clear saved results when restarting
    localStorage.removeItem('letsmakan_result');
    localStorage.removeItem('letsmakan_timestamp');
    
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Check for saved results on page load
function checkForSavedResults() {
    const savedPersonality = localStorage.getItem('letsmakan_result');
    if (savedPersonality && personalityDishes[savedPersonality]) {
        const dish = personalityDishes[savedPersonality];
        startScreen.classList.remove('active');
        quizScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        renderResults(dish);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    checkForSavedResults();
});

