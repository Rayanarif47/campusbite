export type BaseCombo = {
  id: string;
  number: string;
  name: string;
  description: string;
};

export type SignatureMeal = {
  id: string;
  number: string;
  name: string;
  tag: "DESI FAVOURITE" | "CONTINENTAL" | "CONTINENTAL FUSION";
  description: string;
  tagline: string;
  image: string;
};

export type Plan = {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  tagline: string;
  savings: string | null;
  perMeal: string | null;
  features: string[];
  cta: string;
  highlight: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const baseCombos: BaseCombo[] = [
  {
    id: "classic-protein-box",
    number: "01",
    name: "The Classic Protein Box",
    description:
      "Grilled chicken breast, rice, steamed broccoli and carrots, with a light garlic-yogurt dressing.",
  },
  {
    id: "chicken-wrap-box",
    number: "02",
    name: "The Chicken Wrap Box",
    description:
      "A grilled chicken whole-wheat wrap with lettuce, cucumber, tomatoes and yogurt-based sauce, served with a fresh side salad.",
  },
  {
    id: "beef-power-bowl",
    number: "03",
    name: "The Beef Power Bowl",
    description:
      "Lean beef, steamed rice, sautéed bell peppers and green vegetables, finished with a light herb dressing.",
  },
  {
    id: "vegetarian-power-bowl",
    number: "04",
    name: "The Vegetarian Power Bowl",
    description:
      "Grilled paneer, chickpeas, rice or quinoa, fresh vegetables and mint-yogurt dressing.",
  },
  {
    id: "chicken-pasta-box",
    number: "05",
    name: "The Chicken Pasta Box",
    description:
      "Whole-wheat pasta, grilled chicken, broccoli, cherry tomatoes and a light tomato-based or creamy sauce.",
  },
  {
    id: "fish-fuel-box",
    number: "06",
    name: "The Fish & Fuel Box",
    description:
      "Grilled fish, roasted potatoes, seasonal vegetables and lemon-herb yogurt sauce.",
  },
];

export const signatureMenu: SignatureMeal[] = [
  {
    id: "tikka-temptation",
    number: "1",
    name: "Tikka Temptation",
    tag: "DESI FAVOURITE",
    description: "Chicken tikka, basmati rice, kachumber salad and mint raita.",
    tagline: "Bold, familiar flavours with a balanced lunch combination.",
    image: "/images/meals/tikka-temptation.jpg",
  },
  {
    id: "keema-kick",
    number: "2",
    name: "Keema Kick",
    tag: "DESI FAVOURITE",
    description:
      "Chicken keema matar, steamed rice or whole-wheat roti, fresh salad and raita.",
    tagline: "A comforting desi classic with a little personality.",
    image: "/images/meals/keema-kick.jpg",
  },
  {
    id: "malai-melt",
    number: "3",
    name: "Malai Melt",
    tag: "DESI FAVOURITE",
    description:
      "Grilled malai chicken, whole-wheat roti, roasted vegetables and mint-yogurt dip.",
    tagline: "Creamy, smoky flavours in a satisfying lunch box.",
    image: "/images/meals/malai-melt.jpg",
  },
  {
    id: "pasta-affair",
    number: "4",
    name: "The Pasta Affair",
    tag: "CONTINENTAL",
    description:
      "Grilled chicken, whole-wheat pasta, broccoli and a light tomato or creamy yogurt sauce.",
    tagline:
      "A café-style favourite that feels indulgent without losing the balanced-meal concept.",
    image: "/images/meals/pasta-affair.jpg",
  },
  {
    id: "lean-machine",
    number: "5",
    name: "The Lean Machine",
    tag: "CONTINENTAL",
    description:
      "Grilled chicken breast, seasoned rice, broccoli, carrots and garlic-yogurt dressing.",
    tagline:
      "The straightforward protein-focused option for students who like to keep things simple.",
    image: "/images/meals/lean-machine.jpg",
  },
  {
    id: "seoul-and-sizzle",
    number: "6",
    name: "Seoul & Sizzle",
    tag: "CONTINENTAL FUSION",
    description:
      "Lean beef, steamed rice, sautéed bell peppers and green beans with a savoury herb dressing.",
    tagline: "A punchier, globally inspired option.",
    image: "/images/meals/seoul-and-sizzle.jpg",
  },
];

export const plans: Plan[] = [
  {
    id: "single",
    name: "Single Bite",
    price: 500,
    priceLabel: "PKR 500",
    tagline: "One lunch. No subscription required.",
    savings: null,
    perMeal: null,
    features: [
      "One meal of your choice, subject to availability",
      "No recurring commitment",
      "Order confirmed instantly online",
    ],
    cta: "Order a Single Meal",
    highlight: false,
  },
  {
    id: "weekly",
    name: "Weekly Fuel",
    price: 2850,
    priceLabel: "PKR 2,850",
    tagline: "Six lunches across one six-day service week.",
    savings: "Save PKR 150 compared with individual purchases.",
    perMeal: "PKR 475 per meal",
    features: [
      "Six lunches",
      "PKR 475 per meal",
      "Choose from the available menu",
      "Prepaid weekly plan",
    ],
    cta: "Choose Weekly Fuel",
    highlight: true,
  },
  {
    id: "monthly",
    name: "Monthly Fuel",
    price: 10800,
    priceLabel: "PKR 10,800",
    tagline: "Twenty-four lunches across four six-day service weeks.",
    savings: "Save PKR 1,200 compared with individual purchases.",
    perMeal: "PKR 450 per meal",
    features: [
      "Twenty-four lunches",
      "PKR 450 per meal",
      "Better value per lunch",
      "A consistent lunch routine for the month",
    ],
    cta: "Choose Monthly Fuel",
    highlight: false,
  },
];

export const howItWorks = [
  {
    number: "01",
    title: "Choose your meals",
    description: "Browse our six lunch combinations and select your preferred options, subject to availability.",
  },
  {
    number: "02",
    title: "Choose your plan",
    description: "Try a single meal or save with a weekly or monthly subscription.",
  },
  {
    number: "03",
    title: "Place your order",
    description: "Submit your meal selections, plan and details online — your order is confirmed instantly.",
  },
  {
    number: "04",
    title: "Collect your lunch",
    description:
      "Collect your order from the designated CampusBite collection point at SZABIST Islamabad during the confirmed collection window.",
  },
];

export const whyCampusBite = [
  {
    title: "Balanced choices",
    description: "Meals combine protein sources, carbohydrates and vegetables to support a more balanced lunch routine.",
  },
  {
    title: "Made for student life",
    description: "A lunch service built around busy university schedules, not the assumption that everyone has an hour to spare.",
  },
  {
    title: "Better value with subscriptions",
    description: "Save on every lunch when you choose a weekly or monthly plan.",
  },
  {
    title: "Variety on your plate",
    description: "Six meal combinations, including a vegetarian option, give you choices beyond the usual fast-food routine.",
  },
  {
    title: "Less daily planning",
    description: "Choose your lunches in advance and spend less time deciding what to eat between classes.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Where is CampusBite available?",
    answer:
      "Our initial launch is planned for SZABIST Islamabad. Orders will be collected from a designated campus collection point.",
  },
  {
    question: "How many days a week can I order?",
    answer:
      "CampusBite plans to operate six days a week. The confirmed service days and weekly menu will be communicated before ordering opens.",
  },
  {
    question: "Can I order a single meal?",
    answer: "Yes. A single meal costs PKR 500, with no subscription required.",
  },
  {
    question: "How many meals are included in a subscription?",
    answer:
      "The weekly plan includes six lunches. The monthly plan includes 24 lunches across four six-day service weeks.",
  },
  {
    question: "Can I choose which meals I receive?",
    answer:
      "Customers can select from the available menu, subject to stock and the ordering deadline.",
  },
  {
    question: "Are the meals high in protein?",
    answer:
      "Our menu is designed around protein-rich ingredients, including chicken, beef, fish, paneer and chickpeas. Exact protein and calorie values will be provided once recipes and serving sizes have been finalized.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Choose your meals and plan on our website and submit the order form. Your order is confirmed instantly, and a confirmation is emailed to you.",
  },
  {
    question: "How do I collect my food?",
    answer: "Once your order is confirmed, we will share the designated collection point and collection window.",
  },
  {
    question: "Can I change or cancel my subscription?",
    answer:
      "Changes, cancellations, refunds and rescheduling are subject to our published subscription policy. Please review the terms before payment.",
  },
];
