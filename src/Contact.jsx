function Contact() {
    return (
        <section class="container mt-5">
            <div class="row">
                <div class="col-sm-12 text-center mb-4">
                    <a class="btn btn-primary" target="_blank" href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f8876459b9ac2&mfid=1619175810225_f8876459b9ac2#/checkout/openButton"> Donate Now <i class="fa fa-dollar"></i></a>
                </div>

                <div class="col-sm-12 mb-4 col-md-5">

                    <div class="card border-primary rounded-0">
                        <div class="card-header p-0">
                            <div class="bg-primary text-white text-center py-2">
                                <h3><i class="fa fa-envelope"></i> Write to us:</h3>
                                <p class="m-0">We’ll write rarely, but only the best content.</p>
                            </div>
                        </div>
                        <div class="card-body p-3">

                            <div class="form-group">
                                <label> Your name </label>
                                <div class="input-group">
                                    <input value="" type="text" name="data[name]" class="form-control" id="inlineFormInputGroupUsername" placeholder="Your name" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Your email</label>
                                <div class="input-group mb-2 mb-sm-0">
                                    <input type="email" value="" name="data[email]" class="form-control" id="inlineFormInputGroupUsername" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Subject</label>
                                <div class="input-group mb-2 mb-sm-0">
                                    <input type="text" name="data[subject]" class="form-control" id="inlineFormInputGroupUsername" placeholder="Subject" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Message</label>
                                <div class="input-group mb-2 mb-sm-0">
                                    <input type="text" class="form-control" name="mesg" />
                                </div>
                            </div>
                            <div class="text-center">
                                <input type="submit" name="submit" value="submit" class="btn btn-primary btn-block rounded-0 py-2" />
                            </div>

                        </div>

                    </div>
                </div>



                <div class="col-sm-12 col-md-7">

                    <div class="mb-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117223.77996815204!2d85.3213263!3d23.3432048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x11b5a9b0042eef56!2sourcita.com!5e0!3m2!1sen!2sin!4v1589706571407!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                    <div class="row text-center">
                        <div class="col-md-4">
                            <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i class="fa fa-map-marker"></i></a>
                            <p> Your Address ….. </p>
                        </div>
                        <div class="col-md-4">
                            <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i class="fa fa-phone"></i></a>
                            <p>+91- 90000000</p>
                        </div>
                        <div class="col-md-4">
                            <a class="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block"><i class="fa fa-envelope"></i></a>
                            <p> your@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact;