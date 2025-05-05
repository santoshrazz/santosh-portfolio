import Image from "next/image";
import Link from "next/link";
import ChatBot from "./ChatBot";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Hi, I am
              <span className="block text-[#00FF9D]">Santosh Kumar</span>
            </h1>
          </div>

          <div className="space-y-4 dark:text-gray-300 text-black">
            <p>
              I am a passionate Full Stack Developer with experience in building
              dynamic and scalable web applications. My expertise lies in modern
              frameworks like Next.js, Node.js, and Fastify, along with
              databases like MySQL and MongoDB. I enjoy creating efficient and
              user-friendly digital solutions.
            </p>
            <p>
              I specialize in developing interactive front-end experiences using
              GSAP and Next.js, while ensuring robust backend performance with
              Node.js, Fastify, and database integrations. From e-commerce
              platforms to educational tools, I have worked on various projects
              that enhance user engagement and functionality.
            </p>
            <p>
              Apart from coding, I love sharing knowledge through teaching. I
              help students and professionals learn programming languages like
              C, C++, JavaScript, and backend technologies, making complex
              concepts easy to understand.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-block text-[#00FF9D] hover:underline"
          >
            Let's create something great together!
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-[#FF1B8D] glow"></div>
            <Image
              src="/Profile.jpg"
              alt="Santosh Kumar"
              width={320}
              height={320}
              className="rounded-full float-animation"
              priority
            />
          </div>
        </div>
      </div>
      <ChatBot />
    </section>
  );
}
