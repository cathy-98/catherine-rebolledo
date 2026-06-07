export function Footer() {
  return (
    <footer className="border-t border-[#2f261f]/10 px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#5e554f] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-black text-[#2f261f]">Catherine Rebolledo</p>
          <p>UX/UI & Digital Product Designer · Santiago, Chile</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:Cathyrbopas@gmail.com" className="font-semibold hover:text-[#2f261f]">Email</a>
          <a href="https://www.linkedin.com/in/catherine-rebolledo-pastene/" target="_blank" rel="noreferrer" className="font-semibold hover:text-[#2f261f]">LinkedIn</a>
          <span>2026</span>
          <span className="handwritten text-[#eb5d45]">✦</span>
        </div>
      </div>
    </footer>
  );
}
