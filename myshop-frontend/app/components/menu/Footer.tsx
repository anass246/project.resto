export default function Footer() {
    return (
        <footer className="bg-[#800000] text-[#fff5e6] py-10">
            <div className="max-w-6xl mx-auto px-5 text-center">
                <div className="mt-4">
                    <a
                        href="snak.html"
                        className="text-yellow-200 hover:text-yellow-300 transition duration-300 inline-flex items-center"
                    >
                        <i className="fas fa-arrow-left mr-2" />
                        Back to Home
                    </a>
                </div>
            </div>
        </footer>
    );
}