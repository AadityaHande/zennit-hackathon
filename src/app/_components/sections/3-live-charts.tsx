'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bar, BarChart, CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { BarChart2, TrendingUp, Users, Goal, BrainCircuit, Calendar as CalendarIcon } from "lucide-react";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { format, isWithinInterval, startOfMonth, endOfMonth, subMonths } from "date-fns";
import { cn } from "@/lib/utils";

// Expanded mock data
const allSavingsData = [
  { date: new Date(2023, 11, 1), month: "Dec '23", savings: 200 },
  { date: new Date(2024, 0, 1), month: "Jan '24", savings: 250 },
  { date: new Date(2024, 1, 1), month: "Feb '24", savings: 220 },
  { date: new Date(2024, 2, 1), month: "Mar '24", savings: 350 },
  { date: new Date(2024, 3, 1), month: "Apr '24", savings: 400 },
  { date: new Date(2024, 4, 1), month: "May '24", savings: 380 },
  { date: new Date(2024, 5, 1), month: "Jun '24", savings: 500 },
  { date: new Date(2024, 6, 1), month: "Jul '24", savings: 550 },
  { date: new Date(2024, 7, 1), month: "Aug '24", savings: 480 },
  { date: new Date(2024, 8, 1), month: "Sep '24", savings: 600 },
  { date: new Date(2024, 9, 1), month: "Oct '24", savings: 580 },
  { date: new Date(2024, 10, 1), month: "Nov '24", savings: 650 },
  { date: new Date(2024, 11, 1), month: "Dec '24", savings: 700 },
  { date: new Date(2025, 0, 1), month: "Jan '25", savings: 720 },
  { date: new Date(2025, 1, 1), month: "Feb '25", savings: 680 },
  { date: new Date(2025, 2, 1), month: "Mar '25", savings: 750 },
  { date: new Date(2025, 3, 1), month: "Apr '25", savings: 800 },
  { date: new Date(2025, 4, 1), month: "May '25", savings: 820 },
  { date: new Date(2025, 5, 1), month: "Jun '25", savings: 850 },
  { date: new Date(2025, 6, 1), month: "Jul '25", savings: 250 },
  { date: new Date(2025, 7, 1), month: "Aug '25", savings: 950 },
  { date: new Date(2025, 8, 1), month: "Sep '25", savings: 530 },
  { date: new Date(2025, 9, 1), month: "Oct '25", savings: 1000 },
];

