import './globals.css';

export const metadata = {
  title: 'Medical Tourism Platform - Quality Healthcare Across Borders',
  description: 'Discover and book medical consultations with certified hospitals and doctors worldwide. Transparent pricing, verified credentials, and complete travel assistance.',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#4A8C2A" />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}