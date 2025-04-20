import { motion } from 'framer-motion';

export default function CleanUIDesign() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-neutral-50 rounded-xl overflow-hidden">
      <motion.div
        className="relative w-full h-full group"
        whileHover={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Clean UI design workspace"
          className="w-full h-full object-cover rounded-xl"
        />
        
        {/* Subtle interactive element */}
        <motion.div 
          className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-sm flex items-center"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="mr-2"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="text-sm font-medium text-neutral-700">View details</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
