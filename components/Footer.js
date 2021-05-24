const Footer = () => {
  console.log(process.env);
  const frontendVersion =
    process.env.NEXT_PUBLIC_FRONTEND_VERSION ?? 'undefined';
  const backendVersion =
    process.env.BACKEND_VERSION ?? globalThis?.backendVersion ?? 'undefined';

  return (
    <footer>
      Frontend version <b>{frontendVersion}</b> &nbsp; Backend version{' '}
      <b>{backendVersion}</b>
      <style jsx>{`
        footer {
          padding: 2rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
