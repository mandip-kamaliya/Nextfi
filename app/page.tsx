// File: app/page.tsx

import { redirect } from 'next/navigation';

export default function HomePage() {
  // This will automatically send the user to the /swap page
  // where the navbar is visible.
  redirect('/swap');
}