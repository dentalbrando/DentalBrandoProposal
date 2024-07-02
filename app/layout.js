import '../app/globals.css'
import StoreProvider from "./store/StoreProvider";
export const metadata = {
  title: "Proposal Manager",
  description: "Created by Dental Brando",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <main className="app">{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
