export default async function getExpenses() {
  try {
    const request = await fetch('/api/expenses', {
      credentials: 'same-origin'
    });

    if (!request.ok) {
      throw new Error('Failed to fetch the expenses');
    }

    return await request.text();
  } catch (e) {
    throw new Error('Failed to fetch the expenses');
  }
}
