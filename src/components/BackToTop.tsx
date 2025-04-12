
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed right-6 bottom-6 z-40"
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-primary/90 text-background hover:bg-primary transition-colors shadow-lg neon-glow"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
