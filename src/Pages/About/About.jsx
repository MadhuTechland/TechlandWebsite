import React from "react";
import "./About.css";
const About = () => {
  return (
    <section id="about" className="about-section pt-150">
      <div className="container">
        <div className="row">

          <div className="col-lg-6">
            <div class="about-content mb-50">
              <div class="section-title mb-50">
                <h1 class="mb-25">Read more about our Digital Agency</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores.
                </p>
              </div>
              <div class="accordion pb-15" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Which Service We Provide?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What I need to start design?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is our design process?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div>
                {/* <div class="single-faq">
                  <button
                    class="w-100 text-start"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Which Service We Provide?
                  </button>

                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="faq-content">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div> */}
                {/* <div class="single-faq">
                  <button
                    class="w-100 text-start collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What I need to start design?
                  </button>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="faq-content">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div> */}
                {/* <div class="single-faq">
                  <button
                    class="w-100 text-start collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What is our design process?
                  </button>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="faq-content">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div> */}
              </div>
              <a href='test' class="main-btn btn-hover">
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
