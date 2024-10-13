import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface VideosProps {
  items?: any[];
  active?: number;
}

const Videos: React.FC<VideosProps> = ({ items = ['Vid 1', 'Vid 2', 'Vid 3', 'Vid 4'], active = 0 }) => {
  const [currentActive, setCurrentActive] = useState(active);

  const moveLeft = () => {
    if (items.length === 0) return;
    let newActive = currentActive - 1;
    if (newActive < 0) {
      newActive = items.length - 1;
    }
    setCurrentActive(newActive);
  };

  const moveRight = () => {
    if (items.length === 0) return;
    let newActive = (currentActive + 1) % items.length;
    setCurrentActive(newActive);
  };

  const generateItems = () => {
    if (items.length === 0) return null;
    let itemList = [];
    for (let i = currentActive - 1; i <= currentActive + 1; i++) {
      let index = (i + items.length) % items.length;
      const level = i - currentActive;
      itemList.push(<Item key={index} id={items[index]} level={level} />);
    }
    return itemList;
  };

  return (
    <div className="min-h-screen bg-white text-gray-800" id="videos">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-24 text-center">
          <h2 className="text-4xl font-bold text-[#f5c242] mb-8">Our Videos</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Explore our collection of inspiring videos that showcase the transformative power of music therapy.
          </p>
          <div
            id="carousel"
            className="relative h-[400px] w-full flex justify-center items-center overflow-hidden"
          >
            <div
              className="arrow arrow-left absolute left-0 w-[30px] h-[30px] bg-white text-center text-[20px] rounded-full cursor-pointer text-[#228291] leading-[30px] z-[1000]"
              onClick={moveLeft}
            >
              &lt;
            </div>
            <div className="flex justify-center items-center w-full">{generateItems()}</div>
            <div
              className="arrow arrow-right absolute right-0 w-[30px] h-[30px] bg-white text-center text-[20px] rounded-full cursor-pointer text-[#228291] leading-[30px] z-[1000]"
              onClick={moveRight}
            >
              &gt;
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

interface ItemProps {
  id: any;
  level: number;
}

const Item: React.FC<ItemProps> = ({ id, level }) => {
  const levelStyles: any = {

    '-1': {
      height: 364, // Increased by 1.3 times
      width: 520, // Increased by 1.3 times
      bgColor: '#6796E5',
      left: 'calc(50% - 570px)', // Adjusted for new width and increased gap
      marginTop: 10,
    },
    '0': {
      height: 416, // Increased by 1.3 times
      width: 598, // Increased by 1.3 times
      bgColor: '#4EC9E1',
      left: '50%',
      marginTop: 0,
    },
    '1': {
      height: 364, // Increased by 1.3 times
      width: 520, // Increased by 1.3 times
      bgColor: '#6796E5',
      left: 'calc(50% + 570px)', // Adjusted for new width and increased gap
      marginTop: 10,
    },

  };

  const styles = levelStyles[level.toString()] || {};

  return (
    <motion.div
      className="item absolute text-center text-white text-[40px]"
      style={{
        height: styles.height,
        width: styles.width,
        lineHeight: `${styles.height}px`,
        backgroundColor: styles.bgColor,
        left: styles.left,
        marginTop: styles.marginTop,
        transform: 'translateX(-50%)',
        zIndex: 1000 - Math.abs(level),
        margin: '0 10px', // Added margin for gap
      }}
      animate={{
        height: styles.height,
        width: styles.width,
        lineHeight: `${styles.height}px`,
        backgroundColor: styles.bgColor,
        left: styles.left,
        marginTop: styles.marginTop,
        transform: 'translateX(-50%)',
      }}
      transition={{ duration: 0.5 }}
    >
      {id}
    </motion.div>
  );
};

export default Videos;