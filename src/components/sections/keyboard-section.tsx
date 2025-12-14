import Image from 'next/image';

const KeyboardSection = () => {
  return (
    <section className="bg-white">
      <div className="container py-20">
        <div className="flex justify-center items-center">
          <Image
            src="https://static.wixstatic.com/media/0e9709_1273bedc0daf432db14eaebbbae2fb54~mv2.png/v1/fill/w_980,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0e9709_1273bedc0daf432db14eaebbbae2fb54~mv2.png"
            alt="Apple wireless keyboard with INQWISE letters on keys"
            width={980}
            height={330}
            className="max-w-full h-auto"
            style={{
              width: '100%',
              maxWidth: '980px',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyboardSection;