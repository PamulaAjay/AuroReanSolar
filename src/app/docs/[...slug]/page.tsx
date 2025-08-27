'use client';

import { useParams } from 'next/navigation';

export default function DocsPage() {
  const { slug } = useParams() as { slug?: string[] };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Catch-All Route</h1>
      <p>Segments:</p>
      <pre>{JSON.stringify(slug, null, 2)}</pre>
    </div>
  );
}
