import React, { useState } from "react";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_HEADERS } from '@/src/graphql/queries';
import { CREATE_HEADER, UPDATE_HEADER, DELETE_HEADER } from '@/src/graphql/mutations';
import Layout from '../components/layout/Layout';

export default function Headers() {
    const [selectedHeader, setSelectedHeader] = useState(null);
    const [formData, setFormData] = useState({ title: '', slug: '' });

    const { loading, error, data, refetch } = useQuery(GET_ALL_HEADERS);
    const [createHeader] = useMutation(CREATE_HEADER);
    const [updateHeader] = useMutation(UPDATE_HEADER);
    const [deleteHeader] = useMutation(DELETE_HEADER);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedHeader) {
                await updateHeader({
                    variables: {
                        id: selectedHeader.id,
                        input: formData
                    }
                });
            } else {
                await createHeader({
                    variables: {
                        input: formData
                    }
                });
            }
            setFormData({ title: '', slug: '' });
            setSelectedHeader(null);
            refetch();
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu header\'ı silmek istediğinizden emin misiniz?')) {
            try {
                await deleteHeader({
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
                <h1 className="text-2xl font-bold mb-4">Header Yönetimi</h1>

                {/* Form */}
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl mb-4">{selectedHeader ? 'Header Düzenle' : 'Yeni Header Ekle'}</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block mb-1">Başlık</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1">Slug</label>
                            <input
                                type="text"
                                value={formData.slug}
                                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="submit"
                                className="bg-[#00C0EF] text-white px-4 py-2 rounded hover:bg-[#ffc107]"
                            >
                                {selectedHeader ? 'Güncelle' : 'Ekle'}
                            </button>
                            {selectedHeader && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedHeader(null);
                                        setFormData({ title: '', slug: '' });
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
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="min-w-full">
                        <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Başlık</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">İşlemler</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {data.getAllHeaders.map((header) => (
                            <tr key={header.id}>
                                <td className="px-6 py-4">{header.id}</td>
                                <td className="px-6 py-4">{header.title}</td>
                                <td className="px-6 py-4">{header.slug}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => {
                                            setSelectedHeader(header);
                                            setFormData({
                                                title: header.title,
                                                slug: header.slug
                                            });
                                        }}
                                        className="text-blue-500 hover:text-blue-700 mr-2"
                                    >
                                        Düzenle
                                    </button>
                                    <button
                                        onClick={() => handleDelete(header.id)}
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