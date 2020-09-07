Hi friends! Hope you are well. As I was writing my journey to use <a href="http://bafreelancing.com/Journeys/css/css-grid-and-flexbox" target="_blank">CSS Grid and CSS Flexbox</a>, I realized the need for some preliminary knowledge about importing CSS styles to our HTML file. Although this is not going to be like other journeys, I decided to share some information on this topic.

It is obvious that when you decide to change the style of your HTML page, you need to add CSS to it. But how to do and which way to adopt is a topic we are going to deal with in what follows.

As mentioned in lots of resources there are 3 ways of including CSS styles in HTML pages.

1. Style Inline

2. Style Internal

3. Style External

First, let's start with "Inline Styles". Say we have a very simple HTML page like this:

<SyntaxHighlighter language="xml">
    &lt;!DOCTYPE html>
    &lt;html lang="en">
    &lt;head>
        &lt;meta charset="UTF-8" />
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
        &lt;title>Style Import Types&lt;/title>
    &lt;/head>
    &lt;body>
        &lt;div>Styled Inline&lt;/div>
        &lt;div>Styled Internal&lt;/div>
        &lt;div>Styled External&lt;/div>
    &lt;/body>
    &lt;/html>
</SyntaxHighlighter>

Which seems to be something like this:

<div className="images">
<img width="45%" src="/posts/css/link-css-to-html/pageWithoutStyle.png" alt="html page without css styling">
</div>

For inline CSS styling, we need a "style" attribute. It added directly to the desired tag. let's add some CSS styles to the first div as below:

<SyntaxHighlighter language="xml">
    &lt;head>
        &lt;meta charset="UTF-8" />
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
        &lt;title>Style Import Types&lt;/title>
    &lt;/head>
    &lt;body>
        &lt;div
        style="
            color: white;
            background-color: #8debe4;
            font-size: 30px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 30px;
            padding: 30px;
            text-align: center;
            border-radius: 8px;
        "
        >
        Styled Inline
        &lt;/div>
        &lt;div>Styled Internal&lt;/div>
        &lt;div>Styled External&lt;/div>
    &lt;/body>
</SyntaxHighlighter>

We added style="..." inside first &lt;div> to change some colors and font properties. If you do so, the result will be something like below:

<div className="images">
<img width="75%" src="/posts/css/link-css-to-html/pageWithInlineStyle.png" alt="html page using inline method to css styling">
</div>

The second way to add style to the HTML page is "Internal style". In this way, we do not add CSS styles directly as an attribute. What we do is adding them inside a &lt;/style> tag inside &lt;head> part of HTML code.

Let's add some internal styles to our page. I won't change anything in &lt;body> part of the page and so I will show you just the &lt;head> part of the page, below.

<SyntaxHighlighter language="xml">
    &lt;head>
        &lt;meta charset="UTF-8" />
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
        &lt;title>Style Import Types&lt;/title>
        &lt;style>
            div {
                color: #798db1;
                background-color: #ebc58d;
                font-size: 30px;
                font-family: "Times New Roman", Times, serif;
                margin: 30px;
                padding: 30px;
                text-align: center;
                border-radius: 8px;
            }
        &lt;/style>
        &lt;link rel="stylesheet" href="style.css" />
    &lt;/head>
</SyntaxHighlighter>

and see what results:

<div className="images">
<img width="75%" src="/posts/css/link-css-to-html/pageWithInternalStyle.png" alt="html page using inline and internal methods to css styling">
</div>

The added style inside &lt;head> part of the code changed the style of &lt;div> tags inside the page except the first one. the reason is that there is a hierarchy in ways HTML page adds style to elements of the page. I save it in my mind with this sentence: "The priority is with the style closer to the tag." So in our case, the first &lt;div> has a "style" attribute which leads to defining its style.

At last, we are going to use "External styling". In this method, first, we need to make a CSS styling file. The name will be what you want and the extension of the file must be ".css". I made one in the same directory, besides my "index.html", and named it "style.css". Then add some styling parameters to it. Something like the snippet below:

<SyntaxHighlighter language="css">
    \#externalStyled {
        color: \#258776;
        background-color: \#afeb8d;
        font-size: 30px;
        font-family: Georgia, "Times New Roman", Times, serif;
        margin: 30px;
        padding: 30px;
        text-align: center;
        border-radius: 8px;
    }
</SyntaxHighlighter>

I used "externalStyled" id to specifically change the last &lt;div> in our page. Now we need to link this style to our "index.html" page. To do so we need to add a &lt;link> inside &lt;head> part of the page and use "href" attribute to specify the stylesheet file. You can see the head part changes to what comes here:

<SyntaxHighlighter language="xml">
    &lt;head>
        &lt;meta charset="UTF-8" />
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
        &lt;title>Style Import Types&lt;/title>
        &lt;style>
            div {
                color: #798db1;
                background-color: #ebc58d;
                font-size: 30px;
                font-family: "Times New Roman", Times, serif;
                margin: 30px;
                padding: 30px;
                text-align: center;
                border-radius: 8px;
            }
        &lt;/style>
        &lt;link rel="stylesheet" href="style.css" />
    &lt;/head>
</SyntaxHighlighter>

And a small change to add id to the last &lt;div> :

<SyntaxHighlighter language="xml">
    &lt;div id="externalStyled">Styled External&lt;/div>
</SyntaxHighlighter>

It's all over. You can see what we have done:

<div className="images">
<img width="75%" src="/posts/css/link-css-to-html/pageWithExternalStyle.png" alt="html page using inline, internal and external methods of css styling">
</div>
