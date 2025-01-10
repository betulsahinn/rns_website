import { useQuery, useMutation } from '@apollo/client';
import Layout from '../components/layout/Layout';
import { useState } from 'react';
import { GET_CONTACTS } from '@/src/graphql/queries';
import { CREATE_CONTACT, DELETE_CONTACT } from '@/src/graphql/mutations';


export default function Contact() {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        message: ''
    });

    const { loading, error, data, refetch } = useQuery(GET_CONTACTS);
    const [createContact] = useMutation(CREATE_CONTACT);
    const [deleteContact] = useMutation(DELETE_CONTACT);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createContact({
                variables: {
                    input: formData
                }
            });
            setFormData({ full_name: '', email: '', phone: '', message: '' });
            refetch();
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu iletişim kaydını silmek istediğinizden emin misiniz?')) {
            try {
                await deleteContact({
                    variables: { id }
                });
                refetch();
            } catch (err) {
                console.error('Error:', err);
            }
        }
    };

    if (loading) return <Layout><div>Yükleniyor...</div></Layout>;
    if (error) return <Layout><div>Hata: {error.message}</div></Layout>;

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-4">İletişim Yönetimi</h1>

                {/* Form */}
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl mb-4">Yeni İletişim Kaydı</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1">Ad Soyad</label>
                            <input
                                type="text"
                                value={formData.full_name}
                                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1">E-posta</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Telefon</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Mesaj</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full p-2 border rounded h-32"
                                required
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="submit"
                                className="bg-[#00C0EF] text-white px-4 py-2 rounded hover:bg-[#ffc107]"
                            >
                                Ekle
                            </button>
                        </div>
                    </form>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ad Soyad</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">E-posta</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Telefon</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mesaj</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlemler</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {data.getAllContacts.map((contact) => (
                            <tr key={contact.id}>
                                <td className="px-6 py-4">{contact.id}</td>
                                <td className="px-6 py-4">{contact.full_name}</td>
                                <td className="px-6 py-4">{contact.email}</td>
                                <td className="px-6 py-4">{contact.phone}</td>
                                <td className="px-6 py-4">{contact.message}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleDelete(contact.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}