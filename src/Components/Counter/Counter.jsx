import React from 'react'
import '../Counter/Counter.css'
import counterup from '../Assets/counter-up-img.svg'
const Counter = () => {
  return (
    <section class="counter-up-section pt-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="counter-up-content mb-50">
						<div class="section-title mb-40">
							<h1 class="mb-20 wow fadeInUp" data-wow-delay=".2s">Why we are the best, Why you hire?</h1>
							<p class="wow fadeInUp" data-wow-delay=".4s">Lorem ipsum dolor sit amet, consetetur
								sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat.</p>
						</div>
						<div class="counter-up-wrapper">
							<div class="row">
								<div class="col-lg-6 col-sm-6">
									<div class="single-counter">
										<div class="icon color-1">
                                           <i class="fa-regular fa-face-smile"></i>
										</div>
										<div class="content">
											<h1 id="secondo1" class="countup" cup-end="3642" cup-append=" ">3642</h1>
											<span>Happy client</span>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-sm-6">
									<div class="single-counter">
										<div class="icon color-2">
                                           <i class="fa-solid fa-check"></i>
										</div>
										<div class="content">
											<h1 id="secondo2" class="countup" cup-end="5436" cup-append=" ">5436</h1>
											<span>Project done</span>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-sm-6">
									<div class="single-counter">
										<div class="icon color-3">
                                           <i class="fa-solid fa-globe"></i>
										</div>
										<div class="content">
											<h1 id="secondo3" class="countup" cup-end="642" cup-append="K">642</h1>
											<span>Live Design</span>
										</div>
									</div>
								</div>
								<div class="col-lg-6 col-sm-6">
									<div class="single-counter">
										<div class="icon color-4">
                                          <i class="fa-solid fa-users"></i>
										</div>
										<div class="content">
											<h1 id="secondo4" class="countup" cup-end="42" cup-append=" ">42</h1>
											<span>Creative designer's</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-6 col-lg-6">
					<div class="counter-up-img mb-50">
						<img src={counterup} alt=""/>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Counter