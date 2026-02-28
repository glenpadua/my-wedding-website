import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white mt-12 text-center text-lg md:text-xl text-gray-600">
      <p>
        Designed by the tired and caffeinated{' '}
        <Link href="https://www.instagram.com/millushaa/" className="text-pink-500 hover:underline" target="_blank" rel="noopener noreferrer">
          wife
        </Link>{' '}
        and built by the{' '}
        <Link href="https://www.instagram.com/glen.padua/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          husband
        </Link>{' '}
        as a wedding invite that now doubles as a portfolio piece
      </p>
    </footer>
  );
};

export default Footer;
