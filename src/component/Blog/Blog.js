import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div class="text-5xl font-extrabold text-center pt-4 ...">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    SOME QUESTION:
                </span>
            </div>
            <div className=' p-6 lg:mx-36 lg:my-10 text-center shadow-md rounded-md'>
                <h1 className='text-3xl p-3 font-semibold text-pink-500'>
                    1: What is cors?
                </h1>
                <p className='text-md'>
                    Cross-origin resource sharing ( CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. [1] A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. [2] Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.
                </p>
            </div>
            <div className=' p-6 lg:mx-36 lg:my-10 text-center shadow-md rounded-md'>
                <h1 className='text-3xl p-3 font-semibold text-pink-500'>
                    2: Why are you using firebase? What other option do you have to implement authentication?
                </h1>
                <p className='text-md'>
                    Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.As one of the most popular methods of authentication for anything from email accounts to online banking, OOB is relatively easy to roll out with staff members. Disadvantage: As with token and multi-factor authentication, a lost phone can quickly circumvent the security offered by MFA.

                </p>
            </div>
            <div className=' p-6  lg:mx-36 lg:my-10 text-center shadow-md rounded-md'>
                <h1 className='text-3xl p-3 font-semibold text-pink-500'>
                    3: How does the private route work?
                </h1>
                <p className='text-md'>A VPN works by routing a device's internet connection through a private service rather than the user's regular internet service provider (ISP). The VPN acts as an intermediary between the user getting online and connecting to the internet by hiding their IP address.
                    The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn’t logged in they’re redirected to the /login page, if the user is logged in but aren’t in an authorised role they’re redirected to the home page.
                </p>
            </div>
            <div className=' p-6 lg:mx-36 lg:my-10 text-center shadow-md rounded-md'>
                <h1 className='text-3xl p-3 font-semibold text-pink-500'>
                    4: What is Node? How does Node work?
                </h1>
                <p className='text-md'>
                    A node may refer to any of the following: In data communication, a node is any active, physical, electronic device attached to a network. ... In graph theory, a node is a unit of data on a graph, connected to other nodes by edges. ... The term node may also refer to Node.js, a runtime environment for server-side JavaScript applications.Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event.
                </p>
            </div>
        </div>
    );
};

export default Blog;