## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview


### Links

- Solution URL: https://github.com/joy21fs/zaku-tutangus-nextjs
- Live Site URL: https://zaku-tutangus.vercel.app/

## My process
I first used React and React-Router-Dom to build this project, then to find the image files for the background design are too huge that they slow down page load. After digging into how to improve this issue, I learned more about client-side-rendering vs. server-side-rendering and decided to transfer my project to using Next.js.

### What I learned

**CSS**

- Styling scrollbar by using the pseudo element ::-webkit-scrollbar
- Adding the { behavior: "smooth" } option to scrollIntoView for smooth scrolling animation
  e.g., document.querySelector("main").scrollIntoView({ behavior: "smooth" })
- Styling list items with list-style-type (e.g., none, decimals etc.) & list-style-position (e.g., inside, outside)
-  Pointer-events: none to target elements behind the front layer

**Improving Page Loading Speed**
- CSR vs SSR vs SSG
- LCP
- responsive image sizes
- Web hosting vs Self-hosting Fonts
**Next.js**
- Using the "priority" property on any image detected as the Largest Contentful Paint (LCP) element.
- When we wish to style the <Image/> we wrap the <Image/> around an parent element and style the parent element as next.js's <Image/> has some built-in stylings that will overwrite our custom styling
- the files in pages folder directly serve as routes
- CSS modules

**Framer Motion**
- Animtate Presence & <motion.div>s

**Other**
- require.context to import images at once react
- Framer motion for removing or adding element to DOM tree with animation
- Open link in new tab (target="_blank") taking care of risk with rel="nooperner noreferrer" instructs the browser to open the link without granting the new browsing context access to the document that opened it e.g., <a
                  className={`${styles_t["external-link"]}`}
                  href={option.info}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cursor: "pointer" }}
                >
                  網頁連結
                </a>


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- React (React components, useEffect and useState Hooks)
- Next.js (Head, Images, useRouter, useStaticProps etc.)
- Framer Motion
    
### Useful resources

- Next.js Documentation: https://nextjs.org/docs/basic-features/image-optimization
- Framer Motion Documentation: https://www.framer.com/docs/animation/
- Webpack Dependency Documentation (on require.context): https://webpack.js.org/guides/dependency-management/#requirecontext
- MDN Documentation on Link Types: https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types
    
    
### Screenshots

![officially-online](https://user-images.githubusercontent.com/95619834/163787614-5ffe6b6e-8171-40d7-b104-e08097801e10.PNG)
![demo1](https://user-images.githubusercontent.com/95619834/163788458-8ca9c296-ad45-4563-a361-675298f3f5ab.gif)
![demo2](https://user-images.githubusercontent.com/95619834/163788525-85f31810-4e9d-4734-b52c-21a61d852820.gif)
![demo_transportation](https://user-images.githubusercontent.com/95619834/163787667-223c8d99-3f1b-447b-95af-b7bf493aab6c.gif)

