window.onscroll = function() {myFunction()};

const headers = document.getElementsByTagName("h3");

const headers_offsetsTop = {}
for(header of headers){
	headers_offsetsTop[header.offsetTop] = header
}

const offsetsTop = Object.keys(headers_offsetsTop)

function myFunction() {
	
	for (let offsetTop of offsetsTop) {
		
		if (window.pageYOffset > offsetTop) {
			
			if (!headers_offsetsTop[offsetTop].classList.contains("sticky"))
			{
				
				const sticky_headers = document.getElementsByClassName("sticky");
				
				for (let sticky_header of sticky_headers) {
					sticky_header.classList.remove("sticky");
				}
				
				headers_offsetsTop[offsetTop].classList.add("sticky");
			}
		} else {
			headers_offsetsTop[offsetTop].classList.remove("sticky");
		}
	}
}