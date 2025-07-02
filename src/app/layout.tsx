import './globals.css'; // se você tiver estilos globais
import Header from '@/components/Header';


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
        <body>
        <Header />
        <main>{children}</main>
        </body>
        </html>
    );
}