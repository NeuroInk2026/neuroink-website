import { fetchSiteSettings, fetchTestimonials } from '@/lib/fetch-data';
import HomeClient from './HomeClient';

export const revalidate = 60;

export default async function HomePage() {
  const siteSettings = await fetchSiteSettings();
  const sanityTestimonials = await fetchTestimonials();

  return (
    <HomeClient
      siteSettings={siteSettings}
      sanityTestimonials={sanityTestimonials}
    />
  );
}
