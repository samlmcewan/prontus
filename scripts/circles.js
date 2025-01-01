const paddingFraction = 0.1;
    
            // function adjustTextForSVG(svg) {
            //     const circles = svg.querySelectorAll("circle");
            //     const textContainer = svg.querySelector(".text-container");
    
            //     // Ensure the SVG has at least 3 circles and a text container
            //     if (circles.length < 3 || !textContainer) {
            //         console.error("SVG missing required elements.");
            //         return;
            //     }
    
            //     // Get the third circle (index 2)
            //     const targetCircle = circles[2];
            //     const radius = parseFloat(targetCircle.getAttribute("r"));
            //     const paddedRadius = radius * (1 - paddingFraction);
            //     const cx = parseFloat(targetCircle.getAttribute("cx"));
            //     const cy = parseFloat(targetCircle.getAttribute("cy"));
    
            //     // Set text container to be a square within the padded circle
            //     const containerSize = 2 * paddedRadius;
            //     textContainer.setAttribute("x", cx - paddedRadius);
            //     textContainer.setAttribute("y", cy - paddedRadius);
            //     textContainer.setAttribute("width", containerSize);
            //     textContainer.setAttribute("height", containerSize);
    
            //     // Find the div inside the foreignObject
            //     const container = textContainer.querySelector("div");
            //     if (container) {
            //         // Scale font size based on container size
            //         const baseFontSize = containerSize * 0.18;
            //         container.style.fontSize = `${baseFontSize}px`;
            //     } else {
            //         console.error("Div inside foreignObject not found.");
            //     }
            // }
            function adjustTextForSVG(svg) {
                const circles = svg.querySelectorAll("circle");
                const textContainer = svg.querySelector(".text-container");
            
                // Ensure the SVG has at least 3 circles and a text container
                if (circles.length < 3 || !textContainer) {
                    console.error("SVG missing required elements.");
                    return;
                }
            
                // Get the third circle (index 2)
                const targetCircle = circles[4];
                const radius = parseFloat(targetCircle.getAttribute("r"));
                const paddedRadius = radius * (1 - paddingFraction);
                const cx = parseFloat(targetCircle.getAttribute("cx"));
                const cy = parseFloat(targetCircle.getAttribute("cy"));
            
                // Set text container dimensions
                const containerSize = 2 * paddedRadius;
                textContainer.setAttribute("x", cx - paddedRadius);
                textContainer.setAttribute("y", cy - paddedRadius);
                textContainer.setAttribute("width", containerSize);
                textContainer.setAttribute("height", containerSize);
            
                // Adjust the div inside foreignObject
                const container = textContainer.querySelector("div");
                if (container) {
                    // Calculate the maximum font size
                    const baseFontSize = containerSize * 0.13;
            
                    // Apply font size to fit the container
                    container.style.fontSize = `${baseFontSize}px`;
            
                    // Dynamically resize if text overflows
                    let scaleFactor = 1.0;
                    while (container.scrollHeight > containerSize || container.scrollWidth > containerSize) {
                        scaleFactor -= 0.05;
                        container.style.fontSize = `${baseFontSize * scaleFactor}px`;
                        if (scaleFactor <= 0.1) break; // Prevent infinite loop
                    }
                } else {
                    console.error("Div inside foreignObject not found.");
                }
            }
            
    
            function adjustAllSVGs() {
                const svgs = document.querySelectorAll(".circle-text-svg");
                svgs.forEach(adjustTextForSVG);
            }
    
            // Initial adjustment
            adjustAllSVGs();
    
            // Optional: Adjust on window resize
            window.addEventListener("resize", adjustAllSVGs);