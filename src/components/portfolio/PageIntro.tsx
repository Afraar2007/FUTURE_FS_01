import { motion } from "framer-motion";

/**
 * Full-page cinematic enter overlay that wipes away on first load.
 */
export function PageIntro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 1] }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="h-px w-48 origin-left bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </motion.div>
  );
}
