import { fetchNobelPrizes } from './services.js';

fetchNobelPrizes({}, 
  data => console.log('All Prizes:', data),
  error => console.error('Error:', error)
);

fetchNobelPrizes({ year: '2020', category: 'phy' }, 
  data => console.log('Physics Prizes 2020:', data),
  error => console.error('Error:', error)
);