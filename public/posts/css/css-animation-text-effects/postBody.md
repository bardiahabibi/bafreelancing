Hope everything is OK and have a good time. Recently I faced some amazing animations and text effects. They had great potential for branding. You can use them to have an interesting logo on your page or youtube videos or many other places you can imagine. I had some experiences with Adobe After Effects. It is well known that one of the best ( if not the best ) tools for making those stuff is Adobe After Effects. But it aroused my curiosity: Can I make text animations or text effects by using pure "CSS Animation" and "keyframeworks"?

To be honest, it was not just curiosity. If you had a time dealing with animations on HTML pages, you noticed that there are different ways to make animations. Using some of them has the cost of bigger file size and more loading time. Some others have no good quality because of low resolution. CSS Animation doesn't have those drawbacks, but the cost is complexity.

It was a good mind spark and encouraged me to have a new code-journey. It is now completely clear what we are going to do in this code-journey. We are going to use just CSS animations and make some amazing branding text effects. It seems interesting, let's start it!

## CSS Text Animation 1

First, have a look at what exactly we are going to make in first part:

<iframe src="/posts/css/css-animation-text-effects/animation1.html" width="100%" height="400px" style="border:none;" scrolling="no"></iframe>

The name could be any company name and description may be the company slogan or whatever you want. The blur effect has a photographic atmosphere and makes it perfect for such a category. Although there are no many steps to make something like this with "CSS animation", but it needs some kind of creativity. We will proceed step by step.

### Step 1 : Creating Project Files and Importing CSS Style

We are not going to dip dive into preliminary concepts like importing CSS style into HTML. So if you are not familiar with that, feel free to have a look at <a href="https://www.w3schools.com/css/css_howto.asp" target="_blank">W3schools</a> or one of my <a href="https://bafreelancing.com/Journeys/css/link-css-to-html" target="_blank">code-journeys</a>. Here I used the "external styling approach" and made two files (style.css and index.html). We will see code snippets of these files as we go through the next steps.

### Step 2 : Making HTML Elements

Before using CSS animation effects, we need to construct the HTML elements of the page.

<div className="images">
<img width="100%" src="/posts/css/css-animation-text-effects/animation1Elements.png" alt="html elements of css animation 1">
</div>

As you can see there are not lots of elements. Just three of them: A logo, a header that may be a company name, and a description text that can be a slogan. We are going to use the CSS flexbox to arrange these elements. So I divided these elements into two boxes. The left box named "logo" and the right one is "texts". So we need two &lt;div> elements with id="logo" and "texts". These are not the only elements we have. There are also two child elements inside the "texts". The first one is "companyName" and the other is "slogan". That is all elements we have. Let's have a look at &lt;body> part of the "index.html" file.

<SyntaxHighlighter language="xml">
    &lt;body>
    &lt;span>
      &lt;div id="animationContainer">
        &lt;div id="logo">&lt;/div>
        &lt;div id="texts">
          &lt;div id="companyName">text&lt;/div>
          &lt;div id="slogan">description&lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/span>
    &lt;/body>
</SyntaxHighlighter>

### Step 3 : Adding CSS Styling and Keyframes

At this stage, we are going to add some styling to the HTML elements. Most of the time, I have an "outer to inner" strategy so let's start with "animationContainer". Other than specifying width, height, and background color, we want it to justify inner contents horizontally in the center. Also, it should align them vertically at the center of itself. One easy way is to choose it's display property to be flex. So we can center items as below:

<SyntaxHighlighter language="css">
  \#animationContainer {
    width: 800px;
    height: 600px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</SyntaxHighlighter>

Now it is time to add some CSS styling to the logo. In this example, the logo is nothing than a black square with a white border. The square itself has no complicated style. It has just width, height, and background-color properties:

<SyntaxHighlighter language="css">
  \#logo {
    position: relative;
    width: 150px;
    height: 150px;
    background-color: black;
    margin-right: 20px;
  }
</SyntaxHighlighter>

Above, I didn't add the white borders, because we want some animations to add to this border. The way of doing that is to add borders to other layers. One for the top and bottom, the other for left and right borders. I used "::before" and "::after" to make these borders. By using absolute position and "width: 100%" and "height: 100%" properties, these new elements overlap with the Logo:

<SyntaxHighlighter language="css">
  \#logo::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: none;
    border-top: 8px solid white;
    border-bottom: 8px solid white;
    transform: scaleX(1);
    animation-name: anim3;
    animation-duration: 1s;
    animation-iteration-count: 1;
    box-sizing: border-box;
  }
  \#logo::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: none;
    border-left: 8px solid white;
    border-right: 8px solid white;
    transform: scaleY(1);
    animation-name: anim4;
    animation-duration: 1s;
    animation-iteration-count: 1;
    box-sizing: border-box;
  }
</SyntaxHighlighter>

