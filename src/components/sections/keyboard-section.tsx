const KeyboardSection = () => {
  return (
    <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-10 py-20">
          <div className="flex justify-center items-center">
              <img
                src="/keyboard.png"
                alt="Inqwise keyboard"
                width={1400}
                height={593}
                className="w-full h-auto"
                style={{
                  width: '100%',
                  maxWidth: '1400px',
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
