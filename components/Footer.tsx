export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-12 pt-4">
      <div className="mx-auto flex max-w-sm flex-col items-center gap-3">
        <span className="text-[8px] tracking-[0.4em] text-[#0D0D0D]/25">KWL STUDIO</span>
        <span className="text-[8px] tracking-[0.4em] text-[#0D0D0D]/25">CHICAGO</span>
        <a
          href="https://instagram.com/kwlstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[8px] tracking-[0.4em] text-[#0D0D0D]/25 transition-opacity duration-300 hover:opacity-60"
        >
          @KWLSTUDIO
        </a>
      </div>
    </footer>
  );
}
