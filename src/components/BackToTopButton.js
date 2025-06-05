export default function BackToTopButton({ show, scrollToTop }) {
    if (!show) return null;
    return (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-sky-950 text-white p-3 rounded-full shadow-lg hover:bg-sky-900 transition z-50"
        aria-label="Back to top"
      >
        ↑
      </button>
    );
  }
  