export default async function Home() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/articles?populate=*`
    );
    const data = await res.json();

    return (
      <main>
        {data.data.map((article: any) => (
          <div key={article.id}>{article.attributes.title}</div>
        ))}
      </main>
    );
  } catch (err) {
    return <p className="text-red-500">Fehler beim Laden der Artikel.</p>;
  }
}
