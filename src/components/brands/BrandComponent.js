import React from 'react';

const brands = [
  'https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Branding_lenovo-logo_lenovologoposred_low_res.png/1200px-Branding_lenovo-logo_lenovologoposred_low_res.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3HYKNor5sZyE9QMile6gMKDiULXHcGxuig&s',
  'https://cdn.britannica.com/09/241709-050-149181B1/apple-iphone-11-2019.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Branding_lenovo-logo_lenovologoposred_low_res.png/1200px-Branding_lenovo-logo_lenovologoposred_low_res.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1200px-HP_logo_2012.svg.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw3HYKNor5sZyE9QMile6gMKDiULXHcGxuig&s',
];

const BrandComponent = () => {
  const repeatedBrands = [...brands, ...brands];

  return (
    <div className='container mx-auto py-12 rounded-lg shadow-lg mt-12 mb-12' >
      <div className='overflow-hidden'>
        <div className='flex gap-8 animate-marquee'>
          <ul className='flex gap-8'>
            {repeatedBrands.map((brand, index) => (
              <li
                key={index}
                className='bg-cover bg-center p-8 rounded-lg text-white shadow-xl hover:scale-105 bg-no-repeat transition-all duration-300 transform'
                style={{
                  backgroundImage: `url(${brand})`,
                  minWidth: '150px',
                  height: '100px',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">{`Brand ${index + 1}`}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BrandComponent;
