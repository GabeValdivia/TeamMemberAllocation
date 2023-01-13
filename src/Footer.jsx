const Footer = () => {

  var today = new Date();

  return (
    <footer>
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h6>Team Member Allocation App &mdash; &copy;{today.getFullYear()}</h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer;