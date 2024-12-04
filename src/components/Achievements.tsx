import React from 'react';
import { Trophy, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Techfest Coding Competition 2023',
      date: 'Nov 2023',
      highlights: [
        'Top 10 among 100 teams at Techfest Bangalore',
        'Solved complex coding challenges under time pressure',
        'Demonstrated strong teamwork and problem-solving skills',
      ],
    },
    {
      title: 'Ambition 2024',
      date: 'July 2024',
      highlights: [
        'Top 10 placement at Bangalore Institute of Technology',
        'Developed full-stack project prototype within deadline',
        'Showcased advanced development capabilities',
      ],
    },
    {
      title: 'CypherQuest by DSATM',
      date: 'June 2024',
      highlights: [
        'Built "Edusphere", a placement preparation app',
        'Integrated resources for coding, aptitude, and interview readiness',
        'Achieved a Top 3 position in the competition',
        'Represented Dayananda Sagar Academy of Technology and Management',
        'Showcased innovative solutions to improve student placement outcomes',
      ],
    },
    {
      title: 'Almatron Full Stack Challenge',
      date: 'May 2024',
      highlights: [
        'Achieved a Top 5 ranking in the Almatron Full Stack Challenge',
        'Built a feature-complete full-stack web application within the competition time',
        'Demonstrated expertise in React, Node.js, and database design',
        'Collaborated with a team to deliver a high-quality prototype under a tight deadline',
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-gray-800 dark:bg-gray-900 text-gray-100 dark:text-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 line-clamp-2">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-400 dark:text-gray-500 mb-4 text-sm">
                {achievement.date}
              </p>
              <ul className="space-y-2 flex-grow">
                {achievement.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 dark:text-gray-500">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;