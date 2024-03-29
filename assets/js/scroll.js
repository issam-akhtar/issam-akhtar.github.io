		// Get all the nav links
		const navLinks = document.querySelectorAll('.nav-button');
		const dropSection = document.querySelectorAll('.dropsec');
		
		// Add a click event listener to each link
		navLinks.forEach(link => {
		  link.addEventListener('click', e => {
			// Prevent default link behavior
			e.preventDefault();
	  
			// Get the target section ID from the link href attribute
			const targetId = link.getAttribute('href');
	  
			// Use the target section ID to find the corresponding section element
			const targetSection = document.querySelector(targetId);
	  
			// Calculate the distance between the current scroll position and the target section
			targetOffset = targetSection.offsetTop;
			const currentOffset = window.pageYOffset;
			const distance = Math.abs(targetOffset - currentOffset);
			
			// Set the duration of the scroll animation based on the distance between the current scroll position and the target section
			const scrollDuration = Math.min(1000, distance);
			  if (targetId == "#resume") { //if the id is #resume dont add 50 to the targetOffset so it comes on the resume viewr cleanly
				  window.scrollTo({
					  top: targetOffset,
					  behavior: 'smooth',
					  duration: scrollDuration
				  });
			  } else {
				  //if the id is #resume then add 50 to the targetOffset
				  // Animate the scroll to the target section
				  window.scrollTo({
					  top: targetOffset -50,
					  behavior: 'smooth',
					  duration: scrollDuration
				  })
			  };
	  
			// Add the active class to the clicked link
			navLinks.forEach(link => link.classList.remove('active'));
			link.classList.add('active');
		  });
		});
		dropSection.forEach(link => {
		  link.addEventListener('click', e => {
			// Prevent default link behavior
			e.preventDefault();
	  
			// Get the target section ID from the link href attribute
			const targetId = link.getAttribute('href');
	  
			// Use the target section ID to find the corresponding section element
			const targetSection = document.querySelector(targetId);
	  
			// Calculate the distance between the current scroll position and the target section
			targetOffset = targetSection.offsetTop;
			const currentOffset = window.pageYOffset;
			const distance = Math.abs(targetOffset - currentOffset);
			
			// Set the duration of the scroll animation based on the distance between the current scroll position and the target section
			const scrollDuration = Math.min(1000, distance);
			  if (targetId == "#resume") { //if the id is #resume dont add 50 to the targetOffset so it comes on the resume viewr cleanly
				  window.scrollTo({
					  top: targetOffset,
					  behavior: 'smooth',
					  duration: scrollDuration
				  });
			  } else {
				  //if the id is #resume then add 50 to the targetOffset
				  // Animate the scroll to the target section
				  window.scrollTo({
					  top: targetOffset -50,
					  behavior: 'smooth',
					  duration: scrollDuration
				  })
			  };
		  });
		});

		const scrollToTop = document.querySelector('#scroll-to-top');
		scrollToTop.addEventListener('click', function(e) {
		  e.preventDefault();
		  const duration = 1000;
		  const start = window.pageYOffset;
		  const end = 0;
		  const distance = end - start;
		  let startTime = null;
		  function animateScroll(currentTime) {
			if (startTime === null) {
			  startTime = currentTime;
			}
			const elapsedTime = currentTime - startTime;
			const position = Math.easeInOutQuad(elapsedTime, start, distance, duration);
			window.scrollTo(0, position);
			if (elapsedTime < duration) {
			  window.requestAnimationFrame(animateScroll);
			}
		  }
		  window.requestAnimationFrame(animateScroll);
		});
		Math.easeInOutQuad = function(t, b, c, d) {
		  t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b;
		};