// File: app/page.tsx

import { redirect } from 'next/navigation';

export default function HomePage() {
  // Immediately redirect the user from the root URL ("/") to the "/swap" page.
  redirect('/swap');

  // Since redirect() is used, this component doesn't need to return any JSX.
  // It will never be rendered.
}