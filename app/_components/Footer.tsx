import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white mt-6 text-center text-sm md:text-xl text-gray-600">
      <p>
        Designed by the tired and caffeinated{' '}
        <Link href="https://www.instagram.com/millushaa/" className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
          Bride
        </Link>{' '}
        and built by the{' '}
        <Link href="https://www.instagram.com/glen.padua/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          Groom
        </Link>{' '}
        who wanted to add to his portfolio
      </p>
    </footer>
  );
};

export default Footer;