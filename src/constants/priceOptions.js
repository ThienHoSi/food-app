export const priceOptions = [
  { content: 'Under $100', range: { price__lte: 100 } },
  { content: '$50 to $100', range: { price__gte: 50, price__lte: 100 } },
  { content: 'Under $50', range: { price__lte: 50 } },
  { content: 'Above $100', range: { price__gte: 100 } },
];
