import './footer.css';
import hibrido from '../../../public/img/logo-hibrido.svg';
import whatsapp from '../../../public/img/icons8-whatsapp.svg';
import facebook from '../../../public/img/icons8-facebook.svg'; 
import instagram from '../../../public/img/icons8-instagram.svg'; 


export const Footer = () => {
  return (
    <>
      <footer className="hibrido-footer">
        <section className="section01-footer">
          <div className="social-media">
            <img src={hibrido} alt="logo" />
            <div className="logo">
              <span>Siga-nos: </span>
              <img src={whatsapp}alt="contato whatsApp" className='social-midia-icone' />
              <img src={facebook} alt="Facebook"  className='social-midia-icone'/>
              <img src={instagram} alt="Instagram" className='social-midia-icone' />
            </div>
          </div>

          <div className="footer-infos">
            <div className="inst-footer">
              <div className="about_us">
                <ul>
                  <li>
                    <a href="#">Sobre nós</a>
                  </li>
                  <li>
                    <a href="#">Nossas Lojas</a>
                  </li>
                  <li>
                    <a href="#">Cartão Híbrido</a>
                  </li>
                  <li>
                    <a href="#">Trabalhe Conosco</a>
                  </li>
                </ul>
              </div>
              <div className="attendance">
                <ul>
                  <li>
                    <a href="#">Troca e Devoluções</a>
                  </li>
                  <li>
                    <a href="#">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="#">Entrega</a>
                  </li>
                </ul>
              </div>
               <div className="newsletter-section">
                <div className="text">
                    <h4>Receba nossas promoções</h4>
                </div>
                <div className="newsletter">
                    <form action="" method="post">
                        <label>
                            <input type="text"  placeholder='Digite seu email'/>
                        </label>
                    </form>

                    <button className="button-newsletter">Enviar</button>
                </div>

                <div className="logos"></div>
            </div>
            </div>
           
          </div>
        </section>
      </footer>
    </>
  );
};
