// Function to get image path for each dish
function getDishImagePath(dishName) {
    const imageMap = {
        'Bak Kut Teh': 'img/bak_kut_teh.png',
        'Kaya Toast': 'img/kaya_toast.png',
        'Chilli Crab': 'img/chilli_crab.png',
        'Rojak': 'img/rojak.png',
        'Laksa': 'img/laksa.png',
        'Ice Kacang': 'img/ice_kacang.png',
        'Chicken Rice': 'img/chicken_rice.PNG',
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
        story: "You're wandering through a hawker center with your friend and your stomach starts rumbling. So many options!",
        question: "What catches your eye first?",
        options: [
            { text: "The longest queue - must be good!", personality: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'] },
            { text: "Something I've never seen before", personality: ['ENFP', 'ENTP', 'ESTP', 'ISFP'] },
            { text: "I need to check out every stall first then evaluate...", personality: ['INTJ', 'INTP', 'ISTP', 'INFJ'] },
            { text: "Whatever my friend is excited about!", personality: ['ENFJ', 'INFP', 'ESFP', 'ENTJ'] }
        ]
    },
    {
        story: "You spot a stall with a really interesting name. The sign says 'Auntie's Special' with a long line.",
        question: "What's your move?",
        options: [
            { text: "Join the queue - if there's a line, it's worth it!", personality: ['ESTP', 'ESFP', 'ENTP', 'ENFP'] },
            { text: "Check reviews on my phone first", personality: ['INTJ', 'INTP', 'ISTJ', 'ISTP'] },
            { text: "Ask someone in line if they've tried it before and what they think", personality: ['ENFJ', 'ESFJ', 'ENTJ', 'ESTJ'] },
            { text: "Maybe later, I'll stick with what I know for now", personality: ['ISFJ', 'ISFP', 'INFJ', 'INFP'] }
        ]
    },
    {
        story: "You notice the stall has been around for 30 years according to a sign. The hawker is an expert at their craft.",
        question: "What impresses you most?",
        options: [
            { text: "The dedication and skill built over decades", personality: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'INTJ', 'INFJ'] },
            { text: "The passion and love for what they do", personality: ['ENFJ', 'ENFP', 'ESFP', 'INFP', 'ISFP', 'ENTJ'] },
            { text: "The consistency - same quality every time", personality: ['ISTP', 'ESTP', 'INTP', 'ENTP'] }
        ]
    },
    {
        story: "You're trying to decide between two dishes. One looks familiar, the other is completely new.",
        question: "Which one do you pick?",
        options: [
            { text: "The familiar one - I know I'll like it", personality: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'] },
            { text: "The new one - life's too short for the same dish!", personality: ['ENFP', 'ENTP', 'ESTP', 'ISFP'] },
            { text: "I'll get both and share with my friend", personality: ['ENFJ', 'ESFP', 'INFP', 'ENTJ'] },
            { text: "Let me think about the ingredients and flavors first and ask my friend for their opinion", personality: ['INTJ', 'INTP', 'ISTP', 'INFJ'] }
        ]
    },
    {
        story: "The hawker aunty at the stall you decided to order from is chatting with customers. She seems really friendly! She notices you and asks if you need any help ordering.",
        question: "What do you do?",
        options: [
            { text: "Strike up a conversation and ask for recommendations!", personality: ['ENFJ', 'ENFP', 'ESFJ', 'ESFP', 'ENTJ', 'ENTP', 'ESTJ', 'ESTP'] },
            { text: "Smile politely and decline, I'll just order what I have in mind already~", personality: ['INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'] }
        ]
    },
    {
        story: "After ordering from the previous stall, you go to another hawker to order another dish. The hawker accidentally gives you the wrong order! You ordered something else, but this looks pretty good too.",
        question: "What do you do?",
        options: [
            { text: "Just accept it and try it - might be good!", personality: ['ENFP', 'ESFP', 'ENTP', 'ESTP', 'ISFP', 'INFP'] },
            { text: "Politely point out the mistake and ask for what I ordered", personality: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ', 'ISFJ', 'ESFJ'] },
            { text: "Take it but feel a bit awkward about saying something", personality: ['INFJ', 'INTP', 'ISTP', 'ENFJ'] }
        ]
    },
    {
        story: "Your food arrives and you take a seat. It looks amazing. You take your first bite...",
        question: "What's your reaction?",
        options: [
            { text: "Immediately rave about how good it is!", personality: ['ENFJ', 'ENFP', 'ESFJ', 'ESFP', 'ENTJ', 'ENTP', 'ESTJ', 'ESTP'] },
            { text: "Savor it and take a few more bites!", personality: ['INFJ', 'INFP', 'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP'] }
        ]
    },
    {
        story: "You overhear someone raving about a dish at another stall. They're really passionate about it!",
        question: "What do you think?",
        options: [
            { text: "Ooh sounds good! Let me go check it out now", personality: ['ENFP', 'ESFP', 'ENTP', 'ESTP', 'ENFJ', 'ESFJ'] },
            { text: "Interesting... I'll probably forget about it though", personality: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ', 'INTP', 'INFP', 'INFJ', 'ISFJ', 'ISFP', 'ISTP'] }
        ]
    },
    {
        story: "You see someone struggling to find a table. The hawker center is packed!",
        question: "What do you do?",
        options: [
            { text: "Offer to share your table", personality: ['ENFJ', 'ESFJ', 'ENFP', 'ESFP', 'ISFJ', 'ISFP'] },
            { text: "Keep eating and mind your own business", personality: ['INTJ', 'INTP', 'ISTJ', 'ISTP', 'ESTJ', 'ESTP'] },
            { text: "Help them look for an empty table", personality: ['ENTJ', 'ENTP', 'INFJ', 'INFP'] }
        ]
    },
    {
        story: "The hawker center is closing soon. You still haven't tried everything you wanted to!",
        question: "What's your priority?",
        options: [
            { text: "Rush to try the most popular stalls before closing", personality: ['ESTP', 'ESFP', 'ENTP', 'ENFP'] },
            { text: "Take note of what to try next time", personality: ['INTJ', 'ISTJ', 'ESTJ', 'ENTJ', 'ISFJ', 'ESFJ', 'INTP', 'ISTP'] },
            { text: "Just enjoy what you have and come back another day", personality: ['INFJ', 'INFP', 'ISFP', 'ENFJ'] }
        ]
    },
    {
        story: "You're planning to come back tomorrow. There are so many more stalls to try!",
        question: "What's your approach?",
        options: [
            { text: "Make a list of must-try stalls before tomorrow", personality: ['INTJ', 'ISTJ', 'ESTJ', 'ENTJ', 'ISFJ', 'ESFJ', 'ENFJ', 'INFJ'] },
            { text: "Just wing it and see what looks good", personality: ['INTP', 'ISTP', 'ESTP', 'ENTP', 'ISFP', 'ESFP', 'INFP', 'ENFP'] }
        ]
    },
    {
        story: "Before leaving, you notice the famous hawker stall at the corner is making a dish. The technique looks fascinating!",
        question: "What interests you more?",
        options: [
            { text: "The skill and technique - how do they do that?", personality: ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP'] },
            { text: "The final result - I just want to eat it!", personality: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'] }
        ]
    },
    {
        story: "The next day, you arrive at the hawker centre again. Coincidentally, your familiar clique is there too! They notice you and invite you to join their table. They're sharing different dishes family-style.",
        question: "What do you do?",
        options: [
            { text: "Jump right in and help organize the sharing", personality: ['ENTJ', 'ESTJ', 'ENFJ', 'ESFJ'] },
            { text: "Get excited and suggest trying even more dishes together", personality: ['ENFP', 'ENTP', 'ESFP', 'ESTP'] },
            { text: "Join them but focus on your own dish you just ordered. A bit paiseh to join in the sharing.", personality: ['INTJ', 'INTP', 'ISTJ', 'ISTP', 'INFJ', 'INFP', 'ISFJ', 'ISFP'] }
        ]
    },
    {
        story: "Your friends wants to take a photo of the food for social media. You're all excited about the meal.",
        question: "What's your approach?",
        options: [
            { text: "Help stage the perfect shot with good lighting", personality: ['ENFJ', 'ESFJ', 'ENFP', 'ESFP'] },
            { text: "Quick snap and let's eat before it gets cold!", personality: ['ISTJ', 'ESTJ', 'ISTP', 'ESTP'] },
            { text: "Let them take the photo, you'll just observe", personality: ['INTJ', 'INTP', 'INFJ', 'INFP', 'ISFJ', 'ISFP', 'ENTJ', 'ENTP'] }
        ]
    },
    {
        story: "Your friend at the table asks if you want to try a super spicy dish they've ordered. You're not sure if you can handle it...Looks so red!",
        question: "How do you feel?",
        options: [
            { text: "Bring it on! I love a challenge", personality: ['ENTJ', 'ESTJ', 'ISTJ', 'ISTP', 'ESTP', 'INTJ', 'INTP', 'ENTP'] },
            { text: "Hmm, maybe just a little bit to try, scared too spicy", personality: ['ENFJ', 'ESFJ', 'INFJ', 'ISFJ', 'ENFP', 'INFP', 'ESFP', 'ISFP'] }
        ]
    },
    {
        story: "After eating, you're feeling pretty full and satisfied. The hawker center is still buzzing with activity.",
        question: "What sounds good right now?",
        options: [
            { text: "Stay longer! Chat with friends and maybe order a dessert!", personality: ['ENFJ', 'ENFP', 'ESFJ', 'ESFP', 'ENTP', 'ESTP'] },
            { text: "Time to head home while the experience is still fresh in my mind", personality: ['INTJ', 'INTP', 'ISTJ', 'ISTP', 'INFJ', 'INFP', 'ISFJ', 'ISFP'] },
            { text: "Stay a bit more to chat and digest before heading home", personality: ['ENTJ', 'ESTJ'] }
        ]
    },
    {
        story: "The bill comes and it's time to split. Everyone ordered different things at different prices.",
        question: "How do you prefer to handle it?",
        options: [
            { text: "Calculate exactly who owes what", personality: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ', 'ISFJ', 'ESFJ'] },
            { text: "Just split evenly - easier that way", personality: ['ENFP', 'ESFP', 'ENTP', 'ESTP', 'INFP', 'ISFP', 'INTP', 'ISTP'] },
            { text: "I'll just pay for everyone, no big deal", personality: ['ENFJ', 'INFJ'] }
        ]
    },
    {
        story: "You're leaving the hawker center, full and happy. The experience was memorable!",
        question: "What will you remember most?",
        options: [
            { text: "The amazing food and flavors", personality: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP'] },
            { text: "The conversations and connections made", personality: ['ENFJ', 'ENFP', 'ESFP', 'INFJ', 'INFP', 'ENTJ'] },
            { text: "The whole experience - food, atmosphere, everything", personality: ['ENTP', 'ESTP', 'INTJ', 'INTP'] }
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
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const storyText = document.getElementById('story-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress');
const resultContent = document.getElementById('result-content');

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);



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

