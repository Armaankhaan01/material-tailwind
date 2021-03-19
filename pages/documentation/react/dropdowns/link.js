import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';
import DropdownsCode from 'components/Documentation/JavaScript/React/DropdownsCode';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';
import Ripple from 'material-ripple-effects';

export default function Buttons() {
  const [copy, setCopy] = React.useState(null);
  const ripple = new Ripple();

  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        <title>React Dropdowns | Tailwind Starter Kit by Creative Tim</title>
      </Head>
      <Navbar fixed />
      <div className="container max-w-7xl mx-auto mt-4 pt-12">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
            <Sidebar routes={routes} />
          </div>
          <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
            <div className="my-8">
              <Heading
                title="React Dropdowns"
                description="Beautiful dropdowns using React."
              />
              <SmallHeading title="Dropdown" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                placement="bottom-start"
                size="regular"
                rounded={false}
                buttonText="Dropdown"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Rounded Dropdown" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                placement="bottom-start"
                size="regular"
                rounded={true}
                buttonText="Rounded Dropdown"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Small Dropdown" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                placement="bottom-start"
                buttonType="link"
                size="sm"
                rounded={false}
                buttonText="Small Dropdown"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Regular Dropdown" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                placement="bottom-start"
                buttonType="link"
                size="regular"
                rounded={false}
                buttonText="Regular Dropdown"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Large Dropdown" />
              <DropdownsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                placement="bottom-start"
                buttonType="link"
                size="lg"
                rounded={false}
                buttonText="Large Dropdown"
                ripple={`onMouseUp={(e) => ripple.create(e, 'dark')}`}
                onMouseUp={(e) => ripple.create(e, 'dark')}
              />
            </div>
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
