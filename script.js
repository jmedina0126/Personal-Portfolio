// Nav

// Get DOM Elements
const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('nav');
const header = document.querySelector('header');

// Hamburger Event
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('change');
  header.classList.toggle('change');
});

// Form

// Get DOM Elements
const modal = document.querySelector('#contactModal');
const modalBtnD = document.querySelector('#modalBtn-d');
const modalBtnM = document.querySelector('#modalBtn-m');
const closeBtn = document.querySelector('.close');

// Events
modalBtnD.addEventListener('click', openModal);
modalBtnM.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
window.addEventListener('keydown', escKey);

// Open
function openModal() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Close Using ESC Key
function escKey(k) {
  if (k.key === 'Escape') {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Quotes Generator

//immediate invoked function expression

(function () {
  const quotes = [
    {
      quote: 'The price of anything is the amount of life you exchange for it.',
      author: 'David Thoreau',
    },
    {
      quote:
        'A true measure of a man is not where he stands in the moments of comfort and conveniance, but where he stands at times of challenge and controversy',
      author: 'Martin Luther King JR',
    },
    {
      quote:
        "Show respect to people who don't even deserve it; not as a reflection of their character, but as a reflection of yours.",
      author: 'Dave Willis',
    },
    {
      quote:
        "Life will always have ups and downs. And if we don't have the bad parts, we'll never appreciate the good ones. Seeing life through rose-coloured glasses is a choice, not some product you can buy.",
      author: 'Kiryu, Yakuza 0',
    },
    {
      quote:
        'We all make choices, but in the end, our choices make us. A man chooses, a slave obeys.',
      author: 'Andrew Ryan, Bioshock',
    },
    {
      quote: 'Replace the fear of the unknown with curiosity.',
      author: 'Alan Watts',
    },
    {
      quote:
        "My mother drew a distinction between achievment and success. She said that achievment is the knowledge that you have studied and worked hard and done the best that's in you. Success is being praised by others, and that's nice too, but not as important or satisfying. Always aim for achievement and forget success.",
      author: 'Helen Hayes',
    },
    {
      quote:
        'Some men see things as they are and ask why. Others dream things that never were and ask why not.',
      author: 'George Bernard Shaw',
    },
    {
      quote:
        'We could never learn to be brave or patient if there were only joy in the world.',
      author: 'Helen Keller',
    },
    {
      quote:
        'Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are.',
      author: 'Dale Carnegie',
    },
    {
      quote: 'To be old and wise you must first be young and stupid.',
      author: 'Anonymous',
    },
    {
      quote:
        'A wise person knows that there is something to be learned from everyone.',
      author: 'Anonymous',
    },
    {
      quote:
        'Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand.',
      author: 'Albert Einstein',
    },
    {
      quote: 'Point of view is worth 80 IQ points.',
      author: 'Alan Kay',
    },
    {
      quote:
        "What I want to know isn't a shortcut...but how to navigate the rugged and steep path.",
      author: 'Naruto, Naruto Shippuden',
    },
    {
      quote: "Don't wish it were easier, wish you were better.",
      author: 'Animal crossing',
    },
    {
      quote:
        'It is more important to master the cards you are holding than complain about the ones your opponent were dealt.',
      author: 'Grimsley, Pokemon Trding Card Game',
    },
    {
      quote: 'I dont worry about action, only inaction.',
      author: 'Winston Churchill',
    },
    {
      quote: 'I may be bested in battle, but I will never be defeated.',
      author: 'Dakkon, Planescape Torment',
    },
    {
      quote: 'Endure, in enduring grow strong.',
      author: 'Dakkon, Planescape Torment',
    },
    {
      quote: 'Limits are a mindset',
      author: '',
    },
    {
      quote:
        'Only those who risk going too far can possibly find out how far one can go.',
      author: 'T.S Elliot',
    },
    {
      quote:
        'To acquire knowledge one must study, but to acquire wisdom, one must observe.',
      author: 'Marilyn Vos Savant',
    },
    {
      quote:
        "And you will succeed! Yes! You will indeed! 98 and 3/4 per cent guaranteed. Kid you'll move mountains!",
      author: "Dr Seuss, Oh the places you'll go",
    },
    {
      quote:
        'Walking among three people, I find my teacher among them. Choose that which is good in them and follow it, and that which is bad and change it.',
      author: 'Confucius',
    },
    {
      quote: 'Try again. Fail again. Fail better.',
      author: 'Samuel Beckett',
    },
    {
      quote: 'Real knowledge is to know the extent of ones ignorance.',
      author: 'Confucius',
    },
    {
      quote: 'Luck is what happens when preperation meets opportunity.',
      author: 'Seneca',
    },
    {
      quote:
        'Begin at once to live, and count each seperate day as a seperate life',
      author: 'Seneca',
    },
    {
      quote:
        'As a tale, so is life; not how long it is, but how good it is, is what matters.',
      author: 'Seneca',
    },
    {
      quote:
        'Every night before going to sleep, we must ask ourselves: What weakness did I overcome today? What virtue did I acquire?',
      author: 'Seneca',
    },
    {
      quote: 'Difficulties strengthen the mind, as labour does the body',
      author: 'Seneca',
    },
    {
      quote:
        'It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult.',
      author: 'Seneca',
    },
    {
      quote: 'Man is not affected by events but by the view he takes of them.',
      author: 'Seneca',
    },
    {
      quote:
        "In chess, each possible move represents a different game. A different universe in which you make a better move. By the second move there are 72,084 possible games. By the Third, 9 million. There are more possible games of chess than there are atoms in the universe. No one could possibly predict them all. Which means that, that first move can be terrifying. As the furthest point from the end of the game, theres a virtually infinite sea of possibilities between you and the other side. But it also means that if you make a mistake... there's a nearly infinite amount of ways to fix it. So you should simply relax and play.",
      author: 'Harold Finch, Person of Interest',
    },
    {
      quote:
        'It is good to have an end to journey towards; but it is the journey that matters in the end.',
      author: 'Ursula K. Le Guin',
    },
    {
      quote:
        "Death is inevitable. Our fear of it makes us play it safe, blocks out emotion. It's a losing game. Without passion, you are already dead.",
      author: 'Max Payne',
    },
    {
      quote:
        'Men must be free to do what they believe. It is not our right to punish one for thinking what they do, no matter how much we disagree. Educate them, teach them right from wrong. It must be knowledge that frees them, not force.',
      author: 'Altair, Assassins Creed',
    },
    {
      quote: 'Have I not destroyed my enemy when I have made him my friend?',
      author: 'Abraham Lincoln',
    },
    {
      quote:
        "If you want to build up a ship, don't drum up the men to gather wood, divide the work and give orders. Instead teach them to yearn for the vast and endless sea.",
      author: 'Antoine de Saint-Expupery',
    },
    {
      quote:
        'They that can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.',
      author: 'Benjamin Franklin',
    },
    {
      quote:
        'Try as much as possible to be wholly alive, with all your might, and when you laugh, laugh like hell and when you get angry, get good and angry. Try to be alive. You will be dead soon enough.',
      author: 'William Saroyan',
    },
    {
      quote:
        'Do difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.',
      author: 'Lao Tzu',
    },
    {
      quote:
        "Good, keep falling. Keep getting back up. That's the only way to succeed. Do not allow yourself to be weighed down by ego and pretence. Let go of what you fear to lose and rise up.",
      author: 'Jedi General Jaro Tapal, The Fallen Order',
    },
  ];

  // Get DOM
  const text = document.querySelector('#quote');
  const author = document.querySelector('#quote-author');

  // Event
  window.addEventListener('load', function () {
    let index = Math.floor(Math.random() * quotes.length);
    text.innerText = quotes[index].quote;
    author.innerText = quotes[index].author;
  });
})();