const savingsChartConfig = {
  savings: {
    label: "Savings",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const allSpendingData = [
    { date: new Date(2025, 9, 5), category: "Groceries", spending: 550 },
    { date: new Date(2025, 9, 10), category: "Utilities", spending: 250 },
    { date: new Date(2025, 9, 15), category: "Transport", spending: 180 },
    { date: new Date(2025, 9, 20), category: "Dining", spending: 420 },
    { date: new Date(2025, 9, 25), category: "Shopping", spending: 380 },
    { date: new Date(2025, 9, 28), category: "Other", spending: 120 },
    { date: new Date(2025, 8, 5), category: "Groceries", spending: 580 },
    { date: new Date(2025, 8, 10), category: "Utilities", spending: 240 },
    { date: new Date(2025, 8, 20), category: "Dining", spending: 450 },
];

const spendingChartConfig = {
    spending: {
      label: "Spending",
      color: "hsl(var(--primary))",
    },
} satisfies ChartConfig;

const insights = [
    { label: 'New Users This Month', value: 4832, icon: <Users className="h-6 w-6" /> },
    { label: 'Transactions Tracked', value: 120593, icon: <BarChart2 className="h-6 w-6" /> },
    { label: 'Savings Goals Achieved', value: 1845, icon: <Goal className="h-6 w-6" /> },
    { label: 'AI Tips Generated', value: 25000, icon: <BrainCircuit className="h-6 w-6" /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useAnimatedCounter(value, isInView);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const ChartDateRangePicker = ({
  date,
  setDate,
  className
}: {
  date: DateRange | undefined,
  setDate: (date: DateRange | undefined) => void,
  className?: string
}) => {
  return (
     <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default function InsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [savingsDate, setSavingsDate] = useState<DateRange | undefined>({ from: subMonths(new Date(2025, 9, 31), 5), to: new Date(2025, 9, 31) });
  const [spendingDate, setSpendingDate] = useState<DateRange | undefined>({ from: new Date(2025, 9, 1), to: new Date(2025, 9, 31) });

  const [displaySavingsData, setDisplaySavingsData] = useState(allSavingsData);
  const [displaySpendingData, setDisplaySpendingData] = useState(allSpendingData);

  useEffect(() => {
    if (savingsDate?.from && savingsDate.to) {
      const start = startOfMonth(savingsDate.from);
      const end = endOfMonth(savingsDate.to);
      const filteredData = allSavingsData.filter(item => 
        isWithinInterval(item.date, { start, end })
      );
      setDisplaySavingsData(filteredData);
    }
  }, [savingsDate]);

  useEffect(() => {
    if (spendingDate?.from && spendingDate.to) {
      const start = startOfMonth(spendingDate.from);
      const end = endOfMonth(spendingDate.to);
      const filteredData = allSpendingData.filter(item => 
        isWithinInterval(item.date, { start, end })
      );
       const aggregatedData = filteredData.reduce((acc, item) => {
        const existing = acc.find(i => i.category === item.category);
        if (existing) {
          existing.spending += item.spending;
        } else {
          acc.push({ category: item.category, spending: item.spending });
        }
        return acc;
      }, [] as { category: string; spending: number }[]);
      setDisplaySpendingData(aggregatedData);
    }
  }, [spendingDate]);


  return (
    <motion.section
      id="insights"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full bg-secondary/30"
    >
        <div className="mx-auto max-w-7xl px-6 md:px-16 py-24 md:py-32">
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <Badge variant="outline" className="text-primary border-primary/50 mb-4 py-1 px-4">
                    Live Data
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
                    Your Finances, Visualized
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Interact with your data. See your trends. Make smarter decisions.
                </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
            <Tabs defaultValue="savings" className="w-full">
                <div className="flex justify-center">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-background border rounded-full">
                        <TabsTrigger value="savings" className="rounded-full flex gap-2 items-center"><TrendingUp className="h-4 w-4" /> Monthly Savings</TabsTrigger>
                        <TabsTrigger value="spending" className="rounded-full flex gap-2 items-center"><BarChart2 className="h-4 w-4" /> Spending</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="savings" className="mt-8">
                    <Card className="border-border/50">
                    <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <CardTitle>Monthly Savings Progress</CardTitle>
                            <CardDescription>Your savings trend over the selected period.</CardDescription>
                        </div>
                         <ChartDateRangePicker date={savingsDate} setDate={setSavingsDate} />
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={savingsChartConfig} className="h-[350px] w-full">
                            <LineChart data={displaySavingsData} margin={{ left: 20, right: 20, top: 20, bottom: 5 }}>
                                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
                                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={10} />
                                <YAxis tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => `₹${value}`} />
                                <ChartTooltip cursor={{stroke: "hsl(var(--primary))", strokeWidth: 1, strokeDasharray: "3 3"}} content={<ChartTooltipContent indicator="dot" formatter={(value, name, props) => [`₹${value}`, props.payload.month]} />} />
                                <Line dataKey="savings" type="monotone" stroke="hsl(var(--primary))" strokeWidth={3} dot={{r: 5, fill: "hsl(var(--primary))", stroke: "hsl(var(--background))", strokeWidth: 2}} activeDot={{r: 7}}>
                                   <LabelList
                                        dataKey="savings"
                                        position="top"
                                        offset={10}
                                        className="fill-foreground font-semibold"
                                        formatter={(value: number) => value}
                                    />
                                </Line>
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="spending" className="mt-8">
                <Card className="border-border/50">
                    <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <CardTitle>Spending Breakdown</CardTitle>
                            <CardDescription>How you spent your money in the selected period.</CardDescription>
                        </div>
                        <ChartDateRangePicker date={spendingDate} setDate={setSpendingDate} />
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={spendingChartConfig} className="h-[350px] w-full">
                            <BarChart data={displaySpendingData} margin={{ top: 20, right: 20, bottom: 5, left: 20 }}>
                                <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)"/>
                                <XAxis dataKey="category" tickLine={false} axisLine={false} tickMargin={10} />
                                <YAxis tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => `₹${value}`} />
                                <ChartTooltip cursor={{fill: "hsl(var(--primary) / 0.1)"}} content={<ChartTooltipContent indicator="dot" formatter={(value, name, props) => [`₹${value}`, props.payload.category]} />} />
                                <Bar dataKey="spending" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]}>
                                  <LabelList
                                      dataKey="spending"
                                      position="top"
                                      offset={8}
                                      className="fill-foreground font-semibold"
                                      formatter={(value: number) => value}
                                    />
                                </Bar>
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
            </motion.div>

            <motion.div 
                    className="text-center my-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease:"easeOut" }}
                >
                    <Badge variant="outline" className="text-primary border-primary/50 mb-4 py-1 px-4">
                        Platform Stats
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
                        Join a Thriving Community
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                       Our platform is growing exponentially, and so are our users' savings. Check out our live impact.
                    </p>
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {insights.map((insight) => (
                    <motion.div 
                        key={insight.label}
                        variants={itemVariants}
                        className="group bg-background/50 p-3 rounded-xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-lg"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/40">
                                {insight.icon}
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground text-left">{insight.label}</p>
                                <p className="text-2xl font-bold text-foreground text-left tracking-tight">
                                    <AnimatedNumber value={insight.value} />
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </motion.section>
  );

    




    

    

    
