const KeyboardSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-20">
        <div className="flex justify-center items-center">
          <img
            src="/keyboard.png"
            alt="Apple wireless keyboard with INQWISE letters on keys"
            width={980}
            height={330}
            className="max-w-full h-auto"
            style={{
              width: '100%',
              maxWidth: '980px',
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
