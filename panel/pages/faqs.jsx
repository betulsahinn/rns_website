import React, { useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_FAQS } from '@/src/graphql/queries';
import { CREATE_FAQ, DELETE_FAQ , UPDATE_FAQ } from '@/src/graphql/mutations';
import Layout from '../components/layout/Layout';

export default function Faqs() {
    const [selectedFaq, setSelectedFaq] = useState(null);
    const [formData, setFormData] = useState({ question: '', answer: '' });

    const { loading, error, data, refetch } = useQuery(GET_ALL_FAQS);
    const [createFaq] = useMutation(CREATE_FAQ);
    const [updateFaq] = useMutation(UPDATE_FAQ);
    const [deleteFaq] = useMutation(DELETE_FAQ);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedFaq) {
                await updateFaq({
                    variables: {
                        id: selectedFaq.id,
                        input: formData
                    }
                });
            } else {
                await createFaq({
                    variables: {
                        input: formData
                    }
                });
            }
            setFormData({ question: '', answer: '' });
            setSelectedFaq(null);
            refetch();
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu SSS\'yi silmek istediğinizden emin misiniz?')) {
            try {
                await deleteFaq({
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
                <h1 className="text-2xl font-bold mb-4">SSS Yönetimi</h1>

                {/* Form */}
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl mb-4">{selectedFaq ? 'SSS Düzenle' : 'Yeni SSS Ekle'}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1">Soru</label>
                            <input
                                type="text"
                                value={formData.question}
                                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Cevap</label>
                            <textarea
                                value={formData.answer}
                                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                                className="w-full p-2 border rounded h-32"
                                required
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="submit"
                                className="bg-[#00C0EF] text-white px-4 py-2 rounded hover:bg-[#ffc107]"
                            >
                                {selectedFaq ? 'Güncelle' : 'Ekle'}
                            </button>
                            {selectedFaq && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedFaq(null);
                                        setFormData({ question: '', answer: '' });
                                    }}
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                >
                                    İptal
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* Table */}
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full">
                        <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Soru</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cevap</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlemler</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {data.getAllFaqs.map((faq) => (
                            <tr key={faq.id}>
                                <td className="px-6 py-4">{faq.id}</td>
                                <td className="px-6 py-4">{faq.question}</td>
                                <td className="px-6 py-4">{faq.answer}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => {
                                            setSelectedFaq(faq);
                                            setFormData({
                                                question: faq.question,
                                                answer: faq.answer
                                            });
                                        }}
                                        className="text-blue-500 hover:text-blue-700 mr-2"
                                    >
                                        Düzenle
                                    </button>
                                    <button
                                        onClick={() => handleDelete(faq.id)}
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