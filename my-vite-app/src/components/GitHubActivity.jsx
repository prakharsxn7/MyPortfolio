// import React, { useState, useEffect } from 'react';
// import { githubStats } from '../data/mockData';
// import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
// import { Badge } from './ui/badge';
// import { Progress } from './ui/progress';

// const GitHubActivity = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [animatedStats, setAnimatedStats] = useState({
//     totalCommits: 0,
//     totalPRs: 0,
//     totalIssues: 0,
//     totalStars: 0
//   });

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
          
//           // Animate numbers
//           setTimeout(() => {
//             animateNumber('totalCommits', githubStats.totalCommits);
//             animateNumber('totalPRs', githubStats.totalPRs);
//             animateNumber('totalIssues', githubStats.totalIssues);
//             animateNumber('totalStars', githubStats.totalStars);
//           }, 500);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const githubSection = document.getElementById('github');
//     if (githubSection) {
//       observer.observe(githubSection);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const animateNumber = (key, target) => {
//     const duration = 2000;
//     const steps = 60;
//     const increment = target / steps;
//     let current = 0;

//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= target) {
//         current = target;
//         clearInterval(timer);
//       }
      
//       setAnimatedStats(prev => ({
//         ...prev,
//         [key]: Math.floor(current)
//       }));
//     }, duration / steps);
//   };

//   return (
//     <section id="github" className="py-20 bg-gradient-to-br from-[#bbdefb] via-[#e3f2fd] to-[#f3e5f5] relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#1565c0] to-[#90caf9] rounded-full opacity-5 animate-pulse"></div>
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#90caf9] to-[#bbdefb] rounded-full opacity-5 animate-ping"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#1565c0] to-[#90caf9] bg-clip-text text-transparent">
//             GitHub Activity
//           </h2>
//           <p className="text-xl text-[#1565c0] max-w-2xl mx-auto">
//             My coding journey reflected through contributions and open source work
//           </p>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#1565c0] to-[#90caf9] mx-auto rounded-full mt-6"></div>
//         </div>

//         {/* GitHub Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//           {[
//             { key: 'totalCommits', label: 'Total Commits', icon: '📝', color: 'from-blue-500 to-blue-600' },
//             { key: 'totalPRs', label: 'Pull Requests', icon: '🔄', color: 'from-green-500 to-green-600' },
//             { key: 'totalIssues', label: 'Issues Solved', icon: '🐛', color: 'from-purple-500 to-purple-600' },
//             { key: 'totalStars', label: 'Stars Earned', icon: '⭐', color: 'from-yellow-500 to-yellow-600' }
//           ].map((stat, index) => (
//             <Card 
//               key={stat.key}
//               className={`text-center bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:border-[#1565c0] transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <CardContent className="p-6">
//                 <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
//                   <span className="text-2xl">{stat.icon}</span>
//                 </div>
//                 <div className="text-3xl font-bold text-[#1565c0] mb-2">
//                   {animatedStats[stat.key].toLocaleString()}
//                 </div>
//                 <div className="text-sm text-[#1565c0]/70">
//                   {stat.label}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Languages Chart */}
//           <Card className={`bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:border-[#1565c0] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-[#1565c0] flex items-center gap-2">
//                 <span>📊</span>
//                 Most Used Languages
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {githubStats.languages.map((lang, index) => (
//                 <div 
//                   key={lang.name}
//                   className="space-y-2 animate-fade-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="flex justify-between items-center">
//                     <div className="flex items-center gap-2">
//                       <div 
//                         className="w-4 h-4 rounded-full"
//                         style={{ backgroundColor: lang.color }}
//                       ></div>
//                       <span className="font-medium text-[#1565c0]">{lang.name}</span>
//                     </div>
//                     <span className="text-sm text-[#1565c0]/70">{lang.percentage}%</span>
//                   </div>
//                   <Progress value={lang.percentage} className="h-2" />
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           {/* Recent Repositories */}
//           <Card className={`bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:border-[#1565c0] transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-[#1565c0] flex items-center gap-2">
//                 <span>📂</span>
//                 Recent Repositories
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {githubStats.recentRepos.map((repo, index) => (
//                 <div 
//                   key={repo.name}
//                   className={`p-4 rounded-lg bg-white/50 border border-white/30 hover:bg-white/70 transition-all duration-300 cursor-pointer animate-fade-in`}
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="flex justify-between items-start mb-2">
//                     <h4 className="font-semibold text-[#1565c0]">{repo.name}</h4>
//                     <div className="flex items-center gap-1 text-sm text-[#1565c0]/70">
//                       <span>⭐</span>
//                       <span>{repo.stars}</span>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <Badge variant="outline" className="text-xs border-[#1565c0]/30 text-[#1565c0]">
//                       {repo.language}
//                     </Badge>
//                     <span className="text-xs text-[#1565c0]/70">{repo.updated}</span>
//                   </div>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>
//         </div>

//         {/* GitHub Contribution Calendar Placeholder */}
//         <div className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <Card className="bg-white/80 backdrop-blur-sm border-2 border-white/50">
//             <CardHeader>
//               <CardTitle className="text-2xl font-bold text-[#1565c0] flex items-center gap-2">
//                 <span>📅</span>
//                 Contribution Activity
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="bg-gradient-to-r from-[#e3f2fd] to-[#bbdefb] rounded-lg p-8 text-center">
//                 <div className="text-4xl mb-4">📊</div>
//                 <h3 className="text-xl font-semibold text-[#1565c0] mb-2">
//                   GitHub Contribution Graph
//                 </h3>
//                 <p className="text-[#1565c0]/70 mb-4">
//                   Interactive contribution calendar showing daily coding activity
//                 </p>
//                 <div className="inline-flex items-center gap-2 text-sm text-[#1565c0]/70">
//                   <span className="w-2 h-2 bg-[#1565c0] rounded-full"></span>
//                   <span>Less</span>
//                   <span className="w-2 h-2 bg-[#1565c0]/80 rounded-full"></span>
//                   <span className="w-2 h-2 bg-[#1565c0]/60 rounded-full"></span>
//                   <span className="w-2 h-2 bg-[#1565c0]/40 rounded-full"></span>
//                   <span className="w-2 h-2 bg-[#1565c0]/20 rounded-full"></span>
//                   <span>More</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GitHubActivity;