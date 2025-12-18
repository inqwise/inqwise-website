const KeyboardSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-20">
        <div className="flex justify-center items-center">
            <img
              src="/keyboard.png"
              alt="Inqwise keyboard"
              width={1041}
              height={441}
              className="max-w-full h-auto"
              style={{
                width: '100%',
                maxWidth: '1041px',
                height: 'auto',
              }}
              loading="lazy"
              decoding="async"
            />
        </div>
      </div>
    </section>
  );
};

export default KeyboardSection;
