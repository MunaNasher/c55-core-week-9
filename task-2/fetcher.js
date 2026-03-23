

export async function fetchNobelPrizes({ year = 'all', category = 'all', offset = 0, limit = 20, sort = 'desc' } = {}) {
  const url = new URL('https://api.nobelprize.org/2.1/nobelPrizes');

  if (year !== 'all') url.searchParams.set('nobelPrizeYear', year);
  if (category !== 'all') url.searchParams.set('nobelPrizeCategory', category);

  url.searchParams.set('offset', offset);
  url.searchParams.set('limit', limit);
  url.searchParams.set('sort', sort);

  const response = await fetch(url.toString());
  return response.json();
}




// Temporary change to activate PR