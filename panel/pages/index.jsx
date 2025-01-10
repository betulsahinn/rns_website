import Layout from '../components/layout/Layout';

export default function Home() {
    return (
        <Layout>
            <div className="bg-white p-6 rounded-lg shadow">
                <h1 className="text-2xl font-bold mb-4">Hoş Geldiniz !</h1>
                <p>Rönesis Admin Paneline hoş geldiniz. Soldaki menüden yönetmek istediğiniz bölümü seçebilirsiniz.</p>
            </div>
        </Layout>
    );
}