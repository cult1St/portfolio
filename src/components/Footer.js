let data = new Date;
let year = data.getFullYear();
console.log(data)


export default function Footer(){
 
    return(<footer className="container-fluid py-5 mt-auto bg-light">
    <div className="container ms-auto">
      <div className="mx-2 row">
        <div className="col-12 col-md-8">
          <div className="row">
            <div className="col">
              <h2 className="text-primary" style={{ textAlign: "start" }}>
                Contact Details
              </h2>
              <h5>
                Gmail: <a href="">User email</a>
              </h5>
              <h5>
                Phone: <a href="">User phone</a>
              </h5>
              <h5>
                Twitter now X: <a href="">Twitter account</a>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 me-auto">
          <div className="row">
            <div className="col">
              <h1 className="text-primary">Send a message</h1>
              <div className="col contact-list">
                <form action="" id="contact">
                  <div className="row mb-2">
                    <div className="col">
                      <div id="resp" />
                      <div className="form-floating">
                        <input
                          type="text"
                          name="fullname"
                          id=""
                          className="form-control"
                        />
                        <label htmlFor="floatingfullname">FullName</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <div className="form-floating">
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                        />
                        <label htmlFor="floatingfullname">Email</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <div className="form-floating">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                        />
                        <label htmlFor="floatingfullname">Phone</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <div className="form-floating">
                        <textarea
                          name="msg"
                          className="form-control"
                          id=""
                          cols={30}
                          rows={10}
                          defaultValue={""}
                        />
                        <label htmlFor="">Enter Message</label>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col">
                      <button type="submit" className="btn btn-warning col-12">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <p>
            ©{year}
          </p>
        </div>
        <div className="col-5">
          <p>
            Momodu Wealth Portfolio. All Rights Reserved, Backend with Laravel
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}