Are you ready to add their CSS animations using @keyframes? It's easier than you think:

<SyntaxHighlighter language="css">
  @keyframes logoAnim1 {
    0% {
      transform: scaleX(0);
      filter: blur(3px);
    }
    100% {
      transform: scaleX(1);
      filter: blur(0px);
    }
  }
  @keyframes logoAnim2 {
    0% {
      transform: scaleY(0);
      filter: blur(3px);
    }
    100% {
      transform: scaleY(1);
      filter: blur(0px);
    }
  }
</SyntaxHighlighter>

As you saw, the top and bottom borders scaled horizontally, and the side borders scaled vertically using "scaleX()" and "scaleY()". Also, some blur effect made it more beautiful during it appears. That's it for the logo. Know it's time to add some styling and text effects to name and description.

<SyntaxHighlighter language="css">
\#companyName {
  color: white;
  font-size: 95px;
  background-color: black;
  filter: blur(0px);
  position: relative;
  z-index: 1;
  animation-name: companyNameAnim;
  animation-duration: 3s;
  animation-iteration-count: 1;
}
\#slogan {
  margin-bottom: 5px;
  color: white;
  font-size: 30px;
  position: relative;
  animation-name: sloganAnim;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
</SyntaxHighlighter>

In addition to determining the color, font-size, positioning and CSS animation name and duration, I also added "z-index: 1" property to the name element. It was because we will hide the description at beginning of the animation behind it. let's see how "companyNameAnim" and "sloganAnim" look like:

<SyntaxHighlighter language="css">
  @keyframes companyNameAnim {
    0% {
      filter: blur(5px);
    }
    100% {
      filter: blur(0px);
      transform: scale(1);
    }
  }
  @keyframes sloganAnim {
    0% {
      transform: translateY(-39px);
    }
    60% {
      transform: translateY(-39px);
    }
    100% {
      transform: translateY(0px);
    }
  }
</SyntaxHighlighter>

It was nothing than some transformation and blur effects. We have done it! Although it was not a hard job, I am very happy with the result.

<iframe src="https://codesandbox.io/embed/text-effects-using-css-animations-1-2t6y5?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:400px; border:solid 3px #01294A; border-radius: 10px; overflow:hidden;"
     title="cssGridLayout-and-flexBox-combination"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## CSS Text Animation 2

The second animation we are going to make it is more classic and a little luxury. First, see how it look like:

<iframe src="/posts/css/css-animation-text-effects/animation2.html" width="100%" height="400px" style="border:none;" scrolling="no"></iframe>

As said before, the first step is making a project directory and related HTML and CSS files. So I assume you have done this step. Now that you have an HTML file let's add some elements to it.

### Step 1 : Adding HTML Elements

Have a look at the structure of the page:

<div className="images">
<img width="100%" src="/posts/css/css-animation-text-effects/animation2Elements.png" alt="html elements of css animation 2">
</div>

It has a "container" for the whole document. In the inner part, there is "animationContainer" for preserving "crescent" and "brandName" elements. So we have four HTML elements. Below I added these items to the body of the HTML file.

<SyntaxHighlighter language="xml">
  &lt;body>
    &lt;div id="animationContainer">
      &lt;div id="animationContainer2">
        &lt;div id="circle">&lt;/div>
        &lt;div id="text">Bafreelancing&lt;/div>
      &lt;/div>
    &lt;/div>
  &lt;/body>
</SyntaxHighlighter>

Except for importing the CSS style sheet to this file, there are no other changes needed to the HTML file. We are now ready for the next step that is adding styles and CSS animations to these raw elements.

### Step 2 : Adding CSS Style and keyframes

Let's start with containers. The outmost "container" is a &lt;div> element with specified width, height, and background-color, which is shown below. Using "display: flex" makes the ability to justify and align-items in the center of the container.

<SyntaxHighlighter language="css">
  \#container {
    width: 800px;
    height: 600px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</SyntaxHighlighter>

The next inner element is "animationContainer" which contains all animation elements. Like the outer container, "animationContainer" also uses "display: flex" property to adjust its inner elements arranged in columns. I defined a CSS animation for "animationContainer" named "animationContainerAnim". The "animationContainerAnim" affects all elements. With an easy scaling animation, adds pop up effect to the whole animation:

<SyntaxHighlighter language="css">
  \#animationContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation-name: animationContainerAnim;
    animation-duration: 1s;
  }
  @keyframes animationContainerAnim {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</SyntaxHighlighter>

The next inner part is the shining crescent. As you saw, first, it rotates and after that have a shining effect from left to right. First, we start with making the rotating crescent. For this we need to add some CSS styles to the "crescent":

<SyntaxHighlighter language="css">
  \#crescent {
    width: 250px;
    height: 250px;
    position: relative;
    border-radius: 50%;
    margin-bottom: -100px;
  }
  #crescent:before {
    content: "";
    position: absolute;
    left: 0px;
    top: -6px;
    width: 100%;
    height: 100%;
    border: none;
    border-top: solid 12px rgba(223, 203, 116, 0.6);
    filter: blur(1px);
    border-radius: 50%;
    animation-name: crescentAnim1;
    animation-duration: 1s;
  }
  @keyframes crescentAnim1 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }
