import * as React from 'react';
import Head from 'next/head';

import { Slider } from 'src/components/ImageSlider/Slider';
import MainNavbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Testimonials from 'src/components/Testimonials';
import LogoCloud from 'src/components/LogoCloud';
import AboutSection from 'src/components/AboutSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abner Development</title>
        <meta name="description" content="Design | Develop | Market" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <section className="h-[60vh] md:h-screen">
          <MainNavbar />
          <div className="flex flex-col justify-center items-center mt-16 md:mt-28">
            <h1 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-bold">
              Energy for the <span className="text-orange-500">Future</span>.
            </h1>
            <p className="mt-2 md:mt-4 text-md md:text-xl text-gray-800 dark:text-gray-200 mb-5">
              Today&apos;s resource for a brighter tomorrow!
            </p>
          </div>
          <Slider />
        </section>
        <section className="">
          <div className="bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="mt-1 text-4xl font-bold text-gray-900 dark:text-gray-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Take control of your electricity.
                </p>
                <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                  Take control over your electric bill, going solar is your best
                  choice. Solar energy is the most cost-effective way to power
                  your home.
                </p>
              </div>
            </div>
          </div>
          <AboutSection />
        </section>
        <div>
          <div className="bg-gray-50 dark:bg-slate-700">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
                <span className="block">Ready to get started?</span>
                <span className="block text-orange-500">
                  Contact us to schedule a call.
                </span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600"
                  >
                    Contact now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="h-[70vh] md:h-screen bg-gray-200 dark:bg-slate-900">
          <Testimonials />
        </section>
        <div className="">
          <LogoCloud />
        </div>
      </main>
      <Footer />
    </div>
  );
}
