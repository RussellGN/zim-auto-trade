export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>navbar</>
        <main>{children}</main>
        <>footer</>
      </body>
    </html>
  );
}
