import { fetchArticleBySlug } from '@/lib/fetch-data';
import ArticleClient from './ArticleClient';

export const revalidate = 60;

interface Props {
  params: { slug: string };
}

export default async function ArticlePage({ params }: Props) {
  const sanityArticle = await fetchArticleBySlug(params.slug);

  return <ArticleClient slug={params.slug} sanityArticle={sanityArticle} />;
}
