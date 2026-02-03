import { fetchBooks, fetchFaqs } from '@/lib/fetch-data';
import LivresClient from './LivresClient';

export const revalidate = 60;

export default async function LivresPage() {
  const sanityBooks = await fetchBooks();
  const sanityFaqs = await fetchFaqs('livres');

  return <LivresClient sanityBooks={sanityBooks} sanityFaqs={sanityFaqs} />;
}
