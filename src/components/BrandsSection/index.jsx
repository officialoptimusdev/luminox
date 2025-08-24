import { motion } from "framer-motion"

const brands = [
  "/assets/brand-one.png",
  "/assets/brand-two.png",
  "/assets/brand-three.png",
  "/assets/brand-four.png",
  "/assets/brand-five.png",
  "/assets/brand-six.png",
  "/assets/brand-seven.png",
  "/assets/brand-eight.png",
  "/assets/brand-nine.png",
  "/assets/brand-ten.png",
  "/assets/brand-eleven.png",
]

export default function BrandsSection() {
  return (
    <section className="w-full bg-white py-12 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      
        <div className="block sm:hidden">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }} 
          >
            {[...brands, ...brands].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  className="h-12 w-auto object-contain  transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

  
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-32 items-center justify-center">
          {brands.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Brand ${index + 1}`}
                className="max-h-16 w-auto object-contain  transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
