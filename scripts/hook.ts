export const performanceBoosterScript = `
    (function() {
        const optimizePerformance = () => {
            const adSelectors = [
                'iframe',
                'script[src*="ads"]',
                'script[src*="tracker"]',
                'script[src*="analytics"]',
                'div[class*="ad"]',
                'div[id*="ad"]',
                'img[src*="banner"]'
            ];

            adSelectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(element => {
                    element.remove();
                });
            });

            const mediaElements = document.querySelectorAll('video, audio');
            mediaElements.forEach(media => {
                media.pause();
                media.removeAttribute('src');
                media.load();
            });

            const style = document.createElement('style');
            style.innerHTML = \`
                * {
                    animation: none !important;
                    transition: none !important;
                }
            \`;
            document.head.appendChild(style);

            const largeImages = document.querySelectorAll('img');
            largeImages.forEach(img => {
                if (img.width > 500 || img.height > 500) {
                    img.src = '';
                }
            });

            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1 && node.matches('iframe, script[src*="ads"], img[src*="banner"]')) {
                            node.remove();
                        }
                    });
                });
            });

            observer.observe(document.body, { childList: true, subtree: true });
        };

        if (document.readyState === 'complete') {
            optimizePerformance();
        } else {
            window.addEventListener('load', optimizePerformance);
        }
    })();
`;

export const unlockScript = `
    async function unlock() {
      document.querySelectorAll("[free=\\"\\"").forEach(el => el.setAttribute("free", true));

      if (document.querySelector("if-access [slot=\\"granted\\"]")) {
          document.querySelector("if-access [slot=\\"denied\\"]").remove();
          document.querySelector("if-access [slot=\\"granted\\"]").setAttribute("slot", "denied");
      }

      if (document.querySelector("video-player")?.shadowRoot?.querySelector(".vid")?.innerHTML) return;

      const vimeoId = Number(atob(document.querySelector("global-data").vimeo));
      const youtubeId = atob(document.querySelector("global-data").youtube);

      if (youtubeId) {
          document.querySelector("video-player").setAttribute("free", true);
          document.querySelector("video-player").shadowRoot.querySelector(".vid").innerHTML = 
              \`<iframe src="https://youtube.com/embed/\${youtubeId}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="\${location.pathname.split('/')[3]}" width="426" height="240" frameborder="0"></iframe>\`;
          return;
      }

      if (vimeoId) {
          document.querySelector("video-player").setAttribute("free", true);
          const html = (await fetch(\`https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fvimeo.com%2F\${vimeoId}&id=\${vimeoId}\`).then(r => r.json())).html;
          document.querySelector("video-player").shadowRoot.querySelector(".vid").innerHTML = html;
          return;
      }
    }

    window.onload = unlock();
    window.addEventListener("flamethrower:router:end", unlock);
  `;

export const leecodepremiumQuestionBlock = `
  (function() {
    'use strict';

    // Function to hide the second parent of specific elements
    function hideParentElements() {
        const value = document.getElementsByClassName("text-brand-orange h-[18px] w-[18px]");
        for (let i = 0; i < value.length; i++) {
            let parent1 = value[i].parentElement;  // First parent
            let parent2 = parent1.parentElement;   // Second parent
            if (parent2) {
                parent2.style.display = "none";  // Hides the second parent div
            }
        }
    }

    // Create a MutationObserver to monitor changes in the DOM
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // Check if our target elements are present
                hideParentElements();
            }
        }
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true // Observe all child elements within the body
    });

    // Initial call to hide parent elements if they are already loaded
    hideParentElements();
  })();
`;


export const chatPDFuselessCodeBlock = `
const observer = new MutationObserver((mutations) => {
  let obj = document.getElementsByClassName("translate");
  if (obj[3] && obj[3].offsetParent !== null) { // Check if the element is displayed
    obj[3].style.display = "none"; // Hides the fourth element
    observer.disconnect(); // Stop observing after hiding
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Initial check in case the element is already present
let obj = document.getElementsByClassName("translate");
if (obj[3] && obj[3].offsetParent !== null) {
  obj[3].style.display = "none"; // Hides the fourth element
  observer.disconnect(); // Stop observing after hiding
}

true; // Required to indicate successful execution
`;