</SyntaxHighlighter>

Above I added "border-radius: 50%" to make it a circle. Using "crescent:before" I made the crescent; where "border-top" property defined. And "crescentAnim1" keyframes have the duty to add a rotating effect to the crescent. What about the shining part? It may seem a little more complex, but believe me, it's easier:

<SyntaxHighlighter language="css">
  \#crescent:after {
    content: "";
    position: absolute;
    left: 42%;
    top: -6px;
    width: 15%;
    height: 3%;
    border-radius: 40%;
    background-color: rgb(255, 240, 199, 1);
    border: none;
    box-shadow: 8px 8px 30px rgb(255, 240, 199), -8px -8px 30px rgb(255, 240, 199),
      30px 0px 60px rgb(255, 240, 199), -30px 0px 60px rgb(255, 240, 199),
      0px -20px 40px rgb(255, 240, 199), 0px -40px 80px rgb(255, 240, 199),
      0px 20px 40px rgb(255, 240, 199), 0px 40px 80px rgb(255, 240, 199);
    filter: blur(5px);
    transform-origin: center 125px;
    transform: rotate(35deg);
    animation-name: crescentAnim2;
    animation-duration: 3s;
  }
  @keyframes crescentAnim2 {
    0% {
      transform: rotate(-75deg);
      height: 1%;
      opacity: 0;
    }
    33% {
      transform: rotate(-75deg);
      height: 1%;
      opacity: 0.2;
    }
    66% {
      height: 5%;
      opacity: 1;
    }
    100% {
      transform: rotate(35deg);
      height: 3%;
      opacity: 1;
    }
  }
</SyntaxHighlighter>

I used "crescent:after" to define the bright spot. Using width, height, position properties, and border-radius it became an oval in the right position. You need to play with numbers to position that at the right place. "Box-shadow" property has lots of white shadows to make a bright beam radiation effect. At keyframes, I defined rotation and emerging animation. There, the "height" property is used to adjust the location of the shining spot during rotation. Almost there, We have our crescent. The last remaining thing is the brandName.

<SyntaxHighlighter language="css">
  \#brandName {
    display: flex;
    position: relative;
    width: 310px;
    height: 50px;
    background: linear-gradient(
      to right,
      \#6d5624,
      \#bf953f,
      \#bf953f,
      \#b38728,
      \#6d5624
    );
    box-shadow: -3px 0px 1px \#fcf6ba, -3px -3px 1px \#fcf6ba, 3px -3px 1px #fcf6ba,
      3px 0px 1px \#fcf6ba, 0px 3px 1px \#6d5624, -3px 3px 1px \#6d5624,
      3px 3px 1px \#6d5624;
    text-shadow: 1px 1px 1px \#fcf6ba, -1px -1px 1px \#6d5624;
    text-transform: uppercase;
    font-size: 35px;
    font-family: sans-serif;
    align-items: center;
    background-size: 100%;
    justify-content: center;
    animation-name: brandNameAnim1;
    animation-duration: 1s;
  }
  @keyframes brandNameAnim1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</SyntaxHighlighter>

It has no noteworthy point except it's "background" property which made a golden effect for us. I used "linear-gradient" to do so. There are lots of worthy websites that help to pick gradient colors, like <a href="http://www.brandgradients.com/gold-gradient/" target="_blank">Brandgradients</a>, which I used. Also, I used "box-shadow" to make borders.

Almost done, but let's do a little work to make it impressive. The bright reflection effect from the golden surface can change it a lot. Look how we can add this effect:

<SyntaxHighlighter language="css">
  \#brandName::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.6),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    );
    background-size: 90%;
    animation-name: brandNameAnim2;
    animation-duration: 2s;
    animation-delay: 0.5s;
  }
  @keyframes brandNameAnim2 {
    0% {
      background-position: -300%;
    }
    100% {
      background-position: 900%;
    }
  }
</SyntaxHighlighter>

It was just a linear-gradient color in front of the text. A gradient form "no-color to white to no-color". It is necessary for "background-size" property to be less than 100% so sliding animation works correctly.

Ok, here is the end of this journey. It was a bit long but I tried to bring important points. It was cool, Hope you enjoy. Feel free to change it your self:

<iframe src="https://codesandbox.io/embed/text-effects-using-css-animations-2-by47k?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:400px; border:solid 3px #01294A; border-radius: 10px; overflow:hidden;"
     title="cssGridLayout-and-flexBox-combination"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
