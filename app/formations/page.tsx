import { fetchFormations } from '@/lib/fetch-data';
import FormationsClient from './FormationsClient';

export const revalidate = 60;

export default async function FormationsPage() {
  const sanityFormations = await fetchFormations();

  return <FormationsClient sanityFormations={sanityFormations} />;
}
