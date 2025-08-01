import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex items-center justify-center`}>
      <div className="w-full max-w-7xl px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Decorative element */}
          <div className="relative mb-8">
            <div className="w-5 h-5 rounded-full bg-[#915EFF] mx-auto"></div>
            <div className='w-1 h-24 sm:h-40 mx-auto mt-2 bg-gradient-to-b from-[#915EFF] to-transparent'></div>
          </div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className={`${styles.heroHeadText} text-white mb-4`}>
              Hi, I'm <span className='text-[#915EFF]'>Ammar</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mb-6`}>
              I develop 3D visuals, user interfaces and web applications
            </p>
            <p className='text-lg text-white mb-8 max-w-2xl mx-auto'>
              Passionate about creating interactive digital experiences that leave a lasting impression.
            </p>
            
            <div className="flex justify-center gap-4 mb-12">
              <a href="#" className="text-white hover:text-[#915EFF] transition-colors duration-300 text-2xl mx-3">
                <i className='fab fa-twitter'></i>
              </a>
              <a href="#" className="text-white hover:text-[#915EFF] transition-colors duration-300 text-2xl mx-3">
                <i className='fab fa-linkedin'></i>
              </a>
              <a href="#" className="text-white hover:text-[#915EFF] transition-colors duration-300 text-2xl mx-3">
                <i className='fab fa-github'></i>
              </a>
            </div>

            <button className='px-8 py-3 bg-[#915EFF] hover:bg-[#7f4fe0] text-white rounded-lg transition-colors duration-300'>
              View My Work
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <a href='#about'>
          <div className='w-10 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 1)}
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;