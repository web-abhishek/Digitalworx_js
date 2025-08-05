On checkout page-
domcontentloaded vs window.onload
DOMContentLoaded only depends on the HTML and basic DOM structure, 
while window.onload waits for all external resources (such as images, stylesheets, or 
iframes to finish loading).


packages.<!-- ========== Start Section ========== -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="description"
      content="Digital marketing services tailored to grow your business online."
    />
    <title>Digital Worx</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600&family=Rubik:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <div class="position-relative">
      <header class="position-absolute">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <a class="navbar-brand fw-bold text-white" href="#">
              <img
                src="images/digitalworx.png"
                class="img-fluid"
                width="100px"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="mainNavbar">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a
                    class="nav-link active text-white"
                    aria-current="page"
                    href="./"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="about.html">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="services.html"
                    >Services</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="packages.html"
                    >Packages</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="projects.html"
                    >Projects</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="blogs.html">Blogs</a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contact</a>
                </li> -->
              </ul>
              <a
                href="#"
                class="nav-right d-flex align-items-center ms-lg-3 mt-2 mt-lg-0"
              >
                <i class="fa fa-phone pr-3"></i>
                <div>
                  <p>Need Help?</p>
                  <h5>(+91) 957-0258-922</h5>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <section class="about-banner d-flex align-items-center text-white">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="display-4 fw-bold mb-3">
                Flexible Plans for Every Business
              </h1>
              <p class="lead mb-3">
                Choose the right package to match your goals, stage, and budget.
              </p>
              <nav aria-label="breadcrumb" class="mb-3">
                <ol class="breadcrumb bg-transparent p-0">
                  <li class="breadcrumb-item">
                    <a href="index.html" class="text-white-50">Home</a>
                  </li>
                  <li
                    class="breadcrumb-item active text-primary"
                    aria-current="page"
                  >
                    Packages
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Plans section -->
    <section class="pricing-section py-5">
      <div class="container text-center">
        <p class="section-subtitle text-primary mb-2">
          Flexible Plans for Every Stage of Growth
        </p>
        <h2 class="section-title mb-3">
          Choose a package that fits<br />your goals and budget.
        </h2>

        <div class="row g-4 mt-4">
          <!-- Starter Plan -->
          <div class="col-md-4">
            <div class="plan-card" id="plans-container">
              <h4 class="plan-title">Starter Plan</h4>
              <p class="plan-price">$19 /Month</p>
              <p class="plan-desc">
                Ideal for startups and small businesses, our Starter Package
                helps you establish a strong online presence setup.
              </p>
              <ul class="plan-features text-start">
                <li>Custom website design (up to 5 pages)</li>
                <li>Mobile-responsive design for all devices</li>
                <li>Basic SEO optimization</li>
                <li>Setup of social media accounts (2 platforms)</li>
                <li>One month of website maintenance</li>
                <li>Google Analytics setup and tracking</li>
                <li>1 hour of consultation</li>
              </ul>
              <a href="#" class="btn btn-select">Select Plan →</a>
            </div>
          </div>

          <!-- Growth Plan -->
          <div class="col-md-4">
            <div class="plan-card" id="plans-container">
              <h4 class="plan-title">Growth Plan</h4>
              <p class="plan-price">$19 /Month</p>
              <p class="plan-desc">
                Ideal for startups and small businesses, our Starter Package
                helps you establish a strong online presence setup.
              </p>
              <ul class="plan-features text-start">
                <li>Custom website design (up to 5 pages)</li>
                <li>Mobile-responsive design for all devices</li>
                <li>Basic SEO optimization</li>
                <li>Setup of social media accounts (2 platforms)</li>
                <li>One month of website maintenance</li>
                <li>Google Analytics setup and tracking</li>
                <li>1 hour of consultation</li>
              </ul>
              <a href="#" class="btn btn-select">Select Plan →</a>
            </div>
          </div>

          <!-- Premium Plan -->
          <div class="col-md-4">
            <div class="plan-card" id="plans-container">
              <h4 class="plan-title">Premium Plan</h4>
              <p class="plan-price">$19 /Month</p>
              <p class="plan-desc">
                Ideal for startups and small businesses, our Starter Package
                helps you establish a strong online presence setup.
              </p>
              <ul class="plan-features text-start">
                <li>Custom website design (up to 5 pages)</li>
                <li>Mobile-responsive design for all devices</li>
                <li>Basic SEO optimization</li>
                <li>Setup of social media accounts (2 platforms)</li>
                <li>One month of website maintenance</li>
                <li>Google Analytics setup and tracking</li>
                <li>1 hour of consultation</li>
              </ul>
              <a href="#" class="btn btn-select">Select Plan →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer py-5">
      <div class="container">
        <div class="row gy-4 text-white">
          <div class="col-lg-3 col-md-6">
            <a href="index.html" class="footer-logo">
              <img
                src="images/digitalworx.png"
                class="img-fluid mb-4"
                width="120px"
              />
            </a>
            <p class="footer-desc">
              We’re a digital marketing agency helping brands grow online with
              strategy and data-driven results. Let’s build something great
              together.
            </p>
          </div>

          <div class="col-lg-3 col-md-6">
            <h5 class="footer-title">Quick Links</h5>
            <ul class="footer-links">
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6">
            <h5 class="footer-title">Recent Blog</h5>
            <div class="footer-blog">
              <div class="d-flex mb-3">
                <img
                  src="images/blog-1.jpg"
                  alt="Blog"
                  class="footer-blog-img me-3"
                />
                <div>
                  <p class="footer-date mb-1">
                    <i class="fa fa-calendar"></i> September 06, 2024
                  </p>
                  <p class="footer-blog-title mb-0">
                    Why SEO Is Still the King in 2025
                  </p>
                </div>
              </div>
              <div class="d-flex">
                <img
                  src="images/blog-2.jpg"
                  alt="Blog"
                  class="footer-blog-img me-3"
                />
                <div>
                  <p class="footer-date mb-1">
                    <i class="fa fa-calendar"></i> September 06, 2024
                  </p>
                  <p class="footer-blog-title mb-0">
                    How to Run Google Ads That Actually Convert
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <h5 class="footer-title">Address</h5>
            <ul class="list-unstyled footer-contact">
              <li><i class="fa fa-map-marker"></i> Kolkata, India</li>
              <li><i class="fa fa-envelope"></i> web.abhiacharya@gmail.com</li>
              <li><i class="fa fa-phone"></i> (+91) 957-0258-922</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>

<!-- ========== End Section ========== -->
