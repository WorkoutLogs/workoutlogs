import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { GooglePlayButton } from 'react-mobile-app-button';
import AppScreenshot from '../assets/app-screenshot.png';
import Footer from "../components/footer";
import Content from "../components/content";

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
              <h1 className="text-6xl text-left w-64 font-bold">The<br/>Best<br/>Workout<br/>Tracker.</h1>
              <p className="text-xl mt-5" style={{maxWidth: 450}}>{description}</p>  
              <GooglePlayButton
                url={GooglePlayUrl}
                theme='dark'
                className='mt-5 self-center md:self-auto'
              />
            </div>
          </div>
          <div className='flex-1 flex justify-center md:justify-start mt-8'>
            <img
              style={{
                width: 275
              }}
              className="md:ml-8"
              src={AppScreenshot}
            />
          </div>
        </div>
        <div className="bg-white p-4">
          <h1 className="text-2xl text-center mb-4 font-medium">App Functionalities</h1>
          <p className="text-center mb-4">A simple workout tracker, developed by gym rats, for gym rats!</p>
          <ul className="list-disc list-inside self-center">
            <li>Track your workouts, record weight, reps, and RPE</li>
            <li>Track all your body measurements (bodyweight, bicep size, etc.)</li>
            <li>Plate calculator</li>
            <li>Powerlifting points calculator</li>
            <li>RPE/1RM calculator</li>
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
  <title>WorkoutLogs - Gym Tracker</title>
)