# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'open-uri'
description1 = "When a Chinese rebel murders Chon's estranged father and escapes to England, Chon and Roy make their way to London with revenge on their minds."



User.destroy_all
Movie.destroy_all
Show.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('movies')
ActiveRecord::Base.connection.reset_pk_sequence!('shows')
ActiveRecord::Base.connection.reset_pk_sequence!('seasons')
ActiveRecord::Base.connection.reset_pk_sequence!('episodes')


u1 = User.create!(email: 'demoUser', password: 'password');
u2 = User.create!(email: 'chris_the_great@gmail.com', password: '123456');
u3 = User.create!(email: 'theDressIsBlue@hotmail.com', password: 'password');

movie1 = Movie.create!(title: "The Karate Kid", year: 1984, rating: 7.2, description: "A Japanese martial arts instructor agrees to teach karate to a bullied teenager.", video_type: "movie");
    video2 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/Cranke_kick.mp4')
    movie1.video.attach(io: video2, filename: "karate-clip.mp4")
    image2 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/karate_kid_cover.jpg')
    movie1.image.attach(io: image2, filename: "karate-cover.jpg")


movie2 = Movie.create!(title: "The Matrix", year: 1999, rating: 8.7, description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", video_type: "movie");
    video3 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/Matrix-clip.mp4')
    movie2.video.attach(io: video3, filename: "matrix-clip.mp4")
    image3 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/matrix-cover.jpeg')
    movie2.image.attach(io: image3, filename: "matrix-cover.jpeg")


movie3 = Movie.create!(title: "Enter the Dragon", year: 1973, rating: 7.7, description: "A martial artist agrees to spy on a reclusive crime lord using his invitation to a tournament there as cover.", video_type: "movie");
    video4 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/Dragon-clip.mp4')
    movie3.video.attach(io: video4, filename: "dragon-clip.mp4")
    image4 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/enter_dragon_cover.jpg')
    movie3.image.attach(io: image4, filename: "dragon-cover.jpg")


movie4 = Movie.create!(title: "Kung Fu Panda", year: 2008, rating: 7.6, description: "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance.", video_type: "movie");
    video5 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung-fu-panda-scene.mp4')
    movie4.video.attach(io: video5, filename: "panda-clip.mp4")
    image5 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung-fu-panda-cover.jpg')
    movie4.image.attach(io: image5, filename: "panda-cover.jpg")

movie5 = Movie.create!(title: "The Invincible Armor", year: 1977, rating: 7.1, description: "An aging martial arts expert is gifted a plaque from the Emperor declaring him the Kung Fu World Champion.", video_type: "movie");
    video6 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung-fight.mp4')
    movie5.video.attach(io: video6, filename: "armor-clip.mp4")
    image6 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/invicible-cover.jpeg')
    movie5.image.attach(io: image6, filename: "armor-cover.jpg")


tim_show1 = Show.create!(title: "Home Movies: Tim does Kung Fu", year: 1994, rating: 4.2, description: "Home movies of Tim doing Kung Fu.", video_type: "show");
greats_show2 = Show.create!(title: "Lessons from the Great Kung Fu Artists", year: 1990, rating: 6.1, description: "Learn the art of Kung Fu from its greatest practitioners")

tim_season1 = Season.create!(number: 1, show_id: 1);
tim_season2 = Season.create!(number: 2, show_id: 1);
greats_season1 = Season.create!(number: 1, show_id: 2);



tim1 = Episode.create!(title: "Tim does Kung Fu part 1", number: 1, description: "Tim does Kung Fu in the living room." season_id: 1);
    # video1 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/KungFulu_1.mp4')
    # show1.video.attach(io: video1, filename: "show1_video_content.mp4")
    # image7 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung_fu_show.jpeg')
    # show1.image.attach(io: image7, filename: "tim-image.jpeg")


tim2 = Episode.create!(title: "Tim does Kung Fu part 2", number: 2, description: "Tim does Kung Fu in the garage.", season_id: 1);
    # video7 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/tim_2.mp4')
    # show2.video.attach(io: video7, filename: "show2_video_content.mp4")
    # image20 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung_fu_show2.jpeg')
    # show2.image.attach(io:image20, filename: 'tim2_image.jpeg')

tim3 = Episode.create!(title: "Tim does Kung Fu part 3", number: 1, description: "Tim does Kung Fu at Jeff's house.", season_id: 2);
    # video8 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/tim_3.mp4')
    # show3.video.attach(io: video8, filename: "show3_video_content.mp4")
    # image10 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kung_fu_show3.jpeg')
    # show3.image.attach(io:image10, filename: 'tim3_image.jpeg')

great1 = Episode.create!(title: "Lessons from the Greats: Bruce Lee", year: 1994, number: 1, description: "Bruce Lee teaches masterful kung fu techniques", seaso_id: 1);
    # image8 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kungshow3.jpg')
    # show4.image.attach(io:image8, filename: 'show4_image_jpg')

great2 = Show.create!(title: "Lessons from the Greats: This Guy", year: 1998, rating: 4.2, description: "This guy spouts wisdom", season_id: 2);
    # image9 = open('https://kungfulu-aa-seeds.s3.amazonaws.com/kungshow6.jpg')
    # show5.image.attach(io:image9, filename:'show5_image.jpg')
