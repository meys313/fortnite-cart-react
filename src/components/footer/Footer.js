import './footer.scss'
const Footer = ()=>{
    return(
        <footer className="text-center text-lg-start footer">
            <div className="container p-4 footer-desc">

                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer text</h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer text</h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>

                </div>
            </div>


            <div className="text-center p-3 footer-copyright">
                © 2023 Copyright: &nbsp; <a href="https://github.com/meys313/fortnite-cart-react">Repository</a>
            </div>

        </footer>
    )
}

export default Footer