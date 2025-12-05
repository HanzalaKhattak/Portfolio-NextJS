import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaFigma } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { 
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiSwagger, 
    SiTailwindcss,
    SiMongoose,
    SiOpenai,
    SiTensorflow,
    SiHuggingface,
    SiGooglecloud,
    SiSass,
    SiReactquery,
    SiAxios
} from "react-icons/si";
import {
  SiRedux,
  SiTypescript,
  SiDocker,
  SiJsonwebtokens,
  SiVercel,
  SiGit
} from "react-icons/si";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h1 className='my-20 text-center text-4xl font-bold'>Technologies</h1>

        {/* ===== FRONTEND ===== */}
        <h2 className='text-2xl font-semibold text-center mt-10 mb-6 text-green-400'>Frontend</h2>
        <div className='flex flex-wrap items-center justify-center gap-6'>
            {[
              {icon: <FaHtml5 className='text-5xl text-orange-400'/>, name: "HTML"},
              {icon: <FaCss3Alt className='text-5xl text-blue-400'/>, name: "CSS"},
              {icon: <BsBootstrap className='text-5xl text-purple-400'/>, name: "Bootstrap"},
              {icon: <SiTailwindcss className='text-5xl text-sky-400'/>, name: "Tailwind CSS"},
              {icon: <FaJsSquare className='text-5xl text-yellow-400'/>, name: "JavaScript"},
              {icon: <SiTypescript className='text-5xl text-blue-600'/>, name: "TypeScript"},
              {icon: <RiReactjsLine className='text-5xl text-cyan-400'/>, name: "React"},
              {icon: <SiRedux className='text-5xl text-purple-500'/>, name: "Redux"},
              {icon: <SiNextdotjs className='text-5xl text-black dark:text-white'/>, name: "Next.js"},
              {icon: <FaFigma className='text-5xl text-pink-500'/>, name: "Figma"},
              {icon: <SiSass className='text-5xl text-pink-600'/>, name: "Sass"},
              {icon: <div className='text-5xl font-bold text-blue-600'>MUI</div>, name: "Material UI"},
              {icon: <SiReactquery className='text-5xl text-purple-600'/>, name: "React Query"},
              {icon: <SiAxios className='text-5xl text-blue-500'/>, name: "Axios"},
              {icon: <div className='text-5xl font-bold text-purple-400'>FM</div>, name: "Framer Motion"},
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='rounded-2xl border-4 border-neutral-600 p-4 flex items-center justify-center'>
                  {item.icon}
                </div>
                <p className='text-white mt-2 text-sm text-center'>{item.name}</p>
              </div>
            ))}
        </div>

        {/* ===== BACKEND ===== */}
        <h2 className='text-2xl font-semibold text-center mt-14 mb-6 text-green-400'>Backend</h2>
        <div className='flex flex-wrap items-center justify-center gap-6'>
            {[
              {icon: <SiNodedotjs className='text-5xl text-green-600'/>, name: "Node.js"},
              {icon: <SiExpress className='text-5xl text-gray-300'/>, name: "Express.js"},
              {icon: <SiJsonwebtokens className='text-5xl text-yellow-500'/>, name: "JWT"},
              {icon: <SiMongodb className='text-5xl text-green-700'/>, name: "MongoDB"},
              {icon: <SiMongoose className='text-5xl text-red-500'/>, name: "Mongoose"},
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='rounded-2xl border-4 border-neutral-600 p-4 flex items-center justify-center'>
                  {item.icon}
                </div>
                <p className='text-white mt-2 text-sm'>{item.name}</p>
              </div>
            ))}
        </div>

        {/* ===== TOOLS / DEVOPS ===== */}
        <h2 className='text-2xl font-semibold text-center mt-14 mb-6 text-green-400'>Tools & DevOps</h2>
        <div className='flex flex-wrap items-center justify-center gap-6'>
            {[
              {icon: <SiGit className='text-5xl text-red-600'/>, name: "Git"},
              {icon: <FaGithub className='text-5xl text-white'/>, name: "GitHub"},
              {icon: <SiDocker className='text-5xl text-blue-500'/>, name: "Docker"},
              {icon: <SiPostman className='text-5xl text-orange-500'/>, name: "Postman"},
              {icon: <SiSwagger className='text-5xl text-green-500'/>, name: "Swagger"},
              {icon: <SiVercel className='text-5xl text-white'/>, name: "Vercel"},
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='rounded-2xl border-4 border-neutral-600 p-4 flex items-center justify-center'>
                  {item.icon}
                </div>
                <p className='text-white mt-2 text-sm'>{item.name}</p>
              </div>
            ))}
        </div>

        {/* ===== AI & ML ===== */}
        <h2 className='text-2xl font-semibold text-center mt-14 mb-6 text-green-400'>AI & ML</h2>
        <div className='flex flex-wrap items-center justify-center gap-6'>
            {[
              {icon: <SiOpenai className='text-5xl text-[#00A67E]' />, name: "OpenAI"},
              {icon: <SiTensorflow className='text-5xl text-orange-600' />, name: "TensorFlow"},
              {icon: <SiHuggingface className='text-5xl text-orange-400' />, name: "Hugging Face"},
              {icon: <SiGooglecloud className='text-5xl text-blue-500' />, name: "Google Cloud AI"},
              {icon: <div className='text-5xl font-bold text-pink-500'>G</div>, name: "Gemini AI"},
              {icon: <div className='text-5xl font-bold text-purple-400'>V</div>, name: "Vapi AI"},
              {icon: <div className='text-5xl font-bold text-red-500'>L</div>, name: "Loveable AI"},
              {icon: <div className='text-5xl font-bold text-cyan-400'>C</div>, name: "Cursor AI"},
              {icon: <div className='text-5xl font-bold text-yellow-400'>Ch</div>, name: "Chatbot AI"},
            ].map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='rounded-2xl border-4 border-neutral-600 p-4 flex items-center justify-center'>
                  {item.icon}
                </div>
                <p className='text-white mt-2 text-sm text-center'>{item.name}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Technologies;
