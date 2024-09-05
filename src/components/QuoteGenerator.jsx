import { useState } from 'react';

const QuoteGenerator = () => {

  const quotes = [
    "You can't use up creativity. The more you use, the more you have. - Maya Angelou",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let us pick up our books and our pens, they are the most powerful weapons. - Malala Yousafzai",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "I am not afraid... I was born to do this. - Joan of Arc",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Happiness depends upon ourselves. - Aristotle",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "If opportunity doesn't knock, build a door. - Milton Berle",
    "Dream big and dare to fail. - Norman Vaughan",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The best revenge is massive success. - Frank Sinatra",
    "It is never too late to be what you might have been. - George Eliot",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar"
  ];


  const [ currentQuote, setCurrentQuote ] = useState( quotes[ 0 ] );

  const generateRandomQuote = () => {

    const quote = quotes[ Math.floor( Math.random() * quotes.length ) ];

    if ( currentQuote == quote ) generateRandomQuote();
    else setCurrentQuote( quote );

  };

  return (
    <div className='p-3 min-h-40 w-[60%] rounded-lg bg-slate-500 text-slate-50 flex flex-col justify-between gap-3 shadow-md'>
      <h1 className='text-2xl font-bold'>Random Quote Generator</h1>
      <p className='italic'>{ currentQuote }</p>
      <button onClick={ generateRandomQuote } className='py-1 px-2 outline-none border-none bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200'>Generate Random Quote</button>
    </div>
  );
};

export default QuoteGenerator;