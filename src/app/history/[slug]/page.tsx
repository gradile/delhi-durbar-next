import { historyPages } from "@/data/history-pages";

type HistoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function HistoryPage({ params }: HistoryPageProps) {
    const { slug } = await params;
    
    const page = historyPages.find((p) => p.slug === slug);

    if (!page) {
        return <p>Page not found</p>;
    }
           
  return (
    <section>
      <h2>{page.title}</h2>
      <p>{page.content}</p>
    </section>
  );
}