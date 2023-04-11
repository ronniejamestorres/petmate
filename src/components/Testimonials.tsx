import React from "react";
import backgroundImage from "../images/petmate-background-01.svg";
import "../App.css";

function Testimonials() {
  return (
    <section
      className="bg-beige1 text-beige3"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">What People Think About?</h2>
            <p className="text-gray-700">
              Our app has been designed with the aim of helping pet owners
              connect with other pet owners and provide their furry friends with
              a fun and social experience. Here are some of the things our users
              have had to say about their experience with our app.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-beige2 text-gray-700">
                  <p>
                    I love this app because it allows me to find friends for my
                    cat. Sometimes it's hard to find friends for cats, but here
                    I have found several people with cats who are very fun and
                    playful. I highly recommend this app to anyone who wants to
                    provide their cat with some social interaction and make new
                    friends in the process.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?1"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Camille T.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-beige2 text-gray-700">
                  <p>
                    As a new pet owner, I was looking for a way to connect with
                    other pet owners for advice and recommendations. This app
                    has been very helpful for that, I have met very kind and
                    knowledgeable people who have helped me a lot.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?2"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Sam J.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-beige2 text-gray-700">
                  <p>
                    After moving to a new city, I was looking for a way to meet
                    new people and socialize with my dogs. This app has been
                    perfect for that, I have met other dog owners and we have
                    organized park meetings to play and chat.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?3"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Charlie M.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-beige2 text-gray-700">
                  <p>
                    I am very satisfied with this pet app, I have met other dog
                    owners in my neighborhood and we have organized group walks.
                    My dog is very happy to have new furry friends to play
                    with.This app has made it easy to connect with other dog
                    owners who share similar interests and lifestyles. We've
                    been able to exchange tips and recommendations on everything
                    from pet grooming to pet-friendly places to visit.I highly recommend this app to anyone
                    looking to connect with other pet owners and provide their
                    pets with a fun and social experience.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?4"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                    />
                    <div>
                      <p className="text-lg font-semibold">Alex R.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
