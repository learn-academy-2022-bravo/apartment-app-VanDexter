apartments = [
    {
        street: '221B Baker Street'
        city: 'London'
        state: 'United Kingdon'
        manager: 'Watson'
        email: 'noshizsherlock@gmail.com'
        price: '10 pounds'
        tbedrooms: 3
        tbathrooms: 4 
        pets: 'dogs'
        image: 'https://cdn.pixabay.com/photo/2017/08/14/12/09/sherlock-2640292_1280.jpg'
    },
    {
        street: '123 fake street'
        city: 'fakerson'
        state: 'Fakeville'
        manager: 'Big Bird'
        email: 'seseame@gmail.com'
        price: '3 pounds'
        tbedrooms: 19
        tbathrooms: 1 
        pets: 'yes'
        image: 'https://cdn.pixabay.com/photo/2017/08/14/12/09/sherlock-2640292_1280.jpg'
    },
  ]
  
  apartments.each do |each_apartment|
    Apartment.create each_apartment
    puts "creating cat #{each_apartment}"
  end