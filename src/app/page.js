import Image from "next/image";

export default function Home() {
  return (
<div class="max-w-6xl mx-auto px-4 font-montserrat">

<header>
  <div
    class="flex items-center justify-between py-3 px-4 my-4 rounded-md bg-[#111111]"
  >
    <a href="">
      <h1 class="text-2xl font-semibold text-green-400">indise.</h1>
    </a>

    <ul class="hidden md:flex items-center gap-8 justify-between text-slate-100 font-light">
      <li>
        <a href=""> Product </a>
      </li>
      <li>
        <a href=""> Project </a>
      </li>
      <li>
        <a href=""> Community </a>
      </li>
      <li>
        <a href=""> About Us </a>
      </li>

      <li>
        <a class="flex items-center justify-center text-lg" href="">
          <i class="bx bx-search"></i>
        </a>
      </li>
    </ul>

    <a
      href=""
      class="bg-[#bbb2ce] rounded-full py-2 px-4 text-whit font-medium transition duration-300 ease-in-out hover:bg-[#a9a0c1]"
    >
      Get Started
    </a>
  </div>
</header>

<div class="grid md:grid-cols-3 row-span-2 gap-4 mb-4">
  <div class="relative md:col-span-1 md:row-span-1 rounded-xl group overflow-hidden hover:cursor-pointer">
    <img
      class=" w-full h-full object-cover group-hover:scale-105 transition duration-300 ease-in-out"
      src="https://images.unsplash.com/photo-1705323111650-4297b5cad135?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />

    <div class="absolute bottom-0 text-white p-5 z-40">
      <h1 class="text-xs py-0.5 px-2 bg-gray-300/20 rounded-full mb-2 uppercase border w-fit ">Travel</h1>
      <h1 class="text-2xl font-medium">
        Everything you need to know about VAT for your business
      </h1>
    </div>

    <div
      class="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent "
    ></div>
  </div>

  <div class="hidden md:block relative w-full md:col-span-2 md:row-span-2 ">
    <img
      class="rounded-xl w-full h-full object-cover "
      src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />

    <div class="absolute bottom-0 text-white p-8 z-40">
      <h1 class="mb-2 uppercase">Business Creators</h1>
      <h1 class="text-4xl font-medium">
     Everything you need to know about VAT for your business
      </h1>

      <div class="flex items-center gap-4 mt-6">
        <a
          href=""
          class="border rounded-full py-2 px-4 text-white text-sm transition duration-300 ease-in-out hover:bg-gray-300/10"
        >
          Read Article <i class="bx bx-right-arrow-alt"></i>
        </a>

        <a
          href=""
          class="bg-[#363835] rounded-full py-2 px-4 text-whit text-sm border border-[#363835] transition duration-300 ease-in-out hover:bg-[#a9a0c1]"
        >
          <div class="flex items-center gap-1">
            <img
              class="rounded-full w-5 h-5 object-cover  inline-block mr-2"
              src="

      https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
      "
              alt=""
            />
            <span>by Anastra</span>
          </div>
        </a>
      </div>
    </div>

    <div
      class="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent rounded-xl"
    ></div>
  </div>



  <div class="relative md:col-span-1 md:row-span-1 rounded-xl group overflow-hidden hover:cursor-pointer">
    <img
      class=" w-full h-full object-cover group-hover:scale-105 transition duration-300 ease-in-out"
      src="https://images.unsplash.com/photo-1705107959309-ca7d26fbeb08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />

    <div class="absolute bottom-0 text-white p-5 z-40">
      <h1 class="text-xs py-0.5 px-2 bg-gray-300/20 rounded-full mb-2 uppercase border w-fit ">Travel</h1>
      <h1 class="text-2xl font-medium">
        Everything you need to know about VAT for your business
      </h1>
    </div>

    <div
      class="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent "
    ></div>
  </div>
</div>


<section class="bg-purple-400/30 mb-4 rounded-xl py-10 px-8">
<div class="flex items-end justify-between mb-14">
  <div class="flex-1">
    <h1 class="text-gray-900 text-5xl font-bold mb-4">
      Our most popular articles
    </h1>
    <p class=" text-gray-800 ">
      The latest news tips and advice from our dedicated reporters,
      straight to your inbox.
    </p>
  </div>

  <div class="flex items-end flex-1 justify-end">
    <a
      href=""
      class="bg-gray-900 rounded-full py-3 px-6 text-sm text-white transition duration-300 ease-in-out"
    >
      Read All Articles
    </a>
  </div>
</div>

<div class="flex items-center gap-8 multiple-items">
  <div class="relative rounded-xl group overflow-hidden hover:cursor-pointer">
    <img
      class=" max-w-[400px] min-h-[350px] object-cover group-hover:scale-105 transition duration-300 ease-in-out"
      src="https://images.unsplash.com/photo-1705323111650-4297b5cad135?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />

    <div class="absolute bottom-0 text-white p-5 z-40">
      <h1 class="text-xs py-0.5 px-2 bg-gray-300/20 rounded-full mb-2 uppercase border w-fit ">Travel</h1>
      <h1 class="text-2xl font-medium">
        Everything you need to know about VAT for your business
      </h1>
    </div>

    <div
      class="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent "
    ></div>
  </div>

  <div class="relative rounded-xl group overflow-hidden hover:cursor-pointer">
    <img
      class=" max-w-[400px] min-h-[350px] object-cover group-hover:scale-105 transition duration-300 ease-in-out"
      src="https://images.unsplash.com/photo-1705323111650-4297b5cad135?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />

    <div class="absolute bottom-0 text-white p-5 z-40">
      <h1 class="text-xs py-0.5 px-2 bg-gray-300/20 rounded-full mb-2 uppercase border w-fit ">Travel</h1>
      <h1 class="text-2xl font-medium">
        Everything you need to know about VAT for your business
      </h1>
    </div>

    <div
      class="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent "
    ></div>
  </div>

  <div class="relative rounded-xl group overflow-hidden hover:cursor-pointer">
    <img
      class=" max-w-[400px] min-h-[350px] object-cover group-hover:scale-105 transition duration-300 ease-in-out"
      src="https://images.unsplash.com/photo-1705323111650-4297b5cad135?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
    />

    <div class="absolute bottom-0 text-white p-5 z-40">
      <h1 class="text-xs py-0.5 px-2 bg-gray-300/20 rounded-full mb-2 uppercase border w-fit ">Travel</h1>
      <h1 class="text-2xl font-medium">
        Everything you need to know about VAT for your business
      </h1>
    </div>

    <div
      class="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent "
    ></div>
  </div>
</div>
</section>

<section
class="my-10 text-white flex flex-col gap-4 items-center justify-center py-8 rounded-xl"
>
<h1 class="text-3xl font-medium w-2/4 text-center text-gray-900">
  Useful tips and tricks for your
  <span class="text-green-400">next trip</span>
  abroad.
</h1>
<a
  href=""
  class="bg-gray-900 rounded-full py-3 px-6 text-sm text-white transition duration-300 ease-in-out"
>
  Read All Articles
</a>
</section>

<section>
<div class="grid grid-cols-7 gap-8">
  <div class="flex flex-col col-span-4">
    <img
      class="rounded-xl w-full h-[350px] object-cover "
      src="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />

    <div class="mt-8 mb-4">
      <a
        href=""
        class="border border-gray-900 rounded-full py-1 px-4 text-gray-900 text-sm font-medium transition duration-300 ease-in-out"
      >
        Sport
      </a>

      <a href="" class="py-1 px-4 text-gray-900 text-sm font-medium">
        4 Hours read
      </a>
    </div>

    <div class="mb-4">
      <h1 class="text-gray-900 text-3xl font-semibold mb-3">
        2022 NFL Mock Draft: Predictions for Top.
      </h1>
      <p class=" text-gray-800 ">
        The latest news tips and advice from our dedicated reporters,
        straight to your inbox.
      </p>
    </div>

    <div class="flex items-center gap-4">
      <a
        href=""
        class="border border-gray-900 rounded-full py-2 px-4 text-whit text-sm font-medium transition duration-300 ease-in-out"
      >
        Read Article <i class="bx bx-right-arrow-alt"></i>
      </a>

      <a href="" class="py-2 px-4 text-whit text-sm font-medium">
        <div class="flex items-center gap-1">
          <img
            class="rounded-full w-5 h-5 object-cover  inline-block mr-2"
            src="

          https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
          "
            alt=""
          />
          <span>by Anastra</span>
        </div>
      </a>
    </div>
  </div>

  <div class="flex flex-col gap-4 col-span-3">
    <div class="flex items-center gap-8 justify-between border-b pb-2 border-gray-300">
      <div>
        <div>
          <a
            href=""
            class="border border-gray-900 rounded-full py-1 px-4 text-gray-900 text-sm font-medium transition duration-300 ease-in-out"
          >
            Sport
          </a>

          <a
            href=""
            class="py-1 px-4 text-gray-900 text-sm font-medium"
          >
            4 Hours read
          </a>
        </div>

        <h1 class="text-gray-900 text-md font-semibold mt-4">
          2022 NFL Mock Draft: Predictions for Top.
        </h1>
      </div>

      <div>
        <img
          class="rounded-xl w-full h-[100px] object-cover object-center"
          src="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>

    <div class="flex items-center gap-8 justify-between border-b pb-2 border-gray-300">
      <div>
        <div>
          <a
            href=""
            class="border border-gray-900 rounded-full py-1 px-4 text-gray-900 text-sm font-medium transition duration-300 ease-in-out"
          >
            Sport
          </a>

          <a
            href=""
            class="py-1 px-4 text-gray-900 text-sm font-medium"
          >
            4 Hours read
          </a>
        </div>

        <h1 class="text-gray-900 text-md font-semibold mt-4">
          2022 NFL Mock Draft: Predictions for Top.
        </h1>
      </div>

      <div>
        <img
          class="rounded-xl w-full h-[100px] object-cover object-center"
          src="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>

    <div class="flex items-center gap-8 justify-between border-b pb-2 border-gray-300">
      <div>
        <div>
          <a
            href=""
            class="border border-gray-900 rounded-full py-1 px-4 text-gray-900 text-sm font-medium transition duration-300 ease-in-out"
          >
            Sport
          </a>

          <a
            href=""
            class="py-1 px-4 text-gray-900 text-sm font-medium"
          >
            4 Hours read
          </a>
        </div>

        <h1 class="text-gray-900 text-md font-semibold mt-4">
          2022 NFL Mock Draft: Predictions for Top.
        </h1>
      </div>

      <div>
        <img
          class="rounded-xl w-full h-[100px] object-cover object-center"
          src="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>

    <div class="flex items-center gap-8 justify-between border-b pb-2 border-gray-300">
      <div>
        <div>
          <a
            href=""
            class="border border-gray-900 rounded-full py-1 px-4 text-gray-900 text-sm font-medium transition duration-300 ease-in-out"
          >
            Sport
          </a>

          <a
            href=""
            class="py-1 px-4 text-gray-900 text-sm font-medium"
          >
            4 Hours read
          </a>
        </div>

        <h1 class="text-gray-900 text-md font-semibold mt-4">
          2022 NFL Mock Draft: Predictions for Top.
        </h1>
      </div>

      <div>
        <img
          class="rounded-xl w-full h-[100px] object-cover object-center"
          src="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>

    <div class="flex items-center gap-8 justify-between border-b pb-2 border-gray-300">
      <div>
        <div>
          <a
            href=""
            class="border border-gray-900 rounded-full py-1 px-4 text-gray-900 text-sm font-medium transition duration-300 ease-in-out"
          >
            Sport
          </a>

          <a
            href=""
            class="py-1 px-4 text-gray-900 text-sm font-medium"
          >
            4 Hours read
          </a>
        </div>

        <h1 class="text-gray-900 text-md font-semibold mt-4">
          2022 NFL Mock Draft: Predictions for Top.
        </h1>
      </div>

      <div>
        <img
          class="rounded-xl w-full h-[100px] object-cover object-center"
          src="https://images.pexels.com/photos/933255/pexels-photo-933255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  </div>
</div>
</section>

<section
class="bg-gray-900 my-10 text-white flex flex-col items-center justify-center py-12 rounded-xl"
>
<h1 class="w-2/4 text-4xl font-semibold text-center">
  Subscribe to our <span class="text-green-400">newsletter</span> and
  get the latest news.
</h1>

<div
  class="flex items-center justify-between gap-4 mt-8 border p-2 w-2/6 rounded-full"
>
  <input
    type="text"
    placeholder="Enter your email"
    class="bg-transparent flex-1 rounded-full py-2 px-4 outline-none text-sm font-medium transition duration-300 ease-in-out"
  />

  <a
    href=""
    class="rounded-full py-2 px-4 text-sm text-gray-900 font-semibold transition duration-300 ease-in-out bg-[#a9a0c1]"
  >
    Subscribe
  </a>
</div>
</section>
</div>
  );
}
