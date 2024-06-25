function Blog() {
  return (
    // <!-- Layaout Principal -->
    <div className="layout">
      {/* <!-- Barra Lateral(Info usuario) --> */}
      <aside className="layout__aside">
        <section className="aside__user-info">
          {/* <!-- Informacion General usuario --> */}
          <div className="user-info__general">
            <div className="user-info__container-image">
              <img
                src="assets/img/Perfil.jpg"
                alt="Foto de perfil del usuario"
                className="user-info__image"
              />
            </div>

            <h2 className="user-info__name">Luis Lopez</h2>
            <h3 className="user-info__job">Desarrollador Web</h3>
          </div>

          {/* <!-- Menu navegacion --> */}
          <nav className="layout__menu">
            <ul className="menu__list">
              <li className="menu__option">
                <a href="index.html" className="menu__link">
                  <i className="fa-solid fa-house menu__icon"></i>
                  <span className="menu__overlay">Home</span>
                </a>
              </li>
              <li className="menu__option">
                <a href="sobre-mi.html" className="menu__link">
                  <i className="fa-solid fa-user menu__icon"></i>
                  <span className="menu__overlay">Sobre mi</span>
                </a>
              </li>
              <li className="menu__option">
                <a href="curriculum.html" className="menu__link">
                  <i className="fa-solid fa-graduation-cap menu__icon"></i>
                  <span className="menu__overlay">Curriculum</span>
                </a>
              </li>
              <li className="menu__option">
                <a href="portafolio.html" className="menu__link">
                  <i className="fa-solid fa-briefcase menu__icon"></i>
                  <span className="menu__overlay">Portafolio</span>
                </a>
              </li>
              <li className="menu__option">
                <a href="blog.html" className="menu__link menu__link--active">
                  <i className="fa-solid fa-book menu__icon"></i>
                  <span className="menu__overlay">Blog</span>
                </a>
              </li>
              <li className="menu__option">
                <a href="contacto.html" className="menu__link">
                  <i className="fa-solid fa-envelope menu__icon"></i>
                  <span className="menu__overlay">Contacto</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- Links a redes sociales --> */}
          <div className="user-info__links">
            <ul className="links__social">
              <li className="social__option">
                <a href="#" className="social__link">
                  <i className="fa-brands fa-youtube social__icon"></i>
                </a>
              </li>
              <li className="social__option">
                <a href="#" className="social__link">
                  <i className="fa-brands fa-linkedin social__icon"></i>
                </a>
              </li>
              <li className="social__option">
                <a href="#" className="social__link">
                  <i className="fa-brands fa-instagram social__icon"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Boton del curriculum --> */}
          <div className="user-info__buttons">
            <a href="#" className="user-info__btn">
              {" "}
              Descargar CV{" "}
            </a>
          </div>
          {/* <!-- Pie de pagina --> */}
          <footer className="user-info__footer">
            &copy; 2024 Luis Lopez WEB
          </footer>
        </section>
      </aside>

      {/* <!-- Contenido Principal --> */}
      <main className="layout__content">
        <section className="content__page content__blog">
          <header className="blog__header">
            <h1 className="blog__title">Blog</h1>
          </header>

          <section className="blog__articles">
            <article className="articles__article">
              <div className="article__top">
                <div className="article__category">Desarrollo</div>
                <a href="#" className="article__image-link">
                  <div className="article__mask">
                    <img
                      src="assets/img/articulo-1.jpg"
                      className="article__image"
                      alt="imagen de articulo"
                    />
                  </div>
                  <div className="article__logo">
                    <i className="article__icon fa-solid fa-book"></i>
                  </div>
                </a>
              </div>

              <div className="article__bottom">
                <time datetime="2024-08-30" className="article__date">
                  30/08/2024
                </time>
                <a href="#" className="article__link">
                  <h2 className="article__title">
                    Como aprender a programar en 2024
                  </h2>
                </a>
              </div>
            </article>

            <article className="articles__article">
              <div className="article__top">
                <div className="article__category">Desarrollo</div>
                <a href="#" className="article__image-link">
                  <div className="article__mask">
                    <img
                      src="assets/img/articulo-2.jpg"
                      className="article__image"
                      alt="imagen de articulo"
                    />
                  </div>
                  <div className="article__logo">
                    <i className="article__icon fa-solid fa-book"></i>
                  </div>
                </a>
              </div>

              <div className="article__bottom">
                <time datetime="2024-08-30" className="article__date">
                  05/09/2024
                </time>
                <a href="#" className="article__link">
                  <h2 className="article__title">
                    Como hacer animaciones en CSS
                  </h2>
                </a>
              </div>
            </article>

            <article className="articles__article">
              <div className="article__top">
                <div className="article__category">Desarrollo</div>
                <a href="#" className="article__image-link">
                  <div className="article__mask">
                    <img
                      src="assets/img/articulo-3.jpg"
                      className="article__image"
                      alt="imagen de articulo"
                    />
                  </div>
                  <div className="article__logo">
                    <i className="article__icon fa-solid fa-book"></i>
                  </div>
                </a>
              </div>

              <div className="article__bottom">
                <time datetime="2024-08-30" className="article__date">
                  30/07/2024
                </time>
                <a href="#" className="article__link">
                  <h2 className="article__title">
                    Como usar el localstorage en JavaScript
                  </h2>
                </a>
              </div>
            </article>

            <article className="articles__article">
              <div className="article__top">
                <div className="article__category">Desarrollo</div>
                <a href="#" className="article__image-link">
                  <div className="article__mask">
                    <img
                      src="assets/img/articulo-4.jpg"
                      className="article__image"
                      alt="imagen de articulo"
                    />
                  </div>
                  <div className="article__logo">
                    <i className="article__icon fa-solid fa-book"></i>
                  </div>
                </a>
              </div>

              <div className="article__bottom">
                <time datetime="2024-08-30" className="article__date">
                  01/06/2025
                </time>
                <a href="#" className="article__link">
                  <h2 className="article__title">Como maquetar una web</h2>
                </a>
              </div>
            </article>
          </section>
        </section>
      </main>

      {/* <!-- Menu responsive --> */}
      <div className="layout__menu-toggle">
        <i className="menu-toggle__icon fa-solid fa-bars"></i>
        <i className="menu-toggle__icon fa-solid fa-xmark"></i>
      </div>
    </div>
  );
}

export default Blog;
