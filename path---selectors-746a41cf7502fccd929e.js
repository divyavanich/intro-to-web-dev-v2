webpackJsonp([0x6e92ac817dd3],{506:function(s,n){s.exports={data:{markdownRemark:{html:'<p>Before this section, you learned how to make CSS rules to affect how your webpage looks. We showed you how to make a CSS rule so that you can make every <code class="language-text">p</code> on the page have green text instead of black which is amazing. However, as you start building bigger websites, you begin to have more complicated needs: you may need <em>this</em> <code class="language-text">p</code> to have green text and that <code class="language-text">p</code> to have <code class="language-text">red</code> text. We haven\'t shown you yet how to make two of the same tag be styled different. Let\'s start showing you how to do this so you can achieve things like this:</p>\n<p class="red-text">This is a red p.</p>\n<p class="green-text">This is a green p.</p>\n<p>So how do we achieve this black magic? Do you remember <a href="http://localhost:8000/html-next-steps#classes">the section on classes</a> in the HTML portion? We\'re going to use that now. Classes allow us to style the same <strong>tags</strong> (e.g. <code class="language-text">p</code>, <code class="language-text">div</code>, <code class="language-text">span</code>, etc.) differently because we can select the class instead of the tag. This is where having useful class names helps. So now, if we have an <code class="language-text">h1</code> that\'s the title of a blog post and an <code class="language-text">h1</code> that\'s the branding logo at the top, we can do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-htm"><code class="language-htm">&lt;h1 class=&quot;branding&quot;&gt;My Super Cool Brand&lt;/h1&gt;\n&lt;!-- other htmls … these don&#39;t have to be sibiling tags --&gt;\n&lt;h1 class=&quot;blog-post-title&quot;&gt;My Cool Blog Post&lt;/h1&gt;</code></pre>\n      </div>\n<p>We can CSS to address these two differently. Like so:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">.branding</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.blog-post-title</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> limegreen<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>branding<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>My Super Cool Brand<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blog-post-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>My Cool Blog Post<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>In the CSS, notice the <code class="language-text">.</code> (period) before the class name. This is how you differentiate between a tag name (like <code class="language-text">h1</code>) and a class name (like "branding".)</p>\n<p>So what should you use, generally speaking. Classes. Almost always classes. This is the consensus in the front end development community. Classes are the best way to style web pages. There are rare occasions that it may be useful style on tags (like if you literally want to style every <code class="language-text">a</code> tag on the page) but those cases are rare. Use classes. Err on the side of using classes too much.</p>\n<h2 id="the-cascade"><a href="#the-cascade" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Cascade</h2>\n<p>I wish we could stop here. This is the part where CSS can become unnecessarily complicated, even if the ability to use the cascade is occasionally useful. Before we dive in, avoid using this ability of CSS where-ever possible. It\'ll save you hours-and-hours of debugging, I promise.</p>\n<p>So, the cascade. What if you have two CSS classes that have conflicting properties? Which one "wins" and is applied? Let\'s see an example.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">.title</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.title</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Cool Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>In this one, we have two rules with the same class (which is "legal" CSS.) So which one gets applied? Since they\'re equal, the one that comes <strong>last</strong> wins. So in this case, the <code class="language-text">h1</code> would be green. So remember that rule (we\'ll recap at the end): when everything is equal, the <em>last one</em> gets applied. It\'d work the same if we had two <code class="language-text">h1</code> selectors as well.</p>\n<p>Okay, one step more complicated:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">.main-brand-2</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.title-2</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title-2 main-brand-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Branding here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>First of all, yes, one tag can have multiple classes, and that can be useful. Okay, so what is this going to look like? In the eyes of CSS, those two selectors are equal since they both have the same <strong>specificity</strong> (key word, you\'ll see it used a lot when talking about CSS.) They both specific one class which makes them equal. So in this case, since <code class="language-text">.title</code> comes last in the CSS, it wins. The color will be green. What about the border? Since <code class="language-text">.title</code> doesn\'t conflict, it\'ll have a black border too. So keep in mind that each of these "conflicts" is resolved on a property-by-property basis. So the end result in an <code class="language-text">h1</code> that has a black border and green font.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">.main-brand-3.title-3</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.title-3</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title-3 main-brand-3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Branding here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>This how you add two classes to one selector. Notice there\'s no space between the two class names (that means something else.) The selector <code class="language-text">.main-brand.title</code> will only match a tag that has <strong>both</strong> classes. If has only one of the two, it will not match. As you may imagine, since it has two classes, it\'s more specific, and therefore it wins.</p>\n<p>Okay, next steps here:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">.title-4</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">h1</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Another h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>This one is less obvious. Now we have to understand specificity even more. <strong>A class is considered more specific than a tag</strong>. So a class selector "overpowers" a tag selector. It\'s more specific. Therefore, even though the <code class="language-text">h1</code> selector comes last, the <code class="language-text">.title</code> wins because it\'s more specific. This is why it\'s useful to do <em>everything</em> using classes; you don\'t need to worry about these specificity wars if everything is equal and try to have it some you don\'t have conflicting rules (which is not always possible.)</p>\n<p>A useful but imperfect way to think about this is to think of specificity like a number. The class is like the tens digit, and the tag is like the ones digit. So something with one class selector would have a number <code class="language-text">10</code> specificity and something with one tag selector would a specificty of <code class="language-text">1</code>. The bigger number wins. This is imperfect because one class selector is still bigger than 10 tag selectors, but it\'s a useful mental device to quickly evaluate mentally which tag is more specific.</p>\n<p>Last one and we\'ll move on:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">h1.main-brand-5</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.main-brand-5.title-5</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.main-brand-5</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title-5 main-brand-5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Another Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>The first selector, <code class="language-text">h1.main-brand</code> is how you select both a tag and a class at the same time. As you may imagine, this is more specific than the third selector, <code class="language-text">.main-brand</code>. If you remember our shortcut trick, the first selector would be 11, the second would be 20, and the last would be 1, making the second selector the most specific, and indeed it is. The first selector isn\'t a good idea to do; using a tag and a class is usually a bad idea and means you\'re likely doing something weird in your code. I\'m just showing you because it does happen in a lot in exisitng code.</p>\n<h2 id="ids-and-important"><a href="#ids-and-important" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>IDs and !important</h2>\n<p>The next two I\'m going to show you should nearly never use. These are wrecking balls when most problems require carpenter\'s hammers. I show you because a lot of tutorials online and existing code has them in there. So please, refrain from using these tools unless you have good reason (there are some problems that do require wrecking balls.)</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">#site-brand</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">h1.nav-head.nav-main.other-useful-class</span> <span class="token punctuation">{</span>\n    <span class="token comment">/*\n     * this class is way too specific; never have a class selector so long\n     * it\'s ridiculous and just to illustrate a point\n     */</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>site-brand<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-head nav-main other-useful-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The Brand of my Website<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>You would think by how long the second class is, it\'d win. Not the case. ID selectors (<code class="language-text">#site-brand</code>) win over class selectors. If tags are the one place and classes are the tens place, then IDs are the hundred place. Using that, the first one is 100 and the second is 31. Again, keep in mind this is just useful for a quick device to look at specificity. Still one ID is greater than ten classes.</p>\n<p>Do you want to wreck the wrecking ball? Using the previous HTML, look at this CSS:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">#site-brand-2</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.nav-head-2</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> green <span class="token important">!important</span><span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>site-brand-2<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>nav-head-2 nav-main-2 other-useful-class-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The Brand of my Website<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Rekt. The <code class="language-text">h1</code>\'s <code class="language-text">color</code> is going to be green but the <code class="language-text">border</code> is going to be red. This is a <em>terrible</em> idea. Never use <code class="language-text">!important</code>. As you can see, it\'s gets messy quickly and it makes the logic really tough to follow even for experienced devs.</p>\n<h2 id="pseudoclasses"><a href="#pseudoclasses" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pseudoclasses</h2>\n<p>Some times we want to change how elements look based on certain events that happen in the DOM. One of the most common ones is we want to change an element when someone hovers their mouse over it. Like this box:</p>\n<p>The see we used for this is this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">.hover-example</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> limegreen<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.hover-example:hover</span> <span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> crimson<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>hover-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover your mouse over me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>The <code class="language-text">:hover</code> part selects that element <strong>only when that condition is true</strong>. There are are many <a href="https://css-tricks.com/pseudo-class-selectors/">CSS pseudo classes</a> like being able to only select the first element of something like this:</p>\n<p>The CSS for this is:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style language-css">\n  <span class="token selector">.first-child-example</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> crimson<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">.first-child-example:first-child</span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> limegreen<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first-child-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>First<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first-child-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Second<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>first-child-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Third<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>This only selects the element if it is the <em>first element</em> inside of a tag. Otherwise it won\'t select it. There are numerous other CSS classes; check out the CSS-Tricks article if you want learn more.</p>\n<h2 id="pseudoelements"><a href="#pseudoelements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pseudoelements</h2>\n<p>We are not going to talk about those today as they\'re not as frequently used, but they can be very useful in certain circumstances. <a href="https://css-tricks.com/almanac/selectors/a/after-and-before/">See here</a> if you\'re curious but the basic idea is that you can CSS to add additional content/stylings to the HTML. Sometimes useful, often confusing.</p>',frontmatter:{path:"/selectors",title:"CSS Selectors and the Cascade",order:7}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Overview of What You'll Be Learning In This Course"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Tools"}}},{node:{frontmatter:{order:3,path:"/basic-html",title:"Basic HTML"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,
path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---selectors-746a41cf7502fccd929e.js.map