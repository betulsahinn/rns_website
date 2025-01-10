import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#26348b] text-white min-h-screen fixed">
                <div className="p-4">
                    <Link href="/">
                        <h1 className="text-xl font-bold cursor-pointer">Rönesis Panel</h1>
                    </Link>
                </div>
                <nav className="mt-4">
                    <Link href="/headers" className="block px-4 py-2 hover:bg-[#ffc107]">
                        Header Yönetimi
                    </Link>
                    <Link href="/faqs" className="block px-4 py-2 hover:bg-[#ffc107]">
                        SSS Yönetimi
                    </Link>
                    <Link href="/contacts" className="block px-4 py-2 hover:bg-[#ffc107]">
                        İletişim Yönetimi
                    </Link>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 ml-64 p-8">
                {children}
            </main>
        </div>
    );
}