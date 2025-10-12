'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, PiggyBank, Target, Sparkles, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { label: "Total Balance", value: "$24,563", change: "+12.5%", trend: "up", icon: DollarSign },
  { label: "Monthly Spending", value: "$3,247", change: "-8.2%", trend: "down", icon: CreditCard },
  { label: "Savings Goal", value: "68%", change: "+5%", trend: "up", icon: Target },
];

const recentTransactions = [
  { name: "Grocery Store", amount: "-$127.50", category: "Food", date: "Today" },
  { name: "Salary Deposit", amount: "+$4,500", category: "Income", date: "Yesterday" },
  { name: "Electric Bill", amount: "-$85.20", category: "Utilities", date: "2 days ago" },
  { name: "Coffee Shop", amount: "-$6.75", category: "Food", date: "3 days ago" },
];

const savingsGoals = [
  { name: "Emergency Fund", current: 6800, target: 10000, color: "bg-primary" },
  { name: "Vacation", current: 2400, target: 5000, color: "bg-violet-500" },
  { name: "New Car", current: 8500, target: 15000, color: "bg-fuchsia-500" },
];

export default function DashboardPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedStat, setSelectedStat] = useState<typeof stats[0] | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<typeof recentTransactions[0] | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<typeof savingsGoals[0] | null>(null);

  return (
    <section 
      id="dashboard"
      ref={ref}
      className="w-full bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950 py-24 md:py-32 relative overflow-hidden"
    >
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-pink-500/5 dark:from-violet-500/10 dark:via-fuchsia-500/10 dark:to-pink-500/10" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-fuchsia-500/10 dark:bg-fuchsia-500/20 rounded-full blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-16 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="text-violet-600 dark:text-violet-400 border-violet-500/50 mb-4 py-1 px-4 bg-violet-500/10 backdrop-blur-sm shadow-lg shadow-violet-500/20">
            <Sparkles className="h-4 w-4 mr-2" />
            Live Preview
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-gray-900 dark:text-white">
            Your Financial Dashboard
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400">
              At a Glance
            </span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Experience the power of real-time financial insights with our intuitive interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 shadow-xl shadow-violet-500/10 dark:shadow-violet-500/20">
              <TabsTrigger 
                value="overview"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:via-fuchsia-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-500"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="transactions"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:via-fuchsia-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-500"
              >
                Transactions
              </TabsTrigger>
              <TabsTrigger 
                value="goals"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:via-fuchsia-600 data-[state=active]:to-pink-600 data-[state=active]:text-white transition-all duration-500"
              >
                Goals
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Card 
                        className="group hover:shadow-2xl hover:shadow-violet-500/20 transition-all duration-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:-translate-y-1 cursor-pointer"
                        onClick={() => setSelectedStat(stat)}
                      >
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-500">
                            {stat.label}
                          </CardTitle>
                          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center border border-violet-500/30 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-violet-500/20">
                            <Icon className="h-6 w-6 text-violet-600 dark:text-violet-400 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 transition-colors duration-500" />
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold text-gray-900 dark:text-white bg-clip-text">{stat.value}</div>
                          <p className={`text-xs flex items-center mt-2 font-medium ${stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                            {stat.trend === 'up' ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                            {stat.change} from last month
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-gray-900 dark:text-white">AI Insights</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">Personalized recommendations based on your spending</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="group flex items-start gap-3 p-5 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-pink-500/10 rounded-xl border-2 border-violet-500/30 hover:border-violet-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/20 backdrop-blur-sm">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-500">
                        <Sparkles className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-white">Great job on reducing dining expenses!</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">
                          You've spent 15% less on restaurants this month. Keep it up to reach your savings goal faster.
                        </p>
                      </div>
                    </div>
                    <div className="group flex items-start gap-3 p-5 bg-gradient-to-br from-pink-500/10 via-fuchsia-500/5 to-violet-500/10 rounded-xl border-2 border-pink-500/30 hover:border-pink-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-pink-500/20 backdrop-blur-sm">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pink-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform duration-500">
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-900 dark:text-white">You're on track to meet your Emergency Fund goal!</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">
                          At your current rate, you'll reach $10,000 in 4 months.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Transactions Tab */}
            <TabsContent value="transactions">
              <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-pink-500/5 border-b-2 border-violet-500/20">
                  <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    Recent Transactions
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">Your latest financial activities</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {recentTransactions.map((transaction, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="group relative overflow-hidden flex items-center justify-between p-5 rounded-xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 hover:from-violet-500/5 hover:via-fuchsia-500/5 hover:to-pink-500/5 transition-all duration-500 border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 cursor-pointer hover:scale-[1.02]"
                        onClick={() => setSelectedTransaction(transaction)}
                      >
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
                        
                        <div className="relative flex items-center gap-4 flex-1">
                          <div className={`relative h-14 w-14 rounded-xl ${transaction.amount.startsWith('+') ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40' : 'bg-gradient-to-br from-red-500/20 to-rose-500/20 border-2 border-red-500/40'} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                            {transaction.amount.startsWith('+') ? 
                              <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" /> : 
                              <TrendingDown className="h-6 w-6 text-red-600 dark:text-red-400" />
                            }
                            <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 ${transaction.amount.startsWith('+') ? 'bg-green-500/30' : 'bg-red-500/30'}`}></div>
                          </div>
                          <div>
                            <p className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-500">{transaction.name}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <Badge variant="outline" className="text-xs border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800">
                                {transaction.category}
                              </Badge>
                              <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                              <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {transaction.date}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className={`font-bold text-xl ${transaction.amount.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'} transition-all duration-500 group-hover:scale-110`}>
                            {transaction.amount}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Goals Tab */}
            <TabsContent value="goals">
              <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-pink-500/5 border-b-2 border-violet-500/20">
                  <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                    <Target className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    Savings Goals
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">Track your progress towards financial milestones</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {savingsGoals.map((goal, index) => {
                      const percentage = (goal.current / goal.target) * 100;
                      return (
                        <motion.div
                          key={goal.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.15 }}
                          className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 border-2 border-gray-200 dark:border-gray-700 hover:border-violet-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-500/10 cursor-pointer hover:scale-[1.02]"
                          onClick={() => setSelectedGoal(goal)}
                        >
                          {/* Shimmer effect on hover */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
                          
                          <div className="relative space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`relative h-14 w-14 rounded-2xl bg-gradient-to-br ${goal.color}/20 border-2 ${goal.color.replace('bg-', 'border-')}/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                  <PiggyBank className={`h-7 w-7 ${goal.color.replace('bg-', 'text-')}`} />
                                  <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 ${goal.color}/30`}></div>
                                </div>
                                <div>
                                  <p className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-500">{goal.name}</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
                                    <span className="text-violet-600 dark:text-violet-400 font-bold">${goal.current.toLocaleString()}</span> of ${goal.target.toLocaleString()}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-2">
                                <Badge 
                                  className="font-black text-lg px-5 py-2 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white border-0 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-500"
                                >
                                  {percentage.toFixed(0)}%
                                </Badge>
                                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                  ${(goal.target - goal.current).toLocaleString()} left
                                </span>
                              </div>
                            </div>
                            
                            <div className="relative">
                              <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 shadow-inner overflow-hidden">
                                <motion.div 
                                  className="h-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 shadow-lg relative"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${percentage}%` }}
                                  transition={{ duration: 1.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                                >
                                  <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-white shadow-lg animate-pulse"></div>
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Stat Card Dialog */}
      <Dialog open={!!selectedStat} onOpenChange={() => setSelectedStat(null)}>
        <DialogContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-2 border-violet-500/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400">
              {selectedStat?.label}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              Detailed information about your {selectedStat?.label.toLowerCase()}
            </DialogDescription>
          </DialogHeader>
          {selectedStat && (
            <div className="space-y-6 py-4">
              <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-pink-500/10 border-2 border-violet-500/30">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">Current Value</p>
                  <p className="text-4xl font-black text-gray-900 dark:text-white">{selectedStat.value}</p>
                </div>
                <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${
                  selectedStat.trend === 'up' 
                    ? 'from-green-500/20 to-emerald-500/20 border-2 border-green-500/30' 
                    : 'from-red-500/20 to-rose-500/20 border-2 border-red-500/30'
                } flex items-center justify-center shadow-lg`}>
                  {selectedStat.trend === 'up' ? (
                    <ArrowUpRight className="h-10 w-10 text-green-600 dark:text-green-400" />
                  ) : (
                    <ArrowDownRight className="h-10 w-10 text-red-600 dark:text-red-400" />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Monthly Change</p>
                  <p className={`text-xl font-bold ${
                    selectedStat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {selectedStat.change}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Trend</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white capitalize">{selectedStat.trend}ward</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 dark:from-violet-900/20 dark:via-fuchsia-900/20 dark:to-pink-900/20 border-2 border-violet-500/30">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-violet-600 dark:text-violet-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">AI Insight</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedStat.trend === 'up' 
                        ? `Great progress! Your ${selectedStat.label.toLowerCase()} is trending upward. Keep up the good work to maintain this positive trajectory.`
                        : `Your ${selectedStat.label.toLowerCase()} has decreased this month. Review your recent activities to understand this change better.`
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Transaction Dialog */}
      <Dialog open={!!selectedTransaction} onOpenChange={() => setSelectedTransaction(null)}>
        <DialogContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-2 border-violet-500/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400">
              Transaction Details
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              Complete information about this transaction
            </DialogDescription>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-4 py-4">
              <div className="flex items-center justify-between p-6 rounded-xl bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-pink-500/10 border-2 border-violet-500/30">
                <div className="flex items-center gap-4">
                  <div className={`h-16 w-16 rounded-xl ${
                    selectedTransaction.amount.startsWith('+') 
                      ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30' 
                      : 'bg-gradient-to-br from-red-500/20 to-rose-500/20 border-2 border-red-500/30'
                  } flex items-center justify-center shadow-lg`}>
                    {selectedTransaction.amount.startsWith('+') ? (
                      <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                    ) : (
                      <TrendingDown className="h-8 w-8 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">{selectedTransaction.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedTransaction.category}</p>
                  </div>
                </div>
                <p className={`text-3xl font-black ${
                  selectedTransaction.amount.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'
                }`}>
                  {selectedTransaction.amount}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Category</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{selectedTransaction.category}</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Date</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{selectedTransaction.date}</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Transaction ID</p>
                <p className="text-sm font-mono text-gray-900 dark:text-white">TXN-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Savings Goal Dialog */}
      <Dialog open={!!selectedGoal} onOpenChange={() => setSelectedGoal(null)}>
        <DialogContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-2 border-violet-500/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-pink-400">
              {selectedGoal?.name}
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              Track your progress towards this financial goal
            </DialogDescription>
          </DialogHeader>
          {selectedGoal && (
            <div className="space-y-6 py-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-pink-500/10 border-2 border-violet-500/30">
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${selectedGoal.color}/20 border-2 ${selectedGoal.color.replace('bg-', 'border-')}/30 flex items-center justify-center shadow-lg`}>
                    <PiggyBank className={`h-8 w-8 ${selectedGoal.color.replace('bg-', 'text-')}`} />
                  </div>
                  <Badge className="text-2xl font-bold px-6 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white border-0 shadow-lg">
                    {((selectedGoal.current / selectedGoal.target) * 100).toFixed(0)}%
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Current</span>
                    <span className="font-bold text-gray-900 dark:text-white">${selectedGoal.current.toLocaleString()}</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={(selectedGoal.current / selectedGoal.target) * 100} 
                      className="h-4 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-inner" 
                    />
                    <div 
                      className="absolute top-0 left-0 h-4 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 shadow-lg"
                      style={{ width: `${(selectedGoal.current / selectedGoal.target) * 100}%` }}
                    >
                      <div className="absolute right-0 top-0 h-4 w-4 rounded-full bg-white shadow-lg animate-pulse" />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Target</span>
                    <span className="font-bold text-gray-900 dark:text-white">${selectedGoal.target.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Remaining</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    ${(selectedGoal.target - selectedGoal.current).toLocaleString()}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Est. Completion</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {Math.ceil((selectedGoal.target - selectedGoal.current) / 500)} months
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 dark:from-violet-900/20 dark:via-fuchsia-900/20 dark:to-pink-900/20 border-2 border-violet-500/30">
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-violet-600 dark:text-violet-400 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">AI Recommendation</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      To reach your {selectedGoal.name} goal faster, consider saving an additional $
                      {Math.ceil((selectedGoal.target - selectedGoal.current) / 12)} per month. You're doing great!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
