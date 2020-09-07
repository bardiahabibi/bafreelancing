Hi friends! What's up? I decided to have a journey to the land of CSS layouts. Sometimes happens you want to make a complex layout and don't have an idea about where to start. Here I am going to combine two powerful tools to make some interesting layouts. Before we start, let's illustrate something. We are not going to review all aspects of the CSS grid layout or flexbox. I suppose you have a preliminary knowledge about "CSS Grid Layout" and "CSS flex Layout". No problem, if you think you are unfamiliar with these concepts, have a look at W3schools pages (<a href="https://www.w3schools.com/css/css_grid.asp" target="_blank">CSS grid layout</a>, <a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank">CSS flexbox</a>) or my journeys to CSS grid and flexbox.

The second thing I should tell you before starting is that for implementing a layout with HTML and CSS techs, there are lots of ways. There is no one best for that. So in this journey, we are going to have a look at a combination of CSS grid and flexbox. I don't want to find the best strategies and enter details. I am so excited to start the trip. Hope you enjoy it too, let's start it.

So we are going to start with a simple layout. Suppose you want a layout like this:

<div className="images">
<img width="60%" src="/posts/css/css-grid-and-flexbox/firstLayout.png" alt="desired page layout">
</div>

Although we can make it with lots of different ways, I will focus on our combination i.e. CSS grid and flex. The outmost layer is a container whose name is "pageContainer". It has a fixed width, height, and padding size. Starting from outer to inner parts, we can first define this container. But first, we need to prepare the project files. Step one I built two files in my project directory as bellow:

<div className="images">
<img width="40%" src="/posts/css/css-grid-and-flexbox/folderStructure.png" alt="directory structure of css grid & flexbox project">
</div>

There are different ways to import CSS style to the HTML page and you can have a look at some of them at <a href="https://www.w3schools.com/css/css_howto.asp" target="_blank">W3schools</a> or one of my <a href="https://bafreelancing.com/Journeys/css/link-css-to-html" target="_blank">journeys</a>. I decided to manage styling in different style sheet file and import it to the HTML page as depicted. at each stage, I will show you code snippets of these two files. So back to code, first, we define the "pageContainer" which is the outermost container.

<SyntaxHighlighter language="xml">
    &lt;body>
        &lt;div id="pageContainer">&lt;/div>
    &lt;/body>
</SyntaxHighlighter>

<SyntaxHighlighter language="css">
    \#pageContainer {
        background-color: \#d4fff6;
        border: solid 1px \#29abe2;
        width: 100vw;
        height: 100vh;
        padding: 10px;
    }
</SyntaxHighlighter>

The interesting part of the job is here. Now we are going to convert "pageContainer" to a grid using the CSS grid. let name the left half "Left-grid-area" and the right half "Right-grid-area". I added some lines to style it as below. We can define grid areas with "grid-template-columns", "grid-template-rows" and "template-grid-areas" in our stylesheet.

<SyntaxHighlighter language="css">
    \#pageContainer {
        background-color: \#d4fff6;
        border: solid 1px \#29abe2;
        width: 100vw;
        height: 100vh;
        padding: 10px;
        display: grid;
        grid-template-columns: 40% 1fr;
        grid-template-rows: 100%;
        grid-template-areas: "leftArea rightArea";
        grid-gap: 10px;
}
</SyntaxHighlighter>

As you saw I used "grid-template-columns" to divide the "pageContainer" into two columns. The left column has 40% of the width and the right one has remained as one fraction. On the other side, I used "grid-area-rows" to say I need to have vertically one portion that contains 100% of the height. So now "pageContainer" is a grid which has two columns: "leftArea" and "rightArea". Now we can fill these areas arbitrarily and separately with any content we want.

The outer structure is ready and we can devote our focus to inner parts. As you can see in the structure image we want to have two flexible boxes in the right area. So let's start with the right area:

<SyntaxHighlighter language="xml">
    &lt;body>
        &lt;div id="pageContainer">
            &lt;div id="rightArea">&lt;/div>
        &lt;/div>
    &lt;/body>
</SyntaxHighlighter>

<SyntaxHighlighter language="css">
    \#rightArea {
        grid-area: rightArea;
        background-color: \#d4fff6;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
}
</SyntaxHighlighter>

I named the &lt;div> as "rightArea". You will notice that I usually use the same names for grid areas and the id of container &lt;div> which places inside it. But you know that it is not a must and you can use different names. With the "grid-area" command we specified the area of this div. And with "display:flex" command this div is now doing his job as a flexbox. For the left area, we can do exactly the same.

<SyntaxHighlighter language="xml">
    &lt;body>
        &lt;div id="pageContainer">
            &lt;div id="leftArea">&lt;/div>
            &lt;div id="rightArea">&lt;/div>
        &lt;/div>
    &lt;/body>
</SyntaxHighlighter>

<SyntaxHighlighter language="css">
    \#leftArea {
        grid-area: leftArea;
        background-color: \#d4fff6;
        display: flex;
        flex-direction: column;
}
</SyntaxHighlighter>

Now let's fill the grid areas with flexy boxes and have fun with them. As the desired structure we have two horizontally aligned boxes in the right column and two boxes aligned vertically in the left area. So let's add them.

<SyntaxHighlighter language="xml">
    &lt;body>
        &lt;div id="pageContainer">
        &lt;div id="leftArea">
            &lt;div class="box">box1&lt;/div>
            &lt;div class="box">box2&lt;/div>
        &lt;/div>
        &lt;div id="rightArea">
            &lt;div class="box">box1&lt;/div>
            &lt;div class="box">box2&lt;/div>
        &lt;/div>
        &lt;/div>
    &lt;/body>
</SyntaxHighlighter>

