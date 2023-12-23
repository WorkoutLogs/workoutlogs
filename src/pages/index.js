import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { GooglePlayButton } from 'react-mobile-app-button';
import AppScreenshot from '../assets/app-screenshot.png';
import Footer from "../components/footer";
import Content from "../components/content";

const IndexPage = () => {
  const GooglePlayUrl = "https://play.google.com/store/apps/details?id=com.reddyyz.WorkoutLogs";

  return (
    <Layout>
      <Header
        backgroundColor='#df2a27'
      />
      <Content>
        <main style={{backgroundColor: "#df2a27"}}>
          <div className="flex text-white p-4 flex-col md:flex-row">
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="mr-8 flex flex-col">
                <h1 className="text-6xl text-left w-64">The<br/>Best<br/>Workout<br/>Tracker.</h1>
                <p className="text-xl mt-5" style={{maxWidth: 450}}>Download WorkoutLogs and start tracking your workouts today!</p>  
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
                className="ml-8"
                src={AppScreenshot}
              />
            </div>
          </div>
        </main>
      </Content>
      <Footer/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <title>WorkoutLogs - Gym Tracker</title>
)