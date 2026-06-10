import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ordna TPM Product Brief",
  description: "Service Operations Platform for Hospitality — TPM Candidate Exercise by Sergio Soto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
