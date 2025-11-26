import { motion } from 'framer-motion'

const Section = ({ children, className = "" }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-10%" }}
            className={`min-h-screen flex flex-col justify-center p-8 md:p-24 max-w-7xl mx-auto ${className}`}
        >
            {children}
        </motion.section>
    )
}

export default Section
