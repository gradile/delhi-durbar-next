import { FigureImage } from "../ui/FigureImage"

export function Header() {
  return (
    <div className="header">
      <FigureImage  src="/images/title.webp" width="900" height="274" alt="Beau-Geste - New Toy Soldiers" aria-label="Beau-Geste" />
      <p className="delhi-durbar">Delhi Durbar 1903</p>

      <div className="print-only">
        <FigureImage className="title-img" src="/images/title-print.png" width="900" height="274" alt="Beau-Geste - New Toy Soldiers" aria-label="Beau-Geste" />
        <p className="delhi-durbar">Delhi Durbar 1903</p>
      </div>
    </div>
  );
}