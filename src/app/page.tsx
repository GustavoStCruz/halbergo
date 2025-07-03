export default function Home() {
    return (
        <main>
            <section id="inicio" style={{ height: '100vh', padding: '2rem' }}>
                <h1>Bem-vindo ao Meu Site</h1>
            </section>

            <section id="sobre" style={{ height: '100vh', padding: '2rem', backgroundColor: '#f0f0f0' }}>
                <h2>Sobre</h2>
                <p>Informações sobre nós.</p>
            </section>

            <section id="servicos" style={{ height: '100vh', padding: '2rem' }}>
                <h2>Serviços</h2>
                <p>O que oferecemos.</p>
            </section>

            <section id="contato" style={{ height: '100vh', padding: '2rem', backgroundColor: '#f0f0f0' }}>
                <h2>Contato</h2>
                <p>Entre em contato conosco.</p>
            </section>
        </main>
    );
}