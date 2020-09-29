Hi there! Hope everything is fine. Sometimes it is difficult to wait. Waiting for web pages to load is one of them for me, likely for you too. So what's the solution? On one handو you want to make valuable pages with lots of beautiful stuff, on the other, we can't wait for them to load! After lots of optimizations and works to make your site fast enough, there is one other tiny trick. That is Making a great loader for your page. Although it doesn't do all the job for you but improves the user experience aspect of your website. All know the importance of UX ...

So here is a starting point for another journey. We are going to build a perfect preload page with CSS and JavaScript. The concept is easy but there is no limit for it.

## Use CSS Animation to Make Preloader

The preloading page is an HTML container with a proper animation inside it. So the first step is preparing the container element and cool repetitive animation. I prefer pure CSS animation for simple projects. CSS animation makes loading time shorter. We should try to make preloader loading time as short as possible. Let's prepare our HTML page and preloader container.

The project structure is as below:

<div className="images">
<img width="28%" src="/posts/js/preloader-with-css-and-js/folderStructure.png" alt="html elements of css animation 1">
</div>

<SyntaxHighlighter language="xml">
    &lt;body>
        &lt;div class="preload">&lt;/div>
        &lt;script src="./app.js">&lt;/script>
    &lt;/body>
</SyntaxHighlighter>

<SyntaxHighlighter language="css">
    .preload {
        width: 100%;
        height: 100vh;
        background-color: \#070518;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0px;
        transition: opacity 0.5s ease;
    }
</SyntaxHighlighter>

Above, the "preload" element is a full-screen page. I did that with specified width and height properties. I used the "flex" display to adjust page content to the center of the screen. The last necessary property is the position which is defined as "fixed". A fixed position guarantees to stick the preloader to the screen. Even when scrolling the page, the preloader is on top.

The container is ready and now we need the animation:

<SyntaxHighlighter language="xml">
    &lt;body>
        &lt;div class="preload">
            &lt;svg class="svgContainer">
                &lt;circle id="circle" cx="50" cy="50" 
                r="30" stroke-width="6" 
                fill="transparent"/>
            &lt;/svg>
        &lt;/div>
        &lt;script src="./app.js">&lt;/script>
    &lt;/body>
</SyntaxHighlighter>

<SyntaxHighlighter language="css">
    .svgContainer {
        width: 100px;
        height: 100px;
        animation: circleRotateAnimation 4s linear forwards infinite;
    }
    \#circle {
        stroke: \#09a1e7;
        stroke-linecap: round;
        stroke-dasharray: 200;
        stroke-dashoffset: 0;
        animation: circleAnimation 2s linear forwards infinite;
    }
    @keyframes circleRotateAnimation {
        0% {
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes circleAnimation {
        0% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: 400;
        }
    }
</SyntaxHighlighter>

As you can see I used some SVG animation. Here we are not going deep into details of the SVG animation. &lt;circle> is a circle with a specified center, radius, and strok-width. With "stroke-dasharray" and "stroke-dashoffset" properties, we can make cool animations. I used them here to add trace path effect to stroke. Let's see how it looks like:

<iframe src="/posts/js/preloader-with-css-and-js/preloader.html" width="100%" height="400px" style="border:none;" scrolling="no"></iframe>

What we have is a full-screen preloading page with some awesome loading animation. So how it fades out? The preloader page has a duty to fades out as the page is fully loaded.

## Use JS to Fade the Preloader Out

We need a flag. A flag that rises when the whole page is loaded. As you guess we need some JavaScript to hide the preloader after the page loads. But did you guess that it needs just four lines of JavaScript code? believe me:

<SyntaxHighlighter language="js">
    window.addEventListener("load", () => {
        const preload = document.querySelector(".preload");
        preload.classList.add("preloadFadeOut");
        setTimeout(() => {
            preload.classList.add("preloadRemove");
        }, 1000);
    });
</SyntaxHighlighter>

What these lines of code do is very simple. At first, I added an Event Listener to the window. When the page is loaded, it triggers the callback function. In the callback function, it adds the "preloadFadeOut" class to the preload page. The "preloadFadeOut" class is defined in the CSS file such that the opacity of the preload page changes to zero. So the preloader fades out, but there is one more thing. We changed the opacity of the preloader page to zero; so it is now hidden, but exists on top. We are unable to interact with the page unless removing the preloader. The last part of the callback function does this job for us. It waits one second for the fading out animation. Then it removes the preloader from the DOM by changing the "display" property of that to "none". Below you can see these two added classes, i.e. "preloadFadeOut" and "preloadRemove".

<SyntaxHighlighter language="css">
    .preloadFadeOut {
        opacity: 0;
    }
    .preloadRemove {
        display: none;
    }
</SyntaxHighlighter>

As I said, there is no limitation and you can build whatever you want as the preloader page. You can use CSS animations or other technologies such as Gifs, Lottie, and so on. But remember that this preloader wants to help your site visitors waiting for the page to load. So it means that you should make it as light as possible to appear fast and attractive to improve the user's experience. That's it, hope you enjoy.
