import React from 'react';

interface JsonLdProps {
  schema: Record<string, any> | Array<Record<string, any>>;
}

/**
 * Reusable component to safely render JSON-LD structured data in Next.js.
 */
export default function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
