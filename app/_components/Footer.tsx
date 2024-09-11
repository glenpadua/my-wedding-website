import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-center text-sm md:text-xl text-gray-600">
      <p>
        Designed by the tired and caffeinated{' '}
        <Link href="https://bride-social-media-or-website.com" className="text-pink-500 hover:underline">
          Bride
        </Link>{' '}
        and built by the{' '}
        <Link href="https://groom-portfolio-or-github.com" className="text-blue-500 hover:underline">
          Groom
        </Link>{' '}
        who wanted to add to his portfolio
      </p>
    </footer>
  );
};

export default Footer;