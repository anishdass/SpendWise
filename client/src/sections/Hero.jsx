import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

function CreditCard() {
  return (
    <mesh rotation={[0.3, 0.3, 0]}>
      <boxGeometry args={[3.5, 2, 0.1]} />
      <meshStandardMaterial color='#1f3a93' metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section className='h-screen flex items-center justify-between px-10 bg-gradient-to-r from-slate-900 to-slate-800 text-white'>
      {/* Left Side: Text */}
      <motion.div
        className='max-w-lg'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <h1 className='text-5xl font-bold mb-6'>Track Your Spending Smarter</h1>
        <p className='text-lg mb-6'>
          Visualize, budget, and achieve your financial goals with ease.
        </p>
        <button className='px-6 py-3 rounded-full bg-primary hover:bg-secondary transition cursor-pointer'>
          Get Started
        </button>
      </motion.div>

      {/* Right Side: 3D Credit Card */}
      <motion.div
        className='w-[500px] h-[400px]'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <CreditCard />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </motion.div>
    </section>
  );
}
