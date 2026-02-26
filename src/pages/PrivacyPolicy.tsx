import React from "react";
import { motion } from "motion/react";

export const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-stone-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="heading-serif text-5xl md:text-7xl mb-6 text-sky-900">
              Privacy Policy
            </h1>
            <p className="text-stone-500 text-xl max-w-2xl">
              How we handle and protect your data at County Construction Service
              Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-stone lg:prose-lg max-w-none">
            <div className="space-y-12">
              <div>
                <h2 className="heading-serif text-3xl mb-4">Who we are</h2>
                <p className="text-stone-600 leading-relaxed">
                  Our website address is: https://www.ccs-london.co.uk.
                </p>
              </div>

              <div>
                <h2 className="heading-serif text-3xl mb-4">Comments</h2>
                <p className="text-stone-600 leading-relaxed">
                  When visitors leave comments on the site we collect the data
                  shown in the comments form, and also the visitor’s IP address
                  and browser user agent string to help spam detection.
                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                  An anonymised string created from your email address (also
                  called a hash) may be provided to the Gravatar service to see
                  if you are using it. The Gravatar service Privacy Policy is
                  available here: https://automattic.com/privacy/. After
                  approval of your comment, your profile picture is visible to
                  the public in the context of your comment.
                </p>
              </div>

              <div>
                <h2 className="heading-serif text-3xl mb-4">Media</h2>
                <p className="text-stone-600 leading-relaxed">
                  If you upload images to the website, you should avoid
                  uploading images with embedded location data (EXIF GPS)
                  included. Visitors to the website can download and extract any
                  location data from images on the website.
                </p>
              </div>

              <div>
                <h2 className="heading-serif text-3xl mb-4">Cookies</h2>
                <p className="text-stone-600 leading-relaxed">
                  If you leave a comment on our site you may opt in to saving
                  your name, email address and website in cookies. These are for
                  your convenience so that you do not have to fill in your
                  details again when you leave another comment. These cookies
                  will last for one year.
                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                  If you visit our login page, we will set a temporary cookie to
                  determine if your browser accepts cookies. This cookie
                  contains no personal data and is discarded when you close your
                  browser.
                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                  When you log in, we will also set up several cookies to save
                  your login information and your screen display choices. Login
                  cookies last for two days, and screen options cookies last for
                  a year. If you select “Remember Me”, your login will persist
                  for two weeks. If you log out of your account, the login
                  cookies will be removed.
                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                  If you edit or publish an article, an additional cookie will
                  be saved in your browser. This cookie includes no personal
                  data and simply indicates the post ID of the article you just
                  edited. It expires after 1 day.
                </p>
              </div>

              <div>
                <h2 className="heading-serif text-3xl mb-4">
                  Embedded content from other websites
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Articles on this site may include embedded content (e.g.
                  videos, images, articles, etc.). Embedded content from other
                  websites behaves in the exact same way as if the visitor has
                  visited the other website.
                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                  These websites may collect data about you, use cookies, embed
                  additional third-party tracking, and monitor your interaction
                  with that embedded content, including tracking your
                  interaction with the embedded content if you have an account
                  and are logged in to that website.
                </p>
              </div>

              <div>
                <h2 className="heading-serif text-3xl mb-4">
                  Who we share your data with
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  If you request a password reset, your IP address will be
                  included in the reset email.
                </p>
              </div>

              <div>
                <h2 className="heading-serif text-3xl mb-4">
                  How long we retain your data
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  If you leave a comment, the comment and its metadata are
                  retained indefinitely. This is so we can recognise and approve
                  any follow-up comments automatically instead of holding them
                  in a moderation queue.
                </p>
                <p className="text-stone-600 leading-relaxed mt-4">
                  For users that register on our website (if any), we also store
                  the personal information they provide in their user profile.
                  All users can see, edit, or delete their personal information
                  at any time (except they cannot change their username).
                  Website administrators can also see and edit that information.
                </p>
              </div>

              <div>
                <h2 className="heading-serif text-3xl mb-4">
                  What rights you have over your data
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  If you have an account on this site, or have left comments,
                  you can request to receive an exported file of the personal
                  data we hold about you, including any data you have provided
                  to us. You can also request that we erase any personal data we
                  hold about you. This does not include any data we are obliged
                  to keep for administrative, legal, or security purposes.
                </p>
              </div>

              <div>
                <h2 className="heading-serif text-3xl mb-4">
                  Where your data is sent
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Visitor comments may be checked through an automated spam
                  detection service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
