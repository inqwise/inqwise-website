import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2B3990] text-white text-center w-full py-5">
      <p className="text-[14px] font-normal leading-[1.4] font-footer">
        © 2024 by Inqwise.
      </p>
      <p className="text-[14px] font-normal leading-[1.4] font-footer">
        Powered and secured by{' '}
        <a
          href="https://wix.com/?utm_campaign=vir_created_with"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          Wix
        </a>
      </p>
    </footer>
  );
};

export default Footer;