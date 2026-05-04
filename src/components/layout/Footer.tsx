import { FigureImage } from "../ui/FigureImage"

export function Footer() {
    return (
        <div>
            <div className="grid-4">
                <button className="menu-button">WHO WE ARE</button>
                <div className="content-text">EMAIL
                    <br/>
                    <a href="mailto:info@beau-geste.com" className="mail_link">info@beau-geste.com</a>
                </div>
                <div className="content-text">VISIT OUR WEBSITE
                    <br/>
                    <a href="https://www.beau-geste.com" target="_blank" rel="noopener noreferrer">Beau-Geste.com</a>
                </div>
                <button className="menu-button">SUBSCRIBE TO OUR NEWSLETTER</button>
            </div>
            <div className="content-text">
                <h5 className="mt-3">Beau-geste &copy; {new Date().getFullYear()}</h5>
            </div>
        </div>
    )
}
//
//         <h5><a href="mailto:info@beau-geste.com" className="mail_link">info@beau-geste.com</a></h5>
//       </div>
//       <div class="col-md-3">
//         <h5 class="m_15">VISIT OUR WEBSITE</h5>
//         <h5><a href="https://www.beau-geste.com" target="_blank">Beau-Geste.com</a></h5>
//       </div>
//       <div class="col-md-3">
//         <button class="inactive-button" (click)="openSubscribe()">
//           <div class="small-text">SUBSCRIBE TO OUR NEWSLETTER</div>
//         </button>
//       </div>
//     </div>
//     <div class="row text-center">
//       <h5 class="mt-3">Beau-geste &copy; {new Date().getFullYear()}</h5>
//     </div>
//   </div>
