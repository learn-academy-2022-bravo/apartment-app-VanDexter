user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

apartments = [
    {
        street: '221B Baker Street',
        city: 'London',
        state: 'United Kingdon',
        manager: 'Watson',
        email: 'noshizsherlock@gmail.com',
        price: '10 pounds',
        bedrooms: 3,
        bathrooms: 4,
        pets: 'dogs',
        image: 'https://cdn.pixabay.com/photo/2017/08/14/12/09/sherlock-2640292_1280.jpg',
    },
    {
        street: '123 fake street',
        city: 'fakerson',
        state: 'Fakeville',
        manager: 'Big Bird',
        email: 'seseame@gmail.com',
        price: '3 pounds',
        bedrooms: 19,
        bathrooms: 1, 
        pets: 'yes',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Sesame_Street_buildings_%28193090534%29.jpg',
    },
  ]
  
  apartments.each do |each_apartment|
    user.apartments.create each_apartment
    puts "creating apartment #{each_apartment}"
  end