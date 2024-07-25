<template>
  <section id="contact-us" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-9 gap-6">
        <div class="col-span-9 md:col-span-5">
          <h3 class="text-subtitle">Contact Us</h3>
          <p class="text-xl leading-8 text-gray-500 font-normal">
            Ready to unlock a new global market and increase your bottom line
            earnings? Contact us today for a personalized consultation and
            discover the value that crypto payments can bring to your business.
          </p>
          <form
            class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 mt-10"
          >
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Full Name</label
              >
              <div class="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  class="py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <div class="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  class="py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-medium text-gray-700"
                >How can we help?</label
              >
              <div class="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us a little about the project..."
                  class="py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-lg bg-gray-50"
                ></textarea>
              </div>
            </div>
            <div class="sm:col-span-2">
              <button
                type="submit"
                class="w-full inline-flex justify-center py-3 px-5 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="col-span-9 md:col-span-4 hidden md:block">
          <div class="w-full h-full flex justify-center items-center">
            <img src="../assets/contact-us.png" alt="contact-us" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
