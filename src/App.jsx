
export default function App() {
  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <img src="NURSENY SHOPPING.png" class="logotipo" />
          <ul>
            <li> <button className="glow-on-hover" type="button">Página Inicial</button></li>
            <li> <button className="glow-on-hover" type="button">Sobre Nós</button></li>
            <li> <button className="glow-on-hover" type="button">Contactos</button></li>
          </ul>
        </div>
      </nav>
      <div style={{
        paddingTop: 165
      }}>
      <section id="texto">
        <i>NURSERY SHOOPING</i>: O Paraíso Verde para os amantes de plantas Em um cantinho especial da cidade, encontra-se a <i> NURSENY SHOOPING</i> ,
        a loja que se tornou um refúgio para os amantes de plantas. Com um ambiente acolhedor e repleto de verdor, nossa loja é mais doque um espaço de compras;é um local para explorar a diversidade
        exuberante do  reino vegetal.

        <p>Em nossas prateleiras, uma ampla variedade de plantas, desde as mais exóticas até as clássicas de fácil
          cuidado, aguarda para encontrar seu lar ideal..</p>

        <p>Acreditamos que a natureza deve estar ao alcance de todos, e é por isso que a <i>NURSERY SHOOPING</i> oferece
          uma ampla gama de preços, tornando as plantas acessíveis a todos os bolsos. </p>

        <p>Em resumo, a <i>NURSERY SHOOPING</i> é mais do que uma loja de plantas; é um oásis verde no coração da cidade,
          onde a paixão pela natureza se entrelaça com a arte de cultivar. Venha fazer parte dessa jornada botânica e
          descubra como adicionar um toque de verde pode transformar não apenas seus espaços, mas também sua vida.
          Estamos ansiosos para recebê-lo em nosso santuário botânico.</p>

      </section>
      <aside id="lateral">
        <img src="suporte-de-plantas.webp" />
      </aside>
      <div style={{
        clear: 'both'
      }}></div>
      </div>
      

      <footer id="rodape">
        <nav>
          <ul>
            <li><a href="#!" role="button">
  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path
        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
    </svg>
  </span>
</a> </li>

<li>
<a href="#!" role="button">
  <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  </span>
</a></li>
          </ul>
          <div><a href="http://localhost:5173/"> <button button className="glow-on-hover" type="button">Voltar ao início</button></a></div>
        </nav>
      </footer>

    </>
  )

}

