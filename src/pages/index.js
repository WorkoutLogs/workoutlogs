import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer";
import Content from "../components/content";
import { StaticImage } from "gatsby-plugin-image";

const META_DESCRIPTION = "Get the best workout tracker android app for free";
const TITLE = 'WorkoutLogs - Gym Tracker App';
const IMAGE = 'https://workoutlogs.github.io/icon.png';

const IndexPage = () => {
  const GooglePlayUrl = "https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs&pcampaignid=website";
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
              <a href={GooglePlayUrl} className="mt-5 self-center md:self-auto">
                {/* <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/> */}
                <StaticImage
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  placeholder="blurred"
                  width={215}
                />
              </a>
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
          <p className="text-center mb-4">Unlock the power of a user-friendly workout app, created by gym rats for gym rats!</p>
          <div className='grid md:grid-cols-2'>
            <div className="ml-auto mr-auto">
              <ul className="list-disc list-inside m-4">
                Workout History
                <li>Record your sets, weight, reps and RPE</li>
                <li>Use KG or LBS</li>
                <li>Add custom exercises</li>
                <li>Rest timer</li>
                <li>Local backup system</li>
                <li>Simple design</li>
              </ul>
              <ul className="list-disc list-inside m-4">
                Body Measurement Tracking
                <li>Monitor all your body measurements (bodyweight, bicep size, etc.)</li>
                <li>Track your progress with charts</li>
                <li>Android Widget</li>
              </ul>
            </div>
            <div className="ml-auto mr-auto">
              <ul className="list-disc list-inside m-4">
                Calculators
                <li>Plate loading calculator</li>
                <li>Calculate your powerlifting competition points (IPF, DOTS, WILKS)</li>
                <li>Rating of Perceived Exertion (RPE) and 1RM calculator</li>
              </ul>
              <ul className="list-disc list-inside m-4">
                Supported Languages
                <li>English (US)</li>
                <li>Portuguese (BR)</li>
              </ul>
            </div>
          </div>
          <p className="text-center">Have a suggestion or facing an issue?<br/> Our dedicated team is here to assist you at <b>workoutlogs@gmail.com.</b></p>
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