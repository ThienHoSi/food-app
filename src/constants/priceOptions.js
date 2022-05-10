export const priceOptions = [
  { id: 1, content: 'Under $100', range: { price__lte: 100 } },
  { id: 2, content: '$50 to $100', range: { price__gte: 50, price__lte: 100 } },
  { id: 3, content: 'Under $50', range: { price__lte: 50 } },
  { id: 4, content: 'Above $100', range: { price__gte: 100 } },
];
