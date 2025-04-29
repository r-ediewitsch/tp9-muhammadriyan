import Counter from './Counter';
import image from '../assets/panduan-emas.png';

export default function CounterSection() {
  return (
    <section className="relative h-[95vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Counter Demo
              </h2>
              <p className="text-gray-600 mt-2">Click the buttons to change the number</p>
            </div>
            <Counter />
          </div>
        </div>
      </div>
    </section>
  );
}
