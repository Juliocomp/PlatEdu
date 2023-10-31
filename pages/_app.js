import RootLayout from '@/components/pages_layout';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout suppressHydrationWarning>
      <Component {...pageProps} />
    </RootLayout>
  );
}