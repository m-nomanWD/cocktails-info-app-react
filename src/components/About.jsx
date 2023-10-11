import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <>
        <section className='about-container'>
          <h2>About CHEERS CRAZE! </h2>

          <p>
            Welcome to <b> Cheers Craze Cocktail </b> Info App. Your Gateway to
            the World of Cocktails! Developed with Love and React Hello there!
            I'm excited to introduce you to Cheers Craze, a project near and
            dear to my heart. As a cocktail enthusiast and a developer, I
            embarked on a journey to create a unique space where cocktail lovers
            like you could explore a world of delightful libations. And I did it
            all using{' '}
            <ol>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li> TheCocktailDB API</li>
            </ol>
          </p>
          <h2>About CocktailDB API</h2>
          <p>
            Unveiling <b>TheCocktailDB API</b> At the heart of this project lies
            TheCocktailDB API, a treasure trove of cocktail knowledge. With it,
            I've meticulously curated an extensive collection of cocktail
            recipes and related information just for you. You can easily dive
            into the world of mixology, discover new and classic cocktails, and
            find out what makes each one special. TheCocktailDB API has been my
            trusted partner in bringing this experience to life.
          </p>
          <h2>Package Use for Loading Animation</h2>
          <p>
            I use <b>"react-spinners"</b> npm package is a collection of loading
            spinners designed for use in <b>React.js</b> applications. These
            loading spinners are created based on the Halogen library. This
            package provides a range of customizable loading spinners that can
            be easily integrated into React projects to indicate that a process
            is in progress. <br />
            Each spinner comes with its own set of default properties, which can
            be customized by passing props into the loaders. The package
            supports features like tree shaking, allowing you to optimize the
            bundle size for your application. It's a versatile and user-friendly
            solution for adding loading indicators to your React application,
            making it visually appealing and informative for users during
            loading or processing tasks.
          </p>
          <h2>Acknowledgement: </h2>
          <p>
            Inspired by <b>John Smilga </b> I draw my inspiration from the John
            Smilga, founder of <b>Coding Addict</b> - a renowned{' '}
            <b>YouTube channel</b>
            and a famous instructor in the realm of <b>web development</b>.
            John's dedication to teaching and simplifying complex concepts has
            greatly influenced this project. His commitment to making web
            development accessible to all has served as a guiding light, and I'm
            thrilled to bring that same dedication to Cocktail Explorer.
            <ol className='links'>
              <li>
                {' '}
                <h5>
                  YouTube Channel:
                  <a
                    href='https://www.youtube.com/c/codingaddict'
                    target='_blank'
                  >
                    Codding Addict
                  </a>
                  on YouTube
                </h5>
              </li>
              <li>
                <h5>
                  GitHub Profile: John Smilga on
                  <a href='https://github.com/john-smilga' target='_blank'>
                    GitHub Profile
                  </a>
                  Discover
                </h5>
              </li>
            </ol>
          </p>
          <h2>My Words</h2>
          <p>
            <b>Cheers Craze</b> is not just about the cocktails; it's about your
            journey to becoming a mixology maestro. Discover new drinks and
            step-by-step instructions. Be inspired to craft your own
            concoctions, and impress your friends and family at your next
            gathering. Whether you're a seasoned bartender or a curious amateur,
            there's something here for everyone. Your Guide to Mixology Our
            mission is simple: to make the art of mixology accessible and
            enjoyable. <br />
            You can count on <b>Cheers Craze</b> to provide you with the
            information you need to craft your favorite drinks at home or
            explore new flavors. Uncover the history and stories behind each
            cocktail, and perhaps you'll find a new favorite or two along the
            way. Thank you for joining us on this cocktail adventure. We hope
            you enjoy Cocktail Explorer and that it becomes your go-to resource
            for all things cocktails. Cheers to your mixology journey! <br />
            Sincerely, <br />
            <b style={{ height: '60px' }}>Muhammad Noman</b>
          </p>
        </section>
      </>
    )
  }
}

export default About
