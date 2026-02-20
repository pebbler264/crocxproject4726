function accept() {
            document.getElementById('disclaimer').style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
        
        // FAQ Accordion Logic
            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', () => {
                    const item = question.parentElement;
                    item.classList.toggle('active');
                });
            });
            
       function copyCA() {
            const ca = "GWbTUV21W1VbMx8fKizAhZu8PTGa8qnKHSy7Vmiapump"; // Put your CA here tomorrow
            navigator.clipboard.writeText(ca).then(() => {
                const status = document.getElementById('copy-status');
                const text = document.getElementById('ca-text');
                
                // Visual Feedback
                status.innerText = "COPIED!";
                status.style.background = "white";
                
                // Reset after 2 seconds
                setTimeout(() => {
                    status.innerText = "COPY";
                    status.style.background = "white";
                }, 2000);
            });
        }
