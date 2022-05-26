import Clock from "../component/Clock";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="pt-4 my-md-5 pt-md-5 border-top bg-light position-absolute"
    >
      <div className="row">
        <div className="col-12 col-md px-5 py-2">
          <Clock />
        </div>

        <div className="col-12 col-md px-5">
          Kwitter, Inc. is an American communications company based in San
          Francisco, California. The company operates the microblogging and
          social networking service Kwitter.
          <small className="d-block mb-3 text-muted">© 2017-2021</small>
        </div>
        <div className="col-6 col-md px-5 mx-5">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="text-muted" href="#">
                Cool stuff
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Random feature
              </a>
            </li>
            <li>
              <a className="text-muted" href="#">
                Team feature
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
