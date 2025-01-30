import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import routes from '../../routes/routes';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      rotate: -5,
    },
    open: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="lg:hidden">
      <motion.button
        onClick={toggleMenu}
        className="p-4 text-foreground hover:text-muted-foreground focus:outline-none relative z-50"
        aria-label="Toggle Menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-lg min-h-screen"
          >
            <div className="flex flex-col items-center justify-center min-h-screen">
              <motion.nav
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="flex flex-col items-center gap-12 py-8"
              >
                {routes.map((item) => (
                  item.path === '/' && window.location.pathname === '/' ? (
                    <motion.div
                      key={item.label}
                      variants={itemVariants}
                      className="font-regular font-title text-5xl text-foreground hover:text-primary transition-colors relative group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                      <motion.span
                        className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"
                        whileHover={{ width: "100%" }}
                      />
                    </motion.div>
                  ) : (
                    <motion.a
                      key={item.label}
                      href={item.path}
                      variants={itemVariants}
                      className="font-regular font-title text-5xl text-foreground hover:text-primary transition-colors relative group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsOpen(false);
                        document.body.style.overflow = 'unset';
                      }}
                    >
                      {item.label}
                      <motion.span
                        className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"
                        whileHover={{ width: "100%" }}
                      />
                    </motion.a>
                  )
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;