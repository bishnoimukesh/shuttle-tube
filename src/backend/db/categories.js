import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tricks",
    description:
      "A trick shot in badminton can win you a rally. It deceives your opponent to slow down their reaction or send them in the wrong direction. Professionals use trick shots all the time to stay ahead of their competitors.",
  },
  {
    _id: uuid(),
    categoryName: "Mistakes",
    description:
      "Badminton requires regular practice and a strong presence of mind to improve your game. As a beginner, you may come across several wrong techniques and mistakes in your practice. Beginners pick up many wrong badminton techniques, and habits that lead to errors and mistakes.  ",
  },
  {
    _id: uuid(),
    categoryName: "Smash",
    description:
      "To smash in badminton, start by standing with your feet shoulder-width apart and your knees slightly bent. When the shuttle comes toward you, hold your racket upright and as far back as possible. Then, inhale deeply and and swing your racket to connect with the shuttle at the highest point possible.",
  },
];
