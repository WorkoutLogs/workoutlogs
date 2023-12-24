import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { GooglePlayButton } from 'react-mobile-app-button';
import Footer from "../components/footer";
import Content from "../components/content";
import { StaticImage } from "gatsby-plugin-image";

const META_DESCRIPTION = "Get the best workout tracker android app for free";
const TITLE = 'WorkoutLogs - Gym Tracker App';
const IMAGE = 'https://workoutlogs.github.io/icon.png';

const IndexPage = () => {
  const GooglePlayUrl = "https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs";
  const description = 'Download WorkoutLogs app and start tracking your workouts today!'

  return (
    <Layout>
      <Header
        backgroundColor='#df2a27'
      />
      <Content>
        <div className="flex text-white p-4 flex-col md:flex-row" style={{backgroundColor: "#df2a27"}}>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="md:mr-8 flex flex-col">
              <h1 className="text-6xl text-left w-64 font-bold">The <br/>Best <br/>Workout <br/>Tracker.</h1>
              <p className="text-xl mt-5" style={{maxWidth: 450}}>{description}</p>  
              <GooglePlayButton
                url={GooglePlayUrl}
                theme='dark'
                className='mt-5 self-center md:self-auto'
              />
            </div>
          </div>
          <div className='flex-1 flex justify-center md:justify-start mt-8'>
            <StaticImage
              style={{
                width: 275
              }}
              className="md:ml-8"
              src={'../assets/app-screenshot.png'}
              alt='WorkoutLogs App Screenshot'
              placeholder='blurred'
            />
          </div>
        </div>
        <div className="bg-white p-4 px-7">
          <h2 className="text-2xl text-center mb-4 font-medium">App Functionalities</h2>
          <p className="text-center mb-4">A simple workout tracker, developed by gym rats, for gym rats!</p>
          <ul className="list-disc list-outside self-center">
            <li>Record your workouts, record weight, reps, and RPE</li>
            <li>Track all your body measurements (bodyweight, bicep size, etc.)</li>
            <li>Plate calculator</li>
            <li>Calculators
              <ul className="list-disc list-inside">
                <li>Powerlifting points</li>
                <li>RPE/1RM</li>
                <li>Plate calculator</li>
              </ul>
            </li>
            <li>Timers</li>
          </ul>
        </div>
      </Content>
      <Footer
        backgroundColor='#df2a27'
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>{TITLE}</title>
    <meta name="description" content={META_DESCRIPTION}/>
    <link rel="canonical" href="https://workoutlogs.github.io"/>
    
    <meta property="og:locale" content="en_US" />
    <meta property="og:url" content="https://workoutlogs.github.io"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={META_DESCRIPTION} />
    <meta property="og:image" content={IMAGE}/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta property="twitter:domain" content="workoutlogs.github.io"/>
    <meta property="twitter:url" content="https://workoutlogs.github.io"/>
    <meta name="twitter:title" content={TITLE}/>
    <meta name="twitter:description" content={META_DESCRIPTION}/>
    <meta name="twitter:image" content={IMAGE}/>
  </>
)