<SyntaxHighlighter language="css">
    .box {
        width: 150px;
        height: 150px;
        background-color: green;
        margin: 20px;
    }
    \#rightArea .box {
        background-color: \#4dbd82;
        border: solid 1px \#006837;
    }
    \#leftArea .box {
        background-color: \#29cce2;
        border: solid 1px \#0071bc;
    }
</SyntaxHighlighter>

Resize the page and see what happens. It works well. It is interesting, isn't it?

Now that you are familiar with the concept it's time to do something more realistic. We are going to make a layout for a webpage. I chose a work done by Manuel Rovira: <a href="https://dribbble.com/shots/11210586-DIG-BMX-Shop-Redesign" target="_blank">"DIG BMX Shop Redesign"</a>. We are going to establish a structural layout for that.

<div className="images">
<img width="100%" src="/posts/css/css-grid-and-flexbox/websiteUI.png" alt="DIG BMX Shop Redesign project designed as page template">
</div>

First of all, we try to convert the website UI to a conceptual layout. Something consists of boxes, paddings, and margins. I made an easy one for the given UI, look at it bellow. It divides the page into two main containers. The upper one is "navbarContainer" and the other box bellow it named "gridBody". I divided the "gridBody" to its constituent parts that are "Ad1", "Ad2", "product" and so on.

<div className="images">
<img width="100%" src="/posts/css/css-grid-and-flexbox/websiteLayout.png" alt="template page divided to layout elements">
</div>

Now we have a structural concept for the page. It is time to decide how "grid-templates-columns" and "grid-template-rows" looks like. So first let divide the "gridBody" to columns and rows.

<div className="images">
<img width="100%" src="/posts/css/css-grid-and-flexbox/websiteLayoutGrid.png" alt="template page divided to css grid layout elements">
</div>

Everything is ready to start code. The strategy is "going from outer to inner" parts. So I start with outermost containers.

<SyntaxHighlighter language="xml">
    &lt;body>
        &lt;div id="navbarContainer">&lt;/div>
        &lt;div id="gridBody">&lt;/div>
    &lt;/body>
</SyntaxHighlighter>

Now I am going to define the rows, columns, and areas of the CSS grid layout.

<SyntaxHighlighter language="css">
    \#gridBody {
        width: 100%;
        padding: 15px;
        background-color: \#d4fff6;
        border: 1px solid \#29abe2;
        box-sizing: border-box;
        overflow: hidden;
        display: grid;
        grid-gap: 15px;
        grid-template-columns: 13% 1fr;
        grid-template-rows: 14vw 1fr;
        grid-template-areas:
        "marginListContainer headerAdsContainer"
        "marginListContainer productsContainer";
}
</SyntaxHighlighter>

The next step is specifying the &lt;div> parts located inside each defined area.

<SyntaxHighlighter language="xml">
    &lt;body>
        &lt;div id="navbarContainer">&lt;/div>
        &lt;div id="gridBody">
            &lt;div id="marginListContainer">&lt;/div>
            &lt;div id="headerAdsContainer">&lt;/div>
            &lt;div id="productsContainer">&lt;/div>
        &lt;/div>
    &lt;/body>
</SyntaxHighlighter>

We want the Products area to do it's job as a flexbox layout. So let's do it.

<SyntaxHighlighter language="css">
    \#headerAdsContainer {
        grid-area: headerAdsContainer;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    \#productsContainer {
        grid-area: productsContainer;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding-top: 15px;
        box-sizing: border-box;
    }
</SyntaxHighlighter>

At last, let's add "Ad1", "Ad2", and some products to page.

<SyntaxHighlighter language="xml">
    &lt;body>
        &lt;div id="navbarContainer">&lt;/div>
        &lt;div id="gridBody">
            &lt;div id="marginListContainer">&lt;/div>
            &lt;div id="headerAdsContainer">
                &lt;div id="Ad1">&lt;/div>
                &lt;div id="Ad2">&lt;/div>
            &lt;/div>
            &lt;div id="productsContainer">
                &lt;div class="product">&lt;/div>
                &lt;div class="product">&lt;/div>
                &lt;div class="product">&lt;/div>
                &lt;div class="product">&lt;/div>
                &lt;div class="product">&lt;/div>
                &lt;div class="product">&lt;/div>
            &lt;/div>
        &lt;/div>
    &lt;/body>
</SyntaxHighlighter>

<SyntaxHighlighter language="css">
\#Ad1 {
  width: 65%;
  height: 100%;
  background-color: \#4dbd82;
  border: 1px solid \#006837;
  margin-bottom: 15px;
}
\#Ad2 {
  width: 24%;
  height: 100%;
  background-color: \#4dbd82;
  border: 1px solid \#006837;
  margin-bottom: 15px;
  margin-right: 30px;
}
.product {
  width: 151px;
  height: 180px;
  background-color: \#29cce2;
  border: 1px solid \#0071bc;
  margin-bottom: 15px;
  margin-right: 33px;
}
</SyntaxHighlighter>

That's it! We have done it. It does not need to say there was not a whole process of designing of a website layout. For a good and robust design, you need to do lots of work on details and make it more and more responsive to changes. But it was a good entry point to have a look at the power of combining CSS grid and flexbox. Feel free to test it your self:

<iframe src="https://codesandbox.io/embed/cssgridlayout-and-flexbox-combination-qf3nn?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
     title="cssGridLayout-and-flexBox-combination"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Combining the CSS grid and flexbox brings us the power of controlling many aspects of our designed layout. It was a cool job we have done on this journey. We showed that the CSS grid and flexbox are good friends and it is not a smart insight to compare them like "CSS GRID LAYOUT vs FLEXBOX". hope you enjoy it.
