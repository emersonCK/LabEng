import logo from './fatec.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpeg';
import img3 from './img3.png';
import './FatecBody.css';

function FatecBody() {
  return (
    <div className="FatecBody">
    <main>
    <section class="jumbotron text-center">
        <div class="container">
          <strong>
          <h1 class="jumbotron-heading">Vestibular Fatec</h1>
          </strong>
          <p class="lead text-muted">Deseja se qualificar e ingressar no mercado de trabalho de forma rápida? Então saiba que o vestibular FATEC 2022 é uma ótima oportunidade. O vestibular FATEC 2022 está com inscrições abertas e com vagas sendo ofertadas. Siga nos acompanhando para conferir mais informações sobre!</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img src={img3} width="239" class="card-img-top" alt="logo"/>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img src={img2}  width="239" class="card-img-top" alt="logo"/>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 box-shadow">
                <img src={img1} width="239" class="card-img-top" alt="logo"/>
                <div class="card-body">
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}

export default FatecBody;
