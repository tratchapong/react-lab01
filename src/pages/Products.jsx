import React from 'react'

function Products() {
  return (
    <div className="container px-4 py-5">
    <h2 className="pb-2 border-bottom">Our Products</h2>

    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div className="d-flex flex-column align-items-start gap-2">
      <img className="d-block mb-4" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" alt="" />

        <h3 className="fw-bold">Left-aligned title explaining these awesome features</h3>
        <p className="text-muted">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <button href="#" className="btn btn-primary btn-lg">Primary button</button>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 g-4">
        <div className="d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
          <img className="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Creative-Tail-Animal-panda.svg" alt="" width="80"  />

          </div>
          <h4 className="fw-semibold mb-0">Featured title</h4>
          <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
        </div>

        <div className="d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
          <img className="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Creative-Tail-Animal-panda.svg" alt="" width="80" />

          </div>
          <h4 className="fw-semibold mb-0">Featured title</h4>
          <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
        </div>

        <div className="d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
          <img className="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Creative-Tail-Animal-panda.svg" alt="" width="80" />

          </div>
          <h4 className="fw-semibold mb-0">Featured title</h4>
          <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
        </div>

        <div className="d-flex flex-column gap-2">
          <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
          <img className="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Creative-Tail-Animal-panda.svg" alt="" width="80" />

          </div>
          <h4 className="fw-semibold mb-0">Featured title</h4>
          <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Products