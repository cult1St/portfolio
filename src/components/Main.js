
export default function Main(){
    return(<main>
        <div className="container-fluid">
          <div className="container">
            <div className="mx-2 row my-2  justify-content-center">
              <div className="col-12 col-md-6">
                <img src="images/me.png" style={{ width: 400 }} height={300} alt="" />
              </div>
              <div className="name col-12 col-md-6">
                <h3 id="intro">
                
                  <span>Momodu Wealth</span>. Full Stack Developer and Software engineer
                </h3>
                <p>
                  I develop Web applications used in solving common world problems. Such as businesses, health, jobsearch and lot more.
                </p>
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <div className="jumbotron text-center">
                <h2 className="text-primary">About</h2>
                <hr />
               <p>I am a PHP Software Developer With good knowledge of HTML, CSS, Bootstrap, JavaScript, PHP, Laravel Framework And React,js.</p>

      <p>I love writing clean codes and performing good software practices as one of my qualities as a software engineer.</p>

<p>Developed a few Projects On my own Using PHP and Laravel.</p>
              </div>
            </div>
          </div>
          <div className="mx-2 row my-2">
            <div className="col">
              <h2 className="text-primary">Recent Projects</h2>
              <hr />
              <div className="row">
                <div className="col-12 col-md-4 projects">
                  <h4 className="text-warning">Job Solutions</h4>
                  <img src="images/pro_1.png" className="img-fluid" alt="project image" />
                  <p>description</p>
                  <a href="link" className="btn btn-info">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2 row my-2">
            <div className="col" id="skills">
              <h2 className="text-primary">Skills</h2>
              <hr />
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="alert alert-light">
                    <img
                      src="images/html.png"
                      className="img-fluid"
                      alt=""
                      style={{ width: 100, float: "left", marginRight: 10 }}
                    />
                    <p>HTML</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="alert alert-light">
                    <img
                      src="images/css.jpeg"
                      className="img-fluid"
                      alt=""
                      style={{ width: 100, float: "left", marginRight: 10 }}
                    />
                    <p>CSS</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="alert alert-light">
                    <img
                      src="images/java.jpeg"
                      className="img-fluid"
                      alt=""
                      style={{ width: 100, float: "left", marginRight: 10 }}
                    />
                    <p>Java Script</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="alert alert-light">
                    <img
                      src="images/php.png"
                      className="img-fluid"
                      alt=""
                      style={{ width: 100, float: "left", marginRight: 10 }}
                    />
                    <p>PHP</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="alert alert-light">
                    <img
                      src="images/laravel.png"
                      className="img-fluid"
                      alt=""
                      style={{ width: 100, float: "left", marginRight: 10 }}
                    />
                    <p>Laravel</p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="alert alert-light">
                    <img
                      src="images/react.png"
                      className="img-fluid"
                      alt=""
                      style={{ width: 100, float: "left", marginRight: 10 }}
                    />
                    <p>React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2 row my-2">
            <div className="col">
              <h2 className="text-primary">Testimonial</h2>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <div className="col-12">
                    <img src="" style={{}} alt="" />
                    <h5 className="text-secondary">Mr. Adeyemi Olawole</h5>
                  </div>
                  <p>
                    Momodu wealth is a very reliable software developer.When given a
                    project, he makes sure he delivers the project within the
                    specified time given. I love his passion and commitment to
                    software development and i hope he advances to his peak in his
                    profession.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="col-12">
                    <img src="" style={{}} alt="" />
                    <h5 className="text-secondary">Mrs. Omotola Kolawole</h5>
                  </div>
                  <p>
                    Momodu wealth is a very reliable software developer.When given a
                    project, he makes sure he delivers the project within the
                    specified time given. I love his passion and commitment to
                    software development and i hope he advances to his peak in his
                    profession.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      